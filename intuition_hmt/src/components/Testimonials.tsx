import { FC, useEffect, useRef, useState } from "react";
import "./Testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  date?: string;
  content: string;
  rating: number;
}

const Testimonials: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Updated with actual Google reviews
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Laura Mora",
      //   date: "February 2024",
      content:
        "Working with Katrina is a blessing. She is not only professional and extremely knowledgeable but also, carries a deep intuition that allows her to treat you as a whole. I have a frozen shoulder condition and in only one session she helped to considerably improve the movement of my arm and neck. Katrina has also helped my husband to release anxiety symptoms through massage therapy. I entirely recommend her.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priscilla Phan",
      //   date: "January 2024",
      content:
        "Katrina has been my massage therapist during my twin pregnancy, having done other prenatal massages during my previous pregnancy, I can say that Katrina offers the best care and massages I can ask for during pregnancy! I will surely come back often and recommend her to friends and family!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Lawson",
      //   date: "December 2023",
      content:
        "I've been coming to Intuition for stress relief for 6 months now, and it's made a world of difference in both my physical and mental well-being. Katrina has a gift for knowing exactly what your body needs. The aromatherapy option is wonderful too!",
      rating: 5,
    },
    {
      id: 4,
      name: "Ling Q",
      //   date: "November 2023",
      content:
        "Highly recommended if you’re looking for a A+++ massage therapy session. Katrina has a gift and I felt amazing after doing a Deep Muscle Therapy massage with her. As someone that has been to many therapists in Montreal, I think Katrina is one of the BEST around. She operates out of her home and the room was very clean, had peaceful music and the aromatherapy oil was a lovely addition too. I would visit Katrina again very soon!",
      rating: 5,
    },
    {
      id: 5,
      name: "Amanda Katz",
      //   date: "October 2023",
      content:
        "Katrina is a true expert. She listens to your needs, makes helpful suggestions and is empathic to your pain. She is strong and extremely knowledgeable. She is only masseuse for me! You will not regret booking an appointment with her!!",
      rating: 5,
    },
  ];
  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextTestimonial();
    } else if (touchStart - touchEnd < -75) {
      // Swipe right
      prevTestimonial();
    }
  };

  // Auto-rotate testimonials
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextTestimonial();
  //     }, 8000);
  //     return () => clearInterval(interval);
  //   }, [activeIndex]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextTestimonial();
    else if (e.key === "ArrowLeft") prevTestimonial();
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>Client Testimonials</h2>
        <p className="section-intro">
          What our clients say about their experiences
        </p>

        <div
          className="testimonials-container"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label="Testimonials carousel"
        >
          <button
            className="nav-button prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
          </button>

          <div
            className="testimonial-slider"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card"
                  aria-hidden={testimonial.id !== testimonials[activeIndex].id}
                >
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">
                        ★
                      </span>
                    ))}
                    <span className="rating-number">
                      {testimonial.rating}.0
                    </span>
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <div className="client-info">
                    <span className="client-name">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="nav-button next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="all-reviews-link">
          <a
            href="https://www.google.com/search?q=Intuition+hmt+(Katrina+Tomczak)+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            Read All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
