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
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="reveal" duration={0.8}>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.key}>
                <Link
                  href={service.href}
                  className="group block h-full p-6 bg-white rounded-xl border border-[var(--border-light)] hover:border-[var(--brand-primary)]/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(123,12,48,0.15)]"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[var(--brand-primary-bg)] text-[var(--brand-primary)] mb-4 group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:scale-110 transition-all duration-400 ease-out">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                    {t(`${service.key}.name`)}
                  </h3>

                  <p className="text-sm font-medium text-[var(--brand-primary)] mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {t(`${service.key}.tagline`)}
                  </p>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {t(`${service.key}.description`)}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-primary)] group-hover:gap-3 transition-all duration-400">
                    {cta(service.ctaKey)}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-400 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
