"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const smooth = [0.22, 1, 0.36, 1] as [number, number, number, number];

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
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: smooth },
  },
};

const itemCompact: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: smooth },
  },
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
  margin?: string;
  stagger?: number;
}

export function StaggerContainer({ children, className = "", margin = "-60px", stagger }: ContainerProps) {
  const variants = stagger
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: 0.15,
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
  return (
    <motion.div variants={compact ? itemCompact : itemDefault} className={className}>
      {children}
    </motion.div>
  );
}
