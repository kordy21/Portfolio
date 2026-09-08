"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number = 0.1) => ({
    transition: {
      staggerChildren: stagger,
      delayChildren: 0,
    },
  }),
};

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: StaggerContainerProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const itemVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const itemVariantsRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function StaggerItem({ children, className, direction = "up" }: StaggerItemProps) {
  const shouldReduce = useReducedMotion();

  const v =
    direction === "left"
      ? itemVariantsLeft
      : direction === "right"
        ? itemVariantsRight
        : itemVariants;

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={v}>
      {children}
    </motion.div>
  );
}
