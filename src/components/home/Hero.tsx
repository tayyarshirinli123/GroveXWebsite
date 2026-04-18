"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
  const t = useTranslations("home.hero");
  const cta = useTranslations("common.cta");
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.7], [0, 60]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background video with scroll-linked zoom */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: [0.25, 0.1, 0.25, 1] }}
        style={prefersReduced ? {} : { scale: videoScale }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/TomatoHeroVideo.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Layered overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      {/* Content with scroll-linked exit */}
      <motion.div
        style={prefersReduced ? {} : { opacity: heroOpacity, y: heroY }}
        className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/8 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold tracking-[0.12em] uppercase mb-8">
              GroveX
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-playfair)] leading-[1.08]"
          >
            {t("title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mt-7 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl"
          >
            {t("subtitle")}
          </motion.p>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-8 h-px w-20 bg-gradient-to-r from-[var(--brand-primary)] to-transparent origin-left"
          />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 text-[15px] font-semibold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-xl transition-all duration-400 hover:shadow-[0_8px_30px_rgba(123,12,48,0.45)] active:scale-[0.97] active:shadow-[0_4px_16px_rgba(123,12,48,0.3)]"
            >
              {cta("getConsultation")}
            </Link>
            <Link
              href="/packages"
              className="inline-flex justify-center items-center px-8 py-4 text-[15px] font-semibold text-white border border-white/30 hover:border-white/60 hover:bg-white/8 rounded-xl transition-all duration-400 backdrop-blur-sm"
            >
              {cta("viewServices")}
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-light)] to-transparent" />
    </section>
  );
}
