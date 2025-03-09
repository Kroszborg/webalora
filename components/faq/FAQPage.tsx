"use client";

import { FAQHero } from "./FAQHero";
import { FAQAccordion } from "./FAQAccordion";
import { FAQContactCTA } from "./FAQContactCTA";
import { FAQCategories } from "./FAQCategories";

export function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <FAQHero />
      <FAQCategories />
      <FAQAccordion />
      <FAQContactCTA />
    </div>
  );
}
