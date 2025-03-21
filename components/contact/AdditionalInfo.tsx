"use client";
import { motion } from "framer-motion";
import { Mail, Briefcase, Users } from "lucide-react";

const departments = [
  { name: "Media & Press", email: "press@webalora.com", icon: Mail },
  {
    name: "Investor Relations",
    email: "investors@webalora.com",
    icon: Briefcase,
  },
  {
    name: "Partnerships & Alliances",
    email: "Partners@webalora.com",
    icon: Users,
  },
];

export function AdditionalInfo() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-200/25 bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/80 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Additional Departments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/50 backdrop-blur-sm rounded-lg p-6 text-center neumorphism-shadow"
                >
                  <dept.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {dept.name}
                  </h3>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {dept.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
