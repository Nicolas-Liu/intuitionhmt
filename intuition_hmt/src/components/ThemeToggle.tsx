import { FC } from "react";
import "./ThemeToggle.css";

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <span className="icon">☀️</span>
      ) : (
        <span className="icon">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;
