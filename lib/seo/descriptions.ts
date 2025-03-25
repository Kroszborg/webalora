
/**
 * Generate meta descriptions from content with proper length
 * @param content The content to create description from
 * @param maxLength Maximum length of the description (default: 160)
 * @returns Formatted meta description
 */
export function generateMetaDescription(content: string, maxLength: number = 160): string {
  if (!content) {
    return '';
  }

  // Remove HTML tags and extra whitespace
  const cleanedContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ')    // Replace multiple spaces with a single space
    .trim();

  // If content is already shorter than maxLength, return it
  if (cleanedContent.length <= maxLength) {
    return cleanedContent;
  }

  // Find the last period or space before maxLength
  const periodIndex = cleanedContent.lastIndexOf('.', maxLength);
  const spaceIndex = cleanedContent.lastIndexOf(' ', maxLength);
  const cutoffIndex = periodIndex > 0 ? periodIndex : spaceIndex;

  // If we found a good cutoff point
  if (cutoffIndex > maxLength / 2) {
    return cleanedContent.substring(0, cutoffIndex + (periodIndex > 0 ? 1 : 0));
  }

  // If we couldn't find a good cutoff, truncate at maxLength and add ellipsis
  return cleanedContent.substring(0, maxLength) + '...';
}

/**
 * Description templates for common pages
 */
export const descriptionTemplates = {
  service: (service: string) => 
    `Enhance your business with our professional ${service} services. WebAlora delivers secure, reliable solutions tailored to your needs.`,
    
  blogPost: (title: string) => 
    `Read our insights on "${title}". WebAlora's expert blog covers IT trends, cybersecurity advice, and technology best practices for businesses.`,
    
  caseStudy: (client: string, service: string) => 
    `Discover how WebAlora helped ${client} improve their business with our ${service} solutions. Read the full case study.`,
    
  resource: (title: string) => 
    `Access our "${title}" resource guide. WebAlora provides comprehensive IT knowledge to help your business leverage technology effectively.`,
    
  about: 'Learn about WebAlora, your trusted IT partner. We provide secure, reliable, and innovative technology solutions tailored for businesses of all sizes.',
    
  contact: 'Get in touch with WebAlora for expert IT services and solutions. Request a consultation with our specialists today.',
    
  career: (position: string) => 
    `Join our team at WebAlora as a ${position}. Help shape the future of IT solutions and grow your career with us.`,
};

/**
 * Keywords for common topics to enhance SEO
 */
export const keywordSets = {
  managedIT: ['Managed IT Services', 'IT Support', 'IT Solutions', 'Business IT', 'Technical Support'],
  
  cybersecurity: ['Cybersecurity', 'IT Security', 'Data Protection', 'Security Solutions', 'Threat Prevention'],
  
  cloud: ['Cloud Solutions', 'Cloud Migration', 'Cloud Computing', 'Cloud Services', 'Cloud Infrastructure'],
  
  networking: ['Network Infrastructure', 'Business Network', 'Network Security', 'IT Networking', 'Network Solutions'],
  
  backup: ['Backup Solutions', 'Disaster Recovery', 'Data Backup', 'Business Continuity', 'Data Protection'],
  
  voip: ['VOIP Solutions', 'Business Phone Systems', 'IP Telephony', 'Communications Solutions', 'VoIP Services'],
  
  consultancy: ['IT Consultancy', 'Technology Strategy', 'Digital Transformation', 'IT Consulting', 'Technical Strategy'],
  
  cctv: ['CCTV Solutions', 'Security Cameras', 'Video Surveillance', 'Business Security', 'Monitoring Systems'],
};

/**
 * Get list of keywords for a specific page or content type
 */
export function getKeywordsForPage(pageType: string, topic?: string): string[] {
  const baseKeywords = ['WebAlora', 'IT Services', 'Technology Solutions'];
  
  switch (pageType) {
    case 'home':
      return [...baseKeywords, 'Managed IT', 'IT Support', 'Cybersecurity', 'Cloud Solutions'];
      
    case 'service':
      if (topic === 'cybersecurity') {return [...baseKeywords, ...keywordSets.cybersecurity];}
      if (topic === 'cloud') {return [...baseKeywords, ...keywordSets.cloud];}
      if (topic === 'networking') {return [...baseKeywords, ...keywordSets.networking];}
      if (topic === 'backup') {return [...baseKeywords, ...keywordSets.backup];}
      if (topic === 'voip') {return [...baseKeywords, ...keywordSets.voip];}
      if (topic === 'consultancy') {return [...baseKeywords, ...keywordSets.consultancy];}
      if (topic === 'cctv') {return [...baseKeywords, ...keywordSets.cctv];}
      return [...baseKeywords, ...keywordSets.managedIT];
      
    case 'blog':
      return [...baseKeywords, 'IT Blog', 'Technology Insights', 'IT News', 'Tech Trends'];
      
    case 'case-study':
      return [...baseKeywords, 'Case Study', 'Success Story', 'Client Results', 'Business Solutions'];
      
    case 'about':
      return [...baseKeywords, 'IT Company', 'IT Team', 'Technology Partner', 'IT Expertise'];
      
    case 'contact':
      return [...baseKeywords, 'IT Support Contact', 'Technology Assistance', 'IT Help'];
      
    case 'careers':
      return [...baseKeywords, 'IT Jobs', 'Technology Careers', 'IT Positions', 'Tech Employment'];
      
    case 'resources':
      return [...baseKeywords, 'IT Resources', 'Technology Guides', 'IT Knowledge Base'];
      
    default:
      return baseKeywords;
  }
}