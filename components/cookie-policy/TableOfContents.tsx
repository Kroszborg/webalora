"use client";

import { motion } from "framer-motion";

interface TableOfContentsProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export function TableOfContents({
  activeSection,
  onSectionChange,
}: TableOfContentsProps) {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "what-are-cookies", title: "2. What Are Cookies?" },
    { id: "how-we-use", title: "3. How We Use Cookies" },
    { id: "third-party", title: "4. Third-Party Cookies" },
    { id: "your-choices", title: "5. Your Choices Regarding Cookies" },
    { id: "changes", title: "6. Changes to This Cookie Policy" },
    { id: "contact", title: "7. Contact Us" },
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => onSectionChange(section.id)}
              className={`text-left w-full px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                activeSection === section.id
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {section.title}
            </button>
            {activeSection === section.id && (
              <motion.div
                className="w-1 h-full bg-blue-600 absolute left-0 top-0"
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
