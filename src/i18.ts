import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import english from '@/assets/languages/english.json';

export const defaultNS = 'translation';

export const resources = {
  english,
};

export const setupI18n = (language: string) => {
  i18n.use(initReactI18next).init({
    resources,
    defaultNS,
    fallbackLng: 'english',
    lng: language,
    debug: process.env.NODE_ENV === 'development',
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    },
    missingKeyHandler: (_, ns, key) => {
      console.warn(`[i18n] Missing translation key: "${ns}:${key}"`);
    },
    parseMissingKeyHandler: (key) => `[MISSING: ${key}]`,
  });
};
