"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  az: "AZ",
  en: "EN",
  ru: "RU",
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-0.5 text-sm">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 rounded font-medium transition-colors ${
            loc === locale
              ? "text-[var(--brand-primary)] bg-[var(--brand-primary-bg)]"
              : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          }`}
          aria-label={`Switch to ${labels[loc]}`}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
