import { FC, useEffect } from "react";
import "./Hero.css";

const Hero: FC = () => {
  useEffect(() => {
    // This will ensure the animations trigger when the component mounts
    const elements = document.querySelectorAll(
      ".hero h1, .hero .subtitle, .hero .hero-actions"
    );
    elements.forEach((el) => el.classList.add("animate"));
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Holistic Healing for Mind & Body</h1>
          <p className="subtitle">
            Experience the transformative power of therapeutic massage and
            holistic treatments
          </p>
          <div className="hero-actions">
            <a
              href="https://intuitionhmt.datedechoix.com/main.php?c=29744232170&language=french"
              className="button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Session
            </a>
            <a href="#services" className="button secondary">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
