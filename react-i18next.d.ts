// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)

import EnglishTranslation from './src/languages/english.json'
import DeutschTranslation from './src/languages/deutsch.json'

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
    // and extend them!
    interface Resources {
        en: typeof EnglishTranslation;
        de: typeof DeutschTranslation;
    }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
    // and extend them!
    interface CustomTypeOptions {
        // custom namespace type if you changed it
        defaultNS: 'en';
        // custom resources type
        resources: {
            en: typeof EnglishTranslation;
            de: typeof DeutschTranslation;
        };
    }
}