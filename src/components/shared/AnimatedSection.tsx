"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import type { ReactNode } from "react";

const smooth = [0.22, 1, 0.36, 1] as [number, number, number, number];
const premium = [0.16, 1, 0.3, 1] as [number, number, number, number];

const presets: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.88, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  reveal: {
    hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  cinematic: {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  drift: {
    hidden: { opacity: 0, y: 20, x: -12 },
    visible: { opacity: 1, y: 0, x: 0 },
  },
};

type VariantKey = keyof typeof presets;

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: VariantKey;
  margin?: string;
  easing?: "smooth" | "premium";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.75,
  variant = "fadeUp",
  margin = "-80px",
  easing = "smooth",
}: Props) {
  const ease = easing === "premium" ? premium : smooth;
  const transition: Transition = { duration, delay, ease };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={presets[variant]}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
