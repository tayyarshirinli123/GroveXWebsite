"use client";

import { motion, useReducedMotion, type Variants, type Transition } from "framer-motion";
import type { ReactNode } from "react";

const smooth = [0.22, 1, 0.36, 1] as [number, number, number, number];
const premium = [0.16, 1, 0.3, 1] as [number, number, number, number];
const dramatic = [0.12, 0.98, 0.22, 1] as [number, number, number, number];

const presets: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85, y: 16 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  reveal: {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  cinematic: {
    hidden: { opacity: 0, y: 48, scale: 0.94 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  drift: {
    hidden: { opacity: 0, y: 24, x: -16 },
    visible: { opacity: 1, y: 0, x: 0 },
  },
  rise: {
    hidden: { opacity: 0, y: 60, scale: 0.92, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
  curtain: {
    hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    visible: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
  },
  expand: {
    hidden: { opacity: 0, scaleX: 0.8, scaleY: 0.95 },
    visible: { opacity: 1, scaleX: 1, scaleY: 1 },
  },
};

const reducedPresets: Record<string, Variants> = {
  default: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
  easing?: "smooth" | "premium" | "dramatic";
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.75,
  variant = "fadeUp",
  margin = "-80px",
  easing = "smooth",
  once = true,
}: Props) {
  const prefersReduced = useReducedMotion();
  const easingMap = { smooth, premium, dramatic };
  const ease = easingMap[easing];
  const transition: Transition = { duration: prefersReduced ? 0.3 : duration, delay: prefersReduced ? 0 : delay, ease };

  const variants = prefersReduced ? reducedPresets.default : presets[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
