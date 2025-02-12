"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, department: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Online Enquiry Form
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        To streamline your query and ensure we connect you with the right
        specialist, please complete the form below. We aim to respond to all
        online enquiries within one business day.
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="col-span-2 md:col-span-1"
          >
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="col-span-2 md:col-span-1"
          >
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company/Organisation (Optional)"
              className="w-full bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="col-span-2 md:col-span-1"
          >
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="col-span-2 md:col-span-1"
          >
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (Optional)"
              className="w-full bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="col-span-2">
            <Select
              name="department"
              value={formData.department}
              onValueChange={handleSelectChange}
            >
              <SelectTrigger className="w-full bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm">
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Enquiries</SelectItem>
                <SelectItem value="sales">Sales & Partnerships</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="media">Media & Press</SelectItem>
                <SelectItem value="investor">Investor Relations</SelectItem>
                <SelectItem value="careers">Careers/HR</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="col-span-2">
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="col-span-2">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={5}
              className="w-full bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg shadow-sm"
            />
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Submit Enquiry
            </Button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
}
