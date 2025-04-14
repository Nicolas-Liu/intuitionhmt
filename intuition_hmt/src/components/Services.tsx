import { FC } from "react";
import "./Services.css";

interface Service {
  title: string;
  description: string;
  duration: string;
  price?: string;
}

const Services: FC = () => {
  const services: Service[] = [
    {
      title: "Fertility work",
      description:
        "Whether you're just starting, undergoing IVF, or have been trying for a while, I offer a natural, holistic approach to support your fertility journey. Using acupressure, Traditional Chinese Medicine, and Reproductive Reflexology, I’m one of the few practitioners in North America combining these methods.",
      duration: "60-90 mins",
      //   price: "$85-$120",
    },
    {
      title: "Deep Tissue Massage",
      description:
        "Targets deeper layers of muscle and connective tissue to help with chronic pain and muscle tightness.",
      duration: "60-90 mins",
      //   price: "$90-$130",
    },
    {
      title: "Hot Stone Therapy",
      description:
        "Experience deep relaxation as warm stones melt away tension. Smooth stones are placed on the body and also used in combination with massage techniques to release tight muscles. Pressure ranges from medium to medium-firm.",
      duration: "75 mins",
      //   price: "$110",
    },
    {
      title: "Prenatal massage",
      description:
        "For clients 16 weeks pregnant or more. If you're earlier in your pregnancy and need support, feel free to reach out by text or email. This gentle, side-lying massage is tailored for comfort and safety, with lighter pressure than a standard massage. Please let me know of any specific needs or concerns.",
      duration: "60 mins",
      //   price: "$95",
    },
    {
      title: "Reflexology",
      description:
        "Applies pressure to specific points on the feet to promote healing in corresponding body parts.",
      duration: "45-60 mins",
      //   price: "$75-$95",
    },
    {
      title: "Reiki Healing",
      description:
        "Energy healing technique that promotes relaxation, stress reduction, and symptom relief.",
      duration: "60 mins",
      //   price: "$85",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Services</h2>
        <p className="section-intro">
          Each treatment is customized to your individual needs and preferences.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-details">
                <span className="duration">{service.duration}</span>
                <span className="price">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
