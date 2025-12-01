import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
import logo from "../assets/kat-massaging.png";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const title = document.querySelector(".about-text h2");
    if (title) observer.observe(title);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{t("about.title")}</h2>

            <p className="first-paragraph">
              <span className="drop-cap">{t("about.firstLetter")}</span>
              {t("about.descriptionOne")}
            </p>
            <p>{t("about.descriptionTwo")}</p>
            <p>{t("about.descriptionThree")}</p>
            <p>{t("about.descriptionFour")}</p>

            <p>
              {/* Example of handling the drop-cap more cleanly: */}
              {/* <span className="drop-cap">A</span>
              {t('about.descriptionOne').substring(1)} */}
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <img loading="lazy" src={logo} alt={"Massage Therapist"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
