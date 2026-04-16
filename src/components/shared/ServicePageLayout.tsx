"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

interface ServicePageProps {
  heroTitle: string;
  heroSubtitle: string;
  sectionTitle: string;
  items: string[];
  resultTitle: string;
  resultText: string;
  priceTitle: string;
  priceAmount: string;
  priceNote?: string;
  priceUnit?: string;
  ctaText: string;
}

export default function ServicePageLayout({
  heroTitle,
  heroSubtitle,
  sectionTitle,
  items,
  resultTitle,
  resultText,
  priceTitle,
  priceAmount,
  priceNote,
  priceUnit,
  ctaText,
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.15}>
                <div className="sticky top-28 p-6 bg-white rounded-xl border border-[var(--border-light)] shadow-[var(--shadow-card)]">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    {priceTitle}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-[var(--brand-primary)]">
                      {priceAmount}
                    </span>
                    {priceUnit && (
                      <span className="text-sm text-[var(--text-muted)]">
                        / {priceUnit}
                      </span>
                    )}
                  </div>
                  {priceNote && (
                    <p className="text-sm text-[var(--text-muted)] mb-5">
                      {priceNote}
                    </p>
                  )}
                  {!priceNote && <div className="mb-5" />}
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 text-sm font-semibold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-lg transition-colors"
                  >
                    {ctaText}
                  </Link>
                  <div className="mt-4 text-center">
                    <Link
                      href="/packages"
                      className="text-sm text-[var(--brand-primary)] hover:underline"
                    >
                      {cta("viewPackages")} →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
