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
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Headphones,
    title: "Proactive IT Support",
    description: "24/7 monitoring and responsive support",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Advanced Cyber Security",
    description: "Comprehensive protection frameworks",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Cloud,
    title: "Cloud Computing Services",
    description: "Scalable, secure cloud solutions",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: BarChart,
    title: "Strategic IT Consultancy",
    description: "Expert guidance for digital transformation",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Optimising network performance",
    gradient: "from-rose-500 to-orange-600",
  },
  {
    icon: Database,
    title: "Data Backup & Recovery",
    description: "Robust data protection solutions",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: FileCheck,
    title: "IT Compliance",
    description: "Ensuring regulatory compliance",
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    icon: Package,
    title: "Hardware Procurement",
    description: "Tailored technology solutions",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export function OurServices() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-blue-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive IT solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                style={{
                  background: `linear-gradient(to bottom right, ${
                    service.gradient.split(" ")[1]
                  }, ${service.gradient.split(" ")[3]})`,
                }}
              />
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 group-hover:border-white/30 ">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-2.5 mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-200 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl "
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
