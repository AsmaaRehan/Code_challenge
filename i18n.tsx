import i18next, { i18n as i18nInstance } from "i18next";
import { initReactI18next } from "react-i18next";

import EnglishTranslation from './src/languages/english.json'
import DeutschTranslation from './src/languages/deutsch.json'

const createI18n = (language: string): i18nInstance => {
  const i18n = i18next.createInstance().use(initReactI18next);


  let resources = {
    en: {
      translation: EnglishTranslation
    },
    de: {
      translation: DeutschTranslation
    }
  };


  i18n
    .init({
      fallbackLng: language,
      compatibilityJSON: 'v3',
      debug: true,
      resources,
      interpolation: {
        escapeValue: false,
      },
      react: { useSuspense: false },//this line

    });

  return i18n;
};

export const i18n = createI18n('en');

export default i18n;
