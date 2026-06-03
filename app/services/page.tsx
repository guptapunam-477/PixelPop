import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight, Check, SERVICE_ICONS } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services — SEO, Website Development & Performance Marketing",
  description:
    "Three focused services for e-commerce and DTC brands: SEO, website redesign and development, and performance marketing — built to work as one revenue engine.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · PixelPop Digi",
    description:
      "SEO, website redesign and development, and performance marketing for profitable, measurable growth.",
    url: `${SITE.url}/services`,
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": SERVICES.map((s) => ({
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: s.name,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: "Global",
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Header */}
      <section className="on-dark bg-ink-900 text-bone-50">
        <div className="container-edge py-20 md:py-28">
          <span className="eyebrow text-lime">Services</span>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl">
            Everything we do points at one thing: profitable growth.
          </h1>
          <p className="mt-6 max-w-prose text-pretty text-lg text-bone-50/65">
            We keep our offer deliberately narrow — three services that
            reinforce each other instead of a long menu that dilutes results.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.slug];
              return (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="card-dark group flex items-center gap-4 p-5 transition-colors hover:border-white/25"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{s.name}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-bone-50/40 transition-transform group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed service sections, alternating light/dark */}
      {SERVICES.map((s, i) => {
        const Icon = SERVICE_ICONS[s.slug];
        const dark = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`section scroll-mt-24 ${
              dark
                ? "on-dark bg-ink-900 text-bone-50"
                : "bg-bone-100 text-ink-900"
            }`}
          >
            <div className="container-edge grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                      dark ? "bg-accent/15 text-accent" : "bg-accent/10 text-accent"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <p
                    className={`mt-6 text-xs font-semibold uppercase tracking-[0.18em] ${
                      dark ? "text-lime" : "text-accent"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} / Service
                  </p>
                  <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
                    {s.name}
                  </h2>
                  <p
                    className={`mt-5 text-pretty text-base leading-relaxed md:text-lg ${
                      dark ? "text-bone-50/65" : "text-ink-900/65"
                    }`}
                  >
                    {s.description}
                  </p>
                  <Link
                    href={SITE.cta.primary.href}
                    className={dark ? "btn-ghost-dark mt-8" : "btn-primary mt-8"}
                  >
                    {dark ? "Talk to us about " + s.name : SITE.cta.primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={80}>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className={`flex gap-3 rounded-xl border p-4 text-sm ${
                          dark
                            ? "border-white/10 bg-ink-800 text-bone-50/80"
                            : "border-ink-900/[0.08] bg-bone-50 text-ink-900/80"
                        }`}
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            dark ? "text-lime" : "text-accent"
                          }`}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* How they work together */}
      <section className="section bg-bone-200/60">
        <div className="container-edge">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent">Better together</span>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
              How the three services work together.
            </h2>
            <p className="mt-5 max-w-prose text-pretty text-lg text-ink-900/60">
              Run in isolation, each is useful. Run as one system, they
              compound — and that compounding is where profitable growth lives.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "The website is the conversion floor",
                b: "SEO and ads send traffic; a fast, clear, conversion-focused site decides whether that traffic becomes revenue. Fix the floor first.",
              },
              {
                t: "SEO compounds what ads pay for",
                b: "Paid media buys attention today. SEO turns the same buying-intent demand into traffic you don’t re-pay for every month.",
              },
              {
                t: "Ads validate, SEO scales, site converts",
                b: "Paid testing reveals the winning offers and messages fast; we then bake them into pages and search so growth is durable.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="card-light h-full p-7">
                  <span className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-900/65">
                    {c.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Not sure which service you need first?"
        sub="That’s exactly what the Growth Audit is for. We diagnose where revenue is leaking, then recommend the highest-leverage fix — no guesswork."
      />
    </>
  );
}
