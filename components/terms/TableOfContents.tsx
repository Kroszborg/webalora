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
    { id: "company-information", title: "2. Company Information" },
    { id: "definitions", title: "3. Definitions and Interpretation" },
    { id: "access-use", title: "4. Access and Use of Services" },
    { id: "payment", title: "5. Payment and Billing" },
    { id: "intellectual-property", title: "6. Intellectual Property" },
    { id: "confidentiality", title: "7. Confidentiality and Data Protection" },
    { id: "disclaimers", title: "8. Disclaimers and Limitation of Liability" },
    { id: "indemnity", title: "9. Indemnity" },
    { id: "variation", title: "10. Variation and Termination" },
    { id: "force-majeure", title: "11. Force Majeure" },
    { id: "governing-law", title: "12. Governing Law and Jurisdiction" },
    { id: "entire-agreement", title: "13. Entire Agreement" },
    { id: "contact", title: "14. Contact Us" },
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
