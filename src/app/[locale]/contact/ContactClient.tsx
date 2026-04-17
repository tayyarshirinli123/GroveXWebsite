"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

interface Props {
  locale: string;
  data: {
    heroTitle: string;
    heroSubtitle: string;
    infoTitle: string;
    phone: string;
    email: string;
    address: string;
    formTitle: string;
    formLabels: {
      firstName: string;
      lastName: string;
      company: string;
      phone: string;
      email: string;
      area: string;
      location: string;
      note: string;
      submit: string;
      success: string;
      error: string;
    };
    onboardingTitle: string;
    steps: { step: string; title: string; text: string }[];
  };
}

export default function ContactClient({ locale, data }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => (fd.get(k)?.toString() || "").trim();

    const payload = {
      firstName: get("firstName"),
      lastName: get("lastName"),
      company: get("company"),
      phone: get("phone"),
      email: get("email"),
      area: get("area"),
      location: get("location"),
      note: get("note"),
      locale,
      sourcePage: window.location.pathname,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.formLabels.error);
      }
    } catch {
      setErrorMsg(data.formLabels.error);
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls =
    "w-full px-4 py-3 text-sm border border-[var(--border-default)] rounded-lg bg-white focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/10 outline-none transition-colors";

  return (
    <>
      <section className="bg-[var(--green-surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-playfair)]">
                {data.heroTitle}
              </h1>
              <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
                {data.heroSubtitle}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                  {data.formTitle}
                </h2>

                {submitted ? (
                  <div className="p-8 bg-[var(--green-surface)] rounded-xl text-center">
                    <CheckCircle2 className="h-12 w-12 text-[var(--green-accent)] mx-auto mb-4" />
                    <p className="text-lg font-semibold text-[var(--text-primary)]">
                      {data.formLabels.success}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                          {data.formLabels.firstName} *
                        </label>
                        <input name="firstName" type="text" required className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                          {data.formLabels.lastName}
                        </label>
                        <input name="lastName" type="text" className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        {data.formLabels.company}
                      </label>
                      <input name="company" type="text" className={inputCls} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                          {data.formLabels.phone} *
                        </label>
                        <input name="phone" type="tel" required className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                          {data.formLabels.email}
                        </label>
                        <input name="email" type="email" className={inputCls} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                          {data.formLabels.area}
                        </label>
                        <input name="area" type="text" className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                          {data.formLabels.location}
                        </label>
                        <input name="location" type="text" className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        {data.formLabels.note}
                      </label>
                      <textarea name="note" rows={3} className={inputCls} />
                    </div>

                    {errorMsg && (
                      <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] disabled:opacity-60 rounded-lg transition-colors"
                    >
                      {submitting ? (
                        <span className="inline-flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          {data.formLabels.submit}
                        </span>
                      ) : (
                        data.formLabels.submit
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.15}>
                <div className="sticky top-28 space-y-6">
                  <div className="p-6 bg-[var(--bg-light)] rounded-xl">
                    <h3 className="font-semibold text-[var(--text-primary)] mb-4">
                      {data.infoTitle}
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <a href={`tel:${data.phone}`} className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">
                          <Phone className="h-4 w-4 text-[var(--brand-primary)]" />
                          {data.phone}
                        </a>
                      </li>
                      <li>
                        <a href={`mailto:${data.email}`} className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">
                          <Mail className="h-4 w-4 text-[var(--brand-primary)]" />
                          {data.email}
                        </a>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                        <MapPin className="h-4 w-4 text-[var(--brand-primary)]" />
                        {data.address}
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="py-16 bg-[var(--bg-light)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-12">
              {data.onboardingTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)] text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">{step.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
