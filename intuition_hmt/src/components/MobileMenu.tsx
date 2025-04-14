import { FC } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="mobile-menu-content">
        <nav>
          <ul>
            <li>
              <a href="#services" onClick={onClose}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" onClick={onClose}>
                About
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={onClose}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={onClose}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="https://intuitionhmt.datedechoix.com/main.php?c=29744232170&language=french"
          className="booking-button"
          onClick={onClose}
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
