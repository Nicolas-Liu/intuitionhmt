import "./About.css";
import logo from "../assets/kat-massaging.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Intuition</h2>
            <p>
              As a Licensed Massage Therapist and Holistic Practitioner, I offer
              personalized, therapeutic, and rejuvenating bodywork tailored to
              each client’s needs. My passion lies in helping people reconnect
              with their mind, body, and spirit to support overall well-being.
            </p>
            <p>
              I specialize in a variety of massage modalities, including deep
              tissue, Swedish, prenatal, and Lomi Lomi. With a strong
              understanding of anatomy and an intuitive touch, I create sessions
              that are both effective and deeply restorative.
            </p>
            <p>
              Beyond massage, I offer holistic services such as fertility
              support, acupressure/Traditional Chinese Medicine, reflexology,
              Reiki, sound healing, and other energy-based techniques. I also
              provide select aesthetic treatments like facial massage and
              Brazilian lymphatic drainage body contouring.
            </p>
            <p>
              It is my mission to create a safe, comfortable, and healing
              environment where clients can experience the profound benefits of
              massage and holistic therapies.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              {/* In a real implementation, you would use an actual image */}
              {/* <span>Massage Therapist Image</span> */}
              <img src={logo} alt="Massage Therapist" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
