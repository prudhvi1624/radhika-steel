import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Trusted Steel Manufacturer for Every Industry",
    subtitle: "Strength that shapes today, steel that builds tomorrow.",
    image: "/images/slider/slide1.jpg",
  },
  {
    title: "High Quality MS Steel Products",
    subtitle: "Engineered for strength, durability and performance.",
    image: "/images/slider/slide2.png",
  },
  {
    title: "Building India with Strong Steel",
    subtitle: "Supplying steel for infrastructure & industries.",
    image: "/images/slider/slide3.jpg",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 10, 10, 0.93), rgba(0,0,0,0.35)),
              url(${slide.image})
            `,
          }}
        >
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>

            {/* ✅ CONTACT BUTTON */}
            <button
              className="hero-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      ))}

      {/* DOTS */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
