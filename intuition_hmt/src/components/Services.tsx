import { FC, useRef, useState } from "react";
import "./Services.css";

interface Service {
  title: string;
  description: string;
  duration?: string;
  price?: string;
  image?: string;
}

const Services: FC = () => {
  const services: Service[] = [
    {
      title: "Pre & Post-Operative Chest & Breast Massage",
      description:
        "This gentle, specialized massage is designed for clients preparing for or recovering from chest/breast surgeries (augmentation, reduction, reconstruction, top surgery, mastectomy) and for clients with healthy chests who simply want to release tension, improve circulation, or soften tissue restrictions. It helps reduce swelling, softens scar tissue and adhesions, eases discomfort and numbness, improves circulation, and supports emotional wellbeing.",
      // duration: "60-90 mins",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHk8MMC6fY5xKsAL2Do7XGCIzgzyeEb8nRUg&s",
    },
    {
      title: "Fertility work",
      description:
        "Whether you're just starting, undergoing IVF, or have been trying for a while, I offer a natural, holistic approach to support your fertility journey. Using acupressure, Traditional Chinese Medicine, and Reproductive Reflexology, I’m one of the few practitioners in North America combining these methods.",
      // duration: "60-90 mins",
      image:
        "https://images.squarespace-cdn.com/content/v1/56e8b12fd51cd4325489883e/1563395114051-V4BOVBESVKAISDUMZDMX/fertility+massage+fertility+chapel+hill+durham+raleigh",
    },
    {
      title: "Deep Tissue Massage",
      description:
        "Targets deeper layers of muscle and connective tissue to help with chronic pain and muscle tightness.",
      // duration: "60-90 mins",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZAlhIHadDbl8VSH-Gc5kg6gD27stuyw65g&s",
    },
    {
      title: "Accupresure",
      description:
        "This is an ancient healing art, that treats the mind-body-spirit as a whole. There are no needles used, it is mostly light pressure that is held on points all over the body. Whether you are coming in for physical pain or injury or emotional, we will look at your case, as a whole and treat you accordingly. For this treatment, the first one will be 90 minutes and then usually 60 minutes for the following appointments.",
      // duration: "60 mins",
      image:
        "https://images.ctfassets.net/yixw23k2v6vo/spu_wysiwyg_fid42714_asset/42f4ba77cbd1df0b1f5777e3f4ff908d/acupressure_thumbs_on_back_iStock-495718179.jpg",
    },
    {
      title: "Prenatal Massage",
      description:
        "For clients 16 weeks pregnant or more. If you're earlier in your pregnancy and need support, feel free to reach out by text or email. This gentle, side-lying massage is tailored for comfort and safety, with lighter pressure than a standard massage. Please let me know of any specific needs or concerns.",
      // duration: "60 mins",
      image:
        "https://nychirocenter.com/wp-content/uploads/manhattan-prenatal-massage-2.jpg",
    },
    {
      title: "Reflexology",
      description:
        "Applies pressure to specific points on the feet to promote healing in corresponding body parts.",
      // duration: "45-60 mins",
      image:
        "https://www.zeel.com/blog/wp-content/uploads/2023/12/reflexology-foot-massage-feat.jpg",
    },
    {
      title: "Reiki Healing",
      description:
        "Energy healing technique that promotes relaxation, stress reduction, and symptom relief.",
      // duration: "60 mins",
      image:
        "https://assets.clevelandclinic.org/transform/5d7ee528-6cc3-4f98-8c2c-22c03e77475a/reiki-hands-487485268",
    },
    {
      title: "Relaxation Massage",
      description:
        "This massage is for people who don’t have any specific aches and pains, who are just looking to release and relax. The pressure is medium to medium hard, with more broad strokes. It may be combined with other modalities, depending on the needs of the client.",
      // duration: "45-60 mins",
      image:
        "https://manhattanchirocenter.com/wp-content/uploads/manhattan-therapeutic-massage-3.jpg",
    },
    {
      title: "Lymphatic drainage",
      description:
        "This lymphatic massage is an aesthetic treatment, aimed at immediate debloating, body contouring, and cellulite reduction. However, it can be harsh on the lymphatic system and organs. Wood therapy is used during the session and may cause bruising.",
      // duration: "60 mins",
      image:
        "https://cleanmarket.com/cdn/shop/files/Lymphatic_Drainage_Massage_cfe1a68b-3507-4280-b805-8d6f39a6ce57.jpg?v=1689817847",
    },
    {
      title: "Sound healing",
      description:
        "Using tuning forks, specialized sound frequencies are used to create a therapeutic atmosphere to promote deep rest, nervous system rebalancing, and emotional release.",
      // duration: "45-60 mins",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnI7iD7EkBXvIdLuyb2JHxzpSa2xOOMb8fbw&s",
    },
    {
      title: "Facial massage",
      description:
        "This is an aesthetic massage of the face, using Lymphatic drainage, Kansa wand, Guasha, cupping and Acupressure. You will get a 60 minute treatment, using organic oils and cleansers, specifically designed for your constitution. Please advise me of any skin sensitivities you may have.",
      // duration: "60 mins",
      image:
        "https://www.lydiasarfati.com/wp-content/uploads/2024/03/Face-Massage-Stock-Image-scaled.jpeg",
    },
    {
      title: "Lomi-Lomi",
      description:
        "Lomi-Lomi is a relaxing Hawaiian massage, mimicking the waves of the ocean. Using long, rhythmic forearm strokes and lots of oil (Apricot and Coconut), this massage will relax your muscles, promote blood circulation, and will move Qi throughout the body.",
      // duration: "60 mins",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3AzW3NJs0X_LceyIy50Cn_hxd2xtpsvifg&s",
    },
    {
      title: "Cupping",
      description:
        "This is an ancient tool used in Chinese medicine (and throughout the world). It is used to treat chronic or acute pain, inflammation, remove toxins and stagnation, and for general wellbeing. It begins with a regular massage, then silicone cups may be used to glide and pull, then the solid cups are placed for 10-20 minutes. This leaves the purple or red spots, which last for 3 days to 2 weeks. If you would like full body cupping, I would recommend booking a 2 hour session.",
      // duration: "60-120 mins",
      image:
        "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2431087.png",
    },
    {
      title: "GuaSha",
      description:
        "Scraping the skin with a guasha tool, oil, and tiger balm. This Traditional Chinese medicine technique is used for a multitude of issues but mainly is for chronic pain and inflammation. Tendonitis, tennis or golfers elbow, costochondritis, SI pain, neck pain, etc. It can help boost circulation, enhance nerve communication, improve lymphatic flow, muscle reparation, soothe auto-immune diseases.",
      // duration: "45-60 mins",
      image:
        "https://www.henryford.com/-/media/project/hfhs/henryford/content-images/henry-ford/services/integrative-medicine/gua-sha.jpg?h=234&w=350&hash=8EB8B4A0CF0714012E2989092B610E85",
    },
    {
      title: "Flower essences",
      description:
        "These vibrational remedies specifically address the emotional and behavioral issues that may be affecting your overall wellness or that of any being. Flower Essences are liquid, plant preparations made from the fresh flower blossoms of a plant that imprint water with their energetic patterning. They are extremely diluted and no part of the flower is actually in it, so there is no worry for allergies. There is a small amount of alcohol in it, so if there are restrictions for this, we can arrange to make ones without.",
      // duration: "60 mins",
      image:
        "https://post.healthline.com/wp-content/uploads/2020/09/flower-petal-essence-oil-essential-1296x728-header.jpg",
    },
    {
      title: "Lymphatic drainage (Vodder)",
      description:
        "This is the more clinical lymphatic drainage, using the Vodder technique. This uses very gentle, slow movements, to pump and push the lymphatic fluid throughout your body. This is best for people with edema, circulatory issues, or post-surgical but it is a great treatment for anyone who wants to detox the body. Please be warned, it is a very LIGHT pressure, it is NOT a massage. You may also feel a little tired or under the weather afterwards, due to the body’s healing response.",
      // duration: "60 mins",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8thcZ1waWajvgxADdXZx0F_eljDfgb0LWMA&s",
    },
    {
      title: "End of life/Palliative",
      description:
        "This service is for you or your loved one who is nearing the end of life, whether it be due to illness, by choice, or just old age. I work with reflexology, acupressure, Reiki and Sound healing to help calm, ease, and balance their mind-body-spirit, so they are content and comfortable with the life transition.",
      // duration: "60 mins",
      image:
        "https://www.nia.nih.gov/sites/default/files/inline-images/providing-comfort-end-of-life-inline_0.jpg",
    },
    {
      title: "Hot Stone Therapy",
      description:
        "Experience deep relaxation as warm stones melt away tension. Smooth stones are placed on the body and also used in combination with massage techniques to release tight muscles. Pressure ranges from medium to medium-firm.",
      // duration: "75 mins",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2fTnrM9ls9jx4vbov_iwH1adiCElLFXtWw&s",
    },
    // Add more services if needed
  ];
  const servicesRef = useRef<HTMLDivElement>(null);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleExpand = (index: number) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter((i) => i !== index));
    } else {
      setExpandedCards([...expandedCards, index]);
    }
  };

  const getFirstSentence = (text: string) => {
    const match = text.match(/.*?[.!?](\s|$)/);
    return match ? match[0].trim() : text;
  };

  const visibleServices = showAll ? services : services.slice(0, 6);

  const toggleShowAll = () => {
    const wasShowingAll = showAll;
    setShowAll((prev) => !prev);

    // Scroll to top only when hiding services (showing less)
    if (wasShowingAll && servicesRef.current) {
      setTimeout(() => {
        servicesRef.current?.scrollIntoView();
      }, 0);
    }
  };

  return (
    <section id="services" className="services-section" ref={servicesRef}>
      <div className="container">
        <h2>Services</h2>
        <p className="section-intro">
          Each treatment is customized to your individual needs and preferences.
        </p>

        <div className="services-grid">
          {visibleServices.map((service, index) => {
            const isExpanded = expandedCards.includes(index);
            const firstSentence = getFirstSentence(service.description);
            const needsReadMore =
              firstSentence.length < service.description.length;

            return (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                {service.image && (
                  <img
                    loading="lazy"
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                )}
                <p>
                  {isExpanded
                    ? service.description
                    : firstSentence + (needsReadMore ? "..." : "")}
                </p>
                <div className="service-details">
                  <div>
                    <span className="duration">{service.duration}</span>
                    {service.price && (
                      <span className="price"> | {service.price}</span>
                    )}
                  </div>
                  {needsReadMore && (
                    <button
                      className="read-more-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {services.length > 6 && (
          <div className="show-more-container">
            <button className="show-more-btn" onClick={toggleShowAll}>
              {showAll ? "Show Less Services" : "Show More Services"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
