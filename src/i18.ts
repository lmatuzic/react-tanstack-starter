import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import en from '@/assets/languages/en.json';

export const defaultNS = 'translation';

export const resources = {
  en: {
    translation: en,
  },
};

export const setupI18n = (language: string) => {
  i18n.use(initReactI18next).init({
    resources,
    defaultNS,
    fallbackLng: 'en',
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
