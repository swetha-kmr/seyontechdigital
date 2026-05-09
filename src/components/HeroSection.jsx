import "../styles/hero.css";
import heroVideo from "../assets/hero.mp4";

export default function HeroSection() {
  return (
    <section className="hero-container" id="home">
      <video autoPlay muted loop className="hero-bg-video">
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-badge">
          ✨ AWARD-WINNING CREATIVE AGENCY
        </div>

        <h1 className="hero-title">
          TRANSFORM YOUR <br />
          <span className="text-gradient">BRAND STORY</span>
        </h1>

        <p className="hero-subtitle">
          We craft exceptional digital experiences
          that captivate audiences.
        </p>

        <div className="hero-btns">
          <button className="btn-primary-outlined">
            Let's Talk →
          </button>

          <button className="btn-primary-outlined">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}