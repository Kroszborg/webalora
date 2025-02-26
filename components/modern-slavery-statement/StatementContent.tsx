"use client";

import { useEffect, useRef } from "react";

interface StatementContentProps {
  activeSection: string;
}

export function StatementContent({ activeSection }: StatementContentProps) {
  const sectionRefs = useRef({
    introduction: useRef<HTMLDivElement>(null),
    "our-business": useRef<HTMLDivElement>(null),
    "policies-procedures": useRef<HTMLDivElement>(null),
    "due-diligence": useRef<HTMLDivElement>(null),
    training: useRef<HTMLDivElement>(null),
    governance: useRef<HTMLDivElement>(null),
    performance: useRef<HTMLDivElement>(null),
    conclusion: useRef<HTMLDivElement>(null),
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
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          WebAlora Limited
        </h2>
        <p className="text-gray-700">
          Company Number: 16200085
          <br />
          Registered Office: 71-75 Shelton Street, Covent Garden, London, United
          Kingdom, WC2H 9JQ
        </p>
      </div>

      <div
        id="introduction"
        ref={sectionRefs.introduction}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. Introduction
        </h2>
        <p className="text-gray-700 mb-6">
          WebAlora Limited is committed to acting ethically and with integrity
          in all our business relationships and to implementing and enforcing
          effective systems and controls to ensure modern slavery and human
          trafficking are not taking place in any part of our business or supply
          chains. This statement sets out the steps we have taken during Fiscal
          Year 2025 (FY25-26) to prevent modern slavery within our organization
          and our supply chains.
        </p>
      </div>

      <div
        id="our-business"
        ref={sectionRefs["our-business"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          2. Our Business
        </h2>
        <p className="text-gray-700 mb-6">
          WebAlora Limited is a leading provider of IT solutions, including
          managed IT services, cybersecurity, cloud solutions, IT consultancy,
          network infrastructure, backup & disaster recovery, and VOIP
          solutions. We operate across multiple sectors and maintain a diverse
          supply chain that supports our business operations. Given the nature
          and scope of our business, we recognise that there are inherent risks
          in our supply chain that must be managed to ensure compliance with
          modern slavery legislation.
        </p>
      </div>

      <div
        id="policies-procedures"
        ref={sectionRefs["policies-procedures"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Our Policies and Procedures
        </h2>
        <p className="text-gray-700 mb-4">
          We have implemented a range of policies and procedures designed to
          mitigate the risk of modern slavery within our operations and supply
          chains. These include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            <strong>Code of Conduct:</strong> Our Code of Conduct sets out our
            expectations for ethical business behaviour, including zero
            tolerance for slavery, forced labour, or human trafficking.
          </li>
          <li>
            <strong>Supplier Agreements:</strong> We incorporate anti-slavery
            clauses into our supplier contracts and require suppliers to adhere
            to our standards.
          </li>
          <li>
            <strong>Due Diligence Processes:</strong> We conduct risk
            assessments on new and existing suppliers and require periodic
            certifications or audits regarding their practices.
          </li>
        </ul>
      </div>

      <div
        id="due-diligence"
        ref={sectionRefs["due-diligence"]}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Due Diligence and Risk Assessment
        </h2>
        <p className="text-gray-700 mb-4">
          We have established a due diligence process to identify and assess
          potential risks of modern slavery in our supply chains and operations.
          This process includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            Regular reviews of supplier practices and engagement with suppliers
            to ensure compliance with our ethical standards.
          </li>
          <li>
            Assessing risk factors such as geographic location, sector, and
            complexity of supply chains.
          </li>
          <li>
            Periodic audits and performance reviews to monitor ongoing
            compliance and address any issues promptly.
          </li>
        </ul>
      </div>

      <div id="training" ref={sectionRefs.training} className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Training and Awareness
        </h2>
        <p className="text-gray-700 mb-4">
          To ensure that our staff are equipped to identify and deal with modern
          slavery risks, we provide regular training sessions and awareness
          programs. This training covers:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            The definition and indicators of modern slavery and human
            trafficking.
          </li>
          <li>
            Reporting procedures for any suspected breaches or unethical
            practices.
          </li>
          <li>
            Guidance on engaging with suppliers regarding modern slavery issues.
          </li>
        </ul>
      </div>

      <div
        id="governance"
        ref={sectionRefs.governance}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Governance and Accountability
        </h2>
        <p className="text-gray-700 mb-4">
          The Board of Directors and senior management at WebAlora are
          responsible for ensuring that effective systems are in place to combat
          modern slavery. Our governance framework includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            Regular reporting on modern slavery risks and mitigation measures to
            the Board.
          </li>
          <li>
            Designated accountability for overseeing compliance with our
            anti-slavery policies and procedures.
          </li>
          <li>
            Ongoing reviews of our risk management processes to improve
            effectiveness and responsiveness.
          </li>
        </ul>
      </div>

      <div
        id="performance"
        ref={sectionRefs.performance}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. Performance Measurement and Future Commitments
        </h2>
        <p className="text-gray-700 mb-4">
          We continuously monitor the effectiveness of our modern slavery risk
          management efforts through:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            Key performance indicators (KPIs) related to supplier audits,
            employee training completion rates, and incident reporting.
          </li>
          <li>
            Regular internal and external reviews of our due diligence and
            compliance measures.
          </li>
          <li>
            Ongoing engagement with stakeholders, including suppliers and
            industry bodies, to improve our practices.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Looking forward, WebAlora is committed to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            Further enhancing our due diligence processes and supplier
            engagement strategies.
          </li>
          <li>
            Increasing the frequency and depth of training programs for our
            staff.
          </li>
          <li>
            Reviewing and updating our policies annually to ensure they remain
            robust and effective.
          </li>
        </ul>
      </div>

      <div
        id="conclusion"
        ref={sectionRefs.conclusion}
        className="scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Conclusion</h2>
        <p className="text-gray-700 mb-6">
          WebAlora Limited remains fully committed to preventing modern slavery
          in our operations and supply chains. We will continue to work closely
          with our suppliers, stakeholders, and regulatory bodies to maintain
          high ethical standards and ensure compliance with all applicable
          modern slavery legislation.
        </p>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-700 font-semibold">
            Approved by the Board of Directors
          </p>
          <p className="text-gray-700">WebAlora Limited</p>
        </div>
      </div>
    </div>
  );
}
