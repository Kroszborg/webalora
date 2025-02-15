"use client";

import { motion } from "framer-motion";
import { Clock, Database, ShieldOff, Scale } from "lucide-react";
import Image from "next/image";

const costs = [
  {
    icon: Clock,
    title: "Extended Downtime",
    description:
      "Every minute your systems are down translates directly into lost revenue and productivity.",
  },
  {
    icon: Database,
    title: "Data Loss",
    description:
      "The loss of critical data can compromise customer trust, result in legal issues, and derail years of hard work.",
  },
  {
    icon: ShieldOff,
    title: "Reputational Damage",
    description:
      "Failing to recover swiftly from a disruption can tarnish your brand, leading to long-term customer attrition.",
  },
  {
    icon: Scale,
    title: "Compliance Risks",
    description:
      "Non-adherence to data protection regulations can result in hefty fines and legal repercussions.",
  },
];

export function HiddenCosts() {
  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=2074"
        alt="Hidden Costs Background"
        fill
        className="absolute inset-0 opacity-10 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            The Hidden Costs of Not Being Prepared
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choosing to forgo a robust backup and disaster recovery strategy
            isn&apos;t just a cost-saving measure—it&apos;s a risk that can have dire
            consequences:
          </p>
        </motion.div>

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
