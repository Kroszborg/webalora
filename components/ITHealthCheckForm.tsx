"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init("90tht713qoeJPf180");

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_c4c3d18";
const EMAILJS_TEMPLATE_ID = "template_iobjdlo";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  devices: string;
  challenges: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  industry?: string;
  devices?: string;
  challenges?: string;
}

export const ITHealthCheckForm: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    devices: "",
    challenges: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.industry) {
      newErrors.industry = "Please select an industry";
    }

    if (!formData.devices.trim()) {
      newErrors.devices = "Number of devices/employees is required";
    } else if (isNaN(Number(formData.devices))) {
      newErrors.devices = "Please enter a valid number";
    }

    if (!formData.challenges.trim()) {
      newErrors.challenges = "Please describe your IT challenges or concerns";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the error for this field as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData as unknown as Record<string, unknown>
      );

      console.log(result.text);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert(
        "Sorry, there was an error submitting your form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          Your IT Health Check request has been submitted successfully.
          We&apos;ll be in touch with you soon.
        </p>
        <Button onClick={onClose}>Close</Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
      <div className="sticky top-0 z-[60] bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-4 sm:p-6 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Get a Free IT Health Check
        </h2>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
      <div className="max-h-[calc(100vh-2rem)] overflow-y-auto">
        <form onSubmit={handleSubmit} className="px-4 py-6 sm:p-6 space-y-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Let our experts evaluate your current IT setup to identify potential
            risks, improve performance, and ensure security.
          </p>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  className={`w-full h-11 ${
                    errors.fullName ? "border-red-500" : ""
                  }`}
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="We'll use this to contact you"
                  required
                  className={`w-full h-11 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="If you prefer a call"
                  className={`w-full h-11 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="company"
                  className="text-sm font-medium text-gray-700"
                >
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Enter your company name"
                  required
                  className={`w-full h-11 ${
                    errors.company ? "border-red-500" : ""
                  }`}
                  value={formData.company}
                  onChange={handleChange}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="industry"
                  className="text-sm font-medium text-gray-700"
                >
                  Industry
                </Label>
                <Select
                  name="industry"
                  onValueChange={(value) =>
                    handleChange({
                      target: { name: "industry", value },
                    } as React.ChangeEvent<HTMLSelectElement>)
                  }
                >
                  <SelectTrigger
                    id="industry"
                    className={`w-full h-11 ${
                      errors.industry ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.industry && (
                  <p className="text-red-500 text-xs mt-1">{errors.industry}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="devices"
                  className="text-sm font-medium text-gray-700"
                >
                  Number of Devices/Employees
                </Label>
                <Input
                  id="devices"
                  name="devices"
                  placeholder="Size of your operation"
                  required
                  className={`w-full h-11 ${
                    errors.devices ? "border-red-500" : ""
                  }`}
                  value={formData.devices}
                  onChange={handleChange}
                />
                {errors.devices && (
                  <p className="text-red-500 text-xs mt-1">{errors.devices}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="challenges"
                className="text-sm font-medium text-gray-700"
              >
                Current IT Challenges or Concerns
              </Label>
              <Textarea
                id="challenges"
                name="challenges"
                placeholder="Share any issues or areas you'd like us to focus on"
                className={`w-full min-h-[100px] resize-none ${
                  errors.challenges ? "border-red-500" : ""
                }`}
                value={formData.challenges}
                onChange={handleChange}
              />
              {errors.challenges && (
                <p className="text-red-500 text-xs mt-1">{errors.challenges}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get My Free IT Health Check"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
