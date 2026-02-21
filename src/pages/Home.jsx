import React from "react";
import HeroSlider from "../components/HeroSlider";
import AboutHighlight from "../components/AboutHighlight";
import TrustedPartners from "../components/TrustedPartners";
import HomeFeatureBlocks from "../components/HomeFeatureBlocks";
import factoryImg from "../assets/about/factory.jpg";
import msRound from "../assets/products/ms-round.jpg";
import msAngle from "../assets/products/ms-angle.jpg";
import msFlat from "../assets/products/ms-flat.jpg";
import msSquare from "../assets/products/ms-square.jpg";



function Home() {
  return (
    <main className="home-page">
      <HeroSlider/>
      
      {/* ABOUT PREVIEW */}
      <AboutHighlight/>
      {/* WHO WE ARE */}
      <section className="who-we-are">
        <div className="who-container">
          {/* LEFT CONTENT */}
          <div className="who-content">
            <h5>Who We Are</h5>
            <h2>
              Building Strength with <span>Quality Steel</span>
            </h2>
            <p>
              Radhika Steel Industries is a trusted manufacturer and supplier of
              premium MS steel products, delivering strength, durability, and
              reliability for decades.
            </p>

            <div className="who-points">
              <div>✔ Advanced Manufacturing</div>
              <div>✔ Certified Quality Standards</div>
              <div>✔ Timely Delivery</div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="who-image">
            <img src={factoryImg} alt="Radhika Steel Factory" />
            {/*<div className="experience-badge">
              <span>25+</span>
              <p>Years of Excellence</p>
            </div>*/}
          </div>
        </div>
      </section>



      {/* PRODUCTS PREVIEW */}
      
      <section className="home-products">
        <h2>Our Products</h2>
        <p className="section-desc">
          High-quality MS steel products engineered for performance and durability.
        </p>

        <div className="home-product-grid">
          {[
            { name: "MS Round", img: msRound },
            { name: "MS Angle", img: msAngle },
            { name: "MS Flat", img: msFlat },
            { name: "MS Square", img: msSquare },
          ].map((item, index) => (
            <div key={index} className="home-product-card">
              <img src={item.img} alt={item.name} />
              <div className="home-product-overlay">
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FEATURES */}
      <HomeFeatureBlocks />


      <TrustedPartners/>

    </main>
  );
}

export default Home;
