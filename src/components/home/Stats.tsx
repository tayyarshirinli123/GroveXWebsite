"use client";

import { useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/shared/StaggerGrid";

export default function Stats() {
  const t = useTranslations("home.stats");

  const stats = [
    { value: t("yield"), label: t("yieldLabel") },
    { value: t("grade"), label: t("gradeLabel") },
    { value: t("caliber5"), label: t("caliber5Label") },
    { value: t("caliber4"), label: t("caliber4Label") },
    { value: t("brix"), label: t("brixLabel") },
  ];

  return (
    <section className="bg-[var(--bg-dark)] py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-transparent to-[var(--green-accent)]/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10"
          stagger={0.1}
        >
          {stats.map((stat, i) => (
            <StaggerItem key={i} compact>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight transition-transform duration-500 group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="mt-2.5 text-sm text-gray-400 leading-snug">
                  {stat.label}
                </div>
                <div className="mx-auto mt-3 h-px w-8 bg-gradient-to-r from-transparent via-[var(--brand-primary-light)]/40 to-transparent" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
