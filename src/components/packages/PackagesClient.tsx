"use client";

import { Link } from "@/i18n/navigation";
import { CheckCircle2, Star, ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ServiceCrossNav from "@/components/shared/ServiceCrossNav";

interface Plan {
  name: string;
  badge?: string;
  features: string[];
  highlighted: boolean;
}

interface Props {
  data: {
    hero: { title: string; subtitle: string };
    plans: Plan[];
    note: string;
    inquiry: { title: string; text: string };
    ctaText: string;
    selectText: string;
  };
}

export default function PackagesClient({ data }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--green-surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-playfair)]">
                {data.hero.title}
              </h1>
              <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
                {data.hero.subtitle}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {data.plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative h-full flex flex-col p-7 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-1 ${
                    plan.highlighted
                      ? "border-[var(--brand-primary)] shadow-[var(--shadow-xl)] bg-gradient-to-b from-white to-[var(--brand-primary-bg)]/30"
                      : "border-[var(--border-light)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card)] bg-white"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[var(--brand-primary)] text-white text-xs font-semibold rounded-full shadow-[0_6px_20px_-4px_rgba(123,12,48,0.45)]">
                        <Star className="h-3 w-3 fill-current" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      {plan.name}
                    </h3>
                    <div className="mt-3 h-px w-12 bg-gradient-to-r from-[var(--brand-primary)]/40 to-transparent" />
                  </div>

                  <ul className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex gap-2.5">
                        <CheckCircle2
                          className={`h-4.5 w-4.5 flex-shrink-0 mt-0.5 ${
                            plan.highlighted
                              ? "text-[var(--brand-primary)]"
                              : "text-[var(--green-accent)]"
                          }`}
                        />
                        <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`group block w-full text-center px-6 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      plan.highlighted
                        ? "text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] shadow-[0_8px_24px_-8px_rgba(123,12,48,0.4)] hover:-translate-y-0.5"
                        : "text-[var(--brand-primary)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {data.selectText}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-16 mx-auto max-w-3xl">
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border-light)] bg-gradient-to-br from-white via-white to-[var(--green-surface)] p-8 sm:p-10 shadow-[var(--shadow-card)]">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[var(--brand-primary)]/5 blur-2xl" />
                <div className="relative text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)]/8 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                    <Sparkles className="h-3.5 w-3.5" />
                    {data.inquiry.title}
                  </div>
                  <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                    {data.inquiry.text}
                  </p>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    {data.note}
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--brand-primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(123,12,48,0.4)] transition-all duration-300 hover:bg-[var(--brand-primary-hover)] hover:-translate-y-0.5"
                  >
                    {data.ctaText}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ServiceCrossNav currentKey="packages" />
    </>
  );
}
