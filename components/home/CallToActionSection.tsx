"use client";

import type React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { ArrowRight, Sparkles } from "lucide-react";
import { useCalendly } from "@/lib/hooks/useCalendly";

export const CallToActionSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const { openCalendly } = useCalendly(
    "https://calendly.com/behzad-webalora/30min"
  );

  const handleHover = () => {
    setIsHovered(true);
    controls.start({
      scale: 1.05,
      transition: { duration: 0.3 },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      scale: 1,
      transition: { duration: 0.3 },
    });
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-indigo-800 overflow-hidden"
    >
      <GradientBlob
        colors={["#3b82f6", "#2dd4bf"]}
        className="top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 -translate-x-1/2 -translate-y-1/2 animate-pulse"
      />
      <GradientBlob
        colors={["#8b5cf6", "#ec4899"]}
        className="bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 translate-x-1/2 translate-y-1/2 animate-pulse"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Empower Your Business with WebAlora&apos;s Expertise
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Join the growing number of businesses that trust WebAlora for their
            IT needs. Let&apos;s explore how we can help you achieve your
            business goals through strategic, reliable IT solutions.
          </motion.p>
          <motion.div
            animate={controls}
            onHoverStart={handleHover}
            onHoverEnd={handleHoverEnd}
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base transition-all duration-300"
            >
              <a
                href="#"
                onClick={openCalendly}
                className="flex items-center justify-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 group"
              >
                <span>Book a Free Consultation</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="transition-transform group-hover:translate-x-1"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </a>
            </Button>
          </motion.div>
          <motion.div
            className="mt-6 sm:mt-8 text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>No commitment required</span>
              <span className="hidden sm:inline">•</span>
              <span>30-minute session</span>
              <span className="hidden sm:inline">•</span>
              <span>Tailored advice</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
