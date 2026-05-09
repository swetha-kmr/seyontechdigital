import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="navbar">

        {/* LOGO */}
        <div className="nav-left">
          <img
            src="https://horizons-cdn.hostinger.com/1a9ce3a2-790f-4baf-8491-30e20f7afc09/ab00b41ca32929e0da248f48c354b6fb.jpg"
            alt="Seyon Tech Logo"
            className="logo-img"
          />
        </div>

        {/* DESKTOP LINKS */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* RIGHT: CTA + Hamburger */}
        <div className="nav-right">
          <a href="#contact" className="btn">Get Started</a>

          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </header>

      {/* MOBILE MENU */}
      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <a href="#home"     onClick={closeMenu}>Home</a>
        <a href="#about"    onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#process"  onClick={closeMenu}>Process</a>
        <a href="#contact"  onClick={closeMenu}>Contact</a>
        <a href="#contact"  onClick={closeMenu} className="mobile-cta">
          Get Started
        </a>
      </nav>
    </>
  );
}