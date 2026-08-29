export interface Project {
  id: string;
  name: string;
  repoUrl: string;
  stack: string[];
  description: string;
  highlights: string[];
  stars?: number;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: string[];
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  badgeUrl: string;
  label: string;
}
