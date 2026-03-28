import { FC, useRef, useState } from "react";
import "./Services.css";
import { useTranslation } from "react-i18next";

// Helper array to define the order and keys of the services
// These keys MUST match the structure of your JSON: services.massage.[key]
const SERVICE_KEYS = [
  "chestBreastMassage",
  "fertilityWork",
  "deepTissueMassage",
  "acupressure",
  "prenatalMassage",
  "reflexology",
  "reikiHealing",
  "relaxationMassage",
  "lymphaticDrainageAesthetic", // Mapped to "Lymphatic drainage"
  "soundHealing",
  "facialMassage",
  "lomiLomi",
  "cupping",
  "guaSha",
  "flowerEssences",
  "lymphaticDrainageVodder", // Mapped to "Lymphatic drainage (Vodder)"
  "palliativeEndofLife", // Mapped to "End of life/Palliative"
  "hotStoneTherapy",
];

// NOTE: The images are kept hardcoded as they don't change based on language.
const SERVICE_IMAGES: Record<string, string> = {
  chestBreastMassage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHk8MMC6fY5xKsAL2Do7XGCIzgzyeEb8nRUg&s",
  fertilityWork:
    "https://images.squarespace-cdn.com/content/v1/56e8b12fd51cd4325489883e/1563395114051-V4BOVBESVKAISDUMZDMX/fertility+massage+fertility+chapel+hill+durham+raleigh",
  deepTissueMassage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZAlhIHadDbl8VSH-Gc5kg6gD27stuyw65g&s",
  acupressure:
    "https://images.ctfassets.net/yixw23k2v6vo/spu_wysiwyg_fid42714_asset/42f4ba77cbd1df0b1f5777e3f4ff908d/acupressure_thumbs_on_back_iStock-495718179.jpg",
  prenatalMassage:
    "https://nychirocenter.com/wp-content/uploads/manhattan-prenatal-massage-2.jpg",
  reflexology:
    "https://www.zeel.com/blog/wp-content/uploads/2023/12/reflexology-foot-massage-feat.jpg",
  reikiHealing:
    "https://assets.clevelandclinic.org/transform/5d7ee528-6cc3-4f98-8c2c-22c03e77475a/reiki-hands-487485268",
  relaxationMassage:
    "https://manhattanchirocenter.com/wp-content/uploads/manhattan-therapeutic-massage-3.jpg",
  lymphaticDrainageAesthetic:
    "https://cleanmarket.com/cdn/shop/files/Lymphatic_Drainage_Massage_cfe1a68b-3507-4280-b805-8d6f39a6ce57.jpg?v=1689817847",
  soundHealing:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnI7iD7EkBXvIdLuyb2JHxzpSa2xOOMb8fbw&s",
  facialMassage:
    "https://www.lydiasarfati.com/wp-content/uploads/2024/03/Face-Massage-Stock-Image-scaled.jpeg",
  lomiLomi:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3AzW3NJs0X_LceyIy50Cn_hxd2xtpsvifg&s",
  cupping:
    "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2431087.png",
  guaSha:
    "https://www.northeastspineandsports.com/wp-content/uploads/2021/09/shutterstock_101865523-scaled.jpg",
  flowerEssences:
    "https://post.healthline.com/wp-content/uploads/2020/09/flower-petal-essence-oil-essential-1296x728-header.jpg",
  lymphaticDrainageVodder:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8thcZ1waWajvgxADdXZx0F_eljDfgb0LWMA&s",
  palliativeEndofLife:
    "https://www.nia.nih.gov/sites/default/files/inline-images/providing-comfort-end-of-life-inline_0.jpg",
  hotStoneTherapy:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2fTnrM9ls9jx4vbov_iwH1adiCElLFXtWw&s",
};

// The Service interface is no longer needed since we use translation keys
// But keeping it for completeness if you use the structure elsewhere.
interface Service {
  title: string;
  description: string;
  duration?: string;
  price?: string;
  image?: string;
}

// ⭐ ServiceImage component remains unchanged
interface ServiceImageProps {
  src: string;
  alt: string;
  className: string;
}

const ServiceImage: FC<ServiceImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-container ${isLoaded ? "loaded" : ""}`}>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
// ⭐ End of new component

const Services: FC = () => {
  const { t } = useTranslation();

  // Dynamically generate the list of services using the keys
  const servicesData = SERVICE_KEYS.map((key) => ({
    key, // The unique key for lookup
    title: t(`services.massage.${key}.title`),
    description: t(`services.massage.${key}.description`),
    image: SERVICE_IMAGES[key],
    // If you add duration/price keys, you would use them here too:
    // duration: t(`services.massage.${key}.duration`),
    // price: t(`services.massage.${key}.price`),
  }));

  const servicesRef = useRef<HTMLDivElement>(null);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  // Use the new dynamically generated array
  const services = servicesData;

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
    setShowAll((prev) => !prev); // Scroll to top only when hiding services (showing less)

    if (wasShowingAll && servicesRef.current) {
      setTimeout(() => {
        servicesRef.current?.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }, 0);
    }
  };

  return (
    <section id="services" className="services-section" ref={servicesRef}>
      <div className="container">
        {/* 👈 Translate Section Title */}
        <h2>{t("services.title")}</h2>
        {/* 👈 Translate Section Intro Description */}
        <p className="section-intro">{t("services.description")}</p>

        <div className="services-grid">
          {visibleServices.map((service, index) => {
            const isExpanded = expandedCards.includes(index);
            const firstSentence = getFirstSentence(service.description);
            const needsReadMore =
              firstSentence.length < service.description.length;

            return (
              <div key={index} className="service-card">
                {/* Title is already translated via servicesData */}
                <h3>{service.title}</h3>
                {service.image && (
                  <ServiceImage
                    src={service.image}
                    alt={service.title} // Alt text is the translated title
                    className="service-image"
                  />
                )}

                <p>
                  {/* Description is already translated via servicesData */}
                  {isExpanded
                    ? service.description
                    : firstSentence + (needsReadMore ? "..." : "")}
                </p>
                <div className="service-details">
                  <div>
                    {/* <span className="duration">{service.duration}</span>       
         
                    {service.price && (
                      <span className="price"> | {service.price}</span>
                    )} */}
                  </div>

                  {needsReadMore && (
                    <button
                      className="read-more-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {/* 👈 Translate Read More/Less buttons */}
                      {isExpanded
                        ? t("services.readLess")
                        : t("services.readMore")}
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
              {showAll
                ? t("services.showLessServices")
                : t("services.showMoreServices")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
