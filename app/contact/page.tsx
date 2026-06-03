import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Check, Mail } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact — Book a Growth Audit",
  description:
    "Tell us about your brand and where growth feels stuck. We’ll diagnose the leak and recommend the highest-leverage fix. Reply within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · PixelPop Digi",
    description: "Book a Growth Audit for your e-commerce or DTC brand.",
    url: `${SITE.url}/contact`,
  },
};

const TRUST = [
  "A diagnosis first — not a sales pitch",
  "Reply within one business day",
  "No long contracts to start the conversation",
];

export default function ContactPage() {
  return (
    <section className="bg-bone-100">
      <div className="container-edge grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        {/* Intro / trust column */}
        <div className="lg:col-span-5">
          <span className="eyebrow text-accent">Contact</span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] md:text-5xl">
            Book a Growth Audit.
          </h1>
          <p className="mt-5 max-w-prose text-pretty text-lg text-ink-900/65">
            Tell us where growth feels stuck. We’ll look at your website, SEO
            and ads as one system and show you where revenue is leaking.
          </p>

          <ul className="mt-8 space-y-3">
            {TRUST.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-ink-900/80">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-ink-900/[0.08] bg-bone-50 p-6">
            <p className="text-sm font-semibold text-ink-900">
              Prefer email?
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="link-underline mt-2 inline-flex text-sm text-ink-900/75"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>
        </div>

        {/* Form column */}
        <div className="lg:col-span-7">
          <div className="card-light p-6 sm:p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
