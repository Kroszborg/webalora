"use client";

import { motion } from "framer-motion";
import { Users, Shield, Clock } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Users,
    title: "Proven Expertise",
    description:
      "With years of experience serving UK businesses, we understand your unique challenges and deliver solutions that work.",
  },
  {
    icon: Shield,
    title: "Bespoke Solutions",
    description:
      "Our networking designs are tailored to your specific needs and budget, ensuring a perfect fit for your business.",
  },
  {
    icon: Clock,
    title: "Unrivalled Support",
    description:
      "Our dedicated team is available around the clock, providing continuous support so you can focus on what matters most—growing your business.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2070"
        alt="Why Choose Us Background"
        fill
        className="absolute inset-0 opacity-10 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-lg text-gray-700"
        >
          At WebAlora, we&apos;re not just a service provider; we&apos;re your strategic
          partner in success. Let us help you build a network that not only
          meets today&apos;s demands but also paves the way for tomorrow&apos;s
          opportunities.
        </motion.p>
      </div>
    </section>
  );
}
