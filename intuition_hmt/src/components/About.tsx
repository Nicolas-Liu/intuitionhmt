// import "./About.css";
// import logo from "../assets/kat-massaging.png";
// import { useEffect } from "react";
// import "./i18n";

// const About = () => {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const title = document.querySelector(".about-text h2");
//     if (title) observer.observe(title);

//     return () => observer.disconnect();
//   }, []);
//   return (
//     <section id="about" className="about-section">
//       <div className="container">
//         <div className="about-content">
//           <div className="about-text">
//             <h2>About Intuition</h2>
//             <p className="first-paragraph">
//               <span className="drop-cap">A</span>s a Licensed Massage Therapist
//               and Holistic Practitioner, I offer personalized, therapeutic, and
//               rejuvenating bodywork tailored to each client's needs. My passion
//               lies in helping people reconnect with their mind, body, and spirit
//               to support overall well-being.
//             </p>
//             <p>
//               I specialize in a variety of massage modalities, including deep
//               tissue, Swedish, prenatal, and Lomi Lomi. With a strong
//               understanding of anatomy and an intuitive touch, I create sessions
//               that are both effective and deeply restorative.
//             </p>
//             <p>
//               Beyond massage, I offer holistic services such as fertility
//               support, acupressure/Traditional Chinese Medicine, reflexology,
//               Reiki, sound healing, and other energy-based techniques. I also
//               provide select aesthetic treatments like facial massage and
//               Brazilian lymphatic drainage body contouring.
//             </p>
//             <p>
//               It is my mission to create a safe, comfortable, and healing
//               environment where clients can experience the profound benefits of
//               massage and holistic therapies.
//             </p>
//           </div>
//           <div className="about-image">
//             <div className="image-placeholder">
//               <img loading="lazy" src={logo} alt="Massage Therapist" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { useEffect } from "react";
// 👈 Import the hook from react-i18next
import { useTranslation } from "react-i18next";
import "./About.css";
import logo from "../assets/kat-massaging.png";

const About = () => {
  // Destructure the translation function 't'
  const { t } = useTranslation();

  // Existing useEffect for IntersectionObserver (no changes needed here)
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

    // Use a class selector to observe the title
    const title = document.querySelector(".about-text h2");
    if (title) observer.observe(title);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            {/* 👈 Use 't' function to translate the title */}
            <h2>{t("about.title")}</h2>

            <p className="first-paragraph">
              {/* Note: If the drop cap is purely visual, you can keep the span outside the translation key */}
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
