"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, AlertTriangle, UserX, Cloud } from "lucide-react";
import { Input } from "@/components/ui/input";

const downtimeCosts = [
  {
    icon: Clock,
    title: "Average Downtime Cost",
    description: "£5,600 per minute for large UK enterprises",
    impacts: [
      "Lost Revenue: Missed customer transactions",
      "Wasted Payroll: Unproductive paid time",
      "Reputation Damage: Customer trust erosion",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Common Causes",
    description: "Multiple factors contribute to system failures",
    impacts: [
      "Hardware Failures: Aging equipment",
      "Cyber Attacks: Ransomware & DDoS",
      "Human Error: Misconfigurations",
    ],
  },
  {
    icon: UserX,
    title: "Industry Impact",
    description: "Sector-specific consequences",
    impacts: [
      "Finance: Regulatory fines & trust loss",
      "Healthcare: Patient safety risks",
      "Retail: Lost sales opportunities",
    ],
  },
  {
    icon: Cloud,
    title: "Duration Statistics",
    description: "6 hours average yearly downtime",
    impacts: [
      "Service Interruption",
      "Data Access Issues",
      "Communication Breakdown",
    ],
  },
];

export function HighCostSection() {
  const [revenue, setRevenue] = useState<number>(1000);
  const [hours, setHours] = useState<number>(6);

  const calculateImpact = () => {
    const hourlyRevenue = revenue;
    const totalLoss = hourlyRevenue * hours;
    return totalLoss.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          The Real Cost of Downtime
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {downtimeCosts.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-100">
                  <cost.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {cost.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{cost.description}</p>
              <ul className="space-y-2">
                {cost.impacts.map((impact, i) => (
                  <li key={i} className="text-sm text-gray-500">
                    • {impact}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-blue-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            Calculate Your Downtime Risk
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Average Hourly Revenue (£)
              </label>
              <Input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Hours of Downtime per Year
              </label>
              <Input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600">Estimated Annual Impact:</p>
              <p className="text-3xl font-bold text-blue-600">
                {calculateImpact()}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
