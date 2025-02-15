"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  ArrowRight,
  Cloud,
  Shield,
  Database,
  Code,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lightbulb,
    title: "Cloud Strategy & Consulting",
    description:
      "Develop a clear, actionable plan that aligns with your business objectives.",
    whatWeDo: [
      "Cloud Readiness Assessment",
      "Strategic Roadmap Development",
      "Cost-Benefit Analysis",
    ],
    benefits: [
      "Gain clarity on the best cloud model for your business",
      "Mitigate risks and ensure a smooth transition",
      "Accelerate your digital transformation",
    ],
    additionalOffering:
      "Customized workshops for executive teams to align cloud strategy with business goals.",
    riskOfInaction:
      "Without a clear cloud strategy, businesses risk inefficient resource allocation and missed opportunities for innovation and growth.",
  },
  {
    icon: ArrowRight,
    title: "Seamless Cloud Migrations",
    description:
      "Safely transfer your critical data and applications to the cloud with zero downtime.",
    whatWeDo: [
      "Data & Application Migration",
      "Legacy System Modernisation",
      "Integration Services",
    ],
    benefits: [
      "Experience a hassle-free migration process",
      "Enjoy improved system performance and reliability",
      "Future-proof your IT infrastructure",
    ],
    additionalOffering:
      "Post-migration performance optimization and user training.",
    riskOfInaction:
      "Delaying cloud migration can lead to increased operational costs and reduced competitiveness in the market.",
  },
  {
    icon: Cloud,
    title: "Managed Cloud Services",
    description:
      "24/7 monitoring, support, and optimization of your cloud environment.",
    whatWeDo: [
      "24/7 Monitoring & Support",
      "Automated Backups & Disaster Recovery",
      "Performance Optimisation",
    ],
    benefits: [
      "Focus on your core business while experts manage your infrastructure",
      "Enjoy peace of mind with secure and compliant systems",
      "Reduce operational costs with a scalable service model",
    ],
    additionalOffering:
      "Customized dashboards for real-time insights into your cloud environment.",
    riskOfInaction:
      "Without proper management, cloud environments can become inefficient, insecure, and costly to maintain.",
  },
  {
    icon: Database,
    title: "Hybrid & Multi-Cloud Solutions",
    description:
      "Combine on-premises, private, and public cloud services for a tailored solution.",
    whatWeDo: [
      "Flexible Architecture Design",
      "Data Sovereignty & Compliance Management",
      "Workload Optimization",
    ],
    benefits: [
      "Enjoy flexibility in data storage and processing",
      "Ensure compliance with local data protection laws",
      "Optimize IT resources for better performance and lower costs",
    ],
    additionalOffering:
      "Cloud arbitrage services to ensure you're always using the most cost-effective resources.",
    riskOfInaction:
      "Failing to adopt a hybrid or multi-cloud approach may result in vendor lock-in and reduced flexibility to meet changing business needs.",
  },
  {
    icon: Shield,
    title: "Cloud Security & Compliance",
    description:
      "Protect your data with advanced security technologies and ensure regulatory compliance.",
    whatWeDo: [
      "Advanced Encryption & Access Controls",
      "Regular Security Audits",
      "Compliance Management",
    ],
    benefits: [
      "Protect sensitive data from cyber threats",
      "Maintain full compliance with data protection regulations",
      "Build trust with customers through robust security measures",
    ],
    additionalOffering:
      "Continuous compliance monitoring and reporting for GDPR, HIPAA, and other relevant standards.",
    riskOfInaction:
      "Inadequate cloud security measures can lead to data breaches, financial losses, and severe damage to company reputation.",
  },
  {
    icon: Code,
    title: "Cloud Application Development",
    description:
      "Build and deploy scalable, cloud-native applications tailored to your business needs.",
    whatWeDo: [
      "Cloud-Native Development",
      "Microservices Architecture Implementation",
      "Containerization with Docker and Kubernetes",
    ],
    benefits: [
      "Create highly scalable and resilient applications",
      "Reduce time-to-market with agile development practices",
      "Improve application performance and user experience",
    ],
    additionalOffering:
      "DevOps pipeline setup and optimization for continuous integration and deployment.",
    riskOfInaction:
      "Not leveraging cloud-native development can result in applications that are less scalable, more costly to maintain, and slower to update.",
  },
];

export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

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
          Our Comprehensive Cloud Services
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleService(index)}
                  aria-expanded={expandedService === index}
                  aria-controls={`service-details-${index}`}
                >
                  {expandedService === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle service details</span>
                </Button>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <AnimatePresence>
                {expandedService === index && (
                  <motion.div
                    id={`service-details-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          What We Do:
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {service.whatWeDo.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Benefits:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Additional Offering:
                        </h4>
                        <p className="text-gray-600">
                          {service.additionalOffering}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                          Risk of Inaction:
                        </h4>
                        <p className="text-gray-600">
                          {service.riskOfInaction}
                        </p>
                      </div>
                    </div>
                    <Button className="mt-6 w-full">
                      Schedule a Consultation
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
