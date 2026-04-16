"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("home.hero");
  const cta = useTranslations("common.cta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--bg-white)] via-[var(--green-surface)] to-[var(--bg-white)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--brand-primary-bg)] text-[var(--brand-primary)] text-xs font-semibold tracking-wide uppercase mb-6">
              GroveX
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-playfair)]">
              {t("title")}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-7 py-3.5 text-base font-semibold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-lg transition-all hover:shadow-lg"
            >
              {cta("getConsultation")}
            </Link>
            <Link
              href="/packages"
              className="inline-flex justify-center items-center px-7 py-3.5 text-base font-semibold text-[var(--brand-primary)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary-bg)] rounded-lg transition-colors"
            >
              {cta("viewServices")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-[var(--brand-primary)] to-transparent" />
      </div>
    </section>
  );
}
