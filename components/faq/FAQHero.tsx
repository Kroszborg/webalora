"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import Image from "next/image";

export function FAQHero() {

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070"
        alt="Support and FAQs"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <HelpCircle className="h-10 w-10 text-blue-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Questions
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Find answers to common questions about our IT services and solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
