import { ContactHero } from "./ContactHero";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { AdditionalInfo } from "./AdditionalInfo";
import { VisitUs } from "./VisitUs";
import { CalendlyWidget } from "./CalendlyWidget";

export function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ContactInfo />
          <div className="space-y-12">
            <ContactForm />
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <CalendlyWidget url="https://calendly.com/behzad-webalora/30min" />
        </div>
      </div>
      <AdditionalInfo />
      <VisitUs />
    </div>
  );
}
