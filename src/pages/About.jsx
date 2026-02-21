import React from "react";
import AboutHighlight from "../components/AboutHighlight";
import PageBanner from "../components/PageBanner";
import aboutBanner from "../assets/banners/about.jpg";
import factoryImg from "../assets/about/factory.jpg";

function About() {
  return (
    <>
      <PageBanner
        image={aboutBanner}
        title="About Radhika Steel"
        subtitle="Building strength with quality and trust for over 25 years"
      />  
      <main style={{ minHeight: "100%" }}>
        <AboutHighlight/>
        <section className="about-section">
          
          <h1>About Radhika Steel Industries</h1>

          {/* COMPANY OVERVIEW IMAGE */}
          <img
            src={factoryImg}
            alt="Radhika Steel Factory"
            className="about-img"
          />

          <p>
            Established with a commitment to quality, Radhika Steel Industries
            serves multiple industries with premium steel products.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>Modern Manufacturing</li>
            <li>Quality Assurance</li>
            <li>On-time Delivery</li>
          </ul>
        </section>
      </main>
    </>
    
  );
}

export default About;
