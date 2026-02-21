import "./TrustedPartners.css";

const partners = [
  { id: 1, logo: "/images/partner1.png", name: "Partner 1" },
  { id: 2, logo: "/images/partner2.png", name: "Partner 2" },
  { id: 3, logo: "/images/partner3.png", name: "Partner 3" },
  { id: 4, logo: "/images/partner4.png", name: "Partner 4" }
];

function TrustedPartners() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2>
          Our Trusted <span>Partner</span>
        </h2>

        <p className="partners-desc">
          We believe in building lasting partnerships through trust, quality, and
          reliability. With a strong track record of serving diverse industries,
          we stand as a dependable partner committed to delivering superior steel
          solutions, on-time performance, and unmatched customer support.
        </p>

        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-card" key={partner.id}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedPartners;
