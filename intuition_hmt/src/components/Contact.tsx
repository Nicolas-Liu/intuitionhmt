import { FC } from "react";
import "./Contact.css";

const Contact: FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-intro">
          I would love to hear from you. Reach out through any of these
          channels.
        </p>

        <div className="contact-info-grid">
          <div className="info-block">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div>
              <h3>Email Me</h3>
              <a href="mailto:Intuition.hmt@gmail.com" className="contact-link">
                Intuition.hmt@gmail.com
              </a>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <h3>Location</h3>
              <p className="contact-text">Serving the Greater Montreal Area</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            </div>
            <div>
              <h3>Call Me</h3>
              <a href="tel:+14388140471" className="contact-link">
                (438) 814-0471
              </a>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
              </svg>
            </div>
            <div>
              <h3>Book Online</h3>
              <a
                href="https://intuitionhmt.datedechoix.com/main.php?c=29744232170&language=french"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
