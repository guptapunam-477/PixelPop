import Link from "next/link";
import {
  BUSINESS_METRICS,
  CASE_STUDIES,
  GROWTH_STEPS,
  PROBLEMS,
  SERVICES,
  SITE,
  WHY_US,
} from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CtaBand } from "@/components/CtaBand";
import {
  Alert,
  ArrowRight,
  ArrowUpRight,
  Check,
  SERVICE_ICONS,
} from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="on-dark relative overflow-hidden bg-ink-900 text-bone-50">
        <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-lime/[0.07] blur-[110px]"
        />
        <div className="container-edge relative pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="max-w-4xl">
            <Reveal
              as="span"
              className="eyebrow text-bone-50/55"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Growth partner for e-commerce & DTC brands
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.04] sm:text-5xl md:text-[4.25rem]">
                Fix the growth leaks between your{" "}
                <span className="text-accent">website</span>,{" "}
                <span className="text-accent">ads</span>,{" "}
                <span className="text-accent">SEO</span> and revenue.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-prose text-pretty text-lg text-bone-50/65 md:text-xl">
                PixelPop Digi helps e-commerce and DTC brands diagnose what is
                blocking growth, then improves their website, SEO, Meta Ads and
                Google Ads so traffic converts into measurable revenue.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href={SITE.cta.primary.href} className="btn-primary">
                  {SITE.cta.primary.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href={SITE.cta.secondary.href}
                  className="btn-ghost-dark"
                >
                  {SITE.cta.secondary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Headline proof strip */}
          <Reveal delay={240}>
            <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
              {[
                { v: "+148%", l: "Organic sessions" },
                { v: "4.5x", l: "ROAS achieved" },
                { v: "3x", l: "Sales growth" },
                { v: "+25%", l: "Average order value" },
              ].map((s) => (
                <div key={s.l} className="bg-ink-900 px-6 py-7">
                  <dt className="font-display text-3xl font-bold text-bone-50 md:text-4xl">
                    <CountUp value={s.v} />
                  </dt>
                  <dd className="mt-1 text-sm text-bone-50/55">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ========================= PROBLEM ========================= */}
      <section className="section bg-bone-100">
        <div className="container-edge">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent">The real problem</span>
            <Reveal>
              <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
                Most brands don’t have a traffic problem. They have a growth
                system problem.
              </h2>
            </Reveal>
            <p className="mt-5 max-w-prose text-pretty text-lg text-ink-900/60">
              Spend rarely fails in one place. It leaks across the funnel — and
              without a diagnosis, you can’t tell which gap is costing you most.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p, i) => (
              <Reveal as="li" key={p} delay={(i % 4) * 60}>
                <div className="card-light flex h-full gap-3 p-5">
                  <Alert className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-ink-900/80">{p}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================= SERVICES ========================= */}
      <section className="on-dark section bg-ink-900 text-bone-50">
        <div className="container-edge">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow text-lime">What we do</span>
              <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
                Three services. One revenue engine.
              </h2>
            </div>
            <Link
              href="/services"
              className="link-underline text-sm text-bone-50/70"
            >
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.slug];
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <article className="card-dark flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold">{s.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone-50/60">
                      {s.short}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {s.points.slice(0, 4).map((pt) => (
                        <li
                          key={pt}
                          className="flex gap-2.5 text-sm text-bone-50/75"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/services"
                      className="link-underline mt-7 text-sm text-bone-50"
                    >
                      Learn more <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================== GROWTH SYSTEM ====================== */}
      <section className="section bg-bone-100">
        <div className="container-edge">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent">How it works</span>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
              A simple growth system: diagnose, fix, launch, optimise, scale.
            </h2>
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 md:grid-cols-5">
            {GROWTH_STEPS.map((step, i) => (
              <Reveal as="li" key={step.step} delay={i * 70}>
                <div className="flex h-full flex-col bg-bone-50 p-6">
                  <span className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-900/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== CASE STUDY PREVIEW ==================== */}
      <section className="section bg-bone-200/60">
        <div className="container-edge">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow text-accent">Selected work</span>
              <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
                Results we can point to.
              </h2>
            </div>
            <Link href="/work" className="link-underline text-sm">
              View all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {CASE_STUDIES.slice(0, 2).map((cs, i) => (
              <Reveal key={cs.client} delay={i * 90}>
                <article className="card-light flex h-full flex-col p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-900/45">
                    {cs.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{cs.client}</h3>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-ink-900/[0.08] py-5">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <dt className="font-display text-2xl font-bold text-accent">
                          <CountUp value={r.value} />
                        </dt>
                        <dd className="mt-1 text-xs text-ink-900/55">
                          {r.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 text-sm leading-relaxed text-ink-900/65">
                    {cs.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== WHY US ======================== */}
      <section className="on-dark section bg-ink-900 text-bone-50">
        <div className="container-edge grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow text-lime">Why PixelPop Digi</span>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-4xl">
              We grow brands, not dashboards.
            </h2>
            <p className="mt-5 text-pretty text-bone-50/60">
              A growth partner that treats your store, search and ads as a
              single system — and reports on the numbers that pay your bills.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="card-dark h-full p-7">
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-50/60">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BUSINESS METRICS ==================== */}
      <section className="section bg-bone-100">
        <div className="container-edge">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent">Measured properly</span>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
              Business metrics, not vanity metrics.
            </h2>
            <p className="mt-5 max-w-prose text-pretty text-lg text-ink-900/60">
              We optimise against the numbers that decide whether growth is
              actually profitable.
            </p>
          </div>
        </div>

        {/* Marquee: a slow, seamless horizontal strip of the real metrics.
            Two copies so the -50% translate loops without a visible seam. */}
        <div
          className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]"
        >
          <ul className="flex w-max items-center gap-3 animate-marquee group-hover:[animation-play-state:paused]">
            {[...BUSINESS_METRICS, ...BUSINESS_METRICS].map((m, i) => (
              <li
                key={i}
                aria-hidden={i >= BUSINESS_METRICS.length}
                className="shrink-0"
              >
                <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink-900/12 bg-bone-50 px-5 py-2.5 text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {m}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ====================== LEAD CAPTURE ====================== */}
      <CtaBand />
    </>
  );
}
