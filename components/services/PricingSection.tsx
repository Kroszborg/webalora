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
import { Check, ArrowRight, ChevronDown, ChevronUp, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Professional",
    description: "Essential cybersecurity & IT support for small businesses",
    features: [
      "Monthly Simulated Phishing Testing",
      "Comprehensive Premium Cybersecurity Training",
      "Microsoft 365 (M365) Monitoring & Best Practices Configuration",
      "DNS Protection",
      "Next-gen Antivirus (AV)",
      "Endpoint Detection & Response (EDR)",
      "Ransomware Encryption Protection",
      "Managed Extended Detection & Response (MXDR)",
      "24/7 Hands-on SOC that Remediates for You",
      "Shadow IT Discovery",
      "GDPR/PDA Compliance",
    ],
    additionalFeatures: [
      "24/7 System Monitoring",
      "Unlimited Remote Support",
      "Data Backup & Recovery",
      "Business VOIP Support",
      "Hardware & Microsoft License Discounts",
    ],
    highlighted: false,
  },
  {
    name: "Advanced",
    description:
      "Advanced cybersecurity & IT management for growing businesses",
    features: [
      "All Professional Features",
      "Secure all email (incoming, outgoing & internal)",
      "Advanced AI-based anti-phishing & anti-spam filtering",
      "Email-based malware prevention & protection from zero-day threats",
      "File Sanitisation (CDR) & Malicious URL Protection",
      "Privilege Access Management (PAM) & Zero-Trust Application Control",
      "Patch Management (1st & 3rd Party) & Vulnerability Scanning",
      "Firewall Integration",
    ],
    additionalFeatures: [
      "Onsite Support",
      "Network Monitoring & Maintenance",
      "Mobile Device Management & OS Update Management",
      "Microsoft Business Premium Available",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description:
      "Complete compliance, security, & IT support for high-risk organisations",
    features: [
      "All Advanced Features",
      "Data Loss Prevention (DLP) & Email Encryption",
      "DMARC Management & Compliance Remediation Reporting",
      "Asset Inventory & Attack Surface Visibility",
      "SIEM & Log Aggregation",
      "Employee Training & Support",
    ],
    additionalFeatures: [
      "Project Labour Included",
      "Networking Hardware & Setup Provided",
      "Procurement Assistance",
    ],
    highlighted: false,
  },
];

