export type Lang = 'es' | 'en';

/**
 * Los textos admiten **negritas** con doble asterisco,
 * igual que en el PDF original (se resaltan tecnologías y logros).
 */
export interface Project {
  name: string;
  bullets: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  /** Proyectos dentro de la empresa (p. ej. clientes en consultoras). */
  projects?: Project[];
  /** Logros directos cuando no hay sub-proyectos. */
  bullets?: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Contact {
  phone: string;
  email: string;
  /** Opcional: URL completa, p. ej. https://www.linkedin.com/in/tu-usuario */
  linkedin?: string;
  /** Opcional: URL completa, p. ej. https://github.com/tu-usuario */
  github?: string;
  location?: string;
}

export interface CV {
  name: string;
  title: string;
  contact: Contact;
  about: string;
  experience: Job[];
  skills: SkillGroup[];
  education: Education[];
}
