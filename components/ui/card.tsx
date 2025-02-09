"use client";

import type React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
