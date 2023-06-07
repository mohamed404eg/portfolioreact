import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import translationEN from "./data/locales/en/translations";
import translationAR from "./data/locales/ar/translations";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: { translation: translationAR },
};
i18n.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources,
});
export default i18n;
