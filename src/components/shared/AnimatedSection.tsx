"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const smooth = [0.22, 1, 0.36, 1] as [number, number, number, number];

const presets: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  reveal: {
    hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: keyof typeof presets;
  margin?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  variant = "fadeUp",
  margin = "-80px",
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={presets[variant]}
      transition={{ duration, delay, ease: smooth }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
