"use client";

import type React from "react";
import { useEffect } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FloatingElementProps {
  children: React.ReactNode;
  yOffset?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  yOffset = 10,
  duration = 4,
  delay = 0,
  className = "",
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const y = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (inView && !prefersReducedMotion) {
      y.set(Math.sin(Date.now() / 1000) * yOffset);
    }
  }, [inView, y, yOffset, prefersReducedMotion]);

  const animationProps = prefersReducedMotion
    ? {}
    : {
        y,
        transition: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse" as const,
          duration,
          delay,
          ease: "easeInOut",
        },
      };

  return (
    <motion.div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{
        transform: "translate3d(0, 0, 0)",
      }}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};
