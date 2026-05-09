import { FaLinkedin } from "react-icons/fa";
import { MessageSquare} from "lucide-react";
import "../styles/footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      {/* Decorative background glow */}
      <div className="footer-glow"></div>

      <div className="footer-container">
        {/* Column 1: Brand & Bio */}
        <div className="footer-brand">
          <h3 className="footer-logo">SEYON <span className="text-gradient">TECH</span></h3>
          <p className="footer-description">
            Digital Media Solutions that drive real results. We help businesses generate leads, automate sales, and scale with proven marketing strategies..
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/seyon-technology-digital-solutions/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size={20} />
            </a>
            <a href="https://wa.me/918610499770" target="_blank" rel="noopener noreferrer" className="social-link">
              <MessageSquare size={20} />
            </a>
            {/* Add more icons as needed */}
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-nav">
          <h4>Explore</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#results">Results</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="footer-contact-info">
          <h4>Get in Touch</h4>
          <div className="contact-item">
            <h3>Email :</h3>
            <p>info@seyontech.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone :</h3>
            <p>+91 86104 99770</p>
          </div>
          <div className="contact-item">
            <h3>Address:</h3>
            <p>Khivraj Building, Thousand Lights West,Thousand Lights, Chennai - 06</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-bottom-content">
          <p>© {new Date().getFullYear()} Seyon Tech Digital Media Solutions. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>
    </footer>

  );
}