"use client";
import { motion } from "framer-motion";
import { Clock, Users, ShieldCheck, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime Guarantee",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    value: "<15min",
    label: "Support Response Time",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: ShieldCheck,
    value: "500+",
    label: "Businesses Supported",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Client Retention Rate",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Award,
    value: "75%",
    label: "Reduction in Downtime",
    gradient: "from-rose-500 to-orange-600",
  },
];

export function OurImpact() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Delivering measurable results that drive business success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                style={{
                  background: `linear-gradient(to bottom right, ${
                    stat.gradient.split(" ")[1]
                  }, ${stat.gradient.split(" ")[3]})`,
                }}
              />
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20 group-hover:border-white/30 transition-all duration-300">
                <div
                  className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${stat.gradient} p-2.5 mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-full h-full text-white" />
                </div>
                <div className="text-3xl font-bold mb-2 text-white group-hover:translate-y-[-2px] transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-blue-200 group-hover:translate-y-[-2px] transition-transform duration-300 delay-75">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
