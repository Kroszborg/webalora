"use client";

import { motion } from "framer-motion";
import { Shield, Search, Users, FileCheck, Database, Lock } from "lucide-react";
import Image from "next/image";

export function ServicesOverview() {
  const services = [
    {
      icon: Shield,
      title: "Threat Detection & Incident Response",
      description:
        "24/7 monitoring, next-gen firewalls, and rapid containment.",
    },
    {
      icon: Search,
      title: "Vulnerability Assessments & Penetration Testing",
      description:
        "Identify and address critical flaws before they're exploited.",
    },
    {
      icon: Users,
      title: "Security Awareness & Training",
      description: "Empower your team to be the first line of defense.",
    },
    {
      icon: FileCheck,
      title: "Compliance & Governance",
      description: "Stay compliant with GDPR, Cyber Essentials, and ISO 27001.",
    },
    {
      icon: Database,
      title: "Managed SIEM & SOC",
      description: "Real-time threat correlation and expert analysis.",
    },
    {
      icon: Lock,
      title: "Zero Trust & Advanced Cloud Security",
      description:
        "Secure access control for cloud and on-premises environments.",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cybersecurity Network"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-10"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/95 to-purple-900/95" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Our Cybersecurity Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.6)]  group"
            >
              <div className="bg-gradient-to-br from-blue-400 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
