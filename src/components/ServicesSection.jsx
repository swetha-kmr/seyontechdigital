import { Bot, Target, Share2, Layout } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="services" id="services">
        <h2 className="fade-up">Our Services</h2>
        <p className="fade-up delay-1">
          Everything you need to grow your business with digital & AI solutions
        </p>

        <div className="services-grid">

          {/* CARD */}
          <div className="services-grid main-services">
            {/* AI Automation */}
            <div className="service-card interactive">
              <div className="card-inner">
                <div className="card-top">
                  <div className="icon-box blue">
                    <Bot size={50} />
                  </div>
                  <h3>AI Automation Marketing</h3>
                  <p className="main-desc">
                    Leverage AI to automate your marketing and sales processes for maximum efficiency.
                  </p>
                </div>

                <div className="card-overlay">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>WhatsApp Automation for engagement</li>
                    <li>AI Chatbot for 24/7 support</li>
                    <li>CRM & Lead Management</li>
                    <li>AI-Based Follow-up Systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paid Ads */}
            <div className="service-card interactive">
              <div className="card-inner">
                <div className="card-top">
                  <div className="icon-box blue">
                    <Target size={50} />
                  </div>
                  <h3>Paid Ads Management</h3>
                  <p className="main-desc">Data-driven advertising campaigns that deliver measurable ROI.</p>
                </div>

                <div className="card-overlay">
                  <h4>Channels & Strategy:</h4>
                  <ul>
                    <li>Google Ads for high-intent search</li>
                    <li>YouTube Lead Generation</li>
                    <li>Facebook & Instagram Precision</li>
                    <li>Transparent ROI Reporting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="service-card interactive">
              <div className="card-inner">
                <div className="card-top">
                  <div className="icon-box blue">
                    <Share2 size={50} />
                  </div>
                  <h3>Social Media Marketing</h3>
                  <p className="main-desc">Build a powerful brand presence across all social platforms.</p>
                </div>

                <div className="card-overlay">
                  <h4>Brand Growth:</h4>
                  <ul>
                    <li>Tailored Content Strategy</li>
                    <li>Professional Poster & Video</li>
                    <li>Strategic Brand Positioning</li>
                    <li>Complete Page Management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Website & Funnels */}
            <div className="service-card interactive">
              <div className="card-inner">
                <div className="card-top">
                  <div className="icon-box blue">
                    <Layout size={50} />
                  </div>
                  <h3>Website & Funnels</h3>
                  <p className="main-desc">High-converting systems that turn visitors into customers.</p>
                </div>

                <div className="card-overlay">
                  <h4>Web Solutions:</h4>
                  <ul>
                    <li>Professional Business Sites</li>
                    <li>Smart Lead Capture Systems</li>
                    <li>E-commerce Solutions</li>
                    <li>Conversion Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
  );
}