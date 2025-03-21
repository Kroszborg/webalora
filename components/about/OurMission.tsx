"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Zap, Users } from "lucide-react";

export function OurMission() {
  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Delivering solutions that create real business value",
    },
    {
      icon: Zap,
      title: "Innovation-First",
      description: "Staying ahead with cutting-edge technology",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Building lasting partnerships through trust",
    },
  ];

  return (
    <section
      id="our-mission"
      className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc2e_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At WebAlora, our mission is to provide cutting-edge technology
                  solutions that are reliable, secure, and aligned with our
                  clients business goals. We are dedicated to fostering
                  innovation, efficiency, and resilience, ensuring that our
                  clients remain competitive and agile in their respective
                  industries.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We strive to be more than just an IT service provider—we aim
                  to be your trusted technology partner, empowering your
                  business to thrive in today&apos;s fast-evolving digital
                  landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                  alt="Team collaboration"
                  fill
                  className="hover:scale-110 transition-transform duration-500 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
