"use client";

import { motion } from "framer-motion";
import { Shield, Clock, PoundSterling, Cloud, Users, Zap } from "lucide-react";

const features = [
  {
    title: "Proactive IT Management & 24/7 Monitoring",
    description: "Real-time alerts, swift resolutions, and fewer disruptions.",
    icon: Clock,
  },
  {
    title: "Robust Cybersecurity & Compliance",
    description:
      "Next-gen threat defense, compliance expertise, and disaster recovery.",
    icon: Shield,
  },
  {
    title: "Predictable, Cost-Effective Solutions",
    description: "Transparent costs, scalable plans, and reduced overheads.",
    icon: PoundSterling,
  },
  {
    title: "Future-Focused Expertise",
    description:
      "Cloud migration, VoIP solutions, and strategic IT consultancy.",
    icon: Cloud,
  },
  {
    title: "Dedicated UK-Based Support Team",
    description:
      "Local experts who understand your market and respond quickly.",
    icon: Users,
  },
  {
    title: "Continuous Innovation",
    description: "Stay ahead with the latest technologies and best practices.",
    icon: Zap,
  },
];

export function WhyPartnerSection() {
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
          Why Partner with WebAlora?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 shadow-inner">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
