"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cloud, Lock, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-32 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-indigo-900">
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
        alt="Cloud Technology Background"
        fill
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-50"
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
            Accelerate Your Business with{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              WebAlora&apos;s Cloud Solutions
            </span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Modern, Agile, and Secure Cloud Services Tailored for UK Businesses
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              <Link href="#contact">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-blue-900 hover:bg-white/10"
            >
              <Link href="#quote">Get Your Custom Quote</Link>
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
            { icon: Cloud, text: "Seamless Migrations" },
            { icon: Lock, text: "Enhanced Security" },
            { icon: Zap, text: "Improved Performance" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center"
            >
              <item.icon className="h-12 w-12 text-blue-300 mb-4" />
              <p className="text-white text-lg font-semibold">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
