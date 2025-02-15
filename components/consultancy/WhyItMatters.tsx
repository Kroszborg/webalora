"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Zap,
  FileQuestion,
  Scale,
  TrendingDown,
  DollarSign,
} from "lucide-react";

const challenges = [
  {
    title: "Outdated IT Infrastructure",
    icon: Zap,
    description: "Inefficient systems slow down operations and increase costs.",
  },
  {
    title: "Cybersecurity Risks",
    icon: Shield,
    description:
      "60% of UK businesses suffer cyberattacks due to weak security policies.",
  },
  {
    title: "Lack of IT Roadmap",
    icon: FileQuestion,
    description:
      "Without a clear IT strategy, businesses struggle to scale and innovate.",
  },
  {
    title: "Compliance & Regulatory Issues",
    icon: Scale,
    description:
      "Strict adherence to data regulations is crucial for many industries.",
  },
  {
    title: "Inefficient IT Spending",
    icon: TrendingDown,
    description:
      "Wasted resources on unnecessary technology lead to budget overruns.",
  },
  {
    title: "Digital Transformation Challenges",
    icon: DollarSign,
    description:
      "Many businesses struggle to adapt to rapidly evolving digital landscapes.",
  },
];

export function WhyItMatters() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full filter blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-900"
        >
          Why IT Consultancy Matters for Your Business
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
        >
          The right IT strategy can be the difference between business growth
          and operational inefficiency. With 70% of digital transformation
          projects failing due to poor planning, it&apos;s critical to have
          experienced IT consultants who understand your industry&apos;s
          challenges and opportunities.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-filter backdrop-blur-sm border border-white/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-2 rounded-lg bg-blue-500/10 mr-3">
                      <challenge.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
