"use client";

import type React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { CheckCircle } from "lucide-react";
import { GradientBlob } from "@/components/ui/gradient-blob";

const process = [
  {
    title: "Initial Consultation",
    description:
      "We begin with a thorough assessment of your IT infrastructure to understand your unique needs.",
  },
  {
    title: "Tailored Strategy Development",
    description:
      "Our experts design a customised IT plan aligned with your business objectives.",
  },
  {
    title: "Seamless Implementation",
    description:
      "We deploy solutions with minimal disruption, ensuring smooth integration into your existing systems.",
  },
  {
    title: "Ongoing Monitoring & Support",
    description:
      "Our team provides continuous monitoring and 24/7 support to keep your systems running at peak performance.",
  },
  {
    title: "Regular Reviews & Optimisation",
    description:
      "We regularly evaluate and refine your IT strategy to adapt to evolving business needs.",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <GradientBlob
        colors={["#60a5fa", "#5eead4"]}
        className="top-0 right-0 w-96 h-96 translate-x-1/2 -translate-y-1/2"
      />
      <GradientBlob
        colors={["#a78bfa", "#f472b6"]}
        className="bottom-0 left-0 w-96 h-96 -translate-x-1/2 translate-y-1/2"
      />

      <div className="container relative mx-auto px-4">
        <SectionTitle
          title="How We Deliver Exceptional IT Services"
          subtitle="Our proven process ensures seamless integration and optimal results"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-xl" />
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
