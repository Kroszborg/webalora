"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const trustPoints = [
  "100% UK-Based Team: Local experts who respond quickly and understand your market.",
  "98%+ Client Retention: We build long-term partnerships rooted in results and transparency.",
  "Security-Focused: Layered strategies that block 99.9% of cyber threats.",
  "Measured Results: An average 65% cut in downtime and improved cost efficiency.",
  "Straightforward Communication: No tech jargon, no hidden fees—just honest expertise.",
  "Continuous Innovation: We stay ahead of the curve with the latest IT advancements.",
];

export function TrustSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Why UK Businesses Trust WebAlora
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
