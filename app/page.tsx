// app/page.tsx
import { generateMetadata } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/jsonLd";
import { JsonLdScript } from "@/components/JsonLdScript";
import Home from "@/components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "WebAlora | Managed IT Services & Cybersecurity Solutions",
  description:
    "Discover WebAlora's secure and scalable IT solutions. From managed IT services to cybersecurity and cloud solutions—boost efficiency and protect your business today.",
  path: "/",
  keywords: [
    "IT Services",
    "Cybersecurity",
    "Managed IT",
    "Cloud Solutions",
    "IT Support",
  ],
});

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema({
    name: "WebAlora",
    description: "Managed IT Services & Cybersecurity Solutions",
    url: "https://webalora.com",
    telephone: "0330 043 4953",
    email: "hello@webalora.com",
    address: {
      streetAddress: "71-75 Shelton Street, Covent Garden",
      addressLocality: "London",
      postalCode: "WC2H 9JQ",
      addressCountry: "United Kingdom",
    },
    sameAs: [
      "https://www.facebook.com/webalora/",
      "https://x.com/WebAlora",
      "https://www.linkedin.com/company/webalora/",
      "https://www.instagram.com/webalora/",
    ],
  });

  return (
    <>
      <JsonLdScript data={localBusinessSchema} />
      <Home />
    </>
  );
}
