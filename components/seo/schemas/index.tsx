import React from "react";

/**
 * Common base component for schema.org structured data
 */
export function StructuredData({
  data,
  type,
}: {
  data: Record<string, string | number | boolean | object>;
  type: string;
}) {
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
 * WebSite schema for homepage
 */
export function WebsiteSchema({
  name = "WebAlora",
  url = "https://webalora.com",
  description = "Managed IT Services & Cybersecurity Solutions",
  searchUrl = "https://webalora.com/search?q={search_term_string}",
}: {
  name?: string;
  url?: string;
  description?: string;
  searchUrl?: string;
}) {
  const data = {
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: searchUrl,
      "query-input": "required name=search_term_string",
    },
  };

  return <StructuredData type="WebSite" data={data} />;
}

/**
 * Organization schema for company information
 */
export function OrganizationSchema({
  name = "WebAlora",
  logo = "https://webalora.com/logos/logobg.jpg",
  url = "https://webalora.com",
  sameAs = [
    "https://www.facebook.com/webalora/",
    "https://x.com/WebAlora",
    "https://www.linkedin.com/company/webalora/",
    "https://www.instagram.com/webalora/",
  ],
  address,
  contactPoint,
}: {
  name?: string;
  logo?: string;
  url?: string;
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
 * Service schema for service pages
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
 * Article schema for blog posts and case studies
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

/**
 * FAQPage schema for FAQ sections
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
 * BreadcrumbList schema for navigation
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
 * JobPosting schema for career pages
 */
export function JobPostingSchema({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  hiringOrganization,
  jobLocation,
  salary,
}: {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType: string;
  hiringOrganization: { name: string; url: string; logo: string };
  jobLocation: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  salary?: {
    currency: string;
    value: string;
    unitText: string;
  };
}) {
  const data = {
    title,
    description,
    datePosted,
    employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: hiringOrganization.name,
      sameAs: hiringOrganization.url,
      logo: hiringOrganization.logo,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: jobLocation.streetAddress,
        addressLocality: jobLocation.addressLocality,
        postalCode: jobLocation.postalCode,
        addressCountry: jobLocation.addressCountry,
      },
    },
  };

  // Add optional properties
  if (validThrough) {
    Object.assign(data, { validThrough });
  }

  if (salary) {
    Object.assign(data, {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: salary.currency,
        value: {
          "@type": "QuantitativeValue",
          value: salary.value,
          unitText: salary.unitText,
        },
      },
    });
  }

  return <StructuredData type="JobPosting" data={data} />;
}

/**
 * LocalBusiness schema with enhanced features
 */
export function LocalBusinessSchema({
  name = "WebAlora",
  image = "https://webalora.com/logos/logobg.jpg",
  logo = "https://webalora.com/logos/logobg.jpg",
  url = "https://webalora.com",
  telephone = "0330 043 4953",
  email = "hello@webalora.com",
  description = "Managed IT Services & Cybersecurity Solutions",
  priceRange = "££",
  openingHours = ["Mo-Fr 09:00-18:00"],
  address,
  geo,
  sameAs,
}: {
  name?: string;
  image?: string;
  logo?: string;
  url?: string;
  telephone?: string;
  email?: string;
  description?: string;
  priceRange?: string;
  openingHours?: string[];
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  sameAs?: string[];
}) {
  const data = {
    name,
    image,
    logo,
    url,
    telephone,
    email,
    description,
    priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    openingHoursSpecification: openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(" ")[0],
      opens: hours.split(" ")[1].split("-")[0],
      closes: hours.split(" ")[1].split("-")[1],
    })),
  };

  if (geo) {
    Object.assign(data, {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    });
  }

  if (sameAs && sameAs.length > 0) {
    Object.assign(data, { sameAs });
  }

  return <StructuredData type="LocalBusiness" data={data} />;
}
