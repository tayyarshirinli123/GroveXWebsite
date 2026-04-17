"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Positioning() {
  const t = useTranslations("home.positioning");

  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-light)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="reveal" duration={0.9} delay={0.1}>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-medium">
            {t("text")}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
