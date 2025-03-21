// app/cybersecurity-solutions/page.tsx
import { generateMetadata } from "@/lib/seo";
import { generateServiceSchema } from "@/lib/jsonLd";
import { JsonLdScript } from "@/components/JsonLdScript";
import { CybersecuritySolutions } from "@/components/cybersecurity/CybersecuritySolutions";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Cybersecurity Solutions | Protect Your Business – WebAlora",
  description:
    "Safeguard your data with WebAlora's advanced cybersecurity solutions. Get proactive threat detection, compliance support, and 24/7 security monitoring.",
  path: "/cybersecurity-solutions",
  keywords: [
    "Cybersecurity",
    "Data Protection",
    "Security Monitoring",
    "Threat Detection",
    "Compliance Support",
  ],
});

export default function CybersecuritySolutionsPage() {
  const serviceSchema = generateServiceSchema({
    name: "WebAlora Cybersecurity Solutions",
    description:
      "Advanced cybersecurity services including threat detection, compliance support, and 24/7 security monitoring",
    url: "https://webalora.com/cybersecurity-solutions",
    provider: {
      name: "WebAlora",
      url: "https://webalora.com",
    },
    areaServed: "United Kingdom",
  });

  return (
    <>
      <JsonLdScript data={serviceSchema} />
      <CybersecuritySolutions />
    </>
  );
}
