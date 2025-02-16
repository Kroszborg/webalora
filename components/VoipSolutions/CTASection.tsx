"use client";

import type React from "react";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function CTASection() {
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
    <section className="py-20 relative overflow-hidden">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Image
        src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
        alt="VOIP Background"
        fill
        className="object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Revolutionise Your Business Communications?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-blue-100 mb-8"
          >
            Don&apos;t let outdated telephony hinder your business growth. With
            WebAlora&apos;s VOIP solutions, you gain a modern, flexible, and
            cost-effective communication platform that scales with your business
            needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              <a href="#" onClick={openCalendly} className="flex items-center">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
