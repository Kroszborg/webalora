"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Headphones,
  Shield,
  Cloud,
  Network,
  Database,
  Phone,
  BarChart,
  Clipboard,
} from "lucide-react";

const services = [
  {
    title: "IT Helpdesk & Support",
    description: "Multi-channel assistance with rapid response times.",
    icon: Headphones,
  },
  {
    title: "Cybersecurity & Threat Management",
    description: "Advanced protection and ongoing vulnerability scans.",
    icon: Shield,
  },
  {
    title: "Cloud Computing & Microsoft 365",
    description: "Seamless migrations and remote workforce enablement.",
    icon: Cloud,
  },
  {
    title: "Network & Infrastructure Management",
    description: "24/7 monitoring and optimised configurations.",
    icon: Network,
  },
  {
    title: "Data Backup & Disaster Recovery",
    description: "Automated backups and rapid recovery strategies.",
    icon: Database,
  },
  {
    title: "VoIP & Unified Communications",
    description:
      "Cloud-based phone systems and integrated collaboration tools.",
    icon: Phone,
  },
  {
    title: "IT Strategy & Consultancy",
    description: "Technical roadmaps and scalable growth plans.",
    icon: BarChart,
  },
  {
    title: "Compliance & Security Audits",
    description: "GDPR, Cyber Essentials, ISO 27001 compliance management.",
    icon: Clipboard,
  },
];

export function CoreServicesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setIsLoaded(true);
    }
  }, [controls, inView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        controls.start("visible");
        setIsLoaded(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [controls, isLoaded]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Our Core Managed IT Services
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-blue-100">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
