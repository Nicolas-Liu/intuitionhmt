import { FC, MouseEvent, useEffect } from "react";
import "./Hero.css";
import heroBackground from "../assets/hero-background.webp";
import { useTranslation } from "react-i18next";

const Hero: FC = () => {
  const { t } = useTranslation();

  const scrollToSection =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    };

  useEffect(() => {
    // This will ensure the animations trigger when the component mounts
    const elements = document.querySelectorAll(
      ".hero h1, .hero .subtitle, .hero .hero-actions",
    );
    elements.forEach((el) => el.classList.add("animate"));
  }, []);

  return (
    <section className="hero">
      <img className="hero-bg" src={heroBackground} alt="" />
      <div className="container">
        {/* LGBTQ and breast cancer */}
        <>
          <div className="banner-image custom-home">
            <img
              src="https://cdn.prod.website-files.com/6758f6baa11bc21201f3d099/678f5120dccb5081877c77a8_675906b7e04ec497e122cee8_rainbow.jpg"
              loading="lazy"
              alt="A rainbow flag LGBTQ+"
              className="imagebanner"
            ></img>
            <img
              src="https://cdn.prod.website-files.com/6758f6baa11bc21201f3d099/678f512b0844a8694bdb0cbb_675906b72d610ac86ddb96bc_Trans.jpg"
              loading="lazy"
              alt="A trans flag "
              className="imagebanner"
            ></img>
            <img
              src="https://cdn.prod.website-files.com/6758f6baa11bc21201f3d099/675906b71a902cb0a27e26e8_CancerSein.png"
              loading="lazy"
              alt="Best cancer pink ribbon logo  "
              className="imagebanner"
            ></img>
          </div>
        </>
        <div className="hero-content">
          <h1>{t("hero.title")}</h1>
          <p className="subtitle">{t("hero.description")}</p>
          <div className="hero-actions">
            <a
              href="https://intuitionhmt.datedechoix.com/main.php?c=29744232170&language=french"
              className="button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("hero.book")}
            </a>
            <a
              href="#services"
              onClick={scrollToSection("services")}
              className="button secondary"
            >
              {t("hero.services")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
