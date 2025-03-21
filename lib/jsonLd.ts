// lib/jsonLd.ts
interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
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
}

interface ServiceData {
  name: string;
  description: string;
  url: string;
  provider?: {
    name: string;
    url: string;
  };
  areaServed?: string;
}

interface ArticleData {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
  url: string;
}

export function generateLocalBusinessSchema(data: LocalBusinessData): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': data.url,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    ...(data.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: data.geo.latitude,
        longitude: data.geo.longitude,
      },
    }),
    ...(data.sameAs && { sameAs: data.sameAs }),
  };
  
  return JSON.stringify(schema);
}

export function generateServiceSchema(data: ServiceData): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    url: data.url,
    ...(data.provider && {
      provider: {
        '@type': 'Organization',
        name: data.provider.name,
        url: data.provider.url,
      },
    }),
    ...(data.areaServed && { areaServed: data.areaServed }),
  };
  
  return JSON.stringify(schema);
}

export function generateArticleSchema(data: ArticleData): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@type': 'Person',
      name: data.author.name,
      ...(data.author.url && { url: data.author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: data.publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: data.publisher.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
  };
  
  return JSON.stringify(schema);
}

export function generateFAQSchema(questions: Array<{question: string, answer: string}>): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
  
  return JSON.stringify(schema);
}