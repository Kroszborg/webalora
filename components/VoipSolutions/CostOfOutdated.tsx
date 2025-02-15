"use client";

import { motion } from "framer-motion";
import { PoundSterling, Lock, Clock, TrendingDown } from "lucide-react";

const costs = [
  {
    icon: PoundSterling,
    title: "Escalating Operational Costs",
    description:
      "Outdated telephony systems often incur high call charges and maintenance fees, diverting valuable resources from strategic initiatives.",
  },
  {
    icon: Lock,
    title: "Limited Flexibility and Scalability",
    description:
      "Rigid systems hinder your ability to support remote working, integrate new technologies, or scale operations as your business grows.",
  },
  {
    icon: Clock,
    title: "Compromised Communication Quality",
    description:
      "Poor call quality, dropped calls, and inadequate support features can lead to miscommunication, missed opportunities, and decreased customer satisfaction.",
  },
  {
    icon: TrendingDown,
    title: "Competitive Disadvantage",
    description:
      "In an increasingly digital world, an outdated communication infrastructure can slow decision-making and inhibit innovation, putting you behind your competitors.",
  },
];

export function CostOfOutdated() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
        >
          The True Cost of Sticking with Outdated Communication Systems
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {costs.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <cost.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {cost.title}
                </h3>
              </div>
              <p className="text-gray-700">{cost.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
