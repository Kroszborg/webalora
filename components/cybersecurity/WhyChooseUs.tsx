"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  PenToolIcon as Tool,
  Layers,
  BarChart,
  Scale,
  Shield,
} from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our certified professionals (CEH, CISSP, CISM) bring decades of combined experience across finance, healthcare, and government sectors.",
      detail: "24/7 SOC staffed by industry veterans",
    },
    {
      icon: Tool,
      title: "Advanced Tooling",
      description:
        "Cutting-edge AI and machine learning for real-time threat detection and predictive analysis.",
      detail: "Integration with leading SIEM and EDR platforms",
    },
    {
      icon: Layers,
      title: "Holistic Approach",
      description:
        "We combine people, processes, and technology into one cohesive defence strategy tailored to your business.",
      detail: "Regular security posture assessments",
    },
    {
      icon: BarChart,
      title: "Transparent Reporting",
      description:
        "Stay informed with interactive dashboards, detailed monthly audits, and instant alerts for critical events.",
      detail: "Custom KPI tracking and trend analysis",
    },
    {
      icon: Scale,
      title: "Scalable & Customizable",
      description:
        "Our flexible solutions adapt to your needs, whether you're a growing SME or a large enterprise.",
      detail: "Pay only for what you need, scale as you grow",
    },
    {
      icon: Shield,
      title: "Compliance Expertise",
      description:
        "Navigate complex regulatory landscapes with our in-depth knowledge of GDPR, HIPAA, PCI DSS, and more.",
      detail: "Regular compliance audits and gap analysis",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cybersecurity Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-10"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-blue-900/95" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Why Choose <span className="text-blue-400">WebAlora</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.6)] transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <reason.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {reason.title}
                </h3>
              </div>
              <p className="text-blue-100 mb-4">{reason.description}</p>
              <div className="bg-blue-900/50 p-3 rounded-lg">
                <p className="text-sm text-blue-200">
                  <span className="font-semibold">Key Feature:</span>{" "}
                  {reason.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
