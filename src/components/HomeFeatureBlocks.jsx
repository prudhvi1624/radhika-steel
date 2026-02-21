// src/components/HomeFeatureBlocks.jsx
import React from "react";
import { Settings, Award, ShieldCheck } from "lucide-react";

function HomeFeatureBlocks() {
  return (
    <section className="home-features">
      <div className="home-features-container">

        <div className="home-feature-card">
          <div className="icon-box">
            <Settings size={34} />
          </div>
          <h4>Innovation & Technology</h4>
          <p>
            Advanced manufacturing processes, modern infrastructure, and
            continuous innovation to deliver superior steel solutions.
          </p>
        </div>

        <div className="home-feature-card highlighted">
          <div className="icon-box">
            <Award size={34} />
          </div>
          <h4>Quality Assurance</h4>
          <p>
            ISO-certified processes with strict quality control, premium raw
            materials, and rigorous testing standards.
          </p>
        </div>

        <div className="home-feature-card">
          <div className="icon-box">
            <ShieldCheck size={34} />
          </div>
          <h4>Reliability & Service</h4>
          <p>
            Trusted for timely delivery, consistent quality, and dependable
            customer support across industries.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HomeFeatureBlocks;
