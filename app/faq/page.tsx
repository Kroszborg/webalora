import React from "react";
import { Metadata } from "next";
import { FAQPage } from "@/components/faq/FAQPage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | WebAlora IT Solutions",
  description:
    "Find answers to common questions about WebAlora's managed IT services, cybersecurity, cloud solutions, and other IT services for UK businesses.",
};

export default function FAQ() {
  return <FAQPage />;
}
