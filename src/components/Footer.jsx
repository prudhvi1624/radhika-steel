import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-col">
            <h3 className="footer-logo">
              Radhika <span>Steel</span>
            </h3>
            <p>
              Delivering high-quality steel products with reliability,
              precision, and long-term commitment across industries.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Contact</h4>
            <p>📍 Mandi Gobindgarh, Punjab</p>
            <p>📞 01765-255580</p>
            <p>✉️ info@radhikasteel.com</p>
          </div>

          {/* SOCIAL */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Radhika Steel. All Rights Reserved.
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;
