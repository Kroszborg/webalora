"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const offices = [
  { region: "Europe (HQ)", city: "London, United Kingdom" },
  { region: "North America", city: "New York, USA" },
  { region: "Asia-Pacific", city: "Singapore" },
  { region: "Middle East", city: "Dubai, UAE" },
  { region: "Australia", city: "Sydney, Australia" },
];

export function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Corporate Headquarters
            </h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                WebAlora Limited
              </h3>
              <p className="text-gray-700">
                71–75 Shelton Street
                <br />
                Covent Garden, London
                <br />
                United Kingdom, WC2H 9JQ
              </p>
              <p className="mt-4 text-gray-600 italic">
                Centrally located in London&apos;s bustling tech district, our HQ is
                the hub of global strategy, research, and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Global Offices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {office.region}
                    </h3>
                    <p className="text-gray-700">{office.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
