"use client";

import { Globe, MapPin, User } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

interface Props {
  data: {
    heroTitle: string;
    heroSubtitle: string;
    partners: { name: string; country: string; description: string }[];
    bridgeTitle: string;
    bridgeName: string;
    bridgeText: string;
  };
}

export default function PartnersClient({ data }: Props) {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.partners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.08}>
                <div className="h-full p-6 bg-white rounded-xl border border-[var(--border-light)] hover:shadow-[var(--shadow-card-hover)] transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--green-surface)] flex items-center justify-center">
                      <Globe className="h-5 w-5 text-[var(--green-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">
                        {partner.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <MapPin className="h-3 w-3" />
                        {partner.country}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-16 p-8 bg-[var(--brand-primary-bg)] rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    {data.bridgeTitle}
                  </h3>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {data.bridgeName}
                  </h4>
                  <p className="text-[var(--text-secondary)]">{data.bridgeText}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
