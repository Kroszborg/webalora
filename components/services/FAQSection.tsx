"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How quickly do you respond to emergencies?",
    answer:
      "Our support is available 24/7, with a typical initial triage within 15 minutes. We prioritize urgent issues and maintain dedicated emergency response teams to ensure minimal disruption to your business operations.",
  },
  {
    question: "Can you collaborate with our in-house IT team?",
    answer:
      "Absolutely. We complement your internal resources, filling gaps and bringing specialist expertise. Our flexible partnership model allows seamless integration with your existing IT staff, enhancing capabilities without replacing current team members.",
  },
  {
    question: "Are we locked into a long-term contract?",
    answer:
      "No. Our rolling, flexible agreements adapt to your changing needs. We believe in earning your trust through consistent service quality rather than contractual obligations. You can adjust or terminate services with reasonable notice.",
  },
  {
    question:
      "Do you handle cloud migrations for platforms like Microsoft 365?",
    answer:
      "Yes. We specialise in secure, seamless migrations and ongoing cloud management. Our certified experts ensure minimal disruption during transition, handling everything from initial assessment to post-migration support and optimisation.",
  },
  {
    question: "How do you ensure GDPR and Cyber Essentials compliance?",
    answer:
      "Through continuous audits, best-practice implementations, and real-time updates on regulatory changes. We maintain comprehensive documentation, conduct regular staff training, and implement robust security measures to ensure full compliance.",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "We have extensive experience in finance, legal, healthcare, and manufacturing sectors, but our solutions are adaptable to various industries. Our team understands sector-specific compliance requirements and best practices for each industry we serve.",
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none transition-colors duration-300 hover:bg-white/20"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-white text-lg pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  )}
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-blue-100 leading-relaxed">
                        {faq.answer}
                      </p>
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
