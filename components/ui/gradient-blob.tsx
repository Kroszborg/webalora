"use client";

import type React from "react";
import { motion } from "framer-motion";

interface GradientBlobProps {
  colors: string[];
  className?: string;
  size?: number;
}

export const GradientBlob: React.FC<GradientBlobProps> = ({
  colors,
  className,
  size = 300,
}) => {
  return (
    <motion.div
      className={`absolute rounded-full mix-blend-multiply filter blur-xl ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors.join(", ")})`,
        boxShadow: `
          inset 5px 5px 15px rgba(255, 255, 255, 0.2),
          inset -5px -5px 15px rgba(0, 0, 0, 0.1),
          10px 10px 20px rgba(0, 0, 0, 0.1),
          -10px -10px 20px rgba(255, 255, 255, 0.1)
        `,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    />
  );
};
