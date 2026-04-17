"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function PartnersTeaser() {
  const t = useTranslations("home.partnersTeaser");
  const cta = useTranslations("common.cta");

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="drift" duration={0.9} easing="premium">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] font-medium tracking-wide mb-4">
              {t("names")}
            </p>
            <div className="mx-auto mb-8 h-px w-16 bg-gradient-to-r from-transparent via-[var(--brand-primary)]/25 to-transparent" />
            <Link
              href="/partners"
              className="group inline-flex items-center gap-2 text-[var(--brand-primary)] font-semibold hover:gap-3 transition-all duration-400"
            >
              {cta("aboutPartners")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
