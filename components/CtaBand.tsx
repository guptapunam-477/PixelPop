import Link from "next/link";
import { SITE } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";

export function CtaBand({
  heading = "Find the leak before you spend another rupee.",
  sub = "Book a Growth Audit and we’ll show you exactly where your website, SEO and ads are losing revenue — and what to fix first.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="on-dark section bg-ink-900 text-bone-50">
      <div className="container-edge">
        <Reveal className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 px-6 py-14 md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-lime/10 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <h2 className="text-balance text-3xl font-bold leading-[1.1] md:text-5xl">
              {heading}
            </h2>
            <p className="mt-5 max-w-prose text-pretty text-base text-bone-50/65 md:text-lg">
              {sub}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={SITE.cta.primary.href} className="btn-primary">
                {SITE.cta.primary.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href={SITE.cta.secondary.href} className="btn-ghost-dark">
                {SITE.cta.secondary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
