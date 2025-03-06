"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { useCalendly } from "@/lib/hooks/useCalendly";

export function CTASection() {
  const { openCalendly } = useCalendly(
    "https://calendly.com/behzad-webalora/30min"
  );

  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1563949447312-ef96113e0c5e?auto=format&fit=crop&q=80&w=2070"
        alt="CCTV Security Background"
        fill
        className="absolute inset-0 opacity-20 object-cover"
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900/80 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Get Your Free Security Consultation Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-blue-100 mb-8"
          >
            Your business deserves the best in security. Let our expert team
            design a custom solution that fits your needs perfectly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <a href="#" onClick={openCalendly} className="flex items-center">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-blue-900 hover:bg-white/10 transition-colors duration-300"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-white"
          >
            <Phone className="h-5 w-5" />
            <a href="tel:03300434953" className="text-lg hover:underline">
              0330 043 4953
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
