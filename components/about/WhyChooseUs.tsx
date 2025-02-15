"use client";
import { motion } from "framer-motion";
import { Shield, Users, Clock, Target, Scale, Zap } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Industry-Spanning Expertise",
    description: "Deep knowledge across multiple sectors",
  },
  {
    icon: Users,
    title: "Customised Solutions",
    description: "Tailored IT strategies for your needs",
  },
  {
    icon: Clock,
    title: "Proactive IT Management",
    description: "Preventing issues before they arise",
  },
  {
    icon: Target,
    title: "Trusted Partnership",
    description: "Long-term relationships built on transparency",
  },
  {
    icon: Scale,
    title: "Scalable Solutions",
    description: "Adapting to your growing business needs",
  },
  {
    icon: Zap,
    title: "Dedicated Account Management",
    description: "Personalized support and communication",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc2e_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Why Choose WebAlora?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of having a dedicated, expert IT team by
            your side
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl  border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
