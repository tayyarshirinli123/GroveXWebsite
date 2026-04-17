"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("common");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-dark)] text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="GroveX"
              width={120}
              height={40}
              className="h-9 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("footer.slogan")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {t("nav.services")}
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/audit", key: "audit" },
                { href: "/fertilizer-recipe", key: "fertilizer" },
                { href: "/climate-plan", key: "climate" },
                { href: "/pest-disease", key: "pestDisease" },
                { href: "/irrigation-plan", key: "irrigation" },
                { href: "/training", key: "training" },
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              GroveX
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/packages", key: "packages" },
                { href: "/full-control", key: "fullControl" },
                { href: "/our-greenhouse", key: "greenhouse" },
                { href: "/partners", key: "partners" },
                { href: "/about", key: "about" },
                { href: "/contact", key: "contact" },
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {t("nav.contact")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${t("footer.phone")}`}
                  className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  {t("footer.phone")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  {t("footer.email")}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-300">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                {t("footer.address")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {year} GroveX. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
