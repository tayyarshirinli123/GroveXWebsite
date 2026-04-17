"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FinalCTA() {
  const t = useTranslations("home.finalCta");
  const cta = useTranslations("common.cta");

  return (
    <section className="py-20 sm:py-28 bg-[var(--brand-primary)] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="cinematic" duration={0.9} easing="premium">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            {t("title")}
          </h2>
          <p className="text-lg text-white/75 leading-relaxed mb-10">
            {t("text")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-[var(--brand-primary)] bg-white hover:bg-gray-50 rounded-xl transition-all duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
          >
            {cta("getConsultation")}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
