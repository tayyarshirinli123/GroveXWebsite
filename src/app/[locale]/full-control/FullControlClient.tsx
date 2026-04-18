"use client";

import { Link } from "@/i18n/navigation";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ServiceCrossNav from "@/components/shared/ServiceCrossNav";

interface Props {
  data: {
    heroTitle: string;
    heroSubtitle: string;
    howItWorksTitle: string;
    items: { title: string; text: string }[];
    forWhomTitle: string;
    forWhomText: string;
    inquiryTitle: string;
    inquiryText: string;
    ctaText: string;
  };
}

export default function FullControlClient({ data }: Props) {
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
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              {data.howItWorksTitle}
            </h2>
          </AnimatedSection>

          <div className="space-y-5">
            {data.items.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex gap-4 p-5 bg-white rounded-xl border border-[var(--border-light)]">
                  <CheckCircle2 className="h-6 w-6 text-[var(--brand-primary)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <AnimatedSection delay={0.3}>
              <div className="p-6 bg-[var(--bg-light)] rounded-xl h-full">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {data.forWhomTitle}
                </h3>
                <p className="text-[var(--text-secondary)]">{data.forWhomText}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="p-6 bg-[var(--brand-primary-bg)] rounded-xl h-full">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {data.inquiryTitle}
                </h3>
                <p className="text-[var(--text-secondary)] mb-5">{data.inquiryText}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-lg transition-colors"
                >
                  {data.ctaText}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ServiceCrossNav currentKey="fullControl" />
    </>
  );
}
