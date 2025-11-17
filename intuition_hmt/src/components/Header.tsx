import { FC } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import logo from "../assets/intuition-logo-image-only.webp";
import LanguageSwitcher from "./LanguageSwitcher"; // 👈 New Import
import { useTranslation } from "react-i18next";
interface HeaderProps {
  darkMode?: boolean;
  toggleTheme?: () => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: FC<HeaderProps> = ({
  darkMode,
  toggleTheme,
  mobileMenuOpen,
  toggleMobileMenu,
}) => {
  const { t } = useTranslation();
  const handleDesktopNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <>
            <a href="/" className="logo">
              <img src={logo} alt="Intuition Holistic and Massage Therapy" />
            </a>
          </>
          <nav className="desktop-nav">
            <ul>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleDesktopNavClick(e, "services")}
                >
                  {t("header.navServices")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleDesktopNavClick(e, "about")}
                >
                  {t("header.navAbout")}
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleDesktopNavClick(e, "testimonials")}
                >
                  {t("header.navTestimonials")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleDesktopNavClick(e, "contact")}
                >
                  {t("header.navContact")}
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            {/* 👈 The Language Switcher goes here */}
            <LanguageSwitcher />
            <button
              className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <span></span> <span></span>
              <span></span>
            </button>
            {/* The ThemeToggle can be uncommented here if you want it visible too */}

            {/* <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} /> */}
          </div>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
