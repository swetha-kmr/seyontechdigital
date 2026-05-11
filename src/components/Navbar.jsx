import { useState } from "react";
import logo8 from "../assets/logos/logo8.webp";
import PricingModal from "./PricingModal";
import "../styles/navbar.css";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-left">
          <img src={logo8} alt="logo" className="logo-img" />
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="btn" onClick={() => setShowModal(true)}>
          Get Started
        </button>
      </header>

      {showModal && <PricingModal onClose={() => setShowModal(false)} />}
    </>
  );
}