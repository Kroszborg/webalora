"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shield,
  Lock,
  Server,
  FileCheck,
  HelpCircle,
} from "lucide-react";
import Image from "next/legacy/image";

const faqs = [
  {
    question: "Do you handle cloud and on-premises environments?",
    answer:
      "Absolutely. We secure multi-cloud setups, hybrid architectures, and traditional data centers.",
    icon: Server,
  },
  {
    question: "Can we integrate these services into our existing IT setup?",
    answer:
      "Yes. Our solutions are vendor-agnostic and designed to complement or enhance in-house IT teams.",
    icon: Lock,
  },
  {
    question: "How often should we conduct penetration tests?",
    answer:
      "We recommend semi-annual tests or quarterly for high-risk industries.",
    icon: Shield,
  },
  {
    question: "Are your services compliant with GDPR?",
    answer:
      "All solutions follow GDPR guidelines. We also offer specialized audits to maintain or achieve compliance.",
    icon: FileCheck,
  },
  {
    question: "What if we need ongoing ISO 27001 support?",
    answer:
      "We offer comprehensive ISO 27001 consultancy, from initial gap analysis to certification maintenance.",
    icon: HelpCircle,
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <Image
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
        alt="Cybersecurity Background"
        layout="fill"
        objectFit="cover"
        className="opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-6"
            >
              <motion.button
                className="flex justify-between items-center w-full p-6 bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl text-left focus:outline-none border border-white/20 hover:border-white/40 transition-all duration-300"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <div className="mr-4 p-2 bg-blue-500/20 rounded-lg">
                    <faq.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-blue-400" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="bg-white/5 backdrop-filter backdrop-blur-lg rounded-b-xl p-6 mt-2 border-t border-white/10">
                      <p className="text-blue-100">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
