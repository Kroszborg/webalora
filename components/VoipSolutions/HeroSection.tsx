"use client";

import type React from "react";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Globe, Zap } from "lucide-react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function HeroSection() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/behzad-webalora/30min",
      });
    }
  };

  return (
    <section className="relative pt-16 md:pt-0 min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Image
        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3"
        alt="VOIP Background"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
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
              className="bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <a href="#" onClick={openCalendly}>
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
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
          {[
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
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:bg-white/20 hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
