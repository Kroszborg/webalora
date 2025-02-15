"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What exactly is VOIP and how does it benefit my business?",
    answer:
      "VOIP (Voice over Internet Protocol) converts your voice into digital data, allowing you to make calls over your internet connection. This results in lower costs, enhanced flexibility, and advanced features that traditional phone systems simply can't offer.",
  },
  {
    question: "How secure is a VOIP system?",
    answer:
      "At WebAlora, security is paramount. Our VOIP solutions utilise advanced encryption, secure data centres, redundant network architectures, and continuous monitoring to ensure your communications are protected from unauthorised access and cyber threats.",
  },
  {
    question: "Can VOIP support remote and mobile working?",
    answer:
      "Absolutely. Our VOIP systems are designed for full mobility, providing secure and seamless connectivity for remote teams through mobile apps, VPN integration, and BYOD support.",
  },
  {
    question: "How do you ensure call quality and reliability?",
    answer:
      "We employ Quality of Service (QoS) protocols, prioritise voice traffic, and monitor network performance in real-time. This guarantees clear audio, minimal latency, and high system uptime.",
  },
  {
    question: "What kind of support and training does WebAlora provide?",
    answer:
      "Our support doesn't end with installation. We offer 24/7 dedicated support, regular system updates, proactive maintenance, and comprehensive employee training sessions to ensure you maximise the benefits of your VOIP solution.",
  },
  {
    question: "How quickly can we transition to a VOIP system?",
    answer:
      "Depending on your current setup and specific requirements, our expert team can often complete a smooth transition within a matter of weeks—minimising disruption and ensuring a rapid return to full productivity.",
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-b-lg p-4 mt-1"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
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
