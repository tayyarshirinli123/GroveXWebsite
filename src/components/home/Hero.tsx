"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  const t = useTranslations("home.hero");
  const cta = useTranslations("common.cta");

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/TomatoHeroVideo.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-wide uppercase mb-6">
              GroveX
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-playfair)] leading-[1.1]"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-7 py-3.5 text-base font-semibold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(123,12,48,0.4)] active:scale-[0.98]"
            >
              {cta("getConsultation")}
            </Link>
            <Link
              href="/packages"
              className="inline-flex justify-center items-center px-7 py-3.5 text-base font-semibold text-white border-2 border-white/40 hover:border-white/80 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              {cta("viewServices")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade to white page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
