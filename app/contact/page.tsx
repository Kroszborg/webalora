import { ContactPage } from "@/components/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact WebAlora | IT Solutions & Support",
  description:
    "Get in touch with WebAlora for expert IT services. Request a consultation or support from our IT specialists today.",
};

export default function Contact() {
  return <ContactPage />;
}
