"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FinalCTA() {
  const t = useTranslations("home.finalCta");
  const cta = useTranslations("common.cta");

  return (
    <section className="py-20 sm:py-28 bg-[var(--brand-primary)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            {t("title")}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10">
            {t("text")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-[var(--brand-primary)] bg-white hover:bg-gray-50 rounded-lg transition-colors shadow-lg"
          >
            {cta("getConsultation")}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
