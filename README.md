# PixelPop Digi — Website

A premium, conversion-focused marketing site for **PixelPop Digi**, a growth partner for e-commerce and DTC brands. Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.

> Core message: *Fix the growth leaks between your website, ads, SEO and revenue.*

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.local.example .env.local
#    then open .env.local and confirm the values (see below)

# 3. Run the dev server
npm run dev
#    → http://localhost:3000

# 4. Production build
npm run build && npm start
```

Requires Node.js 18.18+ (built and tested on Node 20/22).

---

## Pages & routes

| Route         | Page         | Notes                                            |
| ------------- | ------------ | ------------------------------------------------ |
| `/`           | Home         | Hero, problem, services, growth system, work preview, why-us, metrics, CTA |
| `/services`   | Services     | Three detailed service sections + how they combine + `Service` schema |
| `/work`       | Work         | Case-study grid (Hicom India, TheBTclub, HiKalpaa, D2C Footwear) |
| `/about`      | About        | Philosophy, principles, how we work             |
| `/contact`    | Contact      | Fast lead form → `/api/contact`                 |
| `/thank-you`  | Thank You    | Confirmation page (the URL changes on success); `noindex` |
| `/api/contact`| API route    | Serverless proxy that forwards the form securely |

Edit copy/services/case studies in one place: **`lib/site.ts`**.

---

## Form submission (secure by design)

The browser **never** sees the Google Apps Script endpoint. Flow:

```
Contact form (client)  ──POST /api/contact──►  Next.js serverless route  ──►  Google Apps Script Web App
        validation + honeypot                   re-validates, sanitises,
                                                 rate-limits, then forwards
```

- The Apps Script URL lives **server-side only** in `CONTACT_WEBHOOK_URL` (no `NEXT_PUBLIC_` prefix), so it is never exposed in client bundles.
- On success the form does a real navigation to **`/thank-you`** (the URL changes).
- The submit button is disabled while sending to prevent duplicate submissions.

### Environment variables

Set these in `.env.local` (local) and in your host's dashboard (production):

| Variable                 | Required | Purpose                                                        |
| ------------------------ | -------- | -------------------------------------------------------------- |
| `CONTACT_WEBHOOK_URL`    | yes      | Google Apps Script Web App URL that receives submissions       |
| `CONTACT_WEBHOOK_TOKEN`  | no       | Optional shared secret; validate it inside your `doPost(e)`    |
| `NEXT_PUBLIC_SITE_URL`   | yes      | Public site URL, used for canonical + Open Graph + sitemap     |

The route forwards form-encoded fields, so your Apps Script can read them via `e.parameter`:

```js
function doPost(e) {
  // Optional: reject requests without your token
  // if (e.parameter.token !== 'YOUR_SECRET') return ContentService.createTextOutput('forbidden');

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
  sheet.appendRow([
    new Date(),
    e.parameter.name,
    e.parameter.company,
    e.parameter.email,
    e.parameter.phone,
    e.parameter.services,
    e.parameter.source,
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

> **Security note:** keep `.env.local` out of version control (already in `.gitignore`). If you ever rotate the Apps Script deployment, update `CONTACT_WEBHOOK_URL` in the host dashboard — no code change needed.

---

## Anti-spam & security

- **Honeypot** field (`website`) — hidden from users; if filled, the server silently accepts and drops the submission.
- **Server-side validation** of every field (email + phone regex, required services) — the client is never trusted.
- **Input sanitisation** strips control characters and clamps length.
- **Rate limiting** (in-memory, 5 requests/min/IP). For multi-instance production, back it with a shared store such as Upstash/Redis.
- **Generic error messages** to users; details stay in server logs only.
- Security headers set in `next.config.mjs` (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).

---

## Google Tag Manager

GTM (`GTM-59CZQJDT`) is installed once in the root layout (`app/layout.tsx` → `components/Gtm.tsx`), so it loads on **every** page including `/thank-you`:

- The init script uses `next/script` with `strategy="afterInteractive"` so it never blocks rendering.
- The `<noscript>` iframe sits immediately after `<body>`.

To change the container ID, edit `gtmId` in `lib/site.ts`.

---

## Design system

- **Fonts:** Sora (display) + Inter (body), self-hosted via `next/font` (no layout shift, no external font request).
- **Colour tokens** (in `tailwind.config.ts`): ink `#080808 / #111111`, bone `#F7F4EF / #FFFFFF`, accent `#F36F2A`, lime `#C8FF5C`, muted `#8A8A8A`.
- **Components:** buttons (`.btn-primary`, `.btn-ghost-*`), cards (`.card-light`, `.card-dark`), `.eyebrow`, `.section`, `.container-edge` in `app/globals.css`.
- Alternating dark/light sections, restrained scroll reveals (`components/Reveal.tsx`), and `prefers-reduced-motion` respected.

## Accessibility

Semantic HTML, correct heading hierarchy, visible focus states, a skip-to-content link, ARIA-labelled icons/forms, inline validation messages wired with `aria-invalid` / `aria-describedby`, and keyboard-navigable mobile menu.

## SEO

Per-page titles + meta descriptions, Open Graph/Twitter metadata, canonical URLs, `Organization` + `WebSite` + `Service` JSON-LD, `app/sitemap.ts`, and `app/robots.ts`.

---

## Deploy

Any Node host works. The repo includes a `netlify.toml`.

### Netlify (configured here)

1. Push this folder to a Git repo and import it in Netlify (or `netlify deploy`).
2. Netlify auto-detects Next.js and uses the Next Runtime, so `/api/contact` becomes a serverless function automatically.
3. Add the environment variables under **Site settings → Environment variables** — **never** commit the real values:
   - `CONTACT_WEBHOOK_URL` (required) — your Apps Script `/exec` URL
   - `CONTACT_WEBHOOK_TOKEN` (optional) — shared secret validated in `doPost`
   - `NEXT_PUBLIC_SITE_URL` (required) — e.g. `https://www.pixelpopdigi.com`
4. Trigger a deploy. Because the URL lives only in Netlify env vars (not in code or in `.env.local.example`), it is never exposed to the browser or to the public repo.

### Vercel (alternative)

Import the repo, add the same three variables under **Project → Settings → Environment Variables**, and deploy.
