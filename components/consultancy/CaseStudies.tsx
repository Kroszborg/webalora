"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const caseStudies = [
  {
    title: "IT Transformation for a Financial Firm",
    challenge:
      "A mid-sized financial services firm faced security vulnerabilities and inefficient IT operations, leading to compliance risks.",
    solution:
      "WebAlora implemented a fully managed IT strategy, integrating cloud security, compliance measures, and a tailored IT roadmap.",
    result:
      "Achieved 100% regulatory compliance, 25% cost reduction, and 50% improvement in system uptime.",
    image:
      "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Cloud Migration for an E-Commerce Company",
    challenge:
      "A growing online retailer struggled with scalability and slow performance due to outdated on-premise infrastructure.",
    solution:
      "We developed a hybrid cloud strategy, optimising workloads between AWS and private cloud storage.",
    result:
      "Reduced IT operational costs by 30%, increased website speed by 45%, and improved customer experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
  },
];

export function CaseStudies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-900"
        >
          Success Stories from WebAlora Clients
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 sm:h-64">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Solution:</strong> {study.solution}
                  </p>
                  <p className="text-gray-600">
                    <strong>Result:</strong> {study.result}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
