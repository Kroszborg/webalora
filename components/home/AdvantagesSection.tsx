"use client";

import type React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { CheckCircle, Zap, Users, TrendingUp } from "lucide-react";
import { GradientBlob } from "@/components/ui/gradient-blob";

const advantages = [
  {
    icon: Zap,
    title: "Tailored Solutions for Every Business",
    description:
      "We craft bespoke IT strategies that align perfectly with your unique business needs and goals.",
  },
  {
    icon: CheckCircle,
    title: "Proactive IT Management",
    description:
      "Our team anticipates and resolves potential issues before they impact your operations.",
  },
  {
    icon: Users,
    title: "Transparent, Predictable Pricing",
    description:
      "No hidden fees or surprises. Our straightforward pricing ensures you know exactly what you're paying for.",
  },
  {
    icon: TrendingUp,
    title: "Scalable IT Solutions",
    description:
      "Our flexible solutions grow with your business, adapting to your changing needs over time.",
  },
];

export const AdvantagesSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden">
      <GradientBlob
        colors={["#3b82f6", "#2dd4bf"]}
        className="top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
      />
      <GradientBlob
        colors={["#8b5cf6", "#ec4899"]}
        className="bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2"
      />

      <div className="container relative mx-auto px-4">
        <SectionTitle
          title="Why Industry Leaders Choose WebAlora"
          subtitle="Experience the WebAlora difference"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {advantage.title}
                </h3>
                <p className="text-blue-100">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
