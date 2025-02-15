"use client";

import { motion } from "framer-motion";
import Image from "next/legacy/image";

export function CaseStudiesHero() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
        alt="Collaborative team"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-indigo-900/80 to-purple-900/80" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Our Success Stories
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Discover how WebAlora has transformed businesses across the UK with
            cutting-edge IT solutions and unparalleled expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
