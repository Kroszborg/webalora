"use client";

import type React from "react";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Globe,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Script from "next/script";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function ThreatLandscape() {
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

  const stats = [
    {
      icon: AlertTriangle,
      title: "Ransomware Costs",
      value: "3x",
      description: "Increase for UK businesses in the last 3 years",
    },
    {
      icon: TrendingUp,
      title: "Data Breaches",
      value: "60%",
      description: "Stem from unpatched vulnerabilities or phishing scams",
    },
    {
      icon: ShieldCheck,
      title: "Compliance",
      value: "£20M",
      description: "Maximum GDPR fine for non-compliance",
    },
    {
      icon: Globe,
      title: "Global Impact",
      value: "£5.5T",
      description: "Estimated cybercrime costs by 2025",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "287",
      description: "Average days to identify and contain a breach",
    },
    {
      icon: Users,
      title: "Human Error",
      value: "95%",
      description: "Of cybersecurity breaches caused by human mistakes",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Digital Network Background"
        fill
        quality={100}
        className="opacity-10 object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-blue-900/95" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          The Growing Threat Landscape
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.6)] "
            >
              <stat.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {stat.value}
              </p>
              <p className="text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The cybersecurity landscape is constantly evolving, with new threats
            emerging daily. Stay ahead of the curve with our proactive security
            solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/50 shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
          >
            <a href="#" onClick={openCalendly} className="flex items-center">
              <span>Get Your Threat Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
