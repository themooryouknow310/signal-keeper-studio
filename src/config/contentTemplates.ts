import { ModalityServiceConfig } from './modalityServiceConfig';

export interface StatisticTemplate {
  value: string;
  title: string;
  description: string;
  color: 'signal' | 'brass' | 'cyan';
}

export interface InsightTemplate {
  icon: string;
  title: string;
  description: string;
  color: 'signal' | 'brass' | 'cyan';
}

export const universalStatistics: StatisticTemplate[] = [
  {
    value: "30%",
    title: "HIGHLY SENSITIVE PERSONS",
    description: "Updated research shows 30% of the population are HSPs, significantly higher than previous 20% estimates",
    color: "signal"
  },
  {
    value: "87.7%",
    title: "{{SERVICE}} PROFESSIONALS STRUGGLE",
    description: "Of {{service}} professionals experience at least one mental health challenge, highlighting the need for specialized support",
    color: "brass"
  },
  {
    value: "45%",
    title: "LESS BURNOUT WITH {{MODALITY}} SUPPORT",
    description: "{{Audience}} with proper {{modality}} community support are 45% less likely to experience burnout symptoms",
    color: "cyan"
  }
];

export const universalInsights: InsightTemplate[] = [
  {
    icon: "TrendingUp",
    title: "{{Modality}} Advantage",
    description: "{{Modality}} {{audience}} create more cohesive teams, stronger client relationships, and more authentic leadership approaches",
    color: "signal"
  },
  {
    icon: "Users",
    title: "Three-Group System",
    description: "Recent studies identify Orchids (30% highly sensitive), Tulips (40% moderate), and Dandelions (30% low sensitivity)",
    color: "brass"
  },
  {
    icon: "Shield",
    title: "Meaningful Work Protection",
    description: "{{Service}} {{audience}} experience lower burnout than employees due to autonomy, purpose-driven work, and meaningful engagement",
    color: "cyan"
  }
];

export const interpolateContent = (template: string, config: ModalityServiceConfig): string => {
  return template
    .replace(/\{\{MODALITY\}\}/g, config.modality.toUpperCase())
    .replace(/\{\{SERVICE\}\}/g, config.service.toUpperCase())
    .replace(/\{\{AUDIENCE\}\}/g, config.audience.toUpperCase())
    .replace(/\{\{Modality\}\}/g, config.modality)
    .replace(/\{\{Service\}\}/g, config.service)
    .replace(/\{\{Audience\}\}/g, config.audience)
    .replace(/\{\{modality\}\}/g, config.modality.toLowerCase())
    .replace(/\{\{service\}\}/g, config.service.toLowerCase())
    .replace(/\{\{audience\}\}/g, config.audience.toLowerCase());
};

export const getInterpolatedStatistics = (config: ModalityServiceConfig): StatisticTemplate[] => {
  return universalStatistics.map(stat => ({
    ...stat,
    title: interpolateContent(stat.title, config),
    description: interpolateContent(stat.description, config)
  }));
};

export const getInterpolatedInsights = (config: ModalityServiceConfig): InsightTemplate[] => {
  return universalInsights.map(insight => ({
    ...insight,
    title: interpolateContent(insight.title, config),
    description: interpolateContent(insight.description, config)
  }));
};