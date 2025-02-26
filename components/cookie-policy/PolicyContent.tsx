"use client";

import { useEffect, useRef } from "react";

interface PolicyContentProps {
  activeSection: string;
}

export function PolicyContent({ activeSection }: PolicyContentProps) {
  const sectionRefs = useRef({
    introduction: useRef<HTMLDivElement>(null),
    "what-are-cookies": useRef<HTMLDivElement>(null),
    "how-we-use": useRef<HTMLDivElement>(null),
    "third-party": useRef<HTMLDivElement>(null),
    "your-choices": useRef<HTMLDivElement>(null),
    changes: useRef<HTMLDivElement>(null),
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
          At WebAlora Limited (&quot;WebAlora&quot;, &quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;), we use cookies and similar
          technologies on our website (https://webalora.com/) to enhance your
          browsing experience, ensure the website functions effectively, and to
          help us analyse our traffic. This Cookie Policy explains what cookies
          are, how we use them, and the choices you have regarding their use.
        </p>
      </div>

      <div
        id="what-are-cookies"
        ref={sectionRefs["what-are-cookies"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          2. What Are Cookies?
        </h2>
        <p className="text-gray-700 mb-6">
          Cookies are small text files that are stored on your device (computer,
          mobile phone, or tablet) when you visit a website. They allow the
          website to recognise your device and remember certain information,
          such as your preferences or login details, making your online
          experience more efficient and personalised.
        </p>
      </div>

      <div
        id="how-we-use"
        ref={sectionRefs["how-we-use"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. How We Use Cookies
        </h2>
        <p className="text-gray-700 mb-4">
          We use cookies for various purposes on our website, including:
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Essential Cookies
        </h3>
        <p className="text-gray-700 mb-4">
          These cookies are necessary for the operation of our website. They
          enable core functions such as security, network management, and
          accessibility. Without these cookies, certain parts of our website may
          not function properly.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Performance Cookies
        </h3>
        <p className="text-gray-700 mb-4">
          These cookies collect information about how visitors use our website,
          such as which pages are visited most often and any error messages
          encountered. This data is used to improve the performance,
          functionality, and user experience of our website.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Functionality Cookies
        </h3>
        <p className="text-gray-700 mb-4">
          These cookies allow our website to remember choices you make (e.g.,
          language preferences or region settings) and provide enhanced,
          personalised features.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Targeting/Advertising Cookies
        </h3>
        <p className="text-gray-700 mb-6">
          These cookies are used to deliver advertisements that are more
          relevant to you and your interests. They may also be used to limit the
          number of times you see an advertisement and help measure the
          effectiveness of advertising campaigns.
        </p>
      </div>

      <div
        id="third-party"
        ref={sectionRefs["third-party"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Third-Party Cookies
        </h2>
        <p className="text-gray-700 mb-6">
          We may permit third-party service providers to place cookies on your
          device through our website. These third-party cookies may be used for
          analytics, advertising, or other purposes. Please note that these
          providers have their own privacy and cookie policies, and we encourage
          you to review them to understand how your information is used.
        </p>
      </div>

      <div
        id="your-choices"
        ref={sectionRefs["your-choices"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Your Choices Regarding Cookies
        </h2>
        <p className="text-gray-700 mb-4">
          You have the right to decide whether to accept or reject cookies. Most
          web browsers automatically accept cookies, but you can modify your
          browser settings to decline them if you prefer. However, please note
          that if you disable cookies, some features of our website may not
          function as intended.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Managing Cookies
        </h3>
        <p className="text-gray-700 mb-4">
          You can manage your cookie preferences through your browser settings.
          Please refer to your browser&apos;s help section for detailed
          instructions on how to do this.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Opting Out of Targeted Advertising
        </h3>
        <p className="text-gray-700 mb-6">
          Some advertising networks provide the option to opt-out of targeted
          advertising. For more information, please visit the Digital
          Advertising Alliance&apos;s opt-out page.
        </p>
      </div>

      <div id="changes" ref={sectionRefs.changes} className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Changes to This Cookie Policy
        </h2>
        <p className="text-gray-700 mb-6">
          We may update this Cookie Policy from time to time in response to
          changing legal, technical, or business developments. When we post
          changes on this page, the &quot;Last Updated&quot; date will be
          revised accordingly. We encourage you to review this policy
          periodically to stay informed about how we are using cookies.
        </p>
      </div>

      <div id="contact" ref={sectionRefs.contact} className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about our use of cookies or this
          Cookie Policy, please contact us at:
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
