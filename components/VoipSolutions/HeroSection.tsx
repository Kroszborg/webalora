"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Globe, Zap } from "lucide-react";
import { useCalendly } from "@/lib/hooks/useCalendly";

export function HeroSection() {
  const { openCalendly } = useCalendly(
    "https://calendly.com/behzad-webalora/30min"
  );

  const features = [
    {
      icon: Phone,
      text: "Crystal-Clear Audio",
      description: "Experience unparalleled call quality",
    },
    {
      icon: Globe,
      text: "Global Connectivity",
      description: "Connect with teams worldwide seamlessly",
    },
    {
      icon: Zap,
      text: "Enhanced Productivity",
      description: "Streamline your communication workflow",
    },
  ];

  return (
    <section className="relative pt-16 md:pt-0 min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3"
        alt="VOIP Background"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        quality={90}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10 flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl mt-8 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Transform Your Business Communications with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              WebAlora&apos;s VOIP Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto px-4"
          >
            Clear, Reliable, and Cost-Effective Communication for Modern UK
            Businesses
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg group"
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
              className="border-white text-blue-900 hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/contact">Get Your Custom Quote</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl mx-auto mt-8 md:mt-12 px-4"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:bg-white/20 hover:shadow-lg"
            >
              <item.icon className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mb-3 md:mb-4" />
              <p className="text-white text-base md:text-lg font-semibold mb-2">
                {item.text}
              </p>
              <p className="text-blue-100 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
