"use client";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ArrowRight,
  Cloud,
  Shield,
  Database,
  Code,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const services = [
  {
    icon: Lightbulb,
    title: "Cloud Strategy & Consulting",
    description:
      "Develop a clear, actionable plan that aligns with your business objectives.",
    details: {
      whatWeDo: {
        intro:
          "We begin with a thorough assessment of your current IT landscape to develop a strategic roadmap for your cloud journey. Our consulting services include:",
        points: [
          {
            title: "Cloud Readiness Assessment",
            description:
              "Evaluate your existing infrastructure and identify opportunities for optimisation.",
          },
          {
            title: "Strategic Roadmap",
            description:
              "Develop a clear, actionable plan that aligns with your business objectives.",
          },
          {
            title: "Cost-Benefit Analysis",
            description:
              "Understand the financial implications and potential savings from cloud adoption.",
          },
        ],
      },
      benefits: [
        "Gain clarity on the best cloud model for your business—public, private, or hybrid.",
        "Mitigate risks and ensure a smooth transition with expert guidance.",
        "Accelerate your digital transformation with a clear, strategic plan.",
      ],
    },
  },
  {
    icon: ArrowRight,
    title: "Seamless Cloud Migrations",
    description:
      "Safely transfer your critical data and applications to the cloud with zero downtime.",
    details: {
      whatWeDo: {
        intro:
          "Our migration experts manage every aspect of your move to the cloud, ensuring minimal disruption and maximum efficiency.",
        points: [
          {
            title: "Data & Application Migration",
            description:
              "Safely transfer your critical data and applications to the cloud with zero downtime.",
          },
          {
            title: "Legacy System Modernisation",
            description:
              "Upgrade outdated systems, making them more efficient and compatible with cloud technologies.",
          },
          {
            title: "Integration Services",
            description:
              "Seamlessly integrate your cloud environment with existing on-premises systems.",
          },
        ],
      },
      benefits: [
        "Experience a hassle-free migration process with minimal business disruption.",
        "Enjoy improved system performance and reliability.",
        "Future-proof your IT infrastructure by modernising legacy systems.",
      ],
    },
  },
  {
    icon: Cloud,
    title: "Managed Cloud Services",
    description:
      "24/7 monitoring, support, and optimization of your cloud environment.",
    details: {
      whatWeDo: {
        intro:
          "Our fully managed cloud services take the complexity out of cloud management. We offer:",
        points: [
          {
            title: "24/7 Monitoring & Support",
            description:
              "Continuous oversight of your cloud environment to ensure optimal performance.",
          },
          {
            title: "Automated Backups & Disaster Recovery",
            description:
              "Robust measures to safeguard your data and ensure business continuity.",
          },
          {
            title: "Performance Optimisation",
            description:
              "Regular reviews and proactive maintenance to keep your systems running efficiently.",
          },
        ],
      },
      benefits: [
        "Focus on your core business while experts manage your cloud infrastructure.",
        "Enjoy peace of mind knowing that your systems are secure, optimised, and compliant.",
        "Reduce operational costs with a managed service model that scales with your business.",
      ],
    },
  },
  {
    icon: Database,
    title: "Hybrid & Multi-Cloud Solutions",
    description:
      "Combine on-premises, private, and public cloud services for a tailored solution.",
    details: {
      whatWeDo: {
        intro:
          "Not every business fits into a one-size-fits-all cloud solution. Our hybrid and multi-cloud offerings provide:",
        points: [
          {
            title: "Flexible Architecture",
            description:
              "Combine on-premises, private, and public cloud services to create a tailored solution.",
          },
          {
            title: "Data Sovereignty & Compliance",
            description:
              "Ensure your sensitive data is stored in accordance with UK regulations while utilising the benefits of the cloud.",
          },
          {
            title: "Optimised Workloads",
            description:
              "Allocate workloads to the most suitable environment, enhancing performance and cost efficiency.",
          },
        ],
      },
      benefits: [
        "Enjoy the flexibility to choose where and how your data is stored.",
        "Ensure compliance with local data protection laws while leveraging global cloud resources.",
        "Optimise your IT resources for better performance and lower costs.",
      ],
    },
  },
  {
    icon: Shield,
    title: "Cloud Security & Compliance",
    description:
      "Protect your data with advanced security technologies and ensure regulatory compliance.",
    details: {
      whatWeDo: {
        intro:
          "Security is paramount in the digital age. Our cloud security services include:",
        points: [
          {
            title: "Advanced Encryption & Access Controls",
            description:
              "Protect your data with the latest security technologies.",
          },
          {
            title: "Regular Security Audits",
            description:
              "Continuous monitoring and regular audits to identify and mitigate vulnerabilities.",
          },
          {
            title: "Compliance Management",
            description:
              "Ensure your cloud environment adheres to GDPR and other UK regulatory requirements.",
          },
        ],
      },
      benefits: [
        "Protect sensitive data from cyber threats and unauthorised access.",
        "Maintain full compliance with stringent data protection regulations.",
        "Build trust with customers by demonstrating a commitment to security.",
      ],
    },
  },
  {
    icon: Code,
    title: "Cloud Application Development",
    description:
      "Build and deploy scalable, cloud-native applications tailored to your business needs.",
    details: {
      whatWeDo: {
        intro:
          "Our cloud application development services help you leverage the full potential of cloud technologies:",
        points: [
          {
            title: "Cloud-Native Development",
            description:
              "Build applications specifically designed to take advantage of cloud architecture.",
          },
          {
            title: "Microservices Architecture",
            description:
              "Develop flexible, scalable applications using microservices.",
          },
          {
            title: "Containerization",
            description:
              "Utilize container technologies like Docker and Kubernetes for efficient deployment and scaling.",
          },
        ],
      },
      benefits: [
        "Create highly scalable and resilient applications that grow with your business.",
        "Reduce time-to-market with agile development practices and cloud-based tools.",
        "Improve application performance and user experience with cloud-optimized architectures.",
      ],
    },
  },
];

