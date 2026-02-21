import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LEFT */}
        <div className="nav-left">
          <NavLink to="/" className="logo">
            <img src="/images/logo/logo.jpg" alt="Radhika Steel" />
          </NavLink>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`nav-links ${open ? "active" : ""}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/industries">Industries</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>

      </div>
    </header>

  );
}

export default Navbar;
