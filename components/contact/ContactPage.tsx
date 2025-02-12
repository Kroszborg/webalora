import { ContactHero } from "./ContactHero";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { AdditionalInfo } from "./AdditionalInfo";
import { VisitUs } from "./VisitUs";

export function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <AdditionalInfo />
      <VisitUs />
    </div>
  );
}
