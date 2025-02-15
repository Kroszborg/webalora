"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What are the benefits of migrating to the cloud?",
    answer: "Migrating to the cloud offers significant cost savings, improved scalability, enhanced security, and greater agility. It also enables remote work, simplifies disaster recovery, and future-proofs your IT infrastructure."
  },
  {
    question: "How does WebAlora ensure a smooth migration?",
    answer: "Our comprehensive migration process includes a detailed assessment, strategic planning, seamless data transfer, and integration with existing systems—all managed by our expert team to minimise downtime and disruption."
  },
  {
    question: "What is a hybrid cloud, and why might my business need one?",
    answer: "A hybrid cloud combines on-premises, private, and public cloud services to provide a flexible and optimised IT environment. This approach allows you to maintain control over sensitive data while taking advantage of the scalability and cost benefits of the public cloud."
  },
  {
    question: "How do you address security concerns in cloud environments?",
    answer: "We implement advanced encryption, access controls, regular security audits, and compliance management to ensure that your cloud environment is secure and meets all regulatory requirements."
  },
  {
    question: "What ongoing support does WebAlora provide after migration?",
    answer: "We offer 24/7 managed cloud services, continuous monitoring, regular system updates, and proactive maintenance to ensure your cloud environment remains secure, efficient, and scalable."
  }
]

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

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
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
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
  )
}

