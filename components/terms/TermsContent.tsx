"use client";

import { useEffect, useRef } from "react";

interface TermsContentProps {
  activeSection: string;
}

export function TermsContent({ activeSection }: TermsContentProps) {
  const sectionRefs = useRef({
    introduction: useRef<HTMLDivElement>(null),
    "company-information": useRef<HTMLDivElement>(null),
    definitions: useRef<HTMLDivElement>(null),
    "access-use": useRef<HTMLDivElement>(null),
    payment: useRef<HTMLDivElement>(null),
    "intellectual-property": useRef<HTMLDivElement>(null),
    confidentiality: useRef<HTMLDivElement>(null),
    disclaimers: useRef<HTMLDivElement>(null),
    indemnity: useRef<HTMLDivElement>(null),
    variation: useRef<HTMLDivElement>(null),
    "force-majeure": useRef<HTMLDivElement>(null),
    "governing-law": useRef<HTMLDivElement>(null),
    "entire-agreement": useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }).current;

  useEffect(() => {
    if (window.innerWidth >= 768) {
      const currentRef = sectionRefs[activeSection as keyof typeof sectionRefs];
      if (currentRef && currentRef.current) {
        currentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [activeSection, sectionRefs]);

  return (
    <div className="prose prose-blue max-w-none">
      <div
        id="introduction"
        ref={sectionRefs.introduction}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. Introduction
        </h2>
        <p className="text-gray-700 mb-6">
          Welcome to WebAlora Limited (&quot;WebAlora&quot;, &quot;we&quot;,
          &quot;us&quot; or &quot;our&quot;). These Terms and Conditions
          (&quot;Terms&quot;) govern your use of our website, services, and
          products (collectively, the &quot;Services&quot;). By accessing or
          using our Services, you agree to be bound by these Terms. If you do
          not agree with any part of these Terms, please do not use our
          Services.
        </p>
      </div>

      <div
        id="company-information"
        ref={sectionRefs["company-information"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          2. Company Information
        </h2>
        <p className="text-gray-700 mb-6">
          WebAlora Limited is registered in England and Wales with company
          number 16200085. Our registered office is located at:
          <br />
          71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ.
        </p>
      </div>

      <div
        id="definitions"
        ref={sectionRefs.definitions}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Definitions and Interpretation
        </h2>
        <p className="text-gray-700 mb-4">
          In these Terms, the following definitions apply:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            &quot;Client&quot;, &quot;you&quot;, or &quot;your&quot; means any
            individual or entity that accesses or uses our Services.
          </li>
          <li>
            &quot;Services&quot; means the IT solutions, consultancy, managed
            services, cybersecurity, cloud solutions, network infrastructure,
            backup and disaster recovery, VOIP solutions, and any other services
            provided by WebAlora.
          </li>
          <li>
            &quot;Website&quot; means our website located at
            https://www.webalora.com/
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Words used in the singular include the plural and vice versa, unless
          the context requires otherwise.
        </p>
      </div>

      <div
        id="access-use"
        ref={sectionRefs["access-use"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Access and Use of Services
        </h2>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          4.1 Eligibility
        </h3>
        <p className="text-gray-700 mb-4">
          You confirm that you are legally able to enter into these Terms and
          use our Services.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          4.2 Account Registration and Security
        </h3>
        <p className="text-gray-700 mb-4">
          Where required, you agree to register for an account and provide
          accurate, complete, and updated information. You are responsible for
          maintaining the confidentiality of your account details and for all
          activities under your account.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          4.3 Permitted Use
        </h3>
        <p className="text-gray-700 mb-6">
          You agree to use our Services only for lawful purposes and in
          accordance with these Terms. Unauthorized or harmful use is strictly
          prohibited.
        </p>
      </div>

      <div id="payment" ref={sectionRefs.payment} className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Payment and Billing
        </h2>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          5.1 Fees and Charges
        </h3>
        <p className="text-gray-700 mb-4">
          Where applicable, you agree to pay the fees for our Services as set
          out in our pricing documentation or as otherwise agreed in writing.
          All fees are exclusive of taxes unless stated otherwise.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          5.2 Invoices and Payment Terms
        </h3>
        <p className="text-gray-700 mb-4">
          Invoices will be issued in accordance with our billing schedule.
          Payments must be made by the due date specified on each invoice. Late
          payments may incur additional charges as permitted by law.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          5.3 Cancellation and Refunds
        </h3>
        <p className="text-gray-700 mb-6">
          Any cancellation of services or requests for refunds will be handled
          in accordance with our cancellation policy. Unless otherwise stated,
          fees paid are non-refundable.
        </p>
      </div>

      {/* Continue with remaining sections... */}

      <div id="contact" ref={sectionRefs.contact} className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          14. Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about these Terms, please
          contact us at:
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> hello@webalora.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> 0330 043 4953
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Mailing Address:</strong>
          </p>
          <p className="text-gray-700">
            WebAlora Limited
            <br />
            71-75 Shelton Street,
            <br />
            Covent Garden, London,
            <br />
            United Kingdom, WC2H 9JQ
          </p>
        </div>
      </div>
    </div>
  );
}
