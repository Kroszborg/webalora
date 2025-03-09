// types/calendly.d.ts

interface CalendlyWidget {
  initBadgeWidget: (config: { 
    url: string; 
    text: string; 
    color: string; 
    textColor: string; 
    branding?: boolean;
  }) => void;
  
  initPopupWidget: (options: { 
    url: string; 
    prefill?: {
      email?: string;
      name?: string;
      firstName?: string;
      lastName?: string;
    };
    utm?: Record<string, string>;
    hideEventTypeDetails?: boolean;
    hideGdprBanner?: boolean;
    primaryColor?: string;
    [key: string]: string | number | boolean | object | null | undefined;
  }) => void;
  
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement | null;
    height: number;
    prefill?: {
      email?: string;
      name?: string;
      firstName?: string;
      lastName?: string;
    };
    utm?: Record<string, string>;
    hideEventTypeDetails?: boolean;
    hideGdprBanner?: boolean;
    primaryColor?: string;
    [key: string]: string | number | boolean | object | null | undefined;
  }) => void;
  
  closePopupWidget: () => void;
  destroyBadgeWidget: () => void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}