"use client";

import type React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GradientBlob } from "@/components/ui/gradient-blob";

const process = [
  {
    title: "Initial Consultation:",
    description:
      "We begin with a thorough assessment of your IT infrastructure to understand your unique needs.",
  },
  {
    title: "Tailored Strategy Development:",
    description:
      "Our experts design a customised IT plan aligned with your business objectives.",
  },
  {
    title: "Seamless Implementation:",
    description:
      "We deploy solutions with minimal disruption, ensuring smooth integration into your existing systems.",
  },
  {
    title: "Ongoing Monitoring & Support:",
    description:
      "Our team provides continuous monitoring and 24/7 support to keep your systems running at peak performance.",
  },
  {
    title: "Regular Reviews & Optimisation:",
    description:
      "We regularly evaluate and refine your IT strategy to adapt to evolving business needs.",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      {/* Enhanced gradient blobs with more sophisticated colors */}
      <GradientBlob
        colors={["#e0f2fe", "#bfdbfe"]}
        className="top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] opacity-60 -translate-y-1/3"
      />
      <GradientBlob
        colors={["#f1f5f9", "#e2e8f0"]}
        className="bottom-0 left-0 w-[350px] h-[350px] md:w-[700px] md:h-[700px] opacity-50 translate-y-1/3"
      />
      <GradientBlob
        colors={["#dbeafe", "#93c5fd"]}
        className="top-1/2 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] opacity-30 -translate-x-1/2"
      />
      <GradientBlob
        colors={["#ede9fe", "#c4b5fd"]}
        className="bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-20 translate-x-1/3"
      />

      <div className="container relative mx-auto px-4">
        <SectionTitle
          title="How We Deliver Exceptional IT Services"
          subtitle="Our Proven Process"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className={`
                ${index === 0 ? "md:col-span-2" : ""}
                ${index === 3 ? "md:col-span-2" : ""}
                ${index === 4 ? "md:col-span-3" : ""}
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative rounded-2xl h-full">
                <div className="absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-white/20" />
                <div className="relative p-6 md:p-8 h-full">
                  <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-gray-100 to-white shadow-[inset_0_-2px_6px_rgba(0,0,0,0.05)] border border-white/50 flex items-center justify-center">
                        <span className="text-xl font-semibold bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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
