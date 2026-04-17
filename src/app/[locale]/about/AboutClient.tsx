"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";

interface Props {
  data: {
    heroTitle: string;
    heroSubtitle: string;
    missionTitle: string;
    missionText: string;
    valuesTitle: string;
    values: { title: string; text: string }[];
    whyNowTitle: string;
    whyNowText: string;
    factsTitle: string;
    facts: { value: string; label: string }[];
  };
}

export default function AboutClient({ data }: Props) {
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
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              {data.missionTitle}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-16">
              {data.missionText}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              {data.valuesTitle}
            </h2>
            <div className="space-y-4">
              {data.values.map((v, i) => (
                <div
                  key={i}
                  className="p-5 bg-[var(--bg-light)] rounded-xl"
                >
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{v.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-16 p-8 bg-[var(--brand-primary-bg)] rounded-xl">
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                {data.whyNowTitle}
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {data.whyNowText}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">
                {data.factsTitle}
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {data.facts.map((f, i) => (
                  <div key={i} className="text-center p-4">
                    <div className="text-3xl font-bold text-[var(--brand-primary)] mb-1">
                      {f.value}
                    </div>
                    <div className="text-sm text-[var(--text-muted)]">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
