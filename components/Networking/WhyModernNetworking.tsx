"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Scale } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Zap,
    title: "Boost Productivity and Efficiency",
    description:
      "Research by Cisco demonstrates that optimised networks can enhance productivity by up to 50%. When your team enjoys uninterrupted, high-speed connectivity, collaboration becomes second nature, and your operations run like clockwork.",
  },
  {
    icon: Shield,
    title: "Unrivalled Reliability",
    description:
      "Network downtime can cost businesses an estimated £5,600 per minute. With our proactive monitoring and cutting-edge infrastructure, you can minimise disruptions and ensure your business remains operational 24/7.",
  },
  {
    icon: TrendingUp,
    title: "State-of-the-Art Security",
    description:
      "In an era where cyber threats are becoming increasingly sophisticated, 68% of UK businesses reported security breaches in the past year. Our comprehensive security measures—including advanced firewalls, encrypted VPNs, and intrusion detection systems—keep your sensitive data and critical operations safe from prying eyes.",
  },
  {
    icon: Scale,
    title: "Scalability for Future Growth",
    description:
      "As your business evolves, so too should your network. Our future-proof designs are built to grow with you, accommodating everything from new technologies to expanding geographical footprints, ensuring you're always one step ahead of the competition.",
  },
];

export function WhyModernNetworking() {
  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
        alt="Networking Background"
        fill
        className="absolute inset-0 opacity-10 object-cover"
        sizes="100vw"
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
          Why Your Business Demands a Modern Networking Infrastructure
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
