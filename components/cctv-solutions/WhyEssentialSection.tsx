"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  Smartphone,
  BrainCircuit,
  Scale,
  Users,
  FileSearch,
} from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: ShieldAlert,
    title: "Crime Prevention & Deterrence",
    description:
      "CCTV can slash crime rates by deterring potential offenders. Protect your business and your bottom line.",
  },
  {
    icon: Smartphone,
    title: "Live Remote Access",
    description:
      "Monitor your property anytime, anywhere from your smartphone, tablet, or PC.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Smart Security",
    description:
      "Benefit from advanced features like facial recognition and intelligent motion tracking for rapid threat detection.",
  },
  {
    icon: Scale,
    title: "Insurance & Legal Protection",
    description:
      "High-quality footage not only supports investigations and insurance claims but may also reduce your premiums.",
  },
  {
    icon: Users,
    title: "Enhanced Workplace Safety & Productivity",
    description:
      "A secure environment improves employee morale and overall productivity.",
  },
  {
    icon: FileSearch,
    title: "Evidence Collection & Investigation",
    description:
      "Capture crucial evidence for incident investigations, helping to resolve disputes and identify responsible parties.",
  },
];

export function WhyEssentialSection() {
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
          Why CCTV is Essential for Your Business
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-100">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 ml-4">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Did You Know?
              </h3>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-red-500 rounded-full w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    UK businesses lose over{" "}
                    <span className="font-semibold">£11 billion per year</span>{" "}
                    to crime.
                  </p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    The average theft incident costs around{" "}
                    <span className="font-semibold">£22,000</span>.
                  </p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start"
                >
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-green-500 rounded-full w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    Up to{" "}
                    <span className="font-semibold">67% of burglaries</span>{" "}
                    could be prevented with a professional CCTV setup.
                  </p>
                </motion.li>
              </ul>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-lg font-semibold text-blue-700"
              >
                Act now—protect your business before it&apos;s too late!
              </motion.p>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070"
                alt="CCTV security monitoring system"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
