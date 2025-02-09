"use client";
import { motion } from "framer-motion";

export const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -inset-[100%] opacity-50"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, #3B82F6 0deg, #1E40AF 120deg, #312E81 240deg, #3B82F6 360deg)",
        }}
      />
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-3xl" />
    </div>
  );
};
