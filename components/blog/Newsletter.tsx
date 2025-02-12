"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-50 rounded-lg p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-gray-600 mb-4">
        Stay updated with our latest insights and news.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center bg-white rounded-md p-1">
          <Mail className="h-5 w-5 text-gray-400 ml-2" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow border-none focus:ring-0"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Subscribe
        </Button>
      </form>
    </motion.div>
  );
}
