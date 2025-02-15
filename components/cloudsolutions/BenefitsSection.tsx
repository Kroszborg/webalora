"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PoundSterling, ArrowUpRight, Shield, Users } from "lucide-react"

const benefits = [
  {
    icon: PoundSterling,
    title: "Cost Efficiency",
    description: "Reduce capital expenditure and convert fixed IT costs into flexible, operational expenses.",
    details:
      "Cloud computing allows businesses to pay only for the resources they use, eliminating the need for large upfront investments in hardware and infrastructure. This pay-as-you-go model provides significant cost savings and improved cash flow management.",
  },
  {
    icon: ArrowUpRight,
    title: "Scalability and Agility",
    description: "Quickly scale your operations up or down as needed without the constraints of traditional hardware.",
    details:
      "Cloud services offer unparalleled flexibility, allowing businesses to rapidly adjust their IT resources to meet changing demands. This agility enables companies to seize new opportunities quickly and respond effectively to market changes.",
  },
  {
    icon: Shield,
    title: "Enhanced Security & Compliance",
    description: "Benefit from advanced security protocols designed to meet UK data protection standards.",
    details:
      "Cloud providers invest heavily in security measures that often surpass what individual businesses can implement. This includes regular security updates, advanced threat detection, and compliance with various regulatory standards, ensuring your data is protected to the highest degree.",
  },
  {
    icon: Users,
    title: "Improved Collaboration",
    description: "Enable your team to work from anywhere with secure, reliable access to applications and data.",
    details:
      "Cloud-based tools facilitate seamless collaboration among team members, regardless of their physical location. This leads to increased productivity, faster decision-making, and improved overall efficiency in business operations.",
  },
]

export function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
        >
          Why Embrace the Cloud?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-gray-500 mt-4 border-t pt-4">{benefit.details}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

