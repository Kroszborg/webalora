"use client";

import { motion } from "framer-motion";
import { ClipboardList, Cog, Bell, ShieldAlert, RefreshCw } from "lucide-react";
import Image from "next/image";

export function CybersecurityFramework() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Assessment & Strategy",
      description:
        "Map out assets, threats, and vulnerabilities. Define clear objectives and timelines.",
    },
    {
      icon: Cog,
      title: "Implementation & Integration",
      description:
        "Deploy advanced tools and ensure staff understands best practices and policies.",
    },
    {
      icon: Bell,
      title: "Continuous Monitoring & Alerting",
      description:
        "24/7 SOC with AI-powered monitoring and real-time alerts for critical events.",
    },
    {
      icon: ShieldAlert,
      title: "Incident Response",
      description:
        "Rapid containment, mitigation, and root cause analysis to prevent repeat incidents.",
    },
    {
      icon: RefreshCw,
      title: "Review & Optimization",
      description:
        "Regular penetration tests, vulnerability scans, and updates to maintain a strong posture.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Image
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034"
        alt="Cybersecurity Background"
        layout="fill"
        objectFit="cover"
        className="opacity-10"
        priority
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-16 text-center text-white"
        >
          Our 5-Step Cybersecurity Framework
        </motion.h2>
        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center mb-16 md:mb-24 relative z-10"
            >
              <div
                className={`w-full md:w-1/2 px-4 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                      <step.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-blue-200">{step.description}</p>
                </motion.div>
              </div>
              <div
                className={`hidden md:flex w-1/2 justify-center ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-blue-400 hidden md:block" />
        </div>
      </div>
    </section>
  );
}
