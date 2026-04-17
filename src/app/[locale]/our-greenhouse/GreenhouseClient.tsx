"use client";

import { Link } from "@/i18n/navigation";
import AnimatedSection from "@/components/shared/AnimatedSection";

interface Props {
  data: {
    heroTitle: string;
    heroSubtitle: string;
    resultsTitle: string;
    rows: { label: string; value: string }[];
    visitTitle: string;
    visitText: string;
    ctaText: string;
  };
}

export default function GreenhouseClient({ data }: Props) {
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              {data.resultsTitle}
            </h2>
            <div className="overflow-hidden rounded-xl border border-[var(--border-light)]">
              {data.rows.map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-6 py-4 ${
                    i % 2 === 0 ? "bg-white" : "bg-[var(--bg-light)]"
                  } ${i < data.rows.length - 1 ? "border-b border-[var(--divider)]" : ""}`}
                >
                  <span className="text-[var(--text-secondary)]">{row.label}</span>
                  <span className="text-lg font-bold text-[var(--brand-primary)]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mt-12 p-8 bg-[var(--bg-light)] rounded-xl text-center">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                {data.visitTitle}
              </h3>
              <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-6">
                {data.visitText}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-lg transition-colors"
              >
                {data.ctaText}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
