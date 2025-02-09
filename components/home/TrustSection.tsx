"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GradientBlob } from "@/components/ui/gradient-blob";

const clientLogos = [
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80",
    alt: "Client Logo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1599305446868-59567a88a8d5?w=400&q=80",
    alt: "Client Logo 2",
  },
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80",
    alt: "Client Logo 3",
  },
  {
    src: "https://images.unsplash.com/photo-1599305446868-59567a88a8d5?w=400&q=80",
    alt: "Client Logo 4",
  },
];

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Businesses Served",
    description: "Trusted by companies across industries",
  },
  {
    value: 1000,
    suffix: "s",
    label: "Devices Managed",
    description: "Seamless device management & support",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Retention",
    description: "Long-term partnerships built on trust",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Expert Support",
    description: "Always available when you need us",
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900">
      <GradientBlob
        colors={["#60a5fa", "#5eead4"]}
        className="top-0 right-0 translate-x-1/2 -translate-y-1/2"
        size={400}
      />
      <GradientBlob
        colors={["#a78bfa", "#f472b6"]}
        className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
        size={400}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=1920&q=80"
          alt="Background Pattern"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="filter blur-sm"
        />
      </div>

      <div className="container relative mx-auto px-4">
        <SectionTitle
          title="The IT Partner Trusted by Industry Leaders"
          subtitle="Empowering businesses with reliable and innovative IT solutions"
          className="text-white"
        />

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                fill
                sizes="160px"
                style={{ objectFit: "contain" }}
                className="backdrop-blur-lg bg-white/10 rounded-lg p-4"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-lg text-blue-100 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our extensive portfolio includes businesses across multiple sectors,
          all relying on our expertise to maintain seamless operations and
          robust security.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
