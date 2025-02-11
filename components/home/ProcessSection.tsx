"use client";

import type React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GradientBlob } from "@/components/ui/gradient-blob";
import {
  Clock,
  Lightbulb,
  Rocket,
  Shield,
  BarChart,
  RefreshCw,
} from "lucide-react";

const process = [
  {
    icon: Clock,
    title: "Initial Consultation",
    description:
      "We begin with a thorough assessment of your IT infrastructure to understand your unique needs and challenges.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description:
      "Our experts design a customised IT plan aligned with your business objectives and industry best practices.",
  },
  {
    icon: Rocket,
    title: "Seamless Implementation",
    description:
      "We deploy solutions with minimal disruption, ensuring smooth integration into your existing systems.",
  },
  {
    icon: Shield,
    title: "Ongoing Monitoring",
    description:
      "Our team provides continuous monitoring and 24/7 support to keep your systems running at peak performance.",
  },
  {
    icon: BarChart,
    title: "Performance Analysis",
    description:
      "We regularly analyze system performance and user feedback to identify areas for improvement and optimization.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "We evolve your IT strategy, incorporating new technologies and adapting to changing business needs.",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      <GradientBlob
        colors={["#e0f2fe", "#bfdbfe"]}
        className="top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] opacity-60 -translate-y-1/3"
      />
      <GradientBlob
        colors={["#f1f5f9", "#e2e8f0"]}
        className="bottom-0 left-0 w-[350px] h-[350px] md:w-[700px] md:h-[700px] opacity-50 translate-y-1/3"
      />

      <div className="container relative mx-auto px-4">
        <SectionTitle
          title="Our Proven IT Service Delivery Process"
          subtitle="Streamlined Approach for Exceptional Results"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative rounded-2xl h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50" />
                <div className="relative p-6 md:p-8 h-full">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
