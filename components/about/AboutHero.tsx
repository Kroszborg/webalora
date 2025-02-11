"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3"
        alt="Team collaboration"
        fill
        style={{ objectFit: "cover" }}
        className="brightness-50"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-950/70" />
      <div className="container relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to <span className="text-blue-400">WebAlora</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Strategic Technology Partner for Operational Excellence
        </motion.p>
      </div>
    </section>
  );
}
