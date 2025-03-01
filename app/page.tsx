import Home from "@/components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebAlora | Managed IT Services & Cybersecurity Solutions",
  description:
    "Discover WebAlora's secure and scalable IT solutions. From managed IT services to cybersecurity and cloud solutions—boost efficiency and protect your business today.",
  openGraph: {
    title: "WebAlora | Managed IT Services & Cybersecurity Solutions",
    description:
      "Discover WebAlora's secure and scalable IT solutions. From managed IT services to cybersecurity and cloud solutions—boost efficiency and protect your business today.",
    url: "https://webalora.com/",
    images: [
      {
        url: "/logos/logobg.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebAlora | Managed IT Services & Cybersecurity Solutions",
    description:
      "Discover WebAlora's secure and scalable IT solutions. From managed IT services to cybersecurity and cloud solutions—boost efficiency and protect your business today.",
    images: ["/logos/logobg.jpg"],
  },
  alternates: {
    canonical: "https://webalora.com/",
  },
};

export default function HomePage() {
  return <Home />;
}
