import React from "react";
import PageBanner from "../components/PageBanner";
import TrustedPartners from "../components/TrustedPartners";

import industriesBanner from "../assets/banners/industries.jpg";
import railways from "../assets/industries/railways.jpg";
import transmission from "../assets/industries/transmission.jpg";
import automobile from "../assets/industries/automobile.jpg";
import engineering from "../assets/industries/engineering.jpg";
import storage from "../assets/industries/storage.jpg";
import infrastructure from "../assets/industries/infrastructure.jpg"; // NEW

function Industries() {
  const industries = [
    {
      name: "Railways",
      image: railways,
      description:
        "Supplying high-strength steel products for railway tracks, coaches, wagons, and infrastructure projects."
    },
    {
      name: "Transmission Towers",
      image: transmission,
      description:
        "Steel solutions for power transmission towers ensuring durability, load resistance, and long service life."
    },
    {
      name: "Automobile",
      image: automobile,
      description:
        "Precision-grade steel for automotive components, frames, and manufacturing applications."
    },
    {
      name: "General Engineering",
      image: engineering,
      description:
        "Reliable steel products for heavy machinery, fabrication, and engineering industries."
    },
    {
      name: "Storage Tanks",
      image: storage,
      description:
        "Steel plates and structures for industrial storage tanks used in oil, gas, and chemical sectors."
    },
    {
      name: "Infrastructure",
      image: infrastructure,
      description:
        "Supporting large-scale infrastructure projects including bridges, buildings, and industrial structures."
    }
  ];

  return (
    <>
      <PageBanner
        image={industriesBanner}
        title="Industries We Serve"
        subtitle="Delivering reliable steel solutions across sectors"
      />

      <main className="industries-page">
        <h1 className="section-title">
          Industries We Serve
          <span className="title-underline"></span>
        </h1>


        <div className="industry-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-img-wrapper">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="industry-img"
                />

                <div className="industry-overlay">
                  <span className="view-badge">View Details</span>
                  <p className="industry-description">
                    {industry.description}
                  </p>
                </div>
              </div>

              <h3>{industry.name}</h3>
              <p>Reliable steel solutions for {industry.name}.</p>
            </div>
          ))}
        </div>

        <TrustedPartners />
      </main>
    </>
  );
}

export default Industries;
