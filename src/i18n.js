import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

import translationEN from './language/en/translation.json';
import translationZH from './language/zh/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    zh: {
        translation: translationZH
    }
};

i18n.use(reactI18nextModule).init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false
    },
    react: {
        wait: true
    }
});
