"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Eye,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    icon: Camera,
    title: "CCTV Installation",
    description:
      "We design and install high-performance CCTV systems that are smart, scalable, and secure.",
    benefits: [
      "HD, 4K & AI-Powered Cameras with crystal-clear footage",
      "Flexible Storage Options: cloud and local storage",
      "Smart Integrations with alarms, access control, and other security systems",
      "Multi-Site Solutions for centralized monitoring",
    ],
    price: "Installation starts from approximately £1,499",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2070",
  },
  {
    icon: Eye,
    title: "Live CCTV Monitoring",
    description:
      "A CCTV system is only as effective as the response behind it. Our monitoring service ensures your business is never unprotected.",
    benefits: [
      "24/7 Live Monitoring by UK-based security team",
      "Instant Alerts & Emergency Response for suspicious activity",
      "Emergency Dispatch Coordination with authorities",
      "Detailed Incident Reporting via interactive portal",
    ],
    price: "Live monitoring packages start from just £59 per month",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070",
  },
  {
    icon: Wrench,
    title: "CCTV Maintenance & Repairs",
    description:
      "A faulty system is no protection at all. Our maintenance and repair services ensure continuous, reliable performance.",
    benefits: [
      "Regular Health Checks to prevent system failures",
      "Timely Software & Firmware Updates to counter cyber threats",
      "Rapid Emergency Repairs to minimize downtime",
      "Optimised Storage & Backup Solutions",
    ],
    price: "Maintenance plans start from approximately £29 per month",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070",
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

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
          Our CCTV Services
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
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      {services[activeService].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {services[activeService].description}
                    </p>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {services[activeService].benefits.map(
                        (benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        )
                      )}
                    </ul>
                    <p className="text-blue-600 font-semibold">
                      {services[activeService].price}
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                      <Image
                        src={
                          services[activeService].image || "/placeholder.svg"
                        }
                        alt={services[activeService].title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}