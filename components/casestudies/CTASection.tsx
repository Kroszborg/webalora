"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the ranks of industry leaders who have partnered with WebAlora
            to drive innovation and achieve unprecedented growth.
          </p>
          <Link href="/contact">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
