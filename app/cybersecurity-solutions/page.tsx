import { generateMetadata } from "@/lib/seo";
import { generateServiceSchema } from "@/lib/jsonLd";
import { JsonLdScript } from "@/components/JsonLdScript";
import { CybersecuritySolutions } from "@/components/cybersecurity/CybersecuritySolutions";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title:
    "Cybersecurity Solutions | Data Protection & Security Services – WebAlora",
  description:
    "Safeguard your business with WebAlora's comprehensive cybersecurity solutions. Our expert team provides proactive threat detection, compliance support, and 24/7 security monitoring to protect your data and systems from evolving threats.",
  path: "/cybersecurity-solutions",
  keywords: [
    "Cybersecurity Solutions",
    "Data Protection",
    "Security Monitoring",
    "Threat Detection",
    "Compliance Support",
    "Network Security",
    "IT Security Services",
    "Cyber Threat Protection",
  ],
  ogImage: "/images/services/cybersecurity-og.jpg",
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
