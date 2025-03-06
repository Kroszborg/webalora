"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What types of CCTV cameras do you offer?",
    answer:
      "We offer a comprehensive range of CCTV cameras including HD, 4K, and AI-powered options with features like night vision, motion tracking, and facial recognition. Our solutions can be customized based on your business needs and security requirements.",
  },
  {
    question: "How long is CCTV footage stored?",
    answer:
      "Storage duration varies based on your package. Our Starter Package includes 7-day cloud storage, our Advanced Package offers 30-day cloud and local storage, and our Enterprise Package provides 90-day cloud and on-premise storage. Custom storage solutions are also available.",
  },
  {
    question: "Do you provide 24/7 monitoring services?",
    answer:
      "Yes, we offer 24/7 professional monitoring services with our Enterprise Package, and business hours monitoring with our Advanced Package. Our UK-based security team actively monitors your premises, provides real-time alerts, and coordinates emergency responses when necessary.",
  },
  {
    question: "Can I access my CCTV footage remotely?",
    answer:
      "Absolutely. All our CCTV packages include remote access capabilities that allow you to monitor your property from anywhere using your smartphone, tablet, or computer. You'll receive instant alerts for any suspicious activities.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation time varies depending on the size of your premises and the complexity of the system. Typically, smaller installations can be completed in a day, while larger, more complex systems might take 2-3 days. We always aim to minimize disruption to your business operations.",
  },
  {
    question: "What maintenance is required for CCTV systems?",
    answer:
      "Regular maintenance is essential for optimal performance. We recommend quarterly checks for camera positioning, lens cleaning, recording quality verification, and software updates. Our maintenance plans include these services, ensuring your system remains in peak condition.",
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
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
