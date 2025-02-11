"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "<10min", label: "Support Response Time" },
  { value: "500+", label: "Businesses Supported" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "75%", label: "Reduction in Downtime" },
];

export function OurImpact() {
  return (
    <section className="py-16 md:py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Impact in Numbers
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-blue-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2 text-blue-300">
                {stat.value}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
