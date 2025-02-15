"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Phone,
  Smartphone,
  BarChart,
  HeadphonesIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Server,
    title: "Custom VOIP System Design & Implementation",
    description:
      "We assess your business's communication requirements and design a bespoke VOIP system that aligns with your operational goals. Our process includes a detailed audit of your current infrastructure, network capability, and future growth plans.",
    benefits: [
      "Tailored System Architecture",
      "Smooth Transition",
      "Future-Proof Investment",
    ],
    additionalFeatures: [
      "Integration with CRM and ERP Systems",
      "Advanced Call Analytics",
    ],
  },
  {
    icon: Phone,
    title: "Hosted PBX & Unified Communications",
    description:
      "Our cloud-based Hosted PBX solution offers an all-in-one communication platform that consolidates voice, video, messaging, and conferencing into a single, intuitive system.",
    benefits: [
      "Reduced Capital Expenditure",
      "Enhanced Collaboration",
      "Customisable Auto-Attendant",
    ],
    additionalFeatures: [
      "Virtual Receptionist Services",
      "Interactive Voice Response (IVR)",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Integration & Remote Working Solutions",
    description:
      "In today's hybrid working environment, staying connected is paramount. Our VOIP system integrates seamlessly with mobile devices, enabling your team to communicate and collaborate from anywhere.",
    benefits: [
      "Empower Remote Teams",
      "Unified Experience",
      "Enhanced Flexibility",
    ],
    additionalFeatures: [
      "BYOD (Bring Your Own Device) Support",
      "Secure VPN Access",
    ],
  },
  {
    icon: BarChart,
    title: "Advanced Analytics, Reporting & Real-Time Monitoring",
    description:
      "Our VOIP solutions come equipped with sophisticated analytics and monitoring tools, providing you with real-time insights into your communication system's performance.",
    benefits: [
      "Performance Monitoring",
      "Data-Driven Decisions",
      "Proactive Issue Resolution",
    ],
    additionalFeatures: ["Custom Dashboards", "Real-Time Alerts"],
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Ongoing Support and Maintenance",
    description:
      "Our commitment to your business doesn't end with implementation. We offer comprehensive, round-the-clock support and maintenance to ensure your VOIP system remains at peak performance.",
    benefits: [
      "Dedicated Support Team",
      "Regular System Updates",
      "Proactive Maintenance",
    ],
    additionalFeatures: [
      "Service Level Agreements (SLAs)",
      "Employee Training & Onboarding",
    ],
  },
];

export function ServicesOverview() {
  const [activeService, setActiveService] = useState(0);

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
          Our Comprehensive VOIP Services
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant={activeService === index ? "default" : "outline"}
                  className="w-full justify-start p-4 text-left transition-all duration-300 ease-in-out hover:shadow-md"
                  onClick={() => setActiveService(index)}
                >
                  <service.icon className="mr-3 h-6 w-6" />
                  <span className="font-semibold">{service.title}</span>
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {services[activeService].description}
                </p>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  Key Benefits:
                </h4>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  {services[activeService].benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  Additional Features:
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  {services[activeService].additionalFeatures.map(
                    (feature, index) => (
                      <li key={index}>{feature}</li>
                    )
                  )}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
