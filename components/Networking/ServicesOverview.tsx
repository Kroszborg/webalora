"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network,
  Shield,
  Cloud,
  Activity,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    icon: Network,
    title: "Custom Network Design & Architecture",
    description:
      "We begin with a thorough assessment of your existing infrastructure, working closely with you to design a bespoke network that aligns with your business goals and operational requirements.",
    benefits: [
      "Experience lightning-fast, reliable connectivity across all your locations.",
      "Enjoy a network that is as agile and adaptable as your business needs to be.",
      "Benefit from a seamless integration of new technologies as your company grows.",
    ],
    risk: "An outdated or poorly designed network can lead to bottlenecks, slow data flows, and increased susceptibility to cyber threats, all of which can severely hamper your competitive edge.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034&ixlib=rb-4.0.3",
  },
  {
    icon: Shield,
    title: "Secure Connectivity Solutions",
    description:
      "Our secure connectivity services encompass everything from robust VPNs and state-of-the-art firewalls to comprehensive intrusion detection systems, ensuring your network is impregnable.",
    benefits: [
      "Safeguard your critical data against cyber attacks.",
      "Maintain full compliance with stringent UK data protection regulations.",
      "Enhance customer trust by demonstrating a commitment to security and reliability.",
    ],
    risk: "Without modern security measures, your business becomes an easy target for cyber criminals, potentially leading to costly data breaches, legal ramifications, and irreparable damage to your reputation.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
  },
  {
    icon: Cloud,
    title: "Cloud Integration & Hybrid Networking",
    description:
      "We expertly merge on-premises systems with leading cloud solutions to create a versatile, agile network environment that supports your dynamic business needs.",
    benefits: [
      "Enjoy reduced IT costs and increased operational flexibility.",
      "Ensure superior disaster recovery and business continuity.",
      "Capitalise on the agility of cloud services while retaining the security of traditional systems.",
    ],
    risk: "Neglecting cloud integration can leave you with inflexible, costly systems that limit innovation and slow your business's response to emerging opportunities.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3",
  },
  {
    icon: Activity,
    title: "24/7 Monitoring & Ongoing Support",
    description:
      "Our dedicated team provides continuous, round-the-clock monitoring of your network, ensuring that any issues are identified and resolved before they impact your operations.",
    benefits: [
      "Gain peace of mind knowing your network is under constant surveillance.",
      "Minimise downtime with proactive, real-time support.",
      "Focus on growing your business while we take care of your IT infrastructure.",
    ],
    risk: "Without constant monitoring and support, small issues can quickly escalate into major disruptions, leading to costly downtime and decreased customer satisfaction.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
  },
];

export function ServicesOverview() {
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
          Our Comprehensive Networking Services
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
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {services[activeService].benefits.map(
                        (benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        )
                      )}
                    </ul>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                      Risk of Inaction:
                    </h4>
                    <p className="text-gray-600">
                      {services[activeService].risk}
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
