export type ProjectCategory = 'web' | 'mobile' | 'fullstack';

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  technologies: Technology[];
  imageUrl: string;
  gradientColors: string[];
  featured: boolean;
  year: number;
  status: 'completed' | 'in-progress' | 'archived';
  links: {
    demo?: string;
    github?: string;
    store?: string;
  };
  features: string[];
  screenshots: string[];
}
