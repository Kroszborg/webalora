"use client";

import type React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const advantages = [
  {
    icon: Zap,
    title: "Tailored Solutions for Every Business",
    description:
      "We customise our services to meet the unique needs of each client, ensuring optimal performance and growth.",
  },
  {
    icon: CheckCircle,
    title: "Proactive IT Management",
    description:
      "We identify and resolve potential issues before they impact your business, with an average response time of under 5 minutes.",
  },
  {
    icon: Users,
    title: "Transparent, Predictable Pricing",
    description:
      "Our straightforward pricing ensures you know exactly what you're paying for, with no hidden fees or surprises.",
  },
  {
    icon: TrendingUp,
    title: "Scalable IT Solutions",
    description:
      "As your business grows, our flexible solutions evolve to meet your changing needs over time.",
  },
];

export const AdvantagesSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 sm:-top-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-10 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-10 sm:-bottom-40 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-extrabold text-white mb-2"
            >
              The WebAlora Advantage
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white"
            >
              Why Industry Leaders Choose WebAlora
            </motion.h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 sm:p-6 hover:bg-opacity-20  cursor-pointer overflow-hidden"
            >
              {/* Neumorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <advantage.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-blue-100 mb-3 sm:mb-4">
                  {advantage.description}
                </p>
                <motion.div
                  className="mt-auto"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <Button
                    variant="ghost"
                    className="text-sm sm:text-base text-blue-300 hover:text-white hover:bg-blue-500/20 transition-colors duration-300"
                  >
                    Learn More{" "}
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
