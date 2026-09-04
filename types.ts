export type Language = 'vi' | 'en';

export interface LocalizedString {
  vi: string;
  en: string;
}

export const getText = (val: LocalizedString | string | undefined, lang: Language): string => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  return val[lang] || val.vi || '';
};

export interface Project {
  id: string;
  title: string;
  description: LocalizedString | string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  imageUrl: string;
}

export interface Skill {
  name: LocalizedString | string;
  category: 'technical' | 'soft';
}

export interface Experience {
  company: string;
  role: LocalizedString | string;
  period: LocalizedString | string;
  description?: LocalizedString | string;
  badge?: LocalizedString | string;
  images?: string[];
  highlights?: (LocalizedString | string)[];
}

export interface Achievement {
  title: LocalizedString | string;
  issuer: string;
  badge?: LocalizedString | string;
  highlight?: boolean;
}
