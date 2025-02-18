"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Network, Shield, Zap } from "lucide-react";
import { useCalendly } from "@/hooks/useCalendly";

export function HeroSection() {
  const { openCalendly } = useCalendly(
    "https://calendly.com/behzad-webalora/30min"
  );

  return (
    <section className="relative py-32 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-indigo-900">
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
        alt="Networking Infrastructure Background"
        fill
        className="opacity-50 object-cover"
        sizes="100vw"
        quality={90}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-indigo-900/80 z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Transform Your Business with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Robust Networking Infrastructure
            </span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Secure. Scalable. Future-Ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 group"
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
              <Link href="/contact">Get Your Custom Quote</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Network, text: "Seamless Connectivity" },
            { icon: Shield, text: "Robust Security" },
            { icon: Zap, text: "Unrivalled Performance" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center hover:bg-white/20 transition-colors duration-300"
            >
              <item.icon className="h-12 w-12 text-blue-300 mb-4" />
              <p className="text-white text-lg font-semibold">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
