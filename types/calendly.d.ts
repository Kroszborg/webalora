export {};

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (config: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding?: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget: () => void;
      destroyBadgeWidget: () => void;
    };
  }
} 