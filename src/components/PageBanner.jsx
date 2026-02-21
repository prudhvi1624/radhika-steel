import React from "react";

function PageBanner({ image, title, subtitle }) {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="page-banner-overlay">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageBanner;
