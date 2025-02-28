import { CybersecuritySolutions } from "@/components/cybersecurity/CybersecuritySolutions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions | Protect Your Business – WebAlora",
  description:
    "Safeguard your data with WebAlora's advanced cybersecurity solutions. Get proactive threat detection, compliance support, and 24/7 security monitoring.",
};

export default function CybersecuritySolutionsPage() {
  return <CybersecuritySolutions />;
}
