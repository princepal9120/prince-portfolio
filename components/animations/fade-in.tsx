"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  delay?: number;
  once?: boolean;
};

export default function FadeIn({
  children,
  className = "",
  direction = "up",
  duration = 0.5,
  delay = 0,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const animations = {
    initial: {
      opacity: 0,
      ...directionMap[direction],
    },
    animate: {
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : directionMap[direction].x,
      y: isInView ? 0 : directionMap[direction].y,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.45, 0.46, 0.99],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate="animate"
      variants={animations}
      className={className}
    >
      {children}
    </motion.div>
  );
}
