"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSection {
  id: string;
  title: string;
  faqs: Array<{ question: string; answer: string | string[] }>;
}

export function FAQAccordion() {
  const faqData: FAQSection[] = [
    {
      id: "general-questions",
      title: "General Questions & Getting Started",
      faqs: [
        {
          question: "Who is Webalora and what do you specialise in?",
          answer:
            "Webalora is a leading UK-based IT service provider committed to delivering reliable, efficient, and secure IT solutions. We specialise in Managed IT Services, as well as Cybersecurity, Cloud Solutions & Migration, IT Consultancy, Network Infrastructure, Backup & Disaster Recovery, VOIP, and CCTV Solutions. Our services are custom-tailored to meet the unique needs of every client.",
        },
        {
          question: "How do I get started with Webalora?",
          answer:
            "Getting started is straightforward. Simply contact us via our website or call our support team to schedule an initial consultation. We'll assess your current IT setup, discuss your business goals, and recommend a tailored solution to optimise performance and security.",
        },
        {
          question: "What types of businesses and industries do you serve?",
          answer:
            "We cater to a diverse range of sectors, including finance, healthcare, retail, manufacturing, and public sector organisations. Whether you're a start-up seeking scalable IT solutions or an established enterprise looking to modernise your infrastructure, our services are designed to fit your industry-specific challenges.",
        },
        {
          question: "What if I experience an IT emergency?",
          answer:
            "We offer 24/7 support for all our clients. In the event of an IT emergency, our dedicated team is on call round the clock to resolve issues swiftly and minimise any impact on your business operations.",
        },
        {
          question: "What is the typical timeframe for service implementation?",
          answer:
            "Implementation timelines vary depending on the scope and complexity of the service. During our initial consultation, we provide a customised timeline designed to ensure a seamless transition with minimal disruption to your business.",
        },
        {
          question: "How is pricing structured for your services?",
          answer:
            "We offer flexible and competitively priced packages tailored to your specific requirements. After assessing your needs, we provide a detailed proposal outlining all costs, along with customisable Service Level Agreements (SLAs) that ensure transparency and accountability.",
        },
        {
          question: "What makes partnering with Webalora a smart choice?",
          answer:
            "By partnering with Webalora, you gain a proactive IT ally dedicated to keeping your systems optimised and secure. Our managed services reduce downtime, enhance system performance, and free you to focus on your core business, confident that your IT infrastructure is in expert hands.",
        },
        {
          question:
            "Can you provide references or case studies from previous clients?",
          answer:
            "Absolutely. We can supply testimonials and case studies on request, which showcase our proven track record in delivering tailored IT solutions and exceptional support to a wide range of clients.",
        },
        {
          question: "How do you stay ahead of evolving technology trends?",
          answer:
            "We continually invest in training, innovative tools, and strategic partnerships to ensure our IT solutions are at the cutting edge. This proactive approach enables us to offer services that not only meet current needs but also anticipate future challenges.",
        },
      ],
    },
    {
      id: "managed-it-services",
      title: "Managed IT Services",
      faqs: [
        {
          question:
            "What are Managed IT Services and how do they benefit my business?",
          answer:
            "Managed IT Services involve the continuous monitoring, maintenance, and optimisation of your IT infrastructure by our expert team. This proactive approach helps reduce downtime, improve system performance, and ensures that your technology supports your business objectives.",
        },
        {
          question:
            "How does Webalora's approach to Managed IT Services differ from others?",
          answer:
            "We provide customisable SLAs with guaranteed response and resolution times, combined with regular system updates and proactive issue resolution. Our holistic approach means potential issues are identified and addressed before they can impact your operations.",
        },
      ],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Solutions",
      faqs: [
        {
          question: "How do you protect my business from cyber threats?",
          answer:
            "Our Cybersecurity Solutions include comprehensive threat assessments, firewall management, intrusion detection, and endpoint security. We continuously update our security measures to safeguard your data against the latest cyber threats, ensuring robust protection at all times.",
        },
        {
          question:
            "Are your cybersecurity measures compliant with UK data protection regulations?",
          answer:
            "Yes, all our cybersecurity protocols adhere to UK data protection laws and GDPR requirements, ensuring your business meets all regulatory standards while keeping sensitive data secure.",
        },
      ],
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions & Migration",
      faqs: [
        {
          question: "What is involved in your cloud migration service?",
          answer:
            "Our Cloud Solutions & Migration service begins with a thorough assessment of your current IT infrastructure, followed by strategic planning and a seamless transition to a secure, scalable cloud platform. We ensure minimal disruption to your business operations during the migration process.",
        },
        {
          question: "How can cloud solutions enhance my business operations?",
          answer:
            "Cloud solutions provide enhanced flexibility, scalability, and remote accessibility. They reduce reliance on physical hardware, improve collaboration across teams, and often lead to significant cost savings in the long term.",
        },
      ],
    },
    {
      id: "it-consultancy",
      title: "IT Consultancy",
      faqs: [
        {
          question: "What can I expect from your IT Consultancy service?",
          answer:
            "Our IT Consultancy service offers expert advice on optimising your IT strategy, enhancing system efficiency, and integrating emerging technologies. We work closely with you to develop actionable insights and strategic roadmaps that drive long-term growth.",
        },
        {
          question:
            "How does your consultancy support technology-driven business transformation?",
          answer:
            "By analysing your current systems and identifying areas for improvement, we help you implement innovative solutions that boost efficiency, reduce costs, and position your business for future success.",
        },
      ],
    },
    {
      id: "network-infrastructure",
      title: "Network Infrastructure",
      faqs: [
        {
          question: "What network infrastructure services do you offer?",
          answer:
            "We design, install, and maintain robust network infrastructures that ensure reliable connectivity and secure communications. Our services cover everything from network configuration and monitoring to troubleshooting and upgrades.",
        },
        {
          question: "How do you ensure network reliability and security?",
          answer:
            "Through advanced monitoring tools and proactive maintenance, we quickly identify and resolve potential issues. Our stringent security measures protect your network against unauthorised access, ensuring uninterrupted performance.",
        },
      ],
    },
    {
      id: "backup-recovery",
      title: "Backup & Disaster Recovery",
      faqs: [
        {
          question:
            "How do your backup and disaster recovery solutions safeguard my business?",
          answer:
            "We implement comprehensive backup solutions and disaster recovery plans designed to protect your critical data. In the event of a system failure or unexpected disaster, our protocols ensure rapid restoration of operations, minimising both downtime and data loss.",
        },
        {
          question:
            "Can your backup solutions be customised to meet my specific business needs?",
          answer:
            "Yes, we tailor our backup and disaster recovery services to suit the unique requirements of your business, ensuring that your most valuable data is consistently protected and easily recoverable.",
        },
      ],
    },
    {
      id: "voip-solutions",
      title: "VOIP Solutions",
      faqs: [
        {
          question: "What are the benefits of your VOIP solutions?",
          answer:
            "Our VOIP Solutions replace traditional phone systems with modern, cost-effective communication platforms that offer enhanced voice and video quality, flexibility, and scalability. This ensures seamless internal and external communications for your business.",
        },
        {
          question:
            "How do you maintain the quality and reliability of VOIP communications?",
          answer:
            "We utilise high-quality hardware and cutting-edge software that are continuously monitored and maintained by our technical team, ensuring crystal-clear communication and minimal downtime.",
        },
      ],
    },
    {
      id: "cctv-solutions",
      title: "CCTV Solutions",
      faqs: [
        {
          question:
            "How do your CCTV Solutions enhance security for my business?",
          answer:
            "Our CCTV systems utilise advanced surveillance technology to monitor your premises, deter unauthorised access, and provide critical evidence in the event of incidents. This integrated approach enhances overall security and peace of mind.",
        },
        {
          question:
            "Can your CCTV solutions be integrated with other security systems?",
          answer:
            "Yes, our CCTV solutions can seamlessly integrate with your existing security infrastructure, including access control systems and alarms, to provide a comprehensive security network.",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-4"
        >
          Find Answers to Your Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16"
        >
          Browse through our comprehensive FAQ sections to find the information
          you need
        </motion.p>

        <div className="max-w-4xl mx-auto">
          {faqData.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 pb-2 border-b border-gray-200">
                {section.title}
              </h3>
              <Accordion
                type="single"
                collapsible
                defaultValue={section.faqs[0]?.question}
                className="space-y-4"
              >
                {section.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={faq.question}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left text-gray-900 font-medium hover:text-blue-600 [&>svg]:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-700 bg-gray-50">
                      {typeof faq.answer === "string" ? (
                        <p>{faq.answer}</p>
                      ) : (
                        <ul className="list-disc pl-5 space-y-2">
                          {faq.answer.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
