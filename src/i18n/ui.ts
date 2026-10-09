import type { CV, Lang } from '../data/types';
import { cvEs } from '../data/cv.es';
import { cvEn } from '../data/cv.en';

export const languages: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

export const defaultLang: Lang = 'es';

export const cvByLang: Record<Lang, CV> = {
  es: cvEs,
  en: cvEn,
};

export const ui = {
  es: {
    metaDescription:
      'CV de Angel Daniel Dzib Chan, Sr Front-End Developer con 7 años de experiencia en React y React Native.',
    contact: 'Contacto',
    experience: 'Experiencia',
    skills: 'Tecnologías',
    about: 'Acerca de mí',
    education: 'Estudios',
    downloadPdf: 'Descargar PDF',
    switchLang: 'View in English',
    skipToContent: 'Ir al contenido',
  },
  en: {
    metaDescription:
      'Resume of Angel Daniel Dzib Chan, Sr Front-End Developer with 7 years of experience in React and React Native.',
    contact: 'Contact',
    experience: 'Experience',
    skills: 'Skills',
    about: 'About me',
    education: 'Education',
    downloadPdf: 'Download PDF',
    switchLang: 'Ver en español',
    skipToContent: 'Skip to content',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIStrings = (typeof ui)[Lang];
