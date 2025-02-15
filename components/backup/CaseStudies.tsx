"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    title: "Retail Resilience",
    client: "A Leading UK Retail Chain",
    challenge:
      "Repeated cyber attacks and system failures threatened to compromise sensitive customer data and disrupt operations.",
    solution:
      "WebAlora implemented a tailored backup strategy with secure offsite storage and a comprehensive disaster recovery plan, including regular drills and testing.",
    outcome:
      "The client achieved near-instant data recovery, reduced downtime by 90%, and maintained unwavering customer confidence even during incidents.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Financial Fortitude",
    client: "A Mid-Sized UK Financial Institution",
    challenge:
      "The imperative to protect sensitive customer information while ensuring continuous operational capability amid frequent cyber threats.",
    solution:
      "Our team deployed an advanced backup system integrated with cloud-based recovery solutions, coupled with rigorous monitoring and regular employee training.",
    outcome:
      "Achieved near-zero recovery times, full GDPR compliance, and a 60% reduction in security incidents.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Manufacturing Resilience",
    client: "A Prominent UK Manufacturing Firm",
    challenge:
      "An ageing, unreliable backup system was leaving the business vulnerable to data loss and operational disruptions.",
    solution:
      "WebAlora re-engineered their backup and disaster recovery strategy, incorporating both on-premises and cloud solutions, along with a robust DR plan and regular recovery tests.",
    outcome:
      "Improved data protection, reduced downtime by 70%, and ensured seamless production processes, even during unexpected disruptions.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
  },
];

export function CaseStudies() {
  return (
    <section className="py-20 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2070"
        alt="Data Center"
        fill
        className="absolute inset-0 opacity-10 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
        >
          Proven Success: WebAlora&apos;s Backup & Disaster Recovery Case
          Studies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{study.client}</p>
                <p className="text-gray-700 mb-4">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Solution:</strong> {study.solution}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Outcome:</strong> {study.outcome}
                </p>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link
                    href={`#${study.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
