"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  Activity,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    icon: Database,
    title: "Customised Backup Solutions",
    description:
      "We design and implement bespoke backup strategies that ensure every critical file, database, and system is securely backed up—automatically and regularly.",
    benefits: [
      "Automated, Scheduled Backups: Eliminating human error and ensuring data is backed up without fail.",
      "Secure Offsite and Cloud Storage: Data is stored in secure, geographically diverse locations, ensuring redundancy and protection against localised incidents.",
      "Rapid Data Recovery: Experience near-instant recovery times, minimising disruption and keeping your business operational.",
    ],
    additionalOffering:
      "Data Archiving & Long-Term Storage: For compliance and historical reference, we offer solutions for securely archiving data over extended periods.",
    riskOfInaction:
      "Without a robust backup strategy, you risk losing essential data due to hardware failures, cyber attacks, or accidental deletions, resulting in severe business interruptions.",
  },
  {
    icon: Cloud,
    title: "Disaster Recovery Planning & Implementation",
    description:
      "Our experts craft detailed disaster recovery plans that prepare your business for every eventuality—from cyber incidents to natural disasters.",
    benefits: [
      "Comprehensive Recovery Roadmaps: Clear, step-by-step procedures tailored to your operations.",
      "Regular Testing & Drills: We conduct frequent recovery simulations to ensure your plan is effective and your team is ready.",
      "Rapid Resumption of Operations: Minimise downtime with well-practised recovery processes that restore your systems quickly.",
    ],
    additionalOffering:
      "Business Impact Analysis (BIA): We assess the potential impact of various disruptions on your operations, helping you prioritise resources and minimise risks.",
    riskOfInaction:
      "A lack of proper disaster recovery planning can transform minor issues into catastrophic events, leading to prolonged downtime and significant financial losses.",
  },
  {
    icon: Activity,
    title: "Cloud Integration & Hybrid Recovery Solutions",
    description:
      "We integrate advanced cloud technologies with your existing infrastructure to create a resilient hybrid environment that maximises both flexibility and security.",
    benefits: [
      "Scalable Solutions: Effortlessly accommodate growing data volumes and evolving business needs.",
      "Cost Efficiency: Reduce reliance on expensive on-site infrastructure while maintaining top-tier data security.",
      "Enhanced Resilience: Leverage cloud-based redundancy to ensure your data is always accessible, even during major disruptions.",
    ],
    additionalOffering:
      "Disaster Recovery as a Service (DRaaS): A fully managed service that takes the complexity out of recovery planning, allowing you to focus on your core business.",
    riskOfInaction:
      "Relying solely on outdated, on-premises systems can leave you with inflexible, vulnerable infrastructure that is ill-equipped to handle modern threats.",
  },
  {
    icon: HelpCircle,
    title: "24/7 Monitoring, Testing & Ongoing Support",
    description:
      "Our team of experts continuously monitors your backup systems and disaster recovery processes. We don't just set and forget—we actively manage, test, and optimise your recovery strategy.",
    benefits: [
      "Proactive Issue Resolution: Problems are identified and addressed before they can impact your operations.",
      "Continuous Optimisation: Regular reviews and updates ensure that your backup and recovery systems evolve with your business.",
      "Dedicated Support: Enjoy peace of mind with round-the-clock access to our team of experts, ready to assist at a moment's notice.",
    ],
    additionalOffering:
      "Employee Training and Awareness: Equip your team with the knowledge and skills necessary to respond effectively during a crisis, ensuring that everyone knows their role in your recovery plan.",
    riskOfInaction:
      "Without constant monitoring and regular testing, your disaster recovery strategy may become outdated, leaving you vulnerable when you need it most.",
  },
];

export function ServicesOverview() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070"
        alt="Technology Background"
        fill
        className="absolute inset-0 opacity-10 object-cover"
        sizes="100vw"
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
                How You Benefit:
              </h4>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {services[activeService].benefits.map((benefit, index) => (
                  <li key={index} className="mb-2">
                    {benefit}
                  </li>
                ))}
              </ul>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">
                Additional Offering:
              </h4>
              <p className="text-gray-600 mb-6">
                {services[activeService].additionalOffering}
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                Risk of Inaction:
              </h4>
              <p className="text-gray-600">
                {services[activeService].riskOfInaction}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
