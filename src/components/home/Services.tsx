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

type CardVariant = "stripe-left" | "glow-corner" | "accent-top" | "badge-float" | "featured" | "hero-dark";

const services = [
  { key: "audit", href: "/audit", icon: ClipboardCheck, ctaKey: "learnMore", variant: "stripe-left" as CardVariant },
  { key: "fertilizer", href: "/fertilizer-recipe", icon: FlaskConical, ctaKey: "learnMore", variant: "glow-corner" as CardVariant },
  { key: "climate", href: "/climate-plan", icon: Thermometer, ctaKey: "learnMore", variant: "accent-top" as CardVariant },
  { key: "pestDisease", href: "/pest-disease", icon: Bug, ctaKey: "learnMore", variant: "badge-float" as CardVariant },
  { key: "irrigation", href: "/irrigation-plan", icon: Droplets, ctaKey: "learnMore", variant: "glow-corner" as CardVariant },
  { key: "training", href: "/training", icon: GraduationCap, ctaKey: "learnMore", variant: "stripe-left" as CardVariant },
  { key: "packages", href: "/packages", icon: Package, ctaKey: "viewPackages", variant: "featured" as CardVariant },
  { key: "fullControl", href: "/full-control", icon: Shield, ctaKey: "learnMore", variant: "hero-dark" as CardVariant },
] as const;

function StripeLeftCard({ service, t, cta }: { service: typeof services[number]; t: ReturnType<typeof useTranslations>; cta: ReturnType<typeof useTranslations> }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group relative flex h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(123,12,48,0.12),0_8px_20px_-10px_rgba(0,0,0,0.06)]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03)" }}
    >
      <div className="w-1 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-primary)]/20 group-hover:to-[var(--brand-primary)] transition-all duration-700 rounded-l-2xl" />
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[var(--brand-primary-bg)] text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_4px_16px_rgba(123,12,48,0.25)]">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-[15px] font-bold text-[var(--text-primary)] leading-snug">
          {t(`${service.key}.name`)}
        </h3>
        <p className="mt-1 text-[13px] font-medium text-[var(--brand-primary)]/70 group-hover:text-[var(--brand-primary)] transition-colors duration-300">
          {t(`${service.key}.tagline`)}
        </p>
        <p className="mt-3 text-[13px] text-[var(--text-muted)] leading-[1.65] flex-1">
          {t(`${service.key}.description`)}
        </p>
        <div className="mt-4 pt-3 border-t border-[var(--border-light)] flex items-center justify-between">
          <span className="text-[13px] font-semibold text-[var(--brand-primary)]">
            {cta(service.ctaKey)}
          </span>
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--brand-primary-bg)] text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-400">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function GlowCornerCard({ service, t, cta }: { service: typeof services[number]; t: ReturnType<typeof useTranslations>; cta: ReturnType<typeof useTranslations> }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(123,12,48,0.12),0_8px_20px_-10px_rgba(0,0,0,0.06)]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03)" }}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--green-accent)]/8 group-hover:bg-[var(--brand-primary)]/10 transition-colors duration-700 blur-xl" />
      <div className="relative px-6 pt-7 pb-5 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--green-surface)] to-[var(--green-surface-hover)] text-[var(--green-accent)] group-hover:from-[var(--brand-primary)] group-hover:to-[var(--brand-primary-hover)] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_8px_24px_-6px_rgba(123,12,48,0.3)] group-hover:scale-105">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-[15px] font-bold text-[var(--text-primary)] leading-snug">
          {t(`${service.key}.name`)}
        </h3>
        <p className="mt-1 text-[13px] font-medium text-[var(--green-accent)]/80 group-hover:text-[var(--brand-primary)] transition-colors duration-300">
          {t(`${service.key}.tagline`)}
        </p>
      </div>
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <p className="text-[13px] text-[var(--text-muted)] leading-[1.65] flex-1 text-center">
          {t(`${service.key}.description`)}
        </p>
        <div className="mt-5 flex justify-center">
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--brand-primary)] group-hover:gap-2.5 transition-all duration-500">
            {cta(service.ctaKey)}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function AccentTopCard({ service, t, cta }: { service: typeof services[number]; t: ReturnType<typeof useTranslations>; cta: ReturnType<typeof useTranslations> }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(123,12,48,0.12),0_8px_20px_-10px_rgba(0,0,0,0.06)]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03)" }}
    >
      <div className="h-1.5 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--green-accent)] to-[var(--brand-primary)] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--brand-primary-bg)] text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-500">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 pt-0.5">
            <h3 className="text-[15px] font-bold text-[var(--text-primary)] leading-snug">
              {t(`${service.key}.name`)}
            </h3>
            <p className="text-[13px] font-medium text-[var(--brand-primary)]/70 mt-0.5 group-hover:text-[var(--brand-primary)] transition-colors duration-300">
              {t(`${service.key}.tagline`)}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-6 h-px bg-gradient-to-r from-[var(--border-light)] via-[var(--brand-primary)]/10 to-transparent group-hover:via-[var(--brand-primary)]/20 transition-colors duration-500" />
      <div className="px-6 pt-4 pb-6 flex-1 flex flex-col">
        <p className="text-[13px] text-[var(--text-muted)] leading-[1.65] flex-1">
          {t(`${service.key}.description`)}
        </p>
        <div className="mt-4 pt-3 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-[var(--brand-primary)]">
            {cta(service.ctaKey)}
          </span>
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--brand-primary-bg)] text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-400 group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function BadgeFloatCard({ service, t, cta }: { service: typeof services[number]; t: ReturnType<typeof useTranslations>; cta: ReturnType<typeof useTranslations> }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(123,12,48,0.12),0_8px_20px_-10px_rgba(0,0,0,0.06)]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03)" }}
    >
      <div className="relative px-6 pt-7 pb-4">
        <div className="absolute top-4 right-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-hover)] text-white shadow-[0_4px_12px_-2px_rgba(123,12,48,0.3)] group-hover:scale-110 group-hover:shadow-[0_8px_20px_-4px_rgba(123,12,48,0.4)] transition-all duration-500">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="pr-14">
          <h3 className="text-[15px] font-bold text-[var(--text-primary)] leading-snug">
            {t(`${service.key}.name`)}
          </h3>
          <p className="mt-1 text-[13px] font-medium text-[var(--brand-primary)]/70 group-hover:text-[var(--brand-primary)] transition-colors duration-300">
            {t(`${service.key}.tagline`)}
          </p>
        </div>
      </div>
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <div className="w-10 h-px bg-[var(--brand-primary)]/20 mb-4" />
        <p className="text-[13px] text-[var(--text-muted)] leading-[1.65] flex-1">
          {t(`${service.key}.description`)}
        </p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--brand-primary)] group-hover:gap-2.5 transition-all duration-500">
          {cta(service.ctaKey)}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

