import NetworkingPage from "@/components/Networking/NetworkingPage";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title:
    "Network Infrastructure Services | Secure, High-Performance Networks – WebAlora",
  description:
    "Build a reliable, high-performance network with WebAlora's professional infrastructure solutions. Our expert team designs, implements, and manages secure, scalable networks tailored precisely to your business requirements.",
  path: "/networking",
  keywords: [
    "Network Infrastructure",
    "Business Networking",
    "Secure Networks",
    "IT Network Design",
    "Network Management",
    "Wireless Solutions",
    "LAN/WAN Services",
    "Network Security",
  ],
  ogImage: "/images/services/networking-og.jpg",
});

export default function Networking() {
  return <NetworkingPage />;
}
