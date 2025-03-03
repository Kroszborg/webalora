"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useCalendly } from "@/lib/hooks/useCalendly";

const questions = [
  {
    question:
      "How would you rate your current IT infrastructure's ability to support your business goals?",
    options: [
      {
        value: "1",
        label: "Inadequate - frequently hinders business operations",
      },
      {
        value: "2",
        label: "Sufficient - meets basic needs but could be improved",
      },
      { value: "3", label: "Good - generally supports business needs well" },
      {
        value: "4",
        label: "Excellent - fully aligned with and enhancing business goals",
      },
    ],
  },
  {
    question:
      "How often does your organisation conduct cybersecurity risk assessments?",
    options: [
      { value: "1", label: "Never or rarely" },
      { value: "2", label: "Annually" },
      { value: "3", label: "Quarterly" },
      { value: "4", label: "Monthly or more frequently" },
    ],
  },
  {
    question: "To what extent has your business adopted cloud technologies?",
    options: [
      {
        value: "1",
        label: "Not at all - we rely entirely on on-premises solutions",
      },
      { value: "2", label: "Partially - we use some cloud services" },
      { value: "3", label: "Significantly - most of our IT is cloud-based" },
      { value: "4", label: "Fully - we have a comprehensive cloud strategy" },
    ],
  },
  {
    question:
      "How would you describe your organisation's approach to IT budget allocation?",
    options: [
      {
        value: "1",
        label: "Reactive - we spend on IT only when absolutely necessary",
      },
      {
        value: "2",
        label:
          "Basic - we have a set IT budget but it's not strategically allocated",
      },
      {
        value: "3",
        label: "Proactive - we invest in IT regularly to improve operations",
      },
      {
        value: "4",
        label:
          "Strategic - IT investment is a key part of our business strategy",
      },
    ],
  },
  {
    question:
      "How well-defined is your organisation's IT governance and compliance framework?",
    options: [
      {
        value: "1",
        label: "Non-existent - we don't have formal IT governance",
      },
      {
        value: "2",
        label: "Basic - we have some policies but they're not comprehensive",
      },
      {
        value: "3",
        label:
          "Developed - we have a structured framework but it could be improved",
      },
      {
        value: "4",
        label: "Comprehensive - we have a robust, well-maintained framework",
      },
    ],
  },
];

export function AssessmentQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { openCalendly } = useCalendly(
    "https://calendly.com/behzad-webalora/30min"
  );

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const total = answers.reduce(
      (sum, answer) => sum + Number.parseInt(answer),
      0
    );
    const percentage = (total / (questions.length * 4)) * 100;
    return Math.round(percentage);
  };

  const getRecommendations = (score: number) => {
    if (score < 25) {
      return "Your IT strategy needs significant improvement. Consider a comprehensive IT audit and strategy overhaul.";
    } else if (score < 50) {
      return "There's room for improvement in your IT strategy. Focus on addressing key weaknesses and developing a more robust approach.";
    } else if (score < 75) {
      return "Your IT strategy is on the right track. Look for opportunities to further optimise and align with business goals.";
    } else {
      return "Excellent IT strategy! Continue to innovate and stay ahead of emerging trends and technologies.";
    }
  };

  return (
    <section
      id="assessment"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              IT Strategy Readiness Assessment
            </CardTitle>
            <CardDescription className="text-center">
              Evaluate your organisation&apos;s IT readiness in just 5 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-4">
                    Question {currentQuestion + 1} of {questions.length}
                  </h3>
                  <p className="mb-4">{questions[currentQuestion].question}</p>
                  <RadioGroup
                    onValueChange={handleAnswer}
                    className="space-y-3"
                  >
                    {questions[currentQuestion].options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={`option-${option.value}`}
                        />
                        <Label htmlFor={`option-${option.value}`}>
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Your IT Strategy Readiness Score
                  </h3>
                  <div className="flex justify-center items-center mb-6">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-gray-200 stroke-current"
                          strokeWidth="10"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        ></circle>
                        <circle
                          className="text-blue-600 progress-ring__circle stroke-current"
                          strokeWidth="10"
                          strokeLinecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          strokeDasharray={`${
                            calculateScore() * 2.51327
                          } 251.327`}
                          strokeDashoffset="0"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">
                          {calculateScore()}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center mb-6">
                    {getRecommendations(calculateScore())}
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Next Steps
                    </h4>
                    <p>
                      Book a free consultation with our IT strategy experts to
                      discuss your results and get Personalised recommendations
                      for improving your IT readiness.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
          <CardFooter className="flex justify-between">
            {!showResults && (
              <Button
                onClick={() =>
                  setCurrentQuestion(Math.max(0, currentQuestion - 1))
                }
                disabled={currentQuestion === 0}
                variant="outline"
                className="transition-all duration-300"
              >
                Previous
              </Button>
            )}
            {!showResults && currentQuestion === questions.length - 1 && (
              <Button
                onClick={() => setShowResults(true)}
                className="transition-all duration-300 group"
              >
                See Results
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            )}
            {showResults && (
              <Button
                asChild
                className="w-full transition-all duration-300 group"
              >
                <a
                  href="#"
                  onClick={openCalendly}
                  className="flex items-center justify-center"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
