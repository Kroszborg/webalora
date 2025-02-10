"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 bg-gray-900 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"
        style={{ backgroundSize: "14px 24px" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="order-2 md:order-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-sm sm:text-base text-gray-300">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-blue-400 flex-shrink-0" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center text-sm sm:text-base text-gray-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-blue-400 flex-shrink-0" />
                  info@webalora.com
                </p>
                <p className="flex items-start text-sm sm:text-base text-gray-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                  <span>123 Tech Street, Silicon Valley, CA 94000</span>
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-sm sm:text-base"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-sm sm:text-base"
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-sm sm:text-base"
                  rows={4}
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base py-2 sm:py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
