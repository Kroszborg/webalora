"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Rocket,
  Cog,
  BarChart,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    title: "Initial Assessment & Audit",
    description:
      "We examine your existing environment, pinpointing vulnerabilities and opportunities.",
    icon: ClipboardCheck,
  },
  {
    title: "Customised Strategy & Onboarding",
    description:
      "We craft a roadmap aligned with your budget and objectives, ensuring minimal disruption to daily operations.",
    icon: Rocket,
  },
  {
    title: "Implementation & optimisation",
    description:
      "We deploy best-in-class tools and methodologies, from patches to full-scale migrations.",
    icon: Cog,
  },
  {
    title: "Continuous Monitoring & Support",
    description:
      "Our UK-based experts monitor your systems 24/7, proactively addressing issues.",
    icon: BarChart,
  },
  {
    title: "Ongoing Consultancy & Growth",
    description:
      "Regular reviews help refine strategies, introduce new tools, and keep you ahead of the competition.",
    icon: TrendingUp,
  },
];

export function ApproachSection() {
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
          Our Seamless Approach
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-inner">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Why Our Approach Works
            </h3>
            <p className="text-gray-600 mb-4">
              Our methodology is designed to provide a comprehensive, tailored
              IT solution that evolves with your business. By combining
              cutting-edge technology with expert human insight, we ensure that
              your IT infrastructure not only meets your current needs but is
              also prepared for future challenges.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Personalized solutions for your unique business needs</li>
              <li>Proactive problem-solving to prevent IT issues</li>
              <li>Continuous improvement and adaptation to new technologies</li>
              <li>Transparent communication and regular progress updates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
