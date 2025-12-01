import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./styles/theme.css";
import NotificationBanner from "./components/NotificationBanner";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const checkTimeForTheme = () => {
    const hour = new Date().getHours();
    // Nighttime hours (e.g., 7 PM to 6:59 AM)
    const isNightTime = hour >= 19 || hour < 7;

    setDarkMode(isNightTime);

    if (isNightTime) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

  useEffect(() => {
    checkTimeForTheme();
  }, []);

  const toggleTheme = () => {
    const newDarkModeState = !darkMode;
    setDarkMode(newDarkModeState);

    if (newDarkModeState) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

  return (
    <div className={`app ${darkMode ? "dark-theme" : ""}`}>
      <NotificationBanner />
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
