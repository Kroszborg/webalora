"use client";

import type React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const AboutSection: React.FC = () => {
  const features = [
    "Tailored IT Solutions",
    "24/7 Expert Support",
    "Cutting-edge Technology",
    "Scalable Infrastructure",
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <GradientBlob
        colors={["#60a5fa", "#5eead4"]}
        className="top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 translate-x-1/2 -translate-y-1/2 opacity-50"
      />
      <GradientBlob
        colors={["#a78bfa", "#f472b6"]}
        className="bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 -translate-x-1/2 translate-y-1/2 opacity-50"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Your Strategic IT Partner for Growth and Innovation"
          subtitle="Empowering businesses with cutting-edge technology solutions"
        />
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              About WebAlora
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              WebAlora is a leading IT service provider, delivering tailored,
              high-performance solutions to businesses across the UK. Our
              commitment to excellence and innovation drives our clients
              success in an ever-evolving digital landscape.
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-sm sm:text-base text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="relative h-[300px] sm:h-[400px] w-full order-1 md:order-2 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="Our team collaborating"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