const featureComparison = [
  {
    category: "🛡️ Core Cybersecurity Protection",
    features: [
      {
        name: "Next-gen Antivirus (AV)",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Endpoint Detection & Response (EDR)",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Ransomware Encryption Protection",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Managed Extended Detection & Response (MXDR)",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "24/7 Hands-on Security Operations Centre (SOC)",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Shadow IT Discovery",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Privilege Access Management (PAM)",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Zero-Trust Application Control",
        pro: false,
        advanced: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "📧 Email & Web Security",
    features: [
      {
        name: "Secure all email (incoming, outgoing & internal)",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Advanced AI-based anti-phishing",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Anti-spam filtering",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Email-Based Malware Prevention",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Protection from zero-day malware (File Sandboxing)",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "File sanitisation (CDR)",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Malicious URL protection (URL Reputation)",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "URL click-time protection (URL Rewriting)",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Protection from zero-day malicious URLs (URL Sandboxing)",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Account takeover prevention (Anomalies)",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Unauthorised applications detection (Shadow IT)",
        pro: false,
        advanced: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "🖥️ Microsoft 365 Security & Compliance",
    features: [
      { name: "M365 Monitoring", pro: true, advanced: true, enterprise: true },
      {
        name: "M365 Best Practices Configuration",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Data Loss Prevention (DLP)",
        pro: false,
        advanced: false,
        enterprise: true,
      },
      {
        name: "Email Encryption",
        pro: false,
        advanced: false,
        enterprise: true,
      },
      {
        name: "DMARC Management",
        pro: false,
        advanced: false,
        enterprise: true,
      },
      {
        name: "Compliance Remediation Reporting",
        pro: false,
        advanced: false,
        enterprise: true,
      },
      {
        name: "GDPR/PDA Compliance",
        pro: true,
        advanced: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "🌍 Network & Endpoint Protection",
    features: [
      { name: "DNS Protection", pro: true, advanced: true, enterprise: true },
      {
        name: "Firewall Integration",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Vulnerability Scanning",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "1st Party Patch Management",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "3rd Party Patch Management",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Asset Inventory & Attack Surface Visibility",
        pro: false,
        advanced: false,
        enterprise: true,
      },
      {
        name: "SIEM & Log Aggregation",
        pro: false,
        advanced: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "🛡️ IT Security Training & Awareness",
    features: [
      {
        name: "Monthly Simulated Phishing Testing",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Comprehensive Premium Cybersecurity Training",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Employee Training & Support",
        pro: false,
        advanced: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "⚙️ IT Management & Support",
    features: [
      {
        name: "24/7 System Monitoring",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Unlimited Remote Support",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      { name: "Onsite Support", pro: false, advanced: true, enterprise: true },
      {
        name: "Project Labour Included",
        pro: false,
        advanced: false,
        enterprise: true,
      },
      {
        name: "Microsoft Business Premium Included",
        pro: false,
        advanced: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "🔧 IT Infrastructure & Device Management",
    features: [
      {
        name: "Network Monitoring & Maintenance",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Networking Hardware & Setup Provided",
        pro: false,
        advanced: false,
        enterprise: true,
      },
      {
        name: "Mobile Device Management & Support",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "OS Update Management",
        pro: false,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Data Backup & Recovery",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Business VOIP Support",
        pro: true,
        advanced: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "💰 Cost Savings & Discounts",
    features: [
      {
        name: "Procurement Assistance",
        pro: false,
        advanced: false,
        enterprise: true,
      },
      {
        name: "Hardware Discounts",
        pro: true,
        advanced: true,
        enterprise: true,
      },
      {
        name: "Microsoft License Discounts",
        pro: true,
        advanced: true,
        enterprise: true,
      },
    ],
  },
];

export function PricingSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section
      id="pricing-section"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
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
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {tier.additionalFeatures && (
                    <Accordion type="single" collapsible className="mt-4">
                      <AccordionItem value="additional-features">
                        <AccordionTrigger className="text-blue-600">
                          See more features
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-3">
                            {tier.additionalFeatures.map((feature, index) => (
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
                    <a
                      href="/contact"
                      className="flex items-center justify-center w-full h-full"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
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
            Feature Comparison
          </h3>
          <div className="space-y-4">
            {featureComparison.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-4 sm:px-6 py-4 text-left font-semibold text-blue-900 flex justify-between items-center hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => toggleCategory(category.category)}
                >
                  <span className="text-sm sm:text-base">
                    {category.category}
                  </span>
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
                      <div className="px-4 sm:px-6 py-4 bg-blue-50 overflow-x-auto">
                        <table className="w-full table-auto">
                          <thead>
                            <tr>
                              <th className="text-left font-semibold text-blue-900 pb-2 pr-4 text-xs sm:text-sm">
                                Feature
                              </th>
                              <th className="text-center font-semibold text-blue-900 pb-2 px-2 text-xs sm:text-sm">
                                Pro
                              </th>
                              <th className="text-center font-semibold text-blue-900 pb-2 px-2 text-xs sm:text-sm">
                                Advanced
                              </th>
                              <th className="text-center font-semibold text-blue-900 pb-2 pl-2 text-xs sm:text-sm">
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
                                <td className="py-2 text-blue-800 pr-2 text-xs sm:text-sm">
                                  {feature.name}
                                </td>
                                <td className="text-center py-2 px-2">
                                  {feature.pro ? (
                                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mx-auto" />
                                  )}
                                </td>
                                <td className="text-center py-2 px-2">
                                  {feature.advanced ? (
                                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mx-auto" />
                                  )}
                                </td>
                                <td className="text-center py-2 px-2">
                                  {feature.enterprise ? (
                                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mx-auto" />
                                  )}
                                </td>
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
