import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';

import EnglishTranslation from './src/languages/english.json'
import DeutschTranslation from './src/languages/deutsch.json'
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init


let resources = {
    en: {
        translation: EnglishTranslation
    },
    de: {
        translation: DeutschTranslation
    }
};

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        debug: true,
        resources,
        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;