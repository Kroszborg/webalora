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
    { id: "who-we-are", title: "2. Who We Are" },
    { id: "information-we-collect", title: "3. Information We Collect" },
    { id: "how-we-use", title: "4. How We Use Your Information" },
    { id: "how-we-share", title: "5. How We Share Your Information" },
    { id: "cookies", title: "6. Cookies and Similar Technologies" },
    { id: "international-transfers", title: "7. International Data Transfers" },
    { id: "data-security", title: "8. Data Security" },
    { id: "data-retention", title: "9. Data Retention" },
    { id: "your-rights", title: "10. Your Rights" },
    { id: "use-by-minors", title: "11. Use by Individuals Under 18" },
    { id: "changes", title: "12. Changes to This Privacy Policy" },
    { id: "contact-us", title: "13. Contact Us" },
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
