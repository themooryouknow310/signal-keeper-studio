export interface ModalityServiceConfig {
  modality: string;
  service: string;
  audience: string;
  urlSlug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  primaryColor: 'signal' | 'brass' | 'cyan';
}

export const modalityServiceCombinations: ModalityServiceConfig[] = [
  {
    modality: "Empath",
    service: "Coaching",
    audience: "Entrepreneurs",
    urlSlug: "empath-entrepreneur-coaching",
    seoTitle: "Empath Entrepreneur Coaching - Transform Sensitivity into Success",
    seoDescription: "Specialized coaching for empathic entrepreneurs to build thriving businesses while honoring their sensitivity.",
    keywords: ["empath entrepreneur", "sensitive entrepreneur coaching", "empathic business", "HSP business coaching"],
    primaryColor: "signal"
  },
  {
    modality: "Reiki",
    service: "Business Coaching",
    audience: "Healers",
    urlSlug: "reiki-business-coaching",
    seoTitle: "Reiki Business Coaching - Scale Your Healing Practice",
    seoDescription: "Business coaching specifically for Reiki practitioners to build sustainable, profitable healing practices.",
    keywords: ["reiki business", "healing practice coaching", "reiki entrepreneur", "spiritual business"],
    primaryColor: "brass"
  },
  {
    modality: "Shadow Work",
    service: "Business Mentor",
    audience: "Coaches",
    urlSlug: "shadow-work-business-mentor",
    seoTitle: "Shadow Work Business Mentorship - Lead with Authentic Power",
    seoDescription: "Business mentorship for shadow work practitioners to build transformational coaching businesses.",
    keywords: ["shadow work business", "transformational coaching", "depth coaching business", "authentic leadership"],
    primaryColor: "cyan"
  },
  {
    modality: "Intuitive",
    service: "Entrepreneur Coaching",
    audience: "Women",
    urlSlug: "intuitive-entrepreneur-coaching-women",
    seoTitle: "Intuitive Entrepreneur Coaching for Women - Trust Your Inner Wisdom",
    seoDescription: "Coaching for intuitive women entrepreneurs to build heart-centered businesses aligned with their gifts.",
    keywords: ["intuitive entrepreneur", "women entrepreneur coaching", "heart-centered business", "intuitive business"],
    primaryColor: "signal"
  },
  {
    modality: "Energy Healing",
    service: "Business Strategy",
    audience: "Practitioners",
    urlSlug: "energy-healing-business-strategy",
    seoTitle: "Energy Healing Business Strategy - Build Your Thriving Practice",
    seoDescription: "Strategic business guidance for energy healing practitioners to create sustainable income streams.",
    keywords: ["energy healing business", "healing practice strategy", "holistic business coaching", "spiritual entrepreneur"],
    primaryColor: "brass"
  }
];

export const getConfigBySlug = (slug: string): ModalityServiceConfig | undefined => {
  return modalityServiceCombinations.find(config => config.urlSlug === slug);
};

export const generateSlug = (modality: string, service: string, audience: string): string => {
  return `${modality.toLowerCase()}-${service.toLowerCase().replace(/\s+/g, '-')}-${audience.toLowerCase()}`;
};