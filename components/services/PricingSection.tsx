"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Professional",
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
    name: "Advanced",
    description: "Advanced protection for growing businesses",
    features: [
      "All Professional features",
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
    name: "Enterprise",
    description: "Comprehensive solution for compliance-focused organizations",
    features: [
      "All Advanced features",
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
    category: "Devices (Endpoints)",
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
];

export function PricingSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const isFeatureIncluded = (feature: string, tierIndex: number) => {
    if (tierIndex === 2) {
      return true; // Enterprise tier includes all features
    }
    if (tierIndex === 1) {
      // Advanced tier includes all Professional features and its own features
      return (
        tiers[0].features.includes(feature) ||
        tiers[1].features.includes(feature)
      );
    }
    return tiers[tierIndex].features.includes(feature);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-900"
          >
            Comprehensive Cybersecurity Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-700 max-w-3xl mx-auto"
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
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">
                    {tier.name}
                  </h3>
                  <p className="text-blue-700 mb-4">{tier.description}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {tier.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {tier.features.length > 5 && (
                    <Accordion type="single" collapsible className="mt-4">
                      <AccordionItem value="more-features">
                        <AccordionTrigger className="text-blue-600">
                          See more features
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-3">
                            {tier.features.slice(5).map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-blue-800">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-blue-700 hover:bg-blue-800"
                    } text-white`}
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
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">
            Multi-Solution Comparison
          </h3>
          <div className="space-y-4">
            {featureComparison.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left font-semibold text-blue-900 flex justify-between items-center hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => toggleCategory(category.category)}
                >
                  {category.category}
                  {openCategory === category.category ? (
                    <ChevronUp className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-500" />
                  )}
                </button>
                <AnimatePresence>
                  {openCategory === category.category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 py-4 bg-blue-50">
                        <table className="w-full">
                          <thead>
                            <tr>
                              <th className="text-left font-semibold text-blue-900 pb-2">
                                Feature
                              </th>
                              <th className="text-center font-semibold text-blue-900 pb-2">
                                Professional
                              </th>
                              <th className="text-center font-semibold text-blue-900 pb-2">
                                Advanced
                              </th>
                              <th className="text-center font-semibold text-blue-900 pb-2">
                                Enterprise
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.features.map((feature, index) => (
                              <tr
                                key={index}
                                className="border-t border-blue-100"
                              >
                                <td className="py-2 text-blue-800">
                                  {feature}
                                </td>
                                {tiers.map((tier, tierIndex) => (
                                  <td
                                    key={tierIndex}
                                    className="text-center py-2"
                                  >
                                    {isFeatureIncluded(feature, tierIndex) ? (
                                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                                    ) : (
                                      <span className="text-red-500">-</span>
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
