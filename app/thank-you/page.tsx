import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { ArrowRight, Check } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Thank You — Your Growth Audit Request Is In",
  description:
    "Thanks for reaching out to PixelPop Digi. We’ve received your Growth Audit request and will be in touch within one business day.",
  alternates: { canonical: "/thank-you" },
  // Confirmation pages shouldn't be indexed.
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    t: "We review your request",
    b: "We read what you sent and take a first look at your website, search presence and ad footprint.",
  },
  {
    t: "We reach out within one business day",
    b: "You’ll hear from us by email to set up a short call and confirm where to focus the audit.",
  },
  {
    t: "You get the diagnosis",
    b: "We share where revenue is leaking across your funnel and the highest-leverage fix to start with.",
  },
];

export default function ThankYouPage() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink-900 text-bone-50">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-accent/15 blur-[120px]"
      />
      <div className="container-edge relative flex min-h-[78vh] flex-col items-center justify-center py-20 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-lime/15 text-lime">
          <Check className="h-8 w-8" />
        </span>

        <span className="eyebrow mt-8 text-lime">Request received</span>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl">
          Thanks — your Growth Audit request is in.
        </h1>
        <p className="mt-6 max-w-prose text-pretty text-lg text-bone-50/65">
          We’ve received your details and a member of the PixelPop Digi team
          will be in touch within one business day. No need to do anything else.
        </p>

        <ol className="mt-14 grid w-full max-w-4xl gap-4 text-left sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.t} className="card-dark p-6">
              <span className="font-display text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-base font-semibold">{s.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-bone-50/60">
                {s.b}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to homepage
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/work" className="btn-ghost-dark">
            See our work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-10 text-sm text-bone-50/45">
          Prefer email?{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-bone-50/70 underline underline-offset-4 hover:text-bone-50"
          >
            {SITE.email}
          </a>
        </p>
      </div>
    </section>
  );
}
