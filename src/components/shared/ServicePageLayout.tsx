"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ServiceCrossNav, { type ServiceKey } from "@/components/shared/ServiceCrossNav";

interface ServicePageProps {
  heroTitle: string;
  heroSubtitle: string;
  sectionTitle: string;
  items: string[];
  resultTitle: string;
  resultText: string;
  inquiryTitle: string;
  inquiryText: string;
  serviceKey: ServiceKey;
}

export default function ServicePageLayout({
  heroTitle,
  heroSubtitle,
  sectionTitle,
  items,
  resultTitle,
  resultText,
  inquiryTitle,
  inquiryText,
  serviceKey,
}: ServicePageProps) {
  const cta = useTranslations("common.cta");

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--green-surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-playfair)]">
                {heroTitle}
              </h1>
              <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
                {heroSubtitle}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                  {sectionTitle}
                </h2>
                <ul className="space-y-3.5">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--green-accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="mt-10 p-6 bg-[var(--bg-light)] rounded-xl">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {resultTitle}
                  </h3>
                  <p className="text-[var(--text-secondary)]">{resultText}</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar — inquiry / lead-gen card */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.15}>
                <div className="sticky top-28 relative overflow-hidden rounded-2xl border border-[var(--border-light)] bg-gradient-to-br from-white via-white to-[var(--green-surface)] shadow-[var(--shadow-card)]">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--green-accent)] to-[var(--brand-primary)]" />
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--brand-primary)]/5 blur-2xl" />
                  <div className="relative p-7">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)]/8 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                      <Sparkles className="h-3.5 w-3.5" />
                      {inquiryTitle}
                    </div>
                    <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                      {inquiryText}
                    </p>
                    <Link
                      href="/contact"
                      className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--brand-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(123,12,48,0.4)] transition-all duration-300 hover:bg-[var(--brand-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(123,12,48,0.5)]"
                    >
                      {cta("getQuote")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                    <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--green-accent)]" />
                      <span>{cta("scheduleVisit")}</span>
                      <span className="h-1 w-1 rounded-full bg-[var(--green-accent)]" />
                    </div>
                    <div className="mt-5 border-t border-[var(--border-light)] pt-4 text-center">
                      <Link
                        href="/packages"
                        className="text-sm font-medium text-[var(--brand-primary)] hover:underline"
                      >
                        {cta("viewPackages")} →
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <ServiceCrossNav currentKey={serviceKey} />
    </>
  );
}
