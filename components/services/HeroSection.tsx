"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Shield, Lock, Server, Cloud } from "lucide-react";
import Script from "next/script";

const stats = [
  { value: "99.9%", label: "Guaranteed Uptime for Your Systems" },
  {
    value: "50%",
    label: "Average Reduction in IT Costs with Managed Services",
  },
  { value: "24/7", label: "Enterprise Support Coverage" },
  { value: "15min", label: "Average Response Time" },
];

export function HeroSection() {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 pt-24 md:pt-28 pb-16 md:pb-24">
      {/* Background Image with enhanced overlay */}
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
        alt="Digital Globe"
        fill
        className="opacity-30 object-cover"
        priority
      />

      {/* Enhanced overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/80 to-indigo-900/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Content */}
      <div className="container relative mx-auto px-4 z-10 mb-8 md:mb-0 py-8 sm:py-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enterprise Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-200">
                  Enterprise-Grade IT Management
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Comprehensive Managed
            <br className="hidden sm:inline" />
            IT Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            From infrastructure management to cybersecurity, we deliver
            enterprise-class IT solutions that drive business growth and
            innovation.
          </motion.p>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-white text-blue-900 hover:bg-blue-50 h-14 px-6 text-lg font-semibold min-w-[280px]"
              onClick={() => {
                if (typeof window !== "undefined" && (window as { Calendly?: { initPopupWidget: (options: { url: string }) => void } }).Calendly) {
                  (window as { Calendly: { initPopupWidget: (options: { url: string }) => void } }).Calendly.initPopupWidget({
                    url: "https://calendly.com/behzad-webalora/30min",
                  });
                }
              }}
            >
              <Lock className="mr-2 h-5 w-5" />
              <span>Get Your Free Security Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group relative overflow-hidden text-blue-900 border-2 border-white hover:border-blue-200 h-14 px-6 text-lg font-semibold backdrop-blur-sm min-w-[280px]"
            >
              <a
                href="#pricing-section"
                onClick={scrollToPricing}
                className="flex items-center justify-center"
              >
                <Server className="mr-2 h-5 w-5" />
                <span>View Enterprise Solutions</span>
              </a>
            </Button>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pb-8 md:pb-0">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Advanced threat protection and 24/7 monitoring",
              },
              {
                icon: Server,
                title: "Infrastructure Management",
                description: "Proactive maintenance and optimization",
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description: "Secure and scalable cloud architecture",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
