"use client";

import { motion } from "framer-motion";
import { Users, Shield, Clock, Zap } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Users,
    title: "Expertise You Can Trust",
    description:
      "With years of experience supporting UK businesses, we understand the unique challenges you face.",
  },
  {
    icon: Shield,
    title: "Bespoke, End-to-End Solutions",
    description:
      "Our services are meticulously tailored to your specific needs, ensuring maximum protection and rapid recovery.",
  },
  {
    icon: Clock,
    title: "Unrivalled, 24/7 Support",
    description:
      "Our dedicated team is on call around the clock, providing proactive monitoring, regular testing, and immediate assistance whenever needed.",
  },
  {
    icon: Zap,
    title: "Future-Proofing Your Business",
    description:
      "We utilise the latest technologies and best practices to ensure your data protection strategy evolves with your business, keeping you one step ahead.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=2070"
        alt="Technology Background"
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
          Why Choose WebAlora?
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
