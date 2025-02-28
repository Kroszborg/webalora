import NetworkingPage from "@/components/Networking/NetworkingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Infrastructure Services | Secure & Scalable – WebAlora",
  description:
    "Build a reliable and high-performance network with WebAlora's infrastructure solutions. Secure, scalable, and tailored for your business needs.",
};

export default function Networking() {
  return <NetworkingPage />;
}
