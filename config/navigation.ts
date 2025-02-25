import type { NavigationItem } from "@/types/navigation"

export const navigationConfig: NavigationItem[] = [
  {
    name: "Solutions",
    items: [
      {
        name: "Services",
        subItems: {
          "Core Services": [
            {
              name: "Managed IT Services",
              href: "/services/managed-it",
              description: "Comprehensive IT management with GDPR & ISO27001 compliance",
            },
            {
              name: "Cybersecurity Services",
              href: "/services/cybersecurity",
              description: "Advanced security solutions to protect your business",
            },
          ],
          "Additional Services": [
            {
              name: "Cloud & Infrastructure",
              href: "/services/cloud-infrastructure",
              description: "Scalable cloud solutions and infrastructure management",
            },
            {
              name: "Business Continuity & Recovery",
              href: "/services/business-continuity",
              description: "Ensure your business stays operational in any situation",
            },
            {
              name: "Network & Connectivity",
              href: "/services/network",
              description: "Reliable network solutions for your organisation",
            },
            {
              name: "VOIP",
              href: "/services/voip",
              description: "Modern communication solutions for your business",
            },
            {
              name: "Digital Transformation",
              href: "/services/digital-transformation",
              description: "Transform your business with cutting-edge technology",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Contact Us",
    items: [
      {
        name: "Sales & Consultations",
        subItems: {
          "Get Started": [
            {
              name: "Request a Quote",
              href: "/contact/quote",
              description: "Get a Customised quote for your business needs",
            },
            {
              name: "Free IT Health-check",
              href: "/contact/health-check",
              description: "Comprehensive assessment of your IT infrastructure",
            },
            {
              name: "Book a Consultation",
              href: "/contact/consultation",
              description: "Schedule a free consultation with our experts",
            },
          ],
          Support: [
            {
              name: "General Enquiries",
              href: "/contact/enquiries",
              description: "Get in touch with our team",
            },
            {
              name: "GDPR & Phone Directory",
              href: "/contact/gdpr",
              description: "Access our compliance information",
            },
            {
              name: "Customer Portal",
              href: "https://portal.webalora.com",
              description: "Access your customer dashboard",
            },
          ],
        },
      },
    ],
  },
  // Add other navigation items similarly...
]

