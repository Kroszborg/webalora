"use client";

import { motion } from "framer-motion";
import { Users, Shield, Clock, Zap, Scale, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Unmatched Expertise",
    description:
      "Years of experience in delivering tailored VOIP solutions to UK businesses across various industries.",
  },
  {
    icon: Shield,
    title: "Bespoke, End-to-End Services",
    description:
      "From initial design and seamless implementation to ongoing support and regular training, we provide a comprehensive VOIP service.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description:
      "Leveraging the latest VOIP and unified communications technology to ensure your system is secure, reliable, and future-proof.",
  },
  {
    icon: Clock,
    title: "Dedicated 24/7 Support",
    description:
      "Our expert team is always available to help, ensuring your VOIP systems run without interruption, day or night.",
  },
  {
    icon: Scale,
    title: "Scalability & Flexibility",
    description:
      "Our VOIP solutions are designed to grow with your business, offering the agility to adapt to market changes and emerging opportunities.",
  },
  {
    icon: Headphones,
    title: "Superior Call Quality",
    description:
      "Experience crystal-clear audio and reliable connections with our advanced VOIP technology and optimized network infrastructure.",
  },
];

export function WhyChooseUs() {
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
          Why Choose WebAlora for Your VOIP Solutions?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 text-lg text-gray-700"
        >
          At WebAlora, we&apos;re more than just a VOIP service provider—we&apos;re your
          strategic partner in transforming the way you communicate. Let us
          build a cutting-edge VOIP system that not only meets your current
          needs but also sets the foundation for future success, enabling
          seamless collaboration and crystal-clear communication across your
          entire organization.
        </motion.p>
      </div>
    </section>
  );
}
