import { useState } from "react";
import logo8 from "../assets/logos/logo8.webp";
import PricingModal from "./PricingModal";
import "../styles/navbar.css";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">

        {/* LEFT LOGO */}
        <div className="nav-left">
          <img src={logo8} alt="logo" className="logo-img" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <button className="btn" onClick={() => setShowModal(true)}>
            Get Started
          </button>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <button
          className="mobile-cta"
          onClick={() => { setShowModal(true); setMenuOpen(false); }}
        >
          Get Started
        </button>
      </div>

      {showModal && <PricingModal onClose={() => setShowModal(false)} />}
    </>
  );
}