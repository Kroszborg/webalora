"use client";

import type React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GradientBlob } from "@/components/ui/gradient-blob";

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <GradientBlob
        colors={["#60a5fa", "#5eead4"]}
        className="top-0 right-0 w-96 h-96 translate-x-1/2 -translate-y-1/2"
      />
      <GradientBlob
        colors={["#a78bfa", "#f472b6"]}
        className="bottom-0 left-0 w-96 h-96 -translate-x-1/2 translate-y-1/2"
      />

      <div className="container relative mx-auto px-4">
        <SectionTitle
          title="Your Strategic IT Partner for Growth and Innovation"
          subtitle="Empowering businesses with cutting-edge technology solutions"
        />
        <motion.p
          className="text-center text-lg max-w-3xl mx-auto text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          WebAlora is a leading IT service provider, delivering tailored,
          high-performance solutions to businesses across the UK. Our commitment
          to excellence and innovation drives our clients success in an
          ever-evolving digital landscape. With a team of certified experts and
          a passion for technology, we&apos;re here to transform your IT
          infrastructure and propel your business forward.
        </motion.p>
      </div>
    </section>
  );
};
