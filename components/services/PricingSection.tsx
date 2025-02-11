"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check, Info, Plus, ArrowRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Professional",
    description: "Perfect for small businesses getting started with managed IT",
    basePrice: "£1,500",
    userPrice: "£60",
    features: [
      "8×5 business hours support",
      "Unlimited remote & phone support",
      "Basic hardware health checks",
      "Standard AV + firewall policies",
      "Basic cloud support",
      "24/7 monitoring & alerts",
      "Daily cloud backups",
      "VoIP-ready configuration",
    ],
    highlighted: false,
  },
  {
    name: "Advanced",
    description: "Ideal for growing businesses needing enhanced security",
    basePrice: "£2,250",
    userPrice: "£80",
    features: [
      "Priority queue support",
      "Dedicated Service Coordinator",
      "Full patch management",
      "Next-gen endpoint security",
      "Seamless cloud migrations",
      "Advanced network monitoring",
      "Semi-annual DR tests",
      "Hosted VoIP solutions",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Comprehensive solution for larger organizations",
    basePrice: "£3,000",
    userPrice: "£100",
    features: [
      "24/7 support with fastest SLAs",
      "Assigned Account Manager",
      "Real-time performance reporting",
      "AI-driven threat detection",
      "Advanced cloud architecture",
      "Quarterly network optimization",
      "Full DR orchestration",
      "Enterprise Unified Comms",
    ],
    highlighted: false,
  },
];

const addOns = [
  {
    name: "ISO 27001 Implementation",
    price: "£500",
    period: "month",
    description: "Full documentation suite and compliance management",
    note: "Minimum 6-month engagement",
  },
  {
    name: "Advanced Security Suite",
    price: "£15-25",
    period: "user/month",
    description: "SIEM/SOC integration and threat hunting",
  },
  {
    name: "Microsoft 365 Management",
    price: "£3-5",
    period: "user/month",
    description: "Admin fee for fully managed M365 services",
  },
  {
    name: "VoIP / Unified Communications",
    price: "£20",
    period: "user/month",
    description: "Hosted PBX and team messaging",
  },
];

const faqs = [
  {
    question: "What if we have fewer than 15 users?",
    answer:
      "The base retainer still applies, ensuring we cover core overheads like tool licensing, monitoring, and dedicated support staff.",
  },
  {
    question: "Can we upgrade or downgrade tiers later?",
    answer:
      "Absolutely. We offer flexible agreements allowing you to switch tiers as your business grows or needs change.",
  },
  {
    question: "How quickly do you respond to critical issues?",
    answer:
      "Response times depend on your SLA. Our Enterprise Tier guarantees a 1-hour or better response, while Professional and Advanced also have rigorous SLAs for business hours.",
  },
  {
    question: "Are there discounts for large enterprises (100+ users)?",
    answer:
      "Volume-based discounts or custom bundles can be discussed if you have a significantly larger user base or specialized needs.",
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
            Tiered Subscription Model
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We combine a base monthly retainer (covering up to 15 users) with an
            additional per-user cost for those above 15 users. This flexible
            model ensures predictable spending.
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
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{tier.basePrice}</span>
                    <span className="text-gray-600">/month</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="inline-block ml-2 h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Base retainer covers up to 15 users</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="text-sm text-gray-600">
                    +{tier.userPrice}/user/month beyond 15 users
                  </div>
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

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Optional Add-Ons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <Plus className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{addon.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">
                      From {addon.price}/{addon.period}
                    </p>
                    <p className="text-sm text-gray-500">{addon.description}</p>
                    {addon.note && (
                      <p className="text-xs text-blue-600 mt-1">{addon.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            * All prices exclude VAT. Pricing and tiers are subject to change
            based on the complexity of your environment and specific project
            requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
