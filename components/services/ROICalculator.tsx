"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ROICalculator() {
  const [inHouseCost, setInHouseCost] = useState(10000);
  const [managedCost, setManagedCost] = useState(6000);
  const [downtimeCost, setDowntimeCost] = useState(2000);
  const [currentDowntime, setCurrentDowntime] = useState(2);

  const calculateROI = () => {
    const reducedDowntime = currentDowntime * 0.35; // 65% reduction
    const downtimeSavings = (currentDowntime - reducedDowntime) * downtimeCost;
    const totalSavings = inHouseCost - managedCost + downtimeSavings;
    const roi = (totalSavings / managedCost) * 100;
    return roi.toFixed(2);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-blue-100 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
        >
          ROI Calculator: See Your Potential Savings
        </motion.h2>
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly In-House IT Costs (£)
              </label>
              <Input
                type="number"
                value={inHouseCost}
                onChange={(e) => setInHouseCost(Number(e.target.value))}
                className="w-full bg-white/50 backdrop-blur-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WebAlora Monthly Cost (£)
              </label>
              <Input
                type="number"
                value={managedCost}
                onChange={(e) => setManagedCost(Number(e.target.value))}
                className="w-full bg-white/50 backdrop-blur-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hourly Cost of Downtime (£)
              </label>
              <Input
                type="number"
                value={downtimeCost}
                onChange={(e) => setDowntimeCost(Number(e.target.value))}
                className="w-full bg-white/50 backdrop-blur-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Monthly Downtime (hours)
              </label>
              <Input
                type="number"
                value={currentDowntime}
                onChange={(e) => setCurrentDowntime(Number(e.target.value))}
                className="w-full bg-white/50 backdrop-blur-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold mb-4 text-blue-600">
              Estimated Monthly ROI: {calculateROI()}%
            </p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
