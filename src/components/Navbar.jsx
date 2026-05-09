import "../styles/navbar.css";
import logo8 from "../assets/logos/logo8.webp"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img
          src={logo8}
          alt="logo"
          className="logo-img"
        />
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#about"><button className="btn">Get Started</button></a>
    </header>
  );
}