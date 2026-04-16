"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const serviceLinks = [
  { href: "/audit", key: "audit" },
  { href: "/fertilizer-recipe", key: "fertilizer" },
  { href: "/climate-plan", key: "climate" },
  { href: "/pest-disease", key: "pestDisease" },
  { href: "/irrigation-plan", key: "irrigation" },
  { href: "/training", key: "training" },
  { href: "/packages", key: "packages" },
  { href: "/full-control", key: "fullControl" },
] as const;

export default function Header() {
  const t = useTranslations("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--border-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="GroveX"
              width={130}
              height={44}
              className="h-9 w-auto lg:h-11"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors"
            >
              {t("nav.home")}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">
                {t("nav.services")}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-60 bg-white rounded-lg shadow-lg border border-[var(--border-light)] py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.key}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-light)] hover:text-[var(--brand-primary)] transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {t(`nav.${link.key}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/our-greenhouse"
              className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors"
            >
              {t("nav.greenhouse")}
            </Link>
            <Link
              href="/partners"
              className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors"
            >
              {t("nav.partners")}
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors"
            >
              {t("nav.contact")}
            </Link>
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-lg transition-colors"
            >
              {t("cta.getConsultation")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[var(--text-secondary)]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--border-light)] bg-white">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2.5 text-base font-medium text-[var(--text-primary)] rounded-md hover:bg-[var(--bg-light)]"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.home")}
            </Link>

            <div className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              {t("nav.services")}
            </div>
            {serviceLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="block px-3 py-2.5 pl-6 text-sm text-[var(--text-secondary)] rounded-md hover:bg-[var(--bg-light)]"
                onClick={() => setMobileOpen(false)}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}

            <div className="my-2 border-t border-[var(--divider)]" />

            <Link
              href="/our-greenhouse"
              className="block px-3 py-2.5 text-base font-medium text-[var(--text-primary)] rounded-md hover:bg-[var(--bg-light)]"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.greenhouse")}
            </Link>
            <Link
              href="/partners"
              className="block px-3 py-2.5 text-base font-medium text-[var(--text-primary)] rounded-md hover:bg-[var(--bg-light)]"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.partners")}
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2.5 text-base font-medium text-[var(--text-primary)] rounded-md hover:bg-[var(--bg-light)]"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.about")}
            </Link>

            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t("cta.getConsultation")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
