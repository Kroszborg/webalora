"use client";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export function VisitUs() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
          <p className="text-blue-200 mb-8">
            Our offices welcome visits by appointment. To schedule a meeting,
            please contact your regional office or email hello@webalora.com.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-2 text-blue-300" />
              <span>Monday – Friday, 9:00 AM – 6:00 PM (Local Time)</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-300" />
              <span>Find a WebAlora office near you</span>
            </div>
          </div>
          <p className="mt-8 text-blue-200">
            For urgent matters after hours, our 24/7 operations team is
            available via phone or email.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
