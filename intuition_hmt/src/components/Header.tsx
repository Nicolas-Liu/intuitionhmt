import { FC } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import logo from "../assets/intuition-logo-image-text.png";

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: FC<HeaderProps> = ({
  darkMode,
  toggleTheme,
  mobileMenuOpen,
  toggleMobileMenu,
}) => {
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
          {/* <>
            <Link to="/" className="logo">
              <img src={logo} alt="Intuition Holistic and Massage Therapy" />
            </Link>
          </> */}
          <nav className="desktop-nav">
            <ul>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleDesktopNavClick(e, "services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleDesktopNavClick(e, "about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleDesktopNavClick(e, "testimonials")}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleDesktopNavClick(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
