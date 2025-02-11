"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Cloud,
  BarChart,
  Network,
  Database,
  FileCheck,
  Package,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Proactive IT Support",
    description: "24/7 monitoring and responsive support",
  },
  {
    icon: Shield,
    title: "Advanced Cyber Security",
    description: "Comprehensive protection frameworks",
  },
  {
    icon: Cloud,
    title: "Cloud Computing Services",
    description: "Scalable, secure cloud solutions",
  },
  {
    icon: BarChart,
    title: "Strategic IT Consultancy",
    description: "Expert guidance for digital transformation",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Optimising network performance",
  },
  {
    icon: Database,
    title: "Data Backup & Recovery",
    description: "Robust data protection solutions",
  },
  {
    icon: FileCheck,
    title: "IT Compliance",
    description: "Ensuring regulatory compliance",
  },
  {
    icon: Package,
    title: "Hardware Procurement",
    description: "Tailored technology solutions",
  },
];

export function OurServices() {
  return (
    <section className="py-16 md:py-24 bg-blue-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
