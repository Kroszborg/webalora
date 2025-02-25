import Home from "@/components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebAlora - Professional IT Solutions",
  description:
    "Expert IT support and managed services for finance and legal sectors",
  openGraph: {
    title: "WebAlora - Professional IT Solutions",
    description:
      "Expert IT support and managed services for finance and legal sectors",
    url: "https://webalora.vercel.app/",
    images: [
      {
        url: "/logos/logobg.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebAlora - Professional IT Solutions",
    description:
      "Expert IT support and managed services for finance and legal sectors",
    images: ["/logos/logobg.jpg"],
  },
  alternates: {
    canonical: "https://webalora.vercel.app/",
  },
};

export default function HomePage() {
  return <Home />;
}
