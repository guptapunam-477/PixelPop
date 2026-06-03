import { NextResponse } from "next/server";

// Run on the Node.js runtime so the upstream URL + token stay strictly
// server-side. The browser only ever talks to /api/contact.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SERVICE_OPTIONS = [
  "SEO",
  "Website Redesign and Development",
  "Performance Marketing",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,18}$/;

// --- naive in-memory rate limit (per server instance) ----------------------
// For production, back this with a shared store (e.g. Upstash/Redis).
const WINDOW_MS = 60_000;
const MAX_HITS = 5;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now > rec.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_HITS;
}

// Strip ASCII control characters (U+0000–U+001F and U+007F) and clamp length.
const CONTROL_CHARS = new RegExp("[\\u0000-\\u001F\\u007F]", "g");
function clean(input: unknown, max = 200): string {
  if (typeof input !== "string") return "";
  return input.replace(CONTROL_CHARS, "").trim().slice(0, max);
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot: if filled, silently accept without forwarding (don't tip off bots).
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const services = Array.isArray(body.services)
    ? body.services
        .map((s) => clean(s, 60))
        .filter((s) => SERVICE_OPTIONS.includes(s))
    : [];

  // Server-side validation (never trust the client).
  if (
    !name ||
    !company ||
    !EMAIL_RE.test(email) ||
    !PHONE_RE.test(phone) ||
    services.length === 0
  ) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 422 }
    );
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    // Misconfiguration: log server-side, return a generic message.
    console.error("[contact] CONTACT_WEBHOOK_URL is not set.");
    return NextResponse.json(
      { ok: false, error: "We couldn't process that right now." },
      { status: 500 }
    );
  }

  // Forward as form-encoded so Apps Script can read e.parameter.* easily.
  const params = new URLSearchParams({
    name,
    company,
    email,
    phone,
    services: services.join(", "),
    source: "pixelpopdigi.com/contact",
    submittedAt: new Date().toISOString(),
  });
  if (process.env.CONTACT_WEBHOOK_TOKEN) {
    params.set("token", process.env.CONTACT_WEBHOOK_TOKEN);
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!upstream.ok) {
      console.error("[contact] upstream responded", upstream.status);
      return NextResponse.json(
        { ok: false, error: "We couldn't submit your request. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Generic error to the user; details stay in server logs only.
    console.error("[contact] forward failed", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't submit your request. Please try again." },
      { status: 502 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed" },
    { status: 405 }
  );
}
