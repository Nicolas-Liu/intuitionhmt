import { FC } from "react";
import { useTranslation } from "react-i18next";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="mobile-menu-content">
        <nav>
          <ul>
            <li>
              <a href="#services" onClick={onClose}>
                {t("header.navServices")}
              </a>
            </li>
            <li>
              <a href="#about" onClick={onClose}>
                {t("header.navAbout")}
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={onClose}>
                {t("header.navTestimonials")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={onClose}>
                {t("header.navContact")}
              </a>
            </li>
            <li>
              <a
                href="https://intuitionhmt.datedechoix.com/main.php?c=29744232170&language=french"
                target="_blank"
                className="button primary"
                onClick={onClose}
                rel="noreferrer"
              >
                {t("header.bookNow")}
              </a>
            </li>
          </ul>
        </nav>
        {/* <a
          href="https://intuitionhmt.datedechoix.com/main.php?c=29744232170&language=french"
          className="booking-button"
          onClick={onClose}
        >
          Book Now
        </a> */}
      </div>
    </div>
  );
};

export default MobileMenu;
