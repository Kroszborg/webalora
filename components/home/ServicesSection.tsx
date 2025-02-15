"use client";

import type React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Server, Shield, Cloud, BarChart, Zap, PhoneCall } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Server,
    title: "Managed IT Services",
    description:
      "Comprehensive management of your IT infrastructure to ensure seamless, secure operations.",
    gradient: "from-blue-500 via-blue-600 to-indigo-500",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description:
      "Advanced protection against cyber threats with proactive monitoring and threat detection.",
    gradient: "from-indigo-500 via-purple-500 to-purple-600",
    href: "/cybersecurity-solutions",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Migration",
    description:
      "Secure, scalable cloud services that enhance flexibility and efficiency.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    href: "/cloud-solutions",
  },
  {
    icon: BarChart,
    title: "IT Consultancy & Strategy",
    description:
      "Expert guidance to align technology with your business objectives for sustainable growth.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    href: "/consultancy",
  },
  {
    icon: Zap,
    title: "Backup & Disaster Recovery",
    description:
      "Reliable solutions to protect and recover your critical data with minimal downtime.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    href: "/backup",
  },
  {
    icon: PhoneCall,
    title: "Network Infrastructure",
    description:
      "Building robust, scalable networks to support your business now and into the future.",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    href: "#",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-24 bg-gray-900 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"
          style={{ backgroundSize: "14px 24px" }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container relative mx-auto px-4 text-white">
        <SectionTitle
          title="End-to-End IT Solutions Tailored for Your Business"
          subtitle="Comprehensive services designed to meet your unique needs"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block group h-full">
                <div className="relative h-full">
                  {/* Gradient background that shows on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`}
                  />

                  {/* Card content */}
                  <div className="relative h-full p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-white/30 transition-all duration-500">
                    {/* Icon wrapper */}
                    <div
                      className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} p-3 transform group-hover:scale-110 transition-transform duration-500`}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </div>

                    {/* Text content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      {service.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
