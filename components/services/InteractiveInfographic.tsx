"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Bug, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const threats = [
  {
    icon: Lock,
    name: "Phishing Attacks",
    statistic: "45% of UK cybercrime",
    impact: "£2.5M average cost",
    description:
      "Deceptive emails or messages designed to trick employees into revealing sensitive information.",
    prevention:
      "Regular employee training and advanced email filtering systems.",
  },
  {
    icon: Shield,
    name: "Ransomware",
    statistic: "1,500+ UK attacks yearly",
    impact: "£50,000–£200,000 average ransom",
    description:
      "Malware that encrypts your files and demands a ransom to unlock them.",
    prevention:
      "Maintain robust backups and ensure up-to-date antivirus protection.",
  },
  {
    icon: Bug,
    name: "Unpatched Vulnerabilities",
    statistic: "60% of data breaches",
    impact: "Network-wide exposure",
    description: "Security gaps in systems that cybercriminals exploit.",
    prevention: "Implement regular patch management and system updates.",
  },
  {
    icon: Users,
    name: "Insider Threats",
    statistic: "25% of security incidents",
    impact: "Data leaks & compliance violations",
    description: "Security risks posed by employees, contractors, or vendors.",
    prevention: "Enforce access controls and monitor activity logs.",
  },
];

const quiz = {
  question: "Which cyber threat is the costliest to UK SMEs?",
  answer: "Ransomware",
  explanation:
    "Ransomware attacks cause the highest average financial damage due to combined costs of ransom payments, system recovery, and business disruption.",
};

export function InteractiveInfographic() {
  const [selectedThreat, setSelectedThreat] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Top Cybersecurity Threats Facing UK Businesses
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {threats.map((threat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onClick={() =>
                setSelectedThreat(selectedThreat === index ? null : index)
              }
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-600">
                    <threat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{threat.name}</h3>
                </div>
                <p className="text-blue-200 font-semibold mb-2">
                  {threat.statistic}
                </p>
                <p className="text-red-300 font-medium">{threat.impact}</p>
              </div>

              <AnimatePresence>
                {selectedThreat === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 z-10 mt-2 bg-white text-gray-900 p-6 rounded-xl shadow-xl"
                  >
                    <h4 className="font-semibold mb-2">What It Is:</h4>
                    <p className="mb-4">{threat.description}</p>
                    <h4 className="font-semibold mb-2">Prevention Tip:</h4>
                    <p>{threat.prevention}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Test Your Knowledge</h3>
            <p className="text-xl mb-6">{quiz.question}</p>
            {!showAnswer ? (
              <Button
                onClick={() => setShowAnswer(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Show Answer
              </Button>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <p className="text-2xl font-bold text-blue-300">
                  {quiz.answer}
                </p>
                <p className="text-gray-300">{quiz.explanation}</p>
                <Button
                  onClick={() => setShowAnswer(false)}
                  variant="outline"
                  className="border-white/20 text-black hover:bg-white/10"
                >
                  Try Again
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
