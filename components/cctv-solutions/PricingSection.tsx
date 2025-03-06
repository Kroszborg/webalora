"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useCalendly } from "@/lib/hooks/useCalendly";

const packages = [
  {
    title: "Starter Package",
    subtitle: "Essential Protection for Small Businesses",
    description:
      "Perfect for retail shops, cafés, small offices, and local businesses that need cost-effective, reliable security.",
    price: "£1,499",
    monthly: "£39",
    features: [
      "4 HD Cameras (with day & night vision)",
      "Live Mobile Access & Instant Motion Alerts",
      "7-Day Cloud Storage",
      "Professional Installation & Setup",
      "Annual System Health Check",
    ],
    highlighted: false,
  },
  {
    title: "Advanced Package",
    subtitle: "Smarter Surveillance for Growing Businesses",
    description:
      "Ideal for warehouses, corporate offices, and medium-sized businesses that demand enhanced surveillance and smart features.",
    price: "£3,350",
    monthly: "£79",
    features: [
      "8 AI-Enhanced Cameras (with motion tracking & facial recognition)",
      "Live Mobile & Web Access",
      "30-Day Cloud & Local Storage",
      "AI-Driven Motion & Intrusion Alerts",
      "Business Hours Monitoring Support",
      "Quarterly Maintenance Checks",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise Package",
    subtitle: "Maximum Protection for Large Operations",
    description:
      "For factories, multi-site businesses, and high-risk industries that require comprehensive, 24/7 protection with premium features.",
    price: "£4,950",
    monthly: "£129",
    features: [
      "16+ 4K AI-Powered Cameras (with night vision, facial recognition, object tracking)",
      "Live 24/7 Professional Monitoring",
      "90-Day Cloud & On-Premise Storage",
      "Instant Threat Response & Emergency Dispatch Coordination",
      "Cybersecure Video Encryption",
      "Priority On-Site Support & Repairs",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  const { openCalendly } = useCalendly(
    "https://calendly.com/behzad-webalora/30min"
  );

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
            CCTV Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-700 max-w-3xl mx-auto"
          >
            Tailored Security for Every Business
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-lg overflow-hidden ${
                pkg.highlighted
                  ? "transform scale-105 shadow-xl border-2 border-blue-500"
                  : "shadow-lg border border-gray-200"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <div className={`bg-white p-6 ${pkg.highlighted ? "pt-10" : ""}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {pkg.title}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{pkg.subtitle}</p>
                <p className="text-gray-600 mb-6 h-12">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {pkg.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    one-off installation
                  </span>
                  <span className="block text-lg mt-2">
                    + <span className="font-semibold">{pkg.monthly}</span> per
                    month
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-6 mb-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className={`w-full ${
                    pkg.highlighted
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                  onClick={openCalendly}
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-700 mb-6">
            Need a custom solution? Contact us for bespoke packages tailored to
            your unique security requirements.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-white hover:bg-gray-50"
          >
            <Link href="/contact" className="font-medium">
              Request a Custom Quote
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
