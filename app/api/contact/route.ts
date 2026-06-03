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
  // We send BOTH the sheet's column-header names ("Name", "Company Name", ...)
  // and lowercase aliases, so the script maps fields correctly regardless of
  // which key naming its doPost expects. Extra params are harmless.
  const servicesStr = services.join(", ");
  const params = new URLSearchParams();
  // Keys that match the Google Sheet header row:
  params.set("Name", name);
  params.set("Company Name", company);
  params.set("Email", email);
  params.set("Phone Number", phone);
  params.set("Services Required", servicesStr);
  // Lowercase aliases (ignored if the script doesn't use them):
  params.set("name", name);
  params.set("company", company);
  params.set("email", email);
  params.set("phone", phone);
  params.set("services", servicesStr);
  params.set("source", "pixelpopdigi.com/contact");
  params.set("submittedAt", new Date().toISOString());
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

// Safe health check — visit /api/contact in a browser to diagnose config.
// Reveals NO secret: only whether the var is set, its host, and reachability.
export async function GET() {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const result: Record<string, unknown> = {
    route: "ok",
    contactWebhookConfigured: Boolean(webhook),
    tokenConfigured: Boolean(process.env.CONTACT_WEBHOOK_TOKEN),
  };

  if (!webhook) {
    result.diagnosis =
      "CONTACT_WEBHOOK_URL is NOT set on this deployment. Check the variable name/scope in Netlify and redeploy.";
    return NextResponse.json(result, { status: 200 });
  }

  try {
    const u = new URL(webhook);
    result.webhookHost = u.host; // e.g. "script.google.com" — no secret path
    result.looksLikeAppsScript = u.host.endsWith("script.google.com");
    result.endsWithExec = u.pathname.endsWith("/exec");
  } catch {
    result.webhookHost = "INVALID_URL";
    result.diagnosis = "The value set is not a valid URL (stray quotes/spaces?).";
    return NextResponse.json(result, { status: 200 });
  }

  // Probe reachability (GET, no real form data) so we can see the upstream status.
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 8000);
    const ping = await fetch(webhook, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
    });
    clearTimeout(t);
    result.upstreamReachable = true;
    result.upstreamStatus = ping.status;
    result.upstreamContentType = ping.headers.get("content-type") || "";
    if (ping.status >= 400) {
      result.diagnosis =
        "Reached the Apps Script but it returned an error status. In Apps Script: Deploy → Manage deployments → Edit → Execute as 'Me', Who has access 'Anyone', then redeploy.";
    }
  } catch (e) {
    result.upstreamReachable = false;
    result.upstreamError = (e as Error).name;
    result.diagnosis =
      "The function could not reach the webhook URL (network/timeout). Verify the /exec URL is correct and the deployment is active.";
  }

  return NextResponse.json(result, { status: 200 });
}
