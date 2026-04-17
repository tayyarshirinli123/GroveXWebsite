"use client";

import { Link } from "@/i18n/navigation";
import { CheckCircle2, Star } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ServiceCrossNav from "@/components/shared/ServiceCrossNav";

interface Plan {
  name: string;
  price: string;
  unit: string;
  badge?: string;
  features: string[];
  highlighted: boolean;
}

interface Props {
  data: {
    hero: { title: string; subtitle: string; discount: string };
    plans: Plan[];
    note: string;
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
              <p className="mt-3 inline-flex items-center px-4 py-2 bg-[var(--brand-primary-bg)] text-[var(--brand-primary)] text-sm font-semibold rounded-full">
                {data.hero.discount}
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
                  className={`relative h-full flex flex-col p-7 rounded-2xl border-2 transition-shadow ${
                    plan.highlighted
                      ? "border-[var(--brand-primary)] shadow-[var(--shadow-xl)]"
                      : "border-[var(--border-light)] shadow-[var(--shadow-sm)]"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[var(--brand-primary)] text-white text-xs font-semibold rounded-full">
                        <Star className="h-3 w-3 fill-current" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {plan.name}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-4xl font-bold text-[var(--brand-primary)]">
                        {plan.price}
                      </span>
                      <span className="text-sm text-[var(--text-muted)]">
                        / {plan.unit}
                      </span>
                    </div>
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
                    className={`block w-full text-center px-6 py-3 text-sm font-semibold rounded-lg transition-colors ${
                      plan.highlighted
                        ? "text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)]"
                        : "text-[var(--brand-primary)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary-bg)]"
                    }`}
                  >
                    {data.selectText}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                {data.note}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-lg transition-colors"
              >
                {data.ctaText}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ServiceCrossNav currentKey="packages" />
    </>
  );
}
