"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How quickly do you respond to emergencies?",
    answer:
      "Our support is available 24/7, with a typical initial triage within 15 minutes.",
  },
  {
    question: "Can you collaborate with our in-house IT team?",
    answer:
      "Absolutely. We complement your internal resources, filling gaps and bringing specialist expertise.",
  },
  {
    question: "Are we locked into a long-term contract?",
    answer:
      "No. Our rolling, flexible agreements adapt to your changing needs.",
  },
  {
    question:
      "Do you handle cloud migrations for platforms like Microsoft 365?",
    answer:
      "Yes. We specialize in secure, seamless migrations and ongoing cloud management.",
  },
  {
    question: "How do you ensure GDPR and Cyber Essentials compliance?",
    answer:
      "Through continuous audits, best-practice implementations, and real-time updates on regulatory changes.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
    >
      <button
        className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
        onClick={onToggle}
      >
        <span className="font-semibold text-white">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-300" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-300" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="px-6 pb-6">
              <p className="text-blue-100">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
