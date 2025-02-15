"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Network, Shield, Cloud, Database, Users } from "lucide-react"

const services = [
  {
    title: "IT Strategy & Roadmap Development",
    description: "Create tailored IT strategies aligned with your business objectives.",
    icon: BarChart,
  },
  {
    title: "IT Infrastructure Optimisation",
    description: "Design scalable IT systems that grow with your business.",
    icon: Network,
  },
  {
    title: "Cybersecurity & Compliance Consultancy",
    description: "Secure your business against cyber threats and ensure regulatory compliance.",
    icon: Shield,
  },
  {
    title: "Cloud & Digital Transformation Strategy",
    description: "Build a roadmap for seamless cloud integration and digital transformation.",
    icon: Cloud,
  },
  {
    title: "IT Cost Optimisation & Vendor Management",
    description: "Reduce unnecessary IT expenses and optimise resource allocation.",
    icon: Database,
  },
  {
    title: "IT Team Augmentation & Training",
    description: "Enhance your IT capabilities with expert resources and knowledge transfer.",
    icon: Users,
  },
]

export function OurServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300/20 rounded-full filter blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-900"
        >
          Our IT Consultancy & Strategy Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-filter backdrop-blur-sm border border-white/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 mr-3">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

