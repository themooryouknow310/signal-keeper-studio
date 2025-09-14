import { modalityServiceCombinations, ModalityServiceConfig } from '@/config/modalityServiceConfig';

export interface ProgrammaticRoute {
  path: string;
  config: ModalityServiceConfig;
}

export const generateProgrammaticRoutes = (): ProgrammaticRoute[] => {
  return modalityServiceCombinations.map(config => ({
    path: `/${config.urlSlug}`,
    config
  }));
};

export const getProgrammaticRouteConfig = (path: string): ModalityServiceConfig | null => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const config = modalityServiceCombinations.find(config => config.urlSlug === cleanPath);
  return config || null;
};

export const generateSitemapEntries = (): string[] => {
  const baseUrl = 'https://sacredsignalos.com';
  return modalityServiceCombinations.map(config => `${baseUrl}/${config.urlSlug}`);
};

// Utility to add new modality/service combinations programmatically
export const addModalityServiceCombination = (
  modality: string,
  service: string,
  audience: string,
  primaryColor: 'signal' | 'brass' | 'cyan' = 'signal'
): ModalityServiceConfig => {
  const urlSlug = `${modality.toLowerCase()}-${service.toLowerCase().replace(/\s+/g, '-')}-${audience.toLowerCase()}`;
  const seoTitle = `${modality} ${service} for ${audience} - Sacred Signal OS`;
  const seoDescription = `Specialized ${service.toLowerCase()} for ${modality.toLowerCase()} ${audience.toLowerCase()} to build thriving businesses.`;
  const keywords = [
    `${modality.toLowerCase()} ${service.toLowerCase()}`,
    `${modality.toLowerCase()} ${audience.toLowerCase()}`,
    `${service.toLowerCase()} for ${audience.toLowerCase()}`,
    'sacred signal os'
  ];

  return {
    modality,
    service,
    audience,
    urlSlug,
    seoTitle,
    seoDescription,
    keywords,
    primaryColor
  };
};