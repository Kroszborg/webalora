"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const questions = [
  {
    question:
      "Do you regularly apply patches and updates for all operating systems, applications, and devices?",
    options: [
      "Yes, within 1 week of release",
      "Occasionally (only major updates)",
      "Rarely or never",
    ],
  },
  {
    question:
      "Do you enforce MFA for email, cloud services, and critical applications?",
    options: [
      "Yes, required for all users",
      "Only for admins or remote access",
      "No, or uncertain",
    ],
  },
  {
    question: "How often do you backup critical data and test restoration?",
    options: [
      "Daily with regular restore tests",
      "Weekly or monthly backups",
      "Rarely or never test restores",
    ],
  },
  {
    question:
      "Do you provide ongoing cybersecurity training (e.g., phishing simulations) for all staff?",
    options: [
      "Yes, at least quarterly",
      "Annually, or only during onboarding",
      "Not at all",
    ],
  },
  {
    question:
      "Is there a documented plan that outlines procedures and responsibilities during a cyber incident?",
    options: [
      "Yes, fully documented and tested",
      "Some guidelines exist, but not tested",
      "No formal plan",
    ],
  },
  {
    question:
      "Do you regularly review user privileges and limit admin rights to only those who need them?",
    options: [
      "Yes, reviewed at least quarterly",
      "Occasionally, upon staff changes",
      "Not consistently or at all",
    ],
  },
  {
    question:
      "Do you have endpoint protection (firewall, antivirus, EDR) on all company devices (including remote workers)?",
    options: [
      "Yes, a managed, uniform solution for all devices",
      "Partially—some devices are covered, some aren't",
      "Unsure or no comprehensive solution",
    ],
  },
  {
    question:
      "Do you conduct routine vulnerability scanning or penetration testing of your network and applications?",
    options: [
      "Yes, at least quarterly",
      "Annually or less frequently",
      "Never or ad-hoc only",
    ],
  },
];

export function SecurityReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    const score = answers.reduce((total, answer) => total + (2 - answer), 0);
    const maxScore = questions.length * 2;
    const percentage = (score / maxScore) * 100;

    if (percentage >= 80)
      return {
        level: "Low Risk",
        label: "Advanced",
        icon: CheckCircle,
        color: "text-green-400",
      };
    if (percentage >= 50)
      return {
        level: "Moderate Risk",
        label: "Intermediate",
        icon: AlertTriangle,
        color: "text-yellow-400",
      };
    return {
      level: "High Risk",
      label: "Beginner",
      icon: ShieldAlert,
      color: "text-red-400",
    };
  };

  const openCalendly = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/behzad-webalora/30min",
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Image
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
        alt="Cybersecurity Background"
        layout="fill"
        objectFit="cover"
        className="opacity-10"
        priority
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Security Readiness Evaluation Quiz
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
          >
            {!showResult ? (
              <>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-semibold text-white">
                    Question {currentQuestion + 1} of {questions.length}
                  </h3>
                  <div className="w-32 h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 ease-out"
                      style={{
                        width: `${
                          ((currentQuestion + 1) / questions.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xl mb-6 text-blue-100">
                      {questions[currentQuestion].question}
                    </p>
                    <div className="space-y-4">
                      {questions[currentQuestion].options.map(
                        (option, index) => (
                          <Button
                            key={index}
                            onClick={() => handleAnswer(index)}
                            className="w-full text-left justify-start bg-white/10 hover:bg-white/20 text-white py-4 px-6 rounded-lg text-lg"
                          >
                            {option}
                          </Button>
                        )
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-3xl font-semibold mb-6 text-white">
                  Your Security Readiness Score
                </h3>
                <div className="mb-8">
                  {(() => {
                    const {
                      level,
                      label,
                      icon: Icon,
                      color,
                    } = calculateScore();
                    return (
                      <div className="flex flex-col items-center">
                        <Icon className={`w-24 h-24 ${color} mb-4`} />
                        <p className="text-4xl font-bold mb-2 text-white">
                          {level}
                        </p>
                        <p className={`text-2xl ${color}`}>{label}</p>
                      </div>
                    );
                  })()}
                </div>
                <p className="text-xl mb-8 text-blue-100">
                  Based on your answers, we&apos;ve assessed your current
                  cybersecurity posture. To discuss your results and explore how
                  we can enhance your security, please book a consultation with
                  our experts.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl"
                >
                  <a
                    href="#"
                    onClick={openCalendly}
                    className="flex items-center"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
