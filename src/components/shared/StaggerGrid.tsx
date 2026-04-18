"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const smooth = [0.22, 1, 0.36, 1] as [number, number, number, number];
const premium = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const itemDefault: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: premium },
  },
};

const itemCompact: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: smooth },
  },
};

const itemReduced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
  margin?: string;
  stagger?: number;
  delayChildren?: number;
}

export function StaggerContainer({ children, className = "", margin = "-60px", stagger, delayChildren }: ContainerProps) {
  const prefersReduced = useReducedMotion();

  const variants = stagger || delayChildren
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReduced ? 0 : (stagger ?? 0.09),
            delayChildren: prefersReduced ? 0 : (delayChildren ?? 0.15),
          },
        },
      }
    : container;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ItemProps {
  children: ReactNode;
  className?: string;
  compact?: boolean;
}

export function StaggerItem({ children, className = "", compact = false }: ItemProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? itemReduced : compact ? itemCompact : itemDefault;

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
