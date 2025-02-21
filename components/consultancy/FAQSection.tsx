"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What industries do you specialise in for IT consultancy?",
    answer:
      "We specialise in providing IT consultancy services to a wide range of industries, including finance, healthcare, retail, and manufacturing. Our team has extensive experience in addressing the unique challenges and regulatory requirements of these sectors.",
  },
  {
    question: "How long does a typical IT consultancy project take?",
    answer:
      "The duration of an IT consultancy project can vary greatly depending on the scope and complexity of your needs. Some projects may be completed in a few weeks, while others might span several months. We work closely with you to establish clear timelines and milestones for each project.",
  },
  {
    question:
      "Can you help with both short-term IT issues and long-term strategy?",
    answer:
      "We offer both short-term solutions for immediate IT challenges and long-term strategic planning. Our goal is to address your current needs while also helping you build a robust IT foundation for future growth and innovation.",
  },
  {
    question:
      "How do you ensure the security of our data during the consultancy process?",
    answer:
      "Data security is our top priority. We adhere to strict confidentiality agreements and implement robust security measures throughout our consultancy process. This includes using encrypted communication channels, secure file sharing, and following best practices for data protection.",
  },
  {
    question: "What sets WebAlora apart from other IT consultancy firms?",
    answer:
      "WebAlora stands out due to our combination of deep technical expertise, industry-specific knowledge, and a client-centric approach. We don't just provide generic solutions; we tailor our services to your unique business needs and goals, ensuring maximum value and ROI from our consultancy.",
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
          className="text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-900"
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
              className="mb-6"
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
                    className="bg-white/50 backdrop-blur-sm rounded-b-lg p-4 mt-2"
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
