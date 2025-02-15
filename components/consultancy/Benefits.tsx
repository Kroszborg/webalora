"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Increase Operational Efficiency",
  "Reduce IT Costs by up to 30%",
  "Enhanced Cybersecurity & Risk Management",
  "Future-Proof Your IT Infrastructure",
  "Leverage Cutting-Edge Technology",
  "Expert Guidance from Industry Specialists",
];

export function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-900"
        >
          Benefits of WebAlora&apos;s IT Consultancy & Strategy Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start"
            >
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <p className="text-gray-600 text-lg">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
