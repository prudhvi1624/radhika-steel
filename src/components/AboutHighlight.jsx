import React from "react";
import mainImg from "../assets/about/about-main.jpg";
import smallImg from "../assets/about/about-small.jpg";

function AboutHighlight() {
  return (
    <section className="about-highlight">
      <div className="about-container">

        {/* LEFT IMAGE SECTION */}
        <div className="about-images">
          <div className="main-img-wrapper">
            <img src={mainImg} alt="Steel Manufacturing" />

            {/* 25+ YEARS BADGE */}
            <div className="experience-badge">
              <span>25+</span>
              <p>Years</p>
            </div>
          </div>

          <div className="small-img">
            <img src={smallImg} alt="Team at work" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h5>About Us</h5>

          <h2>
            Building a more <span>competitive</span>
            <br /> business sectors.
          </h2>

          <p className="main-text">
            Established with a strong vision in the early 2000s, <b>Radhika Steel
            Industries</b> has grown into one of India’s leading stockists,
            suppliers, and manufacturers of high-quality steel products,
            including rounds, liners, flats, squares, and alloy steels.
          </p>

          <div className="info-box">
            <p>
              Backed by world-class steelmaking operations, modern infrastructure,
              and a strong distribution network, we serve industries across India
              and beyond. Our commitment to quality, innovation, and sustainability
              has earned us a reputation for reliability and excellence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutHighlight;
