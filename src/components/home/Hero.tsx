"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import GreenhouseScene from "@/components/illustrations/GreenhouseScene";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const t = useTranslations("home.hero");
  const cta = useTranslations("common.cta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--bg-white)] via-[var(--green-surface)] to-[var(--bg-white)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--brand-primary-bg)] text-[var(--brand-primary)] text-xs font-semibold tracking-wide uppercase mb-6">
                GroveX
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-playfair)]">
                {t("title")}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-[var(--brand-primary-bg)] via-transparent to-[var(--green-surface)] rounded-[2rem] blur-2xl opacity-70" />
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-xl)] bg-white">
              <GreenhouseScene className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
