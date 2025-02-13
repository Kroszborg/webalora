"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react"; // Import React

const tiers = [
  {
    name: "WebAlora Go",
    description: "Essential cybersecurity for small businesses",
    features: [
      "Monthly Simulated Phishing Testing",
      "Comprehensive Premium Cybersecurity Training",
      "M365 Monitoring",
      "M365 Best Practices Configuration",
      "DNS Protection",
      "Next-gen AV",
      "Endpoint Detection Response (EDR)",
      "Ransomware Encryption Protection",
      "Managed eXtended Detection Response (MXDR)",
      "24/7 Hands-on SOC that Remediates for You",
      "ShadowIT Discovery",
    ],
    highlighted: false,
  },
  {
    name: "WebAlora Go +",
    description: "Advanced protection for growing businesses",
    features: [
      "All WebAlora Go features",
      "Secure all email - incoming, outgoing and internal",
      "Advanced AI-based anti-phishing",
      "Anti-spam filtering",
      "Email Based Malware Prevention",
      "Protection from zero-day malware (File Sandboxing)",
      "File sanitization (CDR)",
      "Malicious URL protection (URL Reputation)",
      "URL click-time protection (URL Rewriting)",
      "Protection from zero-day malicious URLs (URL Sandboxing)",
      "Account takeover prevention (Anomalies)",
      "Unauthorised applications detections (Shadow IT)",
      "Privilege Access Management",
      "Zero-Trust Application Control",
      "1st Party Patch Management",
      "3rd Party Patch Management",
      "Vulnerability Scanning",
      "Firewall Integration",
    ],
    highlighted: true,
  },
  {
    name: "WebAlora Go Compliance",
    description: "Comprehensive solution for compliance-focused organizations",
    features: [
      "All WebAlora Go + features",
      "Data loss prevention (DLP)",
      "Email Encryption",
      "DMARC Management",
      "Compliance Remediation Reporting",
      "Asset Inventory & Attack Surface Visibility",
      "SIEM & Log Aggregation",
      "Employee Training and Support",
      "GDPR/PDA Compliance",
    ],
    highlighted: false,
  },
];

const featureComparison = [
  {
    category: "Email Security",
    features: [
      "Secure all email - incoming, outgoing and internal",
      "Advanced AI-based anti-phishing",
      "Anti-spam filtering",
      "Email Based Malware Prevention",
      "Protection from zero-day malware (File Sandboxing)",
      "File sanitization (CDR)",
      "Malicious URL protection (URL Reputation)",
      "URL click-time protection (URL Rewriting)",
      "Protection from zero-day malicious URLs (URL Sandboxing)",
      "Account takeover prevention (Anomalies)",
      "Unauthorised applications detections (Shadow IT)",
      "Data loss prevention (DLP)",
      "Email Encryption",
      "DMARC Management",
    ],
  },
  {
    category: "Endpoints",
    features: [
      "DNS Protection",
      "Next-gen AV",
      "Endpoint Detection Response (EDR)",
      "Ransomware Encryption Protection",
      "Managed eXtended Detection Response (MXDR)",
      "24/7 Hands-on SOC that Remediates for You",
      "ShadowIT Discovery",
      "Privilege Access Management",
      "Zero-Trust Application Control",
      "1st Party Patch Management",
      "3rd Party Patch Management",
      "Vulnerability Scanning",
      "Compliance Remediation Reporting",
      "Firewall Integration",
      "Asset Inventory & Attack Surface Visibility",
      "SIEM & Log Aggregation",
    ],
  },
  {
    category: "Compliance & Training",
    features: [
      "Monthly Simulated Phishing Testing",
      "Comprehensive Premium Cybersecurity Training",
      "M365 Monitoring",
      "M365 Best Practices Configuration",
      "Employee Training and Support",
      "GDPR/PDA Compliance",
    ],
  },
];

const faqs = [
  {
    question: "What is included in the Monthly Simulated Phishing Testing?",
    answer:
      "Our Monthly Simulated Phishing Testing includes crafted phishing emails sent to your employees to test their awareness and response. We provide detailed reports and recommendations for improvement.",
  },
  {
    question: "Can we upgrade or downgrade between WebAlora Go tiers?",
    answer:
      "Yes, you can upgrade or downgrade between WebAlora Go tiers as your business needs change. We recommend reviewing your cybersecurity needs quarterly to ensure you have the right level of protection.",
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Comprehensive Cybersecurity Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Choose the right level of protection for your business with our
            tiered cybersecurity services. From essential protection to
            comprehensive compliance solutions, we&apos;ve got you covered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full ${
                  tier.highlighted
                    ? "border-blue-500 shadow-blue-500/25 shadow-lg"
                    : "border-gray-200 shadow-gray-200/25"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Feature Comparison
          </h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Feature</TableHead>
                  <TableHead>WebAlora Go</TableHead>
                  <TableHead>WebAlora Go +</TableHead>
                  <TableHead>WebAlora Go Compliance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {featureComparison.map((category) => (
                  <React.Fragment key={category.category}>
                    <TableRow>
                      <TableCell colSpan={4} className="font-bold bg-gray-100">
                        {category.category}
                      </TableCell>
                    </TableRow>
                    {category.features.map((feature, index) => (
                      <TableRow key={index}>
                        <TableCell>{feature}</TableCell>
                        <TableCell>
                          {tiers[0].features.includes(feature) && (
                            <Check className="h-5 w-5 text-green-500" />
                          )}
                        </TableCell>
                        <TableCell>
                          {tiers[1].features.includes(feature) && (
                            <Check className="h-5 w-5 text-green-500" />
                          )}
                        </TableCell>
                        <TableCell>
                          {tiers[2].features.includes(feature) && (
                            <Check className="h-5 w-5 text-green-500" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-xl shadow-lg"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
