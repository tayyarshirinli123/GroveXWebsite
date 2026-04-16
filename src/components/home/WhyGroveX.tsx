"use client";

import { useTranslations } from "next-intl";
import { Award, Globe, Building2, Languages } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const reasons = [
  { key: "experience", icon: Award },
  { key: "network", icon: Globe },
  { key: "ownGreenhouse", icon: Building2 },
  { key: "noBarrier", icon: Languages },
] as const;

export default function WhyGroveX() {
  const t = useTranslations("home.whyGrovex");

  return (
    <section className="py-20 sm:py-28 bg-[var(--green-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title={t("title")} />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection key={reason.key} delay={i * 0.08}>
                <div className="flex gap-5 p-6 bg-white rounded-xl shadow-[var(--shadow-sm)]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--green-surface)] text-[var(--green-accent)] flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                      {t(`${reason.key}.title`)}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {t(`${reason.key}.text`)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
