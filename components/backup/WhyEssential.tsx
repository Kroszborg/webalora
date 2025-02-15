"use client";

import { motion } from "framer-motion";
import { Clock, Shield, FileCheck, Users } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Clock,
    title: "Minimise Downtime and Revenue Loss",
    description:
      "Studies reveal that downtime can cost businesses thousands of pounds per minute. Our proactive recovery strategies drastically reduce downtime and maintain operational flow.",
  },
  {
    icon: Shield,
    title: "Defend Against Cyber Threats",
    description:
      "With cyber attacks and ransomware on the rise, 68% of UK businesses have experienced security breaches in the past year. Our robust systems ensure your data is securely backed up and can be quickly restored after an attack.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance and Peace of Mind",
    description:
      "In an era of strict UK data protection regulations, non-compliance can lead to significant fines. Our solutions are designed to help you meet GDPR and other compliance standards, safeguarding both your data and your reputation.",
  },
  {
    icon: Users,
    title: "Maintain Customer Trust",
    description:
      "A reliable disaster recovery plan demonstrates your commitment to service continuity. It reassures your clients that you are prepared for any eventuality, bolstering their confidence in your business.",
  },
];

export function WhyEssential() {
  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2070"
        alt="Data Protection"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 opacity-10"
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
          Why Backup & Disaster Recovery Are Essential for UK Businesses
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl "
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <reason.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
