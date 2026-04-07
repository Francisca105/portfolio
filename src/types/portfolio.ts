export interface Meta {
  last_updated: string;
  author: string;
  language: string;
}

export interface Name {
  first: string;
  last: string;
  full: string;
  aka: string;
}

export interface Birth {
  date: string;
  location: string;
}

export interface Contact {
  email: string;
  location: string;
}

export interface Links {
  website: string;
  github: string;
  linkedin: string;
}

export interface Basics {
  name: Name;
  label: string;
  birth: Birth;
  contact: Contact;
  links: Links;
}

export interface StarHighlight {
  id: string;
  title: string;
  situation: string;
  action: string;
  result: string;
}

export interface Narratives {
  short: string;
  detailed: string;
  star_highlights: StarHighlight[];
}

export interface ProofOfCompetence {
  impact?: string;
  stack?: string[];
  scope?: string;
  scale?: string;
  leadership?: string;
  analytics?: string;
  field?: string;
  complexity?: string;
  metrics?: {
    orders_processed?: number;
  };
  technical?: string;
  status?: string;
}

export interface Role {
  title: string;
  start: string;
  end: string | null;
  is_current: boolean;
  description?: string;
  highlights?: string[];
  proof_of_competence?: ProofOfCompetence;
}

export interface IndustryExperience {
  company: string;
  context: string;
  location: string;
  roles: Role[];
}

export interface UniversityRole {
  organization: string;
  context: string;
  project: string;
  roles: Role[];
}

export interface StudentOrganization {
  organization: string;
  context: string;
  type: string;
  roles: Role[];
}

export interface Experience {
  industry: IndustryExperience[];
  university_roles: UniversityRole[];
  student_organizations: StudentOrganization[];
}

export interface LeadershipRole {
  title: string;
  period: string;
  description: string;
  highlight?: string;
}

export interface Education {
  degree: string;
  context: string;
  institution: string;
  location: string;
  start: string;
  end: string | null;
  is_current: boolean;
  highlights?: string[];
  leadership_roles?: LeadershipRole[];
}

export interface Project {
  title: string;
  context: string;
  role: string;
  start: string;
  end: string;
  description: string;
  technologies: string[];
  proof_of_competence?: ProofOfCompetence;
  links?: {
    github?: string;
    live?: string;
  };
}

export interface OpenSource {
  project: string;
  context: string;
  type: string;
  date: string;
  description: string;
  proof_of_competence?: ProofOfCompetence;
  links?: {
    github?: string;
  };
}

export interface Icons {
  light: string;
  dark: string;
}

export interface TechnicalSkill {
  name: string;
  category: string;
  level: string;
  start_year: number;
  is_featured: boolean;
  icons: Icons;
}

export interface Language {
  name: string;
  level: string;
}

export interface Skills {
  languages: Language[];
  technical: TechnicalSkill[];
}

export interface PortfolioData {
  meta: Meta;
  basics: Basics;
  narratives: Narratives;
  experience: Experience;
  education: Education[];
  projects: Project[];
  open_source: OpenSource[];
  skills: Skills;
}
