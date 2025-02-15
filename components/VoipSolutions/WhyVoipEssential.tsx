"use client";

import { motion } from "framer-motion";
import {
  PoundSterling,
  Smartphone,
  PhoneCall,
  Headphones,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    icon: PoundSterling,
    title: "Substantial Cost Savings",
    description:
      "Slash your telephone bills with reduced domestic and international call charges. Leverage your existing broadband infrastructure, eliminating the need for costly traditional phone lines.",
  },
  {
    icon: Smartphone,
    title: "Unparalleled Flexibility and Mobility",
    description:
      "Connect from anywhere—whether you're in the office, working from home, or travelling. Our VOIP solutions empower your team with full mobility, ensuring that important calls and collaborations are never missed.",
  },
  {
    icon: PhoneCall,
    title: "Crystal-Clear Audio & Video Quality",
    description:
      "Experience superior call quality with advanced digital compression, noise reduction, and Quality of Service (QoS) features that prioritise voice traffic, even during peak usage times.",
  },
  {
    icon: Headphones,
    title: "Advanced Unified Communications",
    description:
      "Seamlessly integrate voice, video conferencing, instant messaging, and collaboration tools on a single platform. This not only streamlines internal communications but also enhances customer interactions.",
  },
  {
    icon: Zap,
    title: "Enhanced Call Management",
    description:
      "Benefit from sophisticated call routing, queuing, call recording, auto-attendant services, and voicemail-to-email functionality, ensuring every call is managed efficiently.",
  },
  {
    icon: ArrowUpRight,
    title: "Future-Proof Scalability",
    description:
      "As your business grows, your communication system should grow with you. Easily add or remove lines, incorporate new features, and integrate with your existing CRM and productivity tools without major infrastructure changes.",
  },
];

export function WhyVoipEssential() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
        >
          Why VOIP Is Essential for Your Business
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <reason.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-700">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
