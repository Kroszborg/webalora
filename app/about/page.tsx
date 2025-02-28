import { AboutPage } from "@/components/about/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WebAlora | Your Trusted IT Partner",
  description:
    "Learn more about WebAlora, a leading IT solutions provider. Our mission is to deliver secure, reliable, and innovative technology solutions tailored for businesses.",
};

export default function About() {
  return <AboutPage />;
}
