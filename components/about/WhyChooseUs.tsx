"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Industry-Spanning Expertise",
  "Customised Solutions",
  "Proactive IT Management",
  "Trusted Partnership",
  "Scalable Solutions",
  "Dedicated Account Management",
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Choose WebAlora?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
