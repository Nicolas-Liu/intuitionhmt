import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  // Use the Backend to load files from public/locale
  .use(Backend)
  // Detect user language for initial load
  .use(LanguageDetector)
  // Pass i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
    defaultNS: "translation",
    debug: false,

    // Crucial: This tells i18next where to find your JSON files
    backend: {
      loadPath: "/locale/{{lng}}/translation.json",
    },

    // React configuration
    react: {
      useSuspense: false, // Set to false to avoid setting up React.Suspense initially
    },
  });

export default i18n;
