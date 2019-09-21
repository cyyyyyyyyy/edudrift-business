import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./language/en/translation.json";
import translationZH from "./language/zh/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: true
  }
});
