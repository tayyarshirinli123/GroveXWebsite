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
import AnimatedSection from "./AnimatedSection";
import { StaggerContainer, StaggerItem } from "./StaggerGrid";

const allServices = [
  { key: "audit", href: "/audit", icon: ClipboardCheck },
  { key: "fertilizer", href: "/fertilizer-recipe", icon: FlaskConical },
  { key: "climate", href: "/climate-plan", icon: Thermometer },
  { key: "pestDisease", href: "/pest-disease", icon: Bug },
  { key: "irrigation", href: "/irrigation-plan", icon: Droplets },
  { key: "training", href: "/training", icon: GraduationCap },
  { key: "packages", href: "/packages", icon: Package },
  { key: "fullControl", href: "/full-control", icon: Shield },
] as const;

export type ServiceKey = (typeof allServices)[number]["key"];

export default function ServiceCrossNav({ currentKey }: { currentKey: ServiceKey }) {
  const t = useTranslations("home.services");
  const ui = useTranslations("common.crossNav");
  const items = allServices.filter((s) => s.key !== currentKey);

  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-light)] border-t border-[var(--border-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-playfair)]">
                {ui("title")}
              </h2>
              <p className="mt-2 text-[var(--text-muted)]">{ui("subtitle")}</p>
            </div>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.key}>
                  <Link
                    href={s.href}
                    className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-[var(--border-light)] hover:border-[var(--brand-primary)]/20 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(123,12,48,0.12)]"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--brand-primary-bg)] text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-[var(--text-primary)]">
                        {t(`${s.key}.name`)}
                      </span>
                      <span className="block text-xs text-[var(--text-muted)] mt-0.5 line-clamp-2">
                        {t(`${s.key}.tagline`)}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--brand-primary)] group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  );
}