export function ServicesSection() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full group/button hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                  >
                    <span className="relative">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 inline-block transition-transform duration-300 group-hover/button:translate-x-1" />
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-gradient-to-br from-white to-blue-50">
                  <motion.div
                    className="relative flex flex-col h-[85vh]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header with gradient background */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <service.icon className="w-8 h-8" />
                          </motion.div>
                          <DialogTitle className="text-2xl font-bold">
                            {service.title}
                          </DialogTitle>
                        </div>
                      </div>
                      <p className="text-blue-100 max-w-3xl">
                        {service.description}
                      </p>
                    </div>

                    {/* Scrollable Content */}
                    <ScrollArea className="flex-1 p-8">
                      <div className="space-y-8 pr-6">
                        {/* What We Do Section */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="bg-blue-100 p-2 rounded-lg mr-3">
                              <ChevronRight className="w-5 h-5 text-blue-600" />
                            </span>
                            What We Do
                          </h3>
                          <p className="text-gray-600 mb-6 text-lg">
                            {service.details.whatWeDo.intro}
                          </p>
                          <div className="grid gap-6">
                            {service.details.whatWeDo.points.map(
                              (point, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 + 0.3 }}
                                  className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md"
                                >
                                  <h4 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
                                    {point.title}
                                  </h4>
                                  <p className="text-gray-600 leading-relaxed">
                                    {point.description}
                                  </p>
                                </motion.div>
                              )
                            )}
                          </div>
                        </motion.div>

                        {/* Benefits Section */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="bg-green-100 p-2 rounded-lg mr-3">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            </span>
                            How You Benefit
                          </h3>
                          <div className="grid gap-4">
                            {service.details.benefits.map((benefit, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 + 0.5 }}
                                className="flex items-start gap-3 group"
                              >
                                <div className="bg-green-100 p-1.5 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                </div>
                                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                                  {benefit}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </ScrollArea>

                    {/* Footer */}
                    <div className="border-t p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
                      <Button
                        size="lg"
                        className="w-full bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 group"
                      >
                        <span className="relative flex items-center">
                          Schedule a Free Consultation
                          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
