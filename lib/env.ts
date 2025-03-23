export type EnvVar = {
  name: string;
  required: boolean;
  defaultValue?: string;
};

export const ENV_VARS: EnvVar[] = [
  { name: 'NEXT_PUBLIC_SITE_URL', required: false, defaultValue: 'https://webalora.com' },
  { name: 'NEXT_PUBLIC_STRAPI_URL', required: false, defaultValue: 'https://cms.webalora.com' },
  { name: 'NEXT_PUBLIC_API_URL', required: false, defaultValue: 'https://cms.webalora.com' },
  { name: 'NEXT_PUBLIC_EMAILJS_SERVICE_ID', required: false, defaultValue: 'service_c4c3d18' },
  { name: 'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', required: false, defaultValue: 'template_contact' },
  { name: 'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', required: false, defaultValue: '90tht713qoeJPf180' },
  { name: 'NEXT_PUBLIC_RECAPTCHA_SITE_KEY', required: false },
  { name: 'RECAPTCHA_SECRET_KEY', required: false },
];

export function getEnv(name: string, defaultValue?: string): string {
  const envVar = process.env[name];
  if (!envVar) {
    if (defaultValue !== undefined) {
        return defaultValue;
    }
    throw new Error(`Environment variable ${name} is required but not set`);
  }
  return envVar;
}

export function validateEnv(): void {
  const missingVars: string[] = [];
  
  ENV_VARS.forEach(({ name, required, defaultValue }) => {
    if (required && !process.env[name] && defaultValue === undefined) {
      missingVars.push(name);
    }
  });
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}