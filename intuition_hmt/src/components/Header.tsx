import { FC } from "react";
// import { Link } from "react-router-dom";
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
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            <button
              className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
