"use client";

import { useTranslations } from "next-intl";
import { Award, Globe, Building2, Languages } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/shared/StaggerGrid";

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
        <AnimatedSection variant="rise" duration={1.0} easing="dramatic">
          <SectionHeading title={t("title")} />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8" stagger={0.14} delayChildren={0.2}>
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={reason.key}>
                <div className="group flex gap-5 p-6 bg-white rounded-2xl transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-12px_rgba(45,106,79,0.12),0_4px_12px_-4px_rgba(0,0,0,0.04)]"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)" }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--green-surface)] to-[var(--green-surface-hover)] text-[var(--green-accent)] flex-shrink-0 group-hover:shadow-[0_4px_12px_rgba(45,106,79,0.15)] transition-all duration-500">
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
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
