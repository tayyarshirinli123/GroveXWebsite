"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Positioning() {
  const t = useTranslations("home.positioning");

  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-light)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="reveal" duration={1.0} delay={0.1} easing="premium">
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 h-8 w-px bg-gradient-to-b from-[var(--brand-primary)]/30 to-transparent" />
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-medium pt-6">
              {t("text")}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
