import { FC, useState } from "react";
import "./Contact.css";

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append("form-name", "contact");
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      await fetch("/", {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      setSubmitMessage("Thank you for your message! We'll contact you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-intro">
          I would love to hear from you. Reach out through any of these
          channels.
        </p>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
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
                <a
                  href="mailto:Intuition.hmt@gmail.com"
                  className="contact-link"
                >
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
                <p className="contact-text">
                  Serving the Greater Montreal Area
                </p>
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

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Let's Connect</h3>
            <form
              onSubmit={handleSubmit}
              className="contact-form"
              name="contact" // Important: form name
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              {/* Add a hidden honeypot field */}
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: "none" }}>
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <svg className="spinner" viewBox="0 0 50 50">
                      <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        strokeWidth="5"
                      ></circle>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitMessage && (
                <p className="submit-message">{submitMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
