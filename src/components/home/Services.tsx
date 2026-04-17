"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ClipboardCheck,
  FlaskConical,
  Thermometer,
  Bug,
  Droplets,
  GraduationCap,
  Package,
  Shield,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/shared/StaggerGrid";

const services = [
  { key: "audit", href: "/audit", icon: ClipboardCheck, ctaKey: "learnMore" },
  { key: "fertilizer", href: "/fertilizer-recipe", icon: FlaskConical, ctaKey: "learnMore" },
  { key: "climate", href: "/climate-plan", icon: Thermometer, ctaKey: "learnMore" },
  { key: "pestDisease", href: "/pest-disease", icon: Bug, ctaKey: "learnMore" },
  { key: "irrigation", href: "/irrigation-plan", icon: Droplets, ctaKey: "learnMore" },
  { key: "training", href: "/training", icon: GraduationCap, ctaKey: "learnMore" },
  { key: "packages", href: "/packages", icon: Package, ctaKey: "viewPackages" },
  { key: "fullControl", href: "/full-control", icon: Shield, ctaKey: "learnMore" },
] as const;

export default function Services() {
  const t = useTranslations("home.services");
  const cta = useTranslations("common.cta");

  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="reveal" duration={0.8}>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.key}>
                <Link
                  href={service.href}
                  className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(123,12,48,0.12),0_8px_20px_-10px_rgba(0,0,0,0.06)]"
                  style={{
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03)",
                  }}
                >
                  {/* Top accent rail */}
                  <div className="h-1 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-primary-light)] to-[var(--brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Header zone: icon + title */}
                  <div className="px-6 pt-6 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-primary-bg)] to-[var(--green-surface)] text-[var(--brand-primary)] group-hover:from-[var(--brand-primary)] group-hover:to-[var(--brand-primary-hover)] group-hover:text-white transition-all duration-500 ease-out group-hover:shadow-[0_4px_16px_rgba(123,12,48,0.25)] group-hover:scale-105">
                          <Icon className="h-5.5 w-5.5" />
                        </div>
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-[15px] font-bold text-[var(--text-primary)] leading-snug tracking-[-0.01em]">
                          {t(`${service.key}.name`)}
                        </h3>
                        <p className="text-[13px] font-medium text-[var(--brand-primary)] mt-0.5 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                          {t(`${service.key}.tagline`)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mx-6 border-t border-[var(--border-light)] group-hover:border-[var(--brand-primary)]/10 transition-colors duration-500" />

                  {/* Body zone */}
                  <div className="px-6 pt-4 pb-5 flex-1 flex flex-col">
                    <p className="text-[13px] text-[var(--text-muted)] leading-[1.65] flex-1">
                      {t(`${service.key}.description`)}
                    </p>

                    {/* CTA zone */}
                    <div className="mt-4 pt-3 flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-[var(--brand-primary)] group-hover:tracking-wide transition-all duration-500">
                        {cta(service.ctaKey)}
                      </span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--brand-primary-bg)] text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-400 group-hover:translate-x-0.5">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
