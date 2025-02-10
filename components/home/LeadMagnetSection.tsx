"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const LeadMagnetSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden bg-gray-800/50 border-0 shadow-2xl rounded-3xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />

            <CardHeader className="relative space-y-4 text-center pb-6 md:pb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mx-auto p-3 md:p-4 bg-blue-600/20 rounded-full shadow-inner"
              >
                <Download className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Unlock Your IT Potential
              </h2>

              <p className="text-xl md:text-2xl font-semibold text-gray-300">
                Top 10 IT Mistakes That Could Be
                <br className="hidden sm:inline" />
                Holding Your Business Back
              </p>
            </CardHeader>

            <CardContent className="relative text-center px-4 md:px-8 space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                Download our exclusive guide to learn how to avoid common IT
                pitfalls and maximise your business potential in the digital
                age.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
                {[
                  "Expert Industry Insights",
                  "Actionable Solutions",
                  "Cost-Saving Strategies",
                  "Security Best Practices",
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-700/30 rounded-xl"
                  >
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-200">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="relative flex flex-col items-center gap-4 md:gap-6 py-6 md:py-8">
              <Button
                size="lg"
                className="relative group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/50"
              >
                <span className="flex items-center justify-center gap-2">
                  Access the Free Guide
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>

              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs md:text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                  Instant Download
                </span>
                <span className="hidden sm:inline">•</span>
                <span>No Credit Card Required</span>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
