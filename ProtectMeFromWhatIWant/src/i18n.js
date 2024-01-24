import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'de'],
    fallbackLng: "de",
    backend: {
        loadPath: 'src/language/{{lng}}/translation.json',
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
