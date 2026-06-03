import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { ArrowUpRight, Mail } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-ink-900 text-bone-50">
      <div className="container-edge grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-extrabold"
          >
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span>PixelPop&nbsp;Digi</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone-50/60">
            {SITE.description}
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="link-underline mt-6 inline-flex text-sm text-bone-50/80"
          >
            <Mail className="h-4 w-4" />
            {SITE.email}
          </a>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bone-50/40">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-bone-50/70 transition-colors hover:text-bone-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bone-50/40">
            Ready when you are
          </h2>
          <p className="mt-4 text-sm text-bone-50/70">
            We start with a diagnosis, not a pitch. Find the leak first.
          </p>
          <Link
            href={SITE.cta.primary.href}
            className="btn-primary mt-5"
          >
            {SITE.cta.primary.label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-edge flex flex-col items-start justify-between gap-3 py-6 text-xs text-bone-50/45 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>SEO · Website Development · Performance Marketing</p>
        </div>
      </div>
    </footer>
  );
}
