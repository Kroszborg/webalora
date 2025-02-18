"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

declare global {
  interface Window {
    Calendly: {
      initBadgeWidget: (config: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding?: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget?: () => void;
      destroyBadgeWidget?: () => void;
    };
  }
}

export function CTASection() {
  const calendlyInitialized = useRef(false);

  useEffect(() => {
    // Only add the CSS if it doesn't already exist
    const existingLink = document.querySelector('link[href*="calendly.com"]');
    if (!existingLink) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    return () => {
      // Clean up Calendly widget elements if they exist
      const elementsToRemove = [
        ".calendly-overlay",
        ".calendly-inline-widget",
        ".calendly-popup-content",
        ".calendly-popup-close",
      ];

      elementsToRemove.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => element.remove());
      });

      // Close popup if it's open
      if (window.Calendly?.closePopupWidget) {
        window.Calendly.closePopupWidget();
      }

      // Clean up iframes
      const iframes = document.querySelectorAll('iframe[src*="calendly.com"]');
      iframes.forEach((iframe) => iframe.remove());
    };
  }, []);

  const openCalendly = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Ensure we don't have any existing popups
    const existingPopup = document.querySelector(".calendly-overlay");
    if (existingPopup) {
      existingPopup.remove();
    }

    // Initialize popup
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/behzad-webalora/30min",
      });
      calendlyInitialized.current = true;
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* We can share the same Calendly script since it's already loaded in CalendlyWidget */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt="Cloud Technology Background"
          fill
          className="opacity-50 object-cover"
          sizes="100vw"
        />
      </div>
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
            Ready to Transform Your IT Infrastructure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-blue-100 mb-8"
          >
            Don&apos;t let outdated systems hold your business back. Embrace the
            future with a modern, secure, and agile cloud environment designed
            specifically for UK businesses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl"
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
