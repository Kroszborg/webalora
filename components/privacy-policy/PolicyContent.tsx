"use client";

import { useEffect, useRef } from "react";

interface PolicyContentProps {
  activeSection: string;
}

export function PolicyContent({ activeSection }: PolicyContentProps) {
  const sectionRefs = useRef({
    introduction: useRef<HTMLDivElement>(null),
    "who-we-are": useRef<HTMLDivElement>(null),
    "information-we-collect": useRef<HTMLDivElement>(null),
    "how-we-use": useRef<HTMLDivElement>(null),
    "how-we-share": useRef<HTMLDivElement>(null),
    cookies: useRef<HTMLDivElement>(null),
    "international-transfers": useRef<HTMLDivElement>(null),
    "data-security": useRef<HTMLDivElement>(null),
    "data-retention": useRef<HTMLDivElement>(null),
    "your-rights": useRef<HTMLDivElement>(null),
    "use-by-minors": useRef<HTMLDivElement>(null),
    changes: useRef<HTMLDivElement>(null),
    "contact-us": useRef<HTMLDivElement>(null),
  }).current;

  useEffect(() => {
    // Scroll the active section into view (only on desktop)
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
          WebAlora Limited (&quot;WebAlora&quot;, &quot;we&quot;, &quot;our&quot; or &quot;us&quot;) is committed to protecting and
          respecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your personal data when you visit our
          website at https://www.webalora.com/ and use our services (collectively,
          the &quot;Services&quot;). By accessing or using our Services, you
          consent to the practices described in this Privacy Policy.
        </p>
      </div>

      <div
        id="who-we-are"
        ref={sectionRefs["who-we-are"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Who We Are</h2>
        <p className="text-gray-700 mb-6">
          WebAlora Limited is a company registered in England and Wales (Company
          number: 16200085) with its registered office at:
          <br />
          71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ.
        </p>
      </div>

      <div
        id="information-we-collect"
        ref={sectionRefs["information-we-collect"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect and process various types of personal data about you,
          including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            <strong>Contact Information:</strong> Such as your name, email
            address, telephone number, and postal address when you contact us or
            sign up for our services.
          </li>
          <li>
            <strong>Account Information:</strong> If you register for an
            account, we collect information necessary for account creation and
            maintenance.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with
            our website and Services, including IP address, browser type,
            operating system, referring URLs, pages viewed, and other diagnostic
            data.
          </li>
          <li>
            <strong>Marketing Data:</strong> Information related to your
            preferences and interests if you choose to subscribe to our
            newsletters or marketing communications.
          </li>
        </ul>
      </div>

      <div
        id="how-we-use"
        ref={sectionRefs["how-we-use"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Provide, operate, and maintain our Services.</li>
          <li>Process your transactions and manage your account.</li>
          <li>
            Communicate with you, including sending updates, marketing
            materials, and other information relating to our Services (with your
            consent where required).
          </li>
          <li>
            Improve, personalize, and enhance your experience on our website.
          </li>
          <li>Comply with legal obligations and protect our rights.</li>
        </ul>
      </div>

      <div
        id="how-we-share"
        ref={sectionRefs["how-we-share"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. How We Share Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We may share your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            <strong>With Service Providers:</strong> We engage trusted
            third-party companies and individuals to perform functions on our
            behalf (e.g., payment processing, analytics, IT services). These
            providers have access to your data only as necessary to perform
            their functions.
          </li>
          <li>
            <strong>For Legal Reasons:</strong> We may disclose your data if
            required to do so by law, regulation, or legal process, or when we
            believe disclosure is necessary to protect our rights, safety, or
            property, or that of our users or others.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with any merger,
            sale of company assets, financing, or acquisition of all or a
            portion of our business, your information may be transferred as part
            of that transaction.
          </li>
        </ul>
      </div>

      <div id="cookies" ref={sectionRefs.cookies} className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Cookies and Similar Technologies
        </h2>
        <p className="text-gray-700 mb-6">
          Our website uses cookies and similar tracking technologies to enhance
          your browsing experience, analyze site traffic, and deliver
          personalized content. You can control the use of cookies through your
          browser settings. For further details, please refer to our Cookie
          Policy.
        </p>
      </div>

      <div
        id="international-transfers"
        ref={sectionRefs["international-transfers"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. International Data Transfers
        </h2>
        <p className="text-gray-700 mb-6">
          Your personal data may be transferred to, stored, and processed in
          countries outside the European Economic Area (EEA). When we do so, we
          take appropriate measures to ensure that your data remains protected
          in accordance with this Privacy Policy and applicable data protection
          laws.
        </p>
      </div>

      <div
        id="data-security"
        ref={sectionRefs["data-security"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          8. Data Security
        </h2>
        <p className="text-gray-700 mb-6">
          We implement a variety of security measures to maintain the safety of
          your personal data. Although no security system is impenetrable, we
          strive to protect your information against unauthorized access,
          alteration, disclosure, or destruction.
        </p>
      </div>

      <div
        id="data-retention"
        ref={sectionRefs["data-retention"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          9. Data Retention
        </h2>
        <p className="text-gray-700 mb-6">
          We will retain your personal data only for as long as necessary to
          fulfill the purposes for which it was collected, to comply with our
          legal obligations, resolve disputes, and enforce our agreements.
        </p>
      </div>

      <div
        id="your-rights"
        ref={sectionRefs["your-rights"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          10. Your Rights
        </h2>
        <p className="text-gray-700 mb-4">
          Depending on your jurisdiction, you may have rights regarding your
          personal data, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>The right to access, correct, or delete your personal data.</li>
          <li>
            The right to restrict or object to the processing of your data.
          </li>
          <li>The right to data portability.</li>
          <li>The right to withdraw consent at any time (if applicable).</li>
        </ul>
        <p className="text-gray-700 mb-6">
          To exercise these rights, please contact us using the details provided
          below.
        </p>
      </div>

      <div
        id="use-by-minors"
        ref={sectionRefs["use-by-minors"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          11. Use by Individuals Under 18
        </h2>
        <p className="text-gray-700 mb-6">
          Our Services are not intended for individuals under the age of 18. We
          do not knowingly collect personal data from anyone under 18. If we
          become aware that we have inadvertently collected such information, we
          will take prompt steps to delete it.
        </p>
      </div>

      <div id="changes" ref={sectionRefs.changes} className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          12. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy from time to time. The updated
          version will be posted on our website, and the &quot;Last
          Updated&quot; date at the top of this page will reflect the latest
          changes. We encourage you to review this policy periodically.
        </p>
      </div>

      <div
        id="contact-us"
        ref={sectionRefs["contact-us"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          13. Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
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
