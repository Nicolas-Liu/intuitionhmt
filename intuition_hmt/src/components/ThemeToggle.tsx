import { FC } from "react";
import "./ThemeToggle.css";

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => {
  return (
    <button
      className={`theme-toggle ${darkMode ? "dark" : ""}`}
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="toggle-container">
        <div className="toggle-track">
          <div className="icon moon">
            <svg viewBox="0 0 24 24">
              <path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1-3.7 2.5-4.7.4-.3.6-.8.4-1.3z" />
            </svg>
          </div>
          <div className="ball"></div>
          <div className="icon sun">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 5V3m0 18v-2m5.5-10.5l1.4-1.4M5.1 18.9l1.4-1.4M19 12h2M3 12h2m10.5-5.5l1.4 1.4M5.1 5.1l1.4 1.4" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
