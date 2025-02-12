import { ContactHero } from "./ContactHero";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { AdditionalInfo } from "./AdditionalInfo";
import { VisitUs } from "./VisitUs";

export function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <AdditionalInfo />
      <VisitUs />
    </div>
  );
}
