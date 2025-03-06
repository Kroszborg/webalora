"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";

const commitments = [
  {
    title: "Innovation & Scalability",
    description:
      "Our global team pushes boundaries to ensure our solutions scale as you grow.",
    icon: Zap,
  },
  {
    title: "Security & Compliance",
    description:
      "We stay ahead of regulatory standards and security best practices to safeguard your data.",
    icon: Shield,
  },
  {
    title: "Client-Centred Focus",
    description:
      "We measure our success by your success, approaching every project with a commitment to excellence and collaboration.",
    icon: Target,
  },
];

export function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Corporate Headquarters
            </h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                WebAlora Limited
              </h3>
              <p className="text-gray-700">
                71–75 Shelton Street
                <br />
                Covent Garden, London
                <br />
                United Kingdom, WC2H 9JQ
              </p>
              <p className="mt-4 text-gray-600 italic">
                Centrally located in London&apos;s bustling tech district, our
                HQ is the hub of strategy, research, and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Our Commitment
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {commitments.map((commitment, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/50 backdrop-blur-sm rounded-lg p-6 neumorphism-shadow"
                          >
                            <commitment.icon className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {commitment.title}
                            </h3>
                            <p className="text-gray-600">{commitment.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
        </div>
      </div>
    </section>
  );
}
