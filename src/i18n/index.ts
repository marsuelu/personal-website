import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import zh from './zh.json';

export const resources = {
  en: { translation: en },
  zh: { translation: zh },
} as const;
export const defaultNS = 'translation'; // Default namespace for translations

i18n
  .use(LanguageDetector) // Auto-detect from browser
  .use(initReactI18next)
  .init({
    resources,
    defaultNS,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    supportedLngs: ['en', 'zh'],
    debug: true,
  });

export default i18n;
