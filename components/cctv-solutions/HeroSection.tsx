"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Camera, Shield, Bell } from "lucide-react";
import { useCalendly } from "@/lib/hooks/useCalendly";

export function HeroSection() {
  const { openCalendly } = useCalendly(
    "https://calendly.com/behzad-webalora/30min"
  );

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
        src="https://images.unsplash.com/photo-1625766763788-95dcce9b46b9?auto=format&fit=crop&q=80&w=2070"
        alt="Security CCTV Camera"
        fill
        className="opacity-30 object-cover"
        sizes="100vw"
        quality={90}
        priority
      />

      {/* Enhanced overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/80 to-indigo-900/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Content */}
      <div className="container relative mx-auto px-4 z-10 mb-8 md:mb-0 py-8 sm:py-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Security Badge */}
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
                  24/7 Smart CCTV Protection
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
            Smart CCTV Solutions
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Total Security, 24/7
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            From installation to monitoring, we create intelligent security ecosystems that deter criminals, protect your assets, and give you total control.
          </motion.p>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { value: "51%", label: "Less Crime with CCTV Systems" },
              { value: "£22k", label: "Average Cost of Theft Incident" },
              { value: "67%", label: "Burglaries Prevented with Professional CCTV" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-colors duration-300 hover:bg-white/10"
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
              asChild
              size="lg"
              className="group relative overflow-hidden bg-white text-blue-900 hover:bg-blue-50 h-14 px-6 text-lg font-semibold"
            >
              <a href="#" onClick={openCalendly}>
                <Camera className="mr-2 h-5 w-5" />
                <span>Book a Free Security Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group relative overflow-hidden text-blue-900 border-2 border-white hover:border-blue-200 h-14 px-6 text-lg font-semibold backdrop-blur-sm"
            >
              <a
                href="#pricing-section"
                onClick={scrollToPricing}
                className="flex items-center justify-center"
              >
                <Bell className="mr-2 h-5 w-5" />
                <span>View CCTV Packages</span>
              </a>
            </Button>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pb-8 md:pb-0">
            {[
              {
                icon: Camera,
                title: "Advanced CCTV Systems",
                description: "HD, 4K & AI-powered cameras with crystal-clear footage",
              },
              {
                icon: Bell,
                title: "24/7 Monitoring",
                description: "UK-based team providing real-time surveillance",
              },
              {
                icon: Shield,
                title: "Comprehensive Security",
                description: "Integrates with alarms, access control, and more",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10"
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
    </section>
  );
}