function FeaturedCard({ service, t, cta }: { service: typeof services[number]; t: ReturnType<typeof useTranslations>; cta: ReturnType<typeof useTranslations> }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col h-full bg-gradient-to-b from-[var(--green-surface)] to-white rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(45,106,79,0.15),0_8px_20px_-10px_rgba(0,0,0,0.06)]"
      style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.05), 0 0 0 1px rgba(45,106,79,0.08)" }}
    >
      <div className="px-6 pt-7 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--green-accent)] to-[var(--green-accent)]/70 text-white shadow-[0_6px_20px_-4px_rgba(45,106,79,0.35)] group-hover:shadow-[0_8px_28px_-4px_rgba(45,106,79,0.45)] group-hover:scale-105 transition-all duration-500">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[var(--text-primary)] leading-snug">
              {t(`${service.key}.name`)}
            </h3>
            <p className="text-[13px] font-semibold text-[var(--green-accent)]">
              {t(`${service.key}.tagline`)}
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <p className="text-[13px] text-[var(--text-muted)] leading-[1.65] flex-1">
          {t(`${service.key}.description`)}
        </p>
        <div className="mt-5">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--green-accent)]/10 text-[var(--green-accent)] text-[13px] font-semibold group-hover:bg-[var(--green-accent)] group-hover:text-white transition-all duration-500">
            {cta(service.ctaKey)}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function HeroDarkCard({ service, t, cta }: { service: typeof services[number]; t: ReturnType<typeof useTranslations>; cta: ReturnType<typeof useTranslations> }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col h-full bg-gradient-to-br from-[var(--brand-primary)] to-[#5a0920] rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(123,12,48,0.35),0_8px_20px_-10px_rgba(0,0,0,0.15)]"
      style={{ boxShadow: "0 4px 12px rgba(123,12,48,0.2), 0 0 0 1px rgba(123,12,48,0.1)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      <div className="relative px-6 pt-7 pb-5">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm text-white border border-white/10 group-hover:bg-white/25 group-hover:scale-105 transition-all duration-500">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-base font-bold text-white leading-snug">
          {t(`${service.key}.name`)}
        </h3>
        <p className="mt-1 text-[13px] font-medium text-white/60">
          {t(`${service.key}.tagline`)}
        </p>
      </div>
      <div className="relative px-6 pb-6 flex-1 flex flex-col">
        <div className="w-10 h-px bg-white/20 mb-4" />
        <p className="text-[13px] text-white/55 leading-[1.65] flex-1">
          {t(`${service.key}.description`)}
        </p>
        <div className="mt-5">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[var(--brand-primary)] text-[13px] font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.15)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] group-hover:-translate-y-0.5 transition-all duration-500">
            {cta(service.ctaKey)}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

const variantMap: Record<CardVariant, typeof StripeLeftCard> = {
  "stripe-left": StripeLeftCard,
  "glow-corner": GlowCornerCard,
  "accent-top": AccentTopCard,
  "badge-float": BadgeFloatCard,
  "featured": FeaturedCard,
  "hero-dark": HeroDarkCard,
};

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
            const CardComponent = variantMap[service.variant];
            return (
              <StaggerItem key={service.key}>
                <CardComponent service={service} t={t} cta={cta} />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
