
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export interface Achievement {
  title: string;
  issuer: string;
}
