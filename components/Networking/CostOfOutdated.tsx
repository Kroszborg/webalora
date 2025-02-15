"use client";

import { motion } from "framer-motion";
import { Clock, ShieldOff, TrendingDown, PoundSterling } from "lucide-react";
import Image from "next/image";

const costs = [
  {
    icon: Clock,
    title: "Frequent and Costly Downtime",
    description:
      "Every minute your network is down translates to lost revenue and diminished customer trust.",
  },
  {
    icon: ShieldOff,
    title: "Increased Vulnerability to Cyber Threats",
    description:
      "Outdated systems are prime targets for cyber attacks, leaving you exposed to data breaches and compliance issues.",
  },
  {
    icon: TrendingDown,
    title: "Operational Inefficiencies",
    description:
      "An underperforming network stifles innovation, slows productivity, and limits your business's potential for growth.",
  },
  {
    icon: PoundSterling,
    title: "Escalating Maintenance Costs",
    description:
      "Continually patching and maintaining legacy systems can drain resources that would be better invested in strategic initiatives.",
  },
];

export function CostOfOutdated() {
  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=2074"
        alt="Cost of Outdated Networks Background"
        fill
        className="absolute inset-0 opacity-10 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
        >
          The True Cost of Outdated Networks
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
              <p className="text-gray-600">{cost.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
