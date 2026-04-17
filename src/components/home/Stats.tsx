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
    <section className="bg-[var(--bg-dark)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-400 leading-snug">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
