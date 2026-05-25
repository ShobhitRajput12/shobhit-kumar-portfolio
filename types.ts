
export interface Project {
  title: string;
  technologies: string[];
  points: string[];
  image: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  score: string;
  coursework?: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  duration: string;
  points: string[];
  technologies?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  icon?: string;
}
