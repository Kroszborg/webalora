import React from "react";

interface StructuredDataProps {
  data: Record<string, unknown>;
  type: string;
}

/**
 * Component to inject JSON-LD structured data into the head section
 */
export function StructuredData({ data, type }: StructuredDataProps) {
  // Construct the full schema object
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Generate product schema for service pages
 */
export function ServiceSchema({
  name,
  description,
  url,
  image,
  provider,
  price,
  priceCurrency = "GBP",
  areaServed = "United Kingdom",
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  provider: { name: string; url: string };
  price?: string;
  priceCurrency?: string;
  areaServed?: string;
}) {
  const data = {
    name,
    description,
    url,
    image,
    provider: {
      "@type": "Organization",
      name: provider.name,
      url: provider.url,
    },
    areaServed,
  };

  // Add price information if available
  if (price) {
    Object.assign(data, {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency,
      },
    });
  }

  return <StructuredData type="Service" data={data} />;
}

/**
 * Generate breadcrumb schema
 */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  }));

  return <StructuredData type="BreadcrumbList" data={{ itemListElement }} />;
}

/**
 * Generate FAQ schema
 */
export function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const mainEntity = questions.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  }));

  return <StructuredData type="FAQPage" data={{ mainEntity }} />;
}

/**
 * Generate organization schema
 */
export function OrganizationSchema({
  name,
  logo,
  url,
  sameAs = [],
  address,
  contactPoint,
}: {
  name: string;
  logo: string;
  url: string;
  sameAs?: string[];
  address: {
    street: string;
    locality: string;
    postalCode: string;
    country: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
}) {
  const data = {
    name,
    logo,
    url,
    sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
  };

  if (contactPoint) {
    Object.assign(data, {
      contactPoint: {
        "@type": "ContactPoint",
        telephone: contactPoint.telephone,
        contactType: contactPoint.contactType,
        ...(contactPoint.email && { email: contactPoint.email }),
      },
    });
  }

  return <StructuredData type="Organization" data={data} />;
}

/**
 * Generate article schema for blog posts
 */
export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
  url,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: { name: string; url?: string };
  publisher: { name: string; logo: string };
  url: string;
}) {
  const data = {
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      logo: {
        "@type": "ImageObject",
        url: publisher.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return <StructuredData type="Article" data={data} />;
}

export default StructuredData;
