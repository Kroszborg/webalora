"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HelpCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { useCalendly } from "@/lib/hooks/useCalendly";

export function FAQContactCTA() {
  const { openCalendly } = useCalendly(
    "https://calendly.com/behzad-webalora/30min"
  );

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our team is here to help. Contact us for personalized assistance
              or schedule a free consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
            >
              <Phone className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100 mb-4">
                Speak directly with our support team
              </p>
              <Link
                href="tel:03300434953"
                className="text-white font-semibold hover:text-blue-200 transition-colors"
              >
                0330 043 4953
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
            >
              <Mail className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Email Us
              </h3>
              <p className="text-blue-100 mb-4">
                Send us your questions anytime
              </p>
              <Link
                href="mailto:hello@webalora.com"
                className="text-white font-semibold hover:text-blue-200 transition-colors"
              >
                hello@webalora.com
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Live Support
              </h3>
              <p className="text-blue-100 mb-4">
                Chat with our support specialists
              </p>
              <Link
                href="/contact"
                className="text-white font-semibold hover:text-blue-200 transition-colors"
              >
                Start Chat
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 group"
              onClick={openCalendly}
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
