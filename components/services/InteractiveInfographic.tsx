"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Bug, Users, ArrowRight } from "lucide-react";
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

const quizQuestions = [
  {
    question: "Which cyber threat is the costliest to UK SMEs?",
    options: [
      "Phishing Attacks",
      "Ransomware",
      "Unpatched Vulnerabilities",
      "Insider Threats",
    ],
    answer: "Ransomware",
    explanation:
      "Ransomware attacks cause the highest average financial damage due to combined costs of ransom payments, system recovery, and business disruption.",
  },
  {
    question:
      "What percentage of UK cybercrime is attributed to phishing attacks?",
    options: ["25%", "35%", "45%", "55%"],
    answer: "45%",
    explanation:
      "Phishing attacks account for 45% of UK cybercrime, making it one of the most prevalent threats to businesses.",
  },
  {
    question: "How many ransomware attacks occur in the UK annually?",
    options: ["500+", "1,000+", "1,500+", "2,000+"],
    answer: "1,500+",
    explanation:
      "The UK faces over 1,500 ransomware attacks each year, highlighting the severity of this threat.",
  },
  {
    question:
      "What percentage of data breaches are caused by unpatched vulnerabilities?",
    options: ["40%", "50%", "60%", "70%"],
    answer: "60%",
    explanation:
      "60% of data breaches are attributed to unpatched vulnerabilities, emphasizing the importance of regular system updates.",
  },
  {
    question:
      "What proportion of security incidents are caused by insider threats?",
    options: ["15%", "20%", "25%", "30%"],
    answer: "25%",
    explanation:
      "Insider threats account for 25% of security incidents, underlining the need for robust internal security measures.",
  },
  {
    question: "Which cybersecurity framework is widely adopted in the UK?",
    options: ["NIST", "ISO 27001", "COBIT", "HIPAA"],
    answer: "ISO 27001",
    explanation:
      "ISO 27001 is the most widely adopted cybersecurity framework in the UK, providing a comprehensive approach to information security management.",
  },
  {
    question: "What is the average cost of a data breach for UK companies?",
    options: ["£1.7 million", "£2.9 million", "£3.9 million", "£5.1 million"],
    answer: "£3.9 million",
    explanation:
      "According to recent studies, the average cost of a data breach for UK companies is approximately £3.9 million, highlighting the significant financial impact of cyber incidents.",
  },
  {
    question:
      "What percentage of UK businesses have experienced a cyberattack in the past 12 months?",
    options: ["25%", "39%", "52%", "68%"],
    answer: "39%",
    explanation:
      "Approximately 39% of UK businesses reported experiencing a cyberattack in the past 12 months, underscoring the prevalence of cyber threats.",
  },
  {
    question: "Which sector in the UK is most targeted by cybercriminals?",
    options: ["Retail", "Healthcare", "Finance", "Manufacturing"],
    answer: "Finance",
    explanation:
      "The finance sector in the UK is the most targeted by cybercriminals due to the potential for high financial gains and access to sensitive data.",
  },
  {
    question:
      "What is the primary goal of the UK's National Cyber Security Centre (NCSC)?",
    options: [
      "Law enforcement",
      "Threat intelligence",
      "Incident response",
      "Public awareness",
    ],
    answer: "Incident response",
    explanation:
      "The NCSC's primary goal is to provide incident response capabilities to major cyber incidents and improve the UK's cyber resilience.",
  },
  {
    question:
      "What percentage of UK businesses have a formal cybersecurity incident response plan?",
    options: ["33%", "47%", "58%", "72%"],
    answer: "47%",
    explanation:
      "Only 47% of UK businesses have a formal cybersecurity incident response plan, indicating a significant gap in preparedness for many organisations.",
  },
  {
    question: "Which of the following is NOT a principle of the UK GDPR?",
    options: [
      "Data minimization",
      "Purpose limitation",
      "Data maximization",
      "Storage limitation",
    ],
    answer: "Data maximization",
    explanation:
      "Data maximization is not a principle of UK GDPR. The regulation emphasizes data minimization, which is the opposite approach.",
  },
];

export function InteractiveInfographic() {
  const [selectedThreat, setSelectedThreat] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(
      (prevIndex) => (prevIndex + 1) % quizQuestions.length
    );
    setShowAnswer(false);
    setSelectedOption(null);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

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
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl cursor-pointer  hover:bg-white/20">
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

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Test Your Knowledge</h3>
            <div className="mb-6">
              <p className="text-xl mb-4">{currentQuestion.question}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    variant={selectedOption === option ? "default" : "outline"}
                    className={`w-full ${
                      showAnswer && option === currentQuestion.answer
                        ? "bg-green-500 hover:bg-green-600 text-blue-900"
                        : showAnswer && option === selectedOption
                        ? "bg-red-500 hover:bg-red-600 text-blue-900"
                        : "text-blue-900"
                    }`}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6"
              >
                <p className="text-lg font-semibold mb-2">
                  {selectedOption === currentQuestion.answer
                    ? "Correct!"
                    : "Incorrect."}
                </p>
                <p className="text-gray-300">{currentQuestion.explanation}</p>
              </motion.div>
            )}
            <Button
              onClick={handleNextQuestion}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Next Question
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
