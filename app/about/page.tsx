import type { Metadata } from "next";
import { GROWTH_STEPS, SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About — A Growth Partner Built on Diagnosis, Not Guesswork",
  description:
    "PixelPop Digi exists to fix the growth leaks between website, SEO and ads. Our philosophy: diagnose before scaling, clarity over complexity, sustainable profitable growth.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · PixelPop Digi",
    description:
      "Diagnose before scaling. Clarity over complexity. Sustainable, profitable growth.",
    url: `${SITE.url}/about`,
  },
};

const PRINCIPLES = [
  {
    title: "Diagnose before scaling",
    body: "Spending more on a broken funnel only scales the loss. We find the actual leak — website, offer, SEO or ads — before we recommend a single budget increase. The audit comes first, always.",
  },
  {
    title: "Clarity over complexity",
    body: "No jargon walls, no dashboards built to impress. We report in plain language tied to revenue, so you always understand what changed, why, and what it did to the bottom line.",
  },
  {
    title: "Sustainable, profitable growth",
    body: "We’re not chasing a vanity spike. We build toward durable economics — healthy CAC, payback you can fund, and SEO that compounds long after a campaign ends.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="on-dark bg-ink-900 text-bone-50">
        <div className="container-edge py-20 md:py-28">
          <span className="eyebrow text-lime">About</span>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl">
            We were built to fix the gaps everyone else ignores.
          </h1>
          <p className="mt-6 max-w-prose text-pretty text-lg text-bone-50/65">
            Most brands hire an ads agency, a separate web team and a freelance
            SEO — then wonder why growth stalls. The leaks live in the gaps
            between them. PixelPop Digi closes those gaps by owning the whole
            system.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-bone-100">
        <div className="container-edge grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow text-accent">Our philosophy</span>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-4xl">
              Three principles guide every engagement.
            </h2>
          </div>
          <div className="grid gap-5 lg:col-span-8">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="card-light flex gap-6 p-7">
                  <span className="font-display text-2xl font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How PixelPop works */}
      <section className="on-dark section bg-ink-900 text-bone-50">
        <div className="container-edge">
          <div className="max-w-3xl">
            <span className="eyebrow text-lime">How we work</span>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
              A repeatable loop, run on your numbers.
            </h2>
            <p className="mt-5 max-w-prose text-pretty text-lg text-bone-50/60">
              Every brand gets the same disciplined sequence — what changes is
              what the diagnosis tells us to prioritise.
            </p>
          </div>

          <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-white/10">
            {GROWTH_STEPS.map((step, i) => (
              <Reveal as="li" key={step.step} delay={i * 50}>
                <div className="flex flex-col gap-2 bg-ink-800 p-6 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")} · {step.step}
                  </span>
                  <p className="text-sm leading-relaxed text-bone-50/65 sm:max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        heading="If that sounds like the partner you’ve been missing —"
        sub="Start with a Growth Audit. We’ll diagnose the system, show you the leaks, and tell you honestly whether we’re the right team to fix them."
      />
    </>
  );
}
