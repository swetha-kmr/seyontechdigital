import {BrainCircuit, Headset, Filter, Smartphone, RefreshCw, BarChart3,
  TrendingUp, CircleDollarSign} from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="services" id="why">
        <h2 className="fade-up">Why Choose Us</h2>
        <p className="fade-up delay-1">
          We combine technology, expertise, and dedication to deliver exceptional results
        </p>


        <div className="why-choose-grid">
          {/* AI Strategy */}
          <div className="why-card">
            <div className="why-icon-box #8b5cf6">
              <BrainCircuit size={40} />
            </div>
            <h3>AI-Based Strategy</h3>
            <p>We use AI-driven insights to maximize your marketing performance</p>
            <ul className="why-list">
              <li>Smart campaign optimization</li>
              <li>AI-driven targeting</li>
              <li>Higher ROI focus</li>
              <li>Predictive analytics</li>
            </ul>
          </div>

          {/* Dedicated Support */}
          <div className="why-card">
            <div className="why-icon-box #8b5cf6">
              <Headset size={40} />
            </div>
            <h3>Dedicated Support</h3>
            <p>We stay with you at every step of your growth journey</p>
            <ul className="why-list">
              <li>1-on-1 communication</li>
              <li>Fast response time</li>
              <li>Expert consultation</li>
              <li>Ongoing support</li>
            </ul>
          </div>

          {/* Funnel Setup */}
          <div className="why-card">
            <div className="why-icon-box #8b5cf6">
              <Filter size={40} />
            </div>
            <h3>Complete Funnel Setup</h3>
            <p>We build systems that convert visitors into paying customers</p>
            <ul className="why-list">
              <li>Landing pages</li>
              <li>Lead capture systems</li>
              <li>Automation flows</li>
              <li>Conversion optimization</li>
            </ul>
          </div>

          {/* Mobile CRM */}
          <div className="why-card">
            <div className="why-icon-box #8b5cf6">
              <Smartphone size={40} />
            </div>
            <h3>Mobile CRM Access</h3>
            <p>Manage your leads anytime, anywhere with ease</p>
            <ul className="why-list">
              <li>Real-time lead tracking</li>
              <li>Mobile-friendly CRM</li>
              <li>Instant notifications</li>
              <li>Easy pipeline management</li>
            </ul>
          </div>

          {/* Scalable Automation */}
          <div className="why-card">
            <div className="why-icon-box #8b5cf6">
              <RefreshCw size={40} />
            </div>
            <h3>Scalable Automation</h3>
            <p>Systems designed to grow with your business without extra workload</p>
            <ul className="why-list">
              <li>Auto lead nurturing flows</li>
              <li>Smart follow-up sequences</li>
              <li>Workflow automation</li>
              <li>Business scaling systems</li>
            </ul>
          </div>

          {/* Reporting */}
          <div className="why-card">
            <div className="why-icon-box #8b5cf6">
              <BarChart3 size={40} />
            </div>
            <h3>Transparent Reporting</h3>
            <p>Know exactly where your money goes and what you get</p>
            <ul className="why-list">
              <li>Weekly reports</li>
              <li>Real-time analytics</li>
              <li>Performance tracking</li>
              <li>Clear insights</li>
            </ul>
          </div>

          {/* Data Growth */}
          <div className="why-card">
            <div className="why-icon-box #8b5cf6">
              <TrendingUp size={40} />
            </div>
            <h3>Data-Driven Growth</h3>
            <p>Every decision is backed by real performance data and analytics</p>
            <ul className="why-list">
              <li>Advanced analytics tracking</li>
              <li>Conversion optimization insights</li>
              <li>Behavior-based targeting</li>
              <li>Performance forecasting</li>
            </ul>
          </div>

          {/* Affordable Pricing */}
          <div className="why-card">
            <div className="why-icon-box #8b5cf6">
              <CircleDollarSign size={40} />
            </div>
            <h3>Affordable Pricing</h3>
            <p>Premium services without premium pricing</p>
            <ul className="why-list">
              <li>Flexible plans</li>
              <li>Startup-friendly</li>
              <li>No hidden costs</li>
              <li>High value delivery</li>
            </ul>
          </div>
        </div>

      </section>
  );
}