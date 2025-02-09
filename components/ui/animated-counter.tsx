"use client";

import type React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = "",
  label,
  description,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 backdrop-blur-lg bg-white/5 rounded-xl border border-white/10"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {value}
          {suffix}
        </motion.span>
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-2">{label}</h3>
      <p className="text-blue-200 text-sm">{description}</p>
    </motion.div>
  );
};
