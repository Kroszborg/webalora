"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Cloud, Activity, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    icon: Database,
    title: "Customised Backup Solutions",
    description:
      "Tailored backup strategies ensuring every critical file, database, and system is securely backed up.",
    details: [
      "Automated, Scheduled Backups",
      "Secure Offsite and Cloud Storage",
      "Rapid Data Recovery",
      "Data Archiving & Long-Term Storage",
    ],
  },
  {
    icon: Cloud,
    title: "Disaster Recovery Planning & Implementation",
    description:
      "Comprehensive disaster recovery plans preparing your business for every eventuality.",
    details: [
      "Comprehensive Recovery Roadmaps",
      "Regular Testing & Drills",
      "Rapid Resumption of Operations",
      "Business Impact Analysis (BIA)",
    ],
  },
  {
    icon: Activity,
    title: "24/7 Monitoring, Testing & Ongoing Support",
    description:
      "Continuous monitoring of your backup systems and disaster recovery processes.",
    details: [
      "Proactive Issue Resolution",
      "Continuous Optimisation",
      "Dedicated Support",
      "Employee Training and Awareness",
    ],
  },
  {
    icon: HelpCircle,
    title: "Cloud Integration & Hybrid Recovery Solutions",
    description:
      "Advanced cloud technologies integrated with your existing infrastructure for a resilient environment.",
    details: [
      "Scalable Solutions",
      "Cost Efficiency",
      "Enhanced Resilience",
      "Disaster Recovery as a Service (DRaaS)",
    ],
  },
];

export function ServicesOverview() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070"
        alt="Technology Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 opacity-10"
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
          Our Comprehensive Backup & Disaster Recovery Services
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
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
                  className="w-full justify-start mb-4 p-4"
                  onClick={() => setActiveService(index)}
                >
                  <service.icon className="mr-2 h-5 w-5" />
                  {service.title}
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {services[activeService].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {services[activeService].description}
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">
                Key Features:
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                {services[activeService].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
