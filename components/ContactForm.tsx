"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SERVICE_OPTIONS } from "@/lib/site";
import { Alert, ArrowUpRight } from "./Icons";

type Errors = Partial<Record<"name" | "company" | "email" | "phone" | "services" | "form", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,18}$/;

export function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: [] as string[],
    // Honeypot: real users never see/fill this.
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function setField<K extends keyof typeof values>(key: K, val: (typeof values)[K]) {
    setValues((v) => ({ ...v, [key]: val }));
    if (errors[key as keyof Errors]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  }

  function toggleService(service: string) {
    setValues((v) => {
      const next = v.services.includes(service)
        ? v.services.filter((s) => s !== service)
        : [...v.services, service];
      return { ...v, services: next };
    });
    if (errors.services) setErrors((e) => ({ ...e, services: undefined }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.company.trim()) e.company = "Please enter your company name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!values.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!PHONE_RE.test(values.phone.trim()))
      e.phone = "Please enter a valid phone number.";
    if (values.services.length === 0)
      e.services = "Select at least one service.";
    return e;
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      // Move focus to the first invalid field for accessibility.
      const first = document.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setSubmitting(true);
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          services: values.services,
          website: values.website, // honeypot
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      // URL changes on success -> dedicated thank-you route.
      router.push("/thank-you");
    } catch {
      setErrors({
        form: "Something went wrong sending your request. Please try again, or email us directly.",
      });
      setSubmitting(false);
    }
  }

  const fieldBase =
    "mt-2 w-full rounded-xl border bg-bone-50 px-4 py-3 text-base text-ink-900 placeholder:text-ink-900/35 transition-colors focus:border-accent";

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      {errors.form && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/[0.06] p-4 text-sm text-ink-900"
        >
          <Alert className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <p>{errors.form}</p>
        </div>
      )}

      {/* Honeypot — visually hidden, off-screen, not announced. */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden" >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => setField("website", e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          error={errors.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            placeholder="Your full name"
            className={`${fieldBase} ${errors.name ? "border-accent" : "border-ink-900/15"}`}
          />
        </Field>

        <Field id="company" label="Company name" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            value={values.company}
            onChange={(e) => setField("company", e.target.value)}
            placeholder="Your brand or company"
            className={`${fieldBase} ${errors.company ? "border-accent" : "border-ink-900/15"}`}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="you@brand.com"
            className={`${fieldBase} ${errors.email ? "border-accent" : "border-ink-900/15"}`}
          />
        </Field>

        <Field id="phone" label="Phone number" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            placeholder="+91 90000 00000"
            className={`${fieldBase} ${errors.phone ? "border-accent" : "border-ink-900/15"}`}
          />
        </Field>
      </div>

      {/* Services checkbox group */}
      <fieldset
        aria-invalid={!!errors.services}
        aria-describedby={errors.services ? "services-error" : undefined}
      >
        <legend className="text-sm font-semibold text-ink-900">
          Services required <span className="text-accent">*</span>
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {SERVICE_OPTIONS.map((service) => {
            const checked = values.services.includes(service);
            return (
              <label
                key={service}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm transition-colors ${
                  checked
                    ? "border-accent bg-accent/[0.06]"
                    : "border-ink-900/15 bg-bone-50 hover:border-ink-900/30"
                }`}
              >
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={checked}
                  onChange={() => toggleService(service)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                />
                <span className="font-medium text-ink-900/85">{service}</span>
              </label>
            );
          })}
        </div>
        {errors.services && (
          <p id="services-error" className="mt-2 text-sm text-accent">
            {errors.services}
          </p>
        )}
      </fieldset>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="btn-primary w-full justify-center sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Request my Growth Audit"}
          {!submitting && <ArrowUpRight className="h-4 w-4" />}
        </button>
        <p className="text-xs text-ink-900/50">
          We reply within one business day. No spam, ever.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink-900">
        {label} <span className="text-accent">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
