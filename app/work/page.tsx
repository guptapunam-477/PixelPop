import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES, SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ArrowUpRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Work — Case Studies in E-commerce & DTC Growth",
  description:
    "Real results from PixelPop Digi: SEO, performance marketing and lead optimisation across e-commerce, DTC, industrial and local brands.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work · PixelPop Digi",
    description:
      "Case studies across SEO, performance marketing and lead optimisation.",
    url: `${SITE.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <>
      <section className="on-dark bg-ink-900 text-bone-50">
        <div className="container-edge py-20 md:py-28">
          <span className="eyebrow text-lime">Work</span>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl">
            Growth you can measure, across very different brands.
          </h1>
          <p className="mt-6 max-w-prose text-pretty text-lg text-bone-50/65">
            Apparel, footwear, industrial supply and education — different
            markets, the same approach: diagnose the leak, fix the system, then
            scale what proves out.
          </p>
        </div>
      </section>

      <section className="section bg-bone-100">
        <div className="container-edge">
          <div className="grid gap-6 lg:grid-cols-2">
            {CASE_STUDIES.map((cs, i) => (
              <Reveal key={cs.client} delay={(i % 2) * 90}>
                <article className="card-light flex h-full flex-col overflow-hidden">
                  <div className="flex items-start justify-between gap-4 border-b border-ink-900/[0.08] p-7">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {cs.category}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold">{cs.client}</h2>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-bone-50">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  <dl className="grid grid-cols-3 divide-x divide-ink-900/[0.08]">
                    {cs.results.map((r) => (
                      <div key={r.label} className="px-5 py-7 text-center">
                        <dt className="font-display text-3xl font-bold text-ink-900 md:text-4xl">
                          {r.value}
                        </dt>
                        <dd className="mt-1.5 text-xs leading-snug text-ink-900/55">
                          {r.label}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="border-t border-ink-900/[0.08] p-7 text-sm leading-relaxed text-ink-900/70">
                    {cs.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 rounded-2xl border border-dashed border-ink-900/15 bg-bone-50 p-8 text-center md:p-12">
              <h2 className="text-balance text-2xl font-bold md:text-3xl">
                Want results like these for your brand?
              </h2>
              <p className="mx-auto mt-3 max-w-prose text-ink-900/60">
                Request a Growth Audit and we’ll map where your funnel is leaking
                — and what a similar engagement could move.
              </p>
              <Link href={SITE.cta.primary.href} className="btn-primary mt-7">
                Request a similar growth audit
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
