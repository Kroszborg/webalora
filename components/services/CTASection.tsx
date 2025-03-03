"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useCalendly } from "@/lib/hooks/useCalendly";

export function CTASection() {
  const { openCalendly } = useCalendly(
    "https://calendly.com/behzad-webalora/30min"
  );

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 4,
          }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Technology should power your success—not be an obstacle. Partner
            with WebAlora and enjoy reduced downtime, fortified security,
            predictable budgets, and a strategic partnership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <a href="#" onClick={openCalendly} className="flex items-center">
                Book a Free IT Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-blue-900 hover:bg-white/10 transition-colors duration-300 group"
            >
              <Link href="/download-checklist" className="flex items-center">
                Download IT Best Practices Checklist
                <Download className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
