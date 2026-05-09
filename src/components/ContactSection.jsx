import { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import {MdSecurity, MdCalendarToday } from "react-icons/md";
import "../styles/contact.css";

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    // Validate — at least name + phone required
    if (!formData.name || !formData.phone) {
      alert("Please enter at least your Name and Phone Number.");
      return;
    }

    // Build the WhatsApp message
    const text = `
🗓️ *New Appointment Request*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email || "Not provided"}
📞 *Phone:* ${formData.phone}
🛠️ *Service:* ${formData.service || "Not selected"}
📅 *Date:* ${formData.date || "Not selected"}
⏰ *Time:* ${formData.time || "Not selected"}
💬 *Message:* ${formData.message || "No message"}

_Sent from Seyon Tech website_
    `.trim();

    // Encode and open WhatsApp
    const encoded = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/918610499770?text=${encoded}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-header">
        <h2>Let's Build Something Great Together</h2>
        <p>Have a project in mind? Get in touch and we'll help you grow your business.</p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Contact Details</h3>

          <div className="info-item">
            <div className="info-icon icon-mail"><FaEnvelope /></div>
            <div className="info-text"><strong>Email</strong><span>info@seyontech.com</span></div>
          </div>
          <div className="info-item">
            <div className="info-icon icon-phone"><FaPhone /></div>
            <div className="info-text"><strong>Phone</strong><span>+91 86104 99770</span></div>
          </div>
          <div className="info-item">
            <div className="info-icon icon-loc"><FaMapMarkerAlt /></div>
            <div className="info-text"><strong>Location</strong><span>Thousand Lights West, Chennai - 600006, Tamil Nadu</span></div>
          </div>
          <div className="info-item">
            <div className="info-icon icon-clock"><FaClock /></div>
            <div className="info-text"><strong>Working Hours</strong><span>Mon – Sat : 9AM – 7PM</span></div>
          </div>

          <div className="btn-row">
            <a href="https://wa.me/918610499770" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <FaWhatsapp size={20} /><span>WhatsApp Us</span>
            </a>
            <a href="https://www.linkedin.com/company/seyon-technology-digital-solutions/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
              <FaLinkedin size={20} /><span>LinkedIn Us</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — APPOINTMENT FORM */}
        <div className="appt-card">
          <div className="appt-header">
            <div className="appt-icon-box"><MdCalendarToday /></div>
            <div>
              <h4>Book an Appointment</h4>
              <p>Fill in the form below to book your slot.</p>
            </div>
          </div>

          {/* NAME + EMAIL */}
          <div className="form-grid-2">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* SERVICE */}
          <div className="form-group">
            <label>Select Service</label>
            <div className="custom-select-wrapper">
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="" disabled>Choose a service</option>
                <option>Web Development</option>
                <option>Digital Marketing</option>
                <option>AI Calling Software</option>
                <option>AI Automation Software</option>
              </select>
            </div>
          </div>

          {/* DATE + TIME */}
          <div className="form-grid-2">
            <div className="form-group">
              <label>Select Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Select Time</label>
              <div className="custom-select-wrapper">
                <select name="time" value={formData.time} onChange={handleChange}>
                  <option value="" disabled>Select a time</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <label>Your Message (Optional)</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* BOOK BUTTON */}
          <button className="book-btn" onClick={handleBooking}>
            <FaWhatsapp size={18} /> Book Appointment via WhatsApp
          </button>

          <div className="secure-note">
            <MdSecurity /> Your information is secure and confidential.
          </div>

        </div>
      </div>
    </section>
  );
}