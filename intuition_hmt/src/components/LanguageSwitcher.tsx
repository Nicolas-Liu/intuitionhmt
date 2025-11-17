import { FC } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  // Get the current language code (e.g., 'en' or 'fr')
  const currentLanguage = i18n.language.substring(0, 2);

  const changeLanguage = (lng: "en" | "fr") => {
    // This function changes the app's current language
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-button ${currentLanguage === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <div className="lang-divider"></div>
      <button
        className={`lang-button ${currentLanguage === "fr" ? "active" : ""}`}
        onClick={() => changeLanguage("fr")}
        aria-label="Passer au Français"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
