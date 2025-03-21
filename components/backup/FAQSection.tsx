"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question:
      "Why is a robust backup and disaster recovery plan essential for my business?",
    answer:
      "It's not a matter of if something goes wrong, but when. A comprehensive plan ensures that you can quickly recover from any disruption, protecting your data, revenue, and reputation.",
  },
  {
    question:
      "What distinguishes WebAlora's solution from other backup services?",
    answer:
      "We offer an end-to-end, bespoke solution that integrates customised backup strategies, detailed disaster recovery planning, continuous monitoring, and employee training. Our approach is tailored specifically to the unique challenges faced by UK businesses.",
  },
  {
    question: "How often are disaster recovery plans tested?",
    answer:
      "We recommend regular testing—at least bi-annually—to ensure that your recovery process remains current and effective. Our team conducts these tests and provides detailed reports and recommendations.",
  },
  {
    question: "How can I be certain my data is secure with WebAlora?",
    answer:
      "Our solutions incorporate advanced encryption, secure offsite storage, state-of-the-art cloud technologies, and round-the-clock expert monitoring, ensuring your data is protected at every stage.",
  },
  {
    question: "What is DRaaS and how can it benefit my business?",
    answer:
      "Disaster Recovery as a Service (DRaaS) is a fully managed service that takes the complexity out of recovery planning. It offers scalable, cost-effective solutions that enable you to quickly restore operations after a disruption.",
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
        alt="FAQ Background"
        fill
        quality={100}
        className="absolute inset-0 opacity-10 object-cover"
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
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg "
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
