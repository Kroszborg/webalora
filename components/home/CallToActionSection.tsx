"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";

export const CallToActionSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-blue-600 to-indigo-800 overflow-hidden"
    >
      <GradientBlob
        colors={["#3b82f6", "#2dd4bf"]}
        className="top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
      />
      <GradientBlob
        colors={["#8b5cf6", "#ec4899"]}
        className="bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2"
      />

      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Empower Your Business with WebAlora&apos;s Expertise
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join the growing number of businesses that trust WebAlora for their
            IT needs. Let&apos;s explore how we can help you achieve your
            business goals through strategic, reliable IT solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
