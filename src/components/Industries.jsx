import { GraduationCap, Building2, Stethoscope, Vote, Store, UserCheck } from "lucide-react";
export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="industries-header">
        <h2 className="fade-up">Industries We Serve</h2>
        <p className="fade-up delay-1">Tailored marketing and automation solutions across diverse sectors</p>
      </div>

      <div className="industries-grid">
        {/* 1. Education */}
        <div className="industry-card education-bg">
          <div className="industry-overlay"></div>
          <div className="industry-card-inner">
            <div className="industry-icon-wrapper #8b5cf6">
              <GraduationCap size={40} />
            </div>
            <h3>Educational Institutions</h3>
            <p>Schools, colleges, and training centers</p>
          </div>
        </div>

        {/* 2. Real Estate */}
        <div className="industry-card realestate-bg">
          <div className="industry-overlay"></div>
          <div className="industry-card-inner">
            <div className="industry-icon-wrapper #8b5cf6">
              <Building2 size={40} />
            </div>
            <h3>Real Estate</h3>
            <p>Property developers and agencies</p>
          </div>
        </div>

        {/* 3. Healthcare */}
        <div className="industry-card healthcare-bg">
          <div className="industry-overlay"></div>
          <div className="industry-card-inner">
            <div className="industry-icon-wrapper #8b5cf6">
              <Stethoscope size={40} />
            </div>
            <h3>Healthcare Clinics</h3>
            <p>Hospitals and wellness centers</p>
          </div>
        </div>

        {/* 4. Political */}
        <div className="industry-card political-bg">
          <div className="industry-overlay"></div>
          <div className="industry-card-inner">
            <div className="industry-icon-wrapper #8b5cf6">
              <Vote size={40} />
            </div>
            <h3>Political Campaigns</h3>
            <p>Election strategy and outreach</p>
          </div>
        </div>

        {/* 5. Local Business */}
        <div className="industry-card local-bg">
          <div className="industry-overlay"></div>
          <div className="industry-card-inner">
            <div className="industry-icon-wrapper #8b5cf6">
              <Store size={40} />
            </div>
            <h3>Local Businesses</h3>
            <p>Small shops and local startups</p>
          </div>
        </div>

        {/* 6. Personal Brand */}
        <div className="industry-card personal-bg">
          <div className="industry-overlay"></div>
          <div className="industry-card-inner">
            <div className="industry-icon-wrapper #8b5cf6">
              <UserCheck size={40} />
            </div>
            <h3>Personal Brands</h3>
            <p>Influencers, coaches, and consultants</p>


          </div>
        </div>
      </div>
    </section>
  );
}