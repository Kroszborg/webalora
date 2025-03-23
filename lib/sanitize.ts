import DOMPurify from 'isomorphic-dompurify';

// Function to sanitize HTML content (for rich text)
export function sanitizeHtml(html: string): string {
  if (!html) {
    return '';
  }
  
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 
      'b', 'strong', 'i', 'em', 'code', 'pre', 'blockquote', 'img', 
      'div', 'span', 'br', 'hr'
    ],
    ALLOWED_ATTR: [
      'href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel',
      'style', 'data-*'
    ],
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover']
  });
}

// Function to sanitize form input (for basic text fields)
export function sanitizeInput(input: string): string {
  if (!input) {
    return '';
  }
  
  // Remove any HTML tags or dangerous characters
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[^\w\s.,@:;()?!-]/g, '') // Allow only safe characters
    .trim();
}

// Function to sanitize email addresses
export function sanitizeEmail(email: string): string {
  if (!email) {
    return '';
  }
  
  // Only allow valid email characters
  return email.replace(/[^\w.@+-]/g, '').trim();
}

// Function to sanitize phone numbers
export function sanitizePhone(phone: string): string {
  if (!phone) {
    return '';
  }
  
  // Only allow digits, spaces, plus sign, hyphens and parentheses
  return phone.replace(/[^\d\s+()-]/g, '').trim();
}