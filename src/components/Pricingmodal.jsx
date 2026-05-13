import { useState, useEffect } from "react";
import "../styles/pricingmodal.css";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "₹25,000",
    note: "/ month",
    popular: false,
    features: [
      "8 Creative Posters",
      "4 Promo Videos",
      "AI Automation Tool",
      "Social Media Mgmt",
      "Team of 4 Members",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹50,000",
    note: "/ month",
    popular: true,
    features: [
      "10 Creative Posters",
      "8 Promo Videos",
      "AI Automation Tools",
      "Social Media Mgmt",
      "Team of 7 Members",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹1,00,000",
    note: "/ month",
    popular: false,
    features: [
      "15 Creative Posters",
      "12 Promo Videos",
      "AI Automation Tools",
      "Leads & Sales Mgmt",
      "Team of 15 Members",
    ],
  },
];

const SERVICES = [
  "Web Development",
  "Digital Marketing",
  "AI Automation",
  "SEO / Content",
  "Social Media",
  "Video Production",
];

function StepBar({ current }) {
  const labels = ["Choose plan", "Your details", "Confirmed"];

  return (
    <div className="pm-stepbar">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`pm-dot ${i === current ? "on" : ""}`}
        />
      ))}
      <small>
        Step {current + 1} of 3 — {labels[current]}
      </small>
    </div>
  );
}

export default function PricingModal({ onClose }) {
  const [step, setStep] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [activeS, setActiveS] = useState(["Web Development"]);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    note: "",
  });
  const [errors, setErrors] = useState({});

  // Lock body scroll when modal is open — also removes scrollbar gap
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  // PLAN SELECT
  const pickPlan = (plan) => {
    setChosen(plan);
    setStep(1);
  };

  // SERVICES TOGGLE
  const toggleS = (s) => {
    setActiveS((p) =>
      p.includes(s) ? p.filter((x) => x !== s) : [...p, s]
    );
  };

  // VALIDATION
  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // FORM SUBMIT
  const submit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log({ plan: chosen, services: activeS, ...form });
    setStep(2);
  };

  // RESET
  const reset = () => {
    setStep(0);
    setChosen(null);
    setForm({ name: "", company: "", email: "", phone: "", note: "" });
    setErrors({});
  };

  return (
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pm-accent" />

        <button className="pm-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* STEP 1 — PLANS */}
        {step === 0 && (
          <>
            <div className="pm-head">
              <h2>Choose your growth plan</h2>
              <p>
                All packages include onboarding support &amp; dedicated account
                manager
              </p>
            </div>

            <div className="pm-plans">
              {PLANS.map((pl) => (
                <div
                  key={pl.id}
                  className={`pm-plan ${pl.popular ? "popular" : ""}`}
                  onClick={() => pickPlan(pl)}
                >
                  {pl.popular && (
                    <span className="pm-hot">MOST POPULAR</span>
                  )}
                  <div className="pm-pname">{pl.name}</div>
                  <div className="pm-price">{pl.price}</div>
                  <div className="pm-note">{pl.note}</div>
                  <ul className="pm-features">
                    {pl.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <button className="pm-selbtn">Select plan →</button>
                </div>
              ))}
            </div>

            <StepBar current={0} />
          </>
        )}

        {/* STEP 2 — FORM */}
        {step === 1 && (
          <div className="pm-form-wrap">
            <button className="pm-back" onClick={() => setStep(0)}>
              ← Back to plans
            </button>

            <h2 className="pm-ftitle">Tell us about your business</h2>
            <p className="pm-fsub">Our team will reach out within 30 minutes</p>
            <span className="pm-tag">
              {chosen?.name} — {chosen?.price}
            </span>

            <form onSubmit={submit}>
              {/* NAME + COMPANY */}
              <div className="pm-row">
                <div className="pm-field">
                  <label>Full name</label>
                  <input
                    type="text"
                    placeholder="Ravi Kumar"
                    value={form.name}
                    className={errors.name ? "error" : ""}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      setErrors({ ...errors, name: "" });
                    }}
                  />
                  {errors.name && (
                    <small className="pm-error">{errors.name}</small>
                  )}
                </div>

                <div className="pm-field">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Acme Pvt Ltd"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* EMAIL + PHONE */}
              <div className="pm-row">
                <div className="pm-field">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="ravi@acme.com"
                    value={form.email}
                    className={errors.email ? "error" : ""}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      setErrors({ ...errors, email: "" });
                    }}
                  />
                  {errors.email && (
                    <small className="pm-error">{errors.email}</small>
                  )}
                </div>

                <div className="pm-field">
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    className={errors.phone ? "error" : ""}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                      setErrors({ ...errors, phone: "" });
                    }}
                  />
                  {errors.phone && (
                    <small className="pm-error">{errors.phone}</small>
                  )}
                </div>
              </div>

              {/* SERVICES */}
              <div className="pm-field">
                <label>Services needed</label>
                <div className="pm-chips">
                  {SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s}
                      className={`pm-chip ${activeS.includes(s) ? "on" : ""}`}
                      onClick={() => toggleS(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="pm-field">
                <label>Requirements (optional)</label>
                <textarea
                  placeholder="Tell us your goals..."
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                />
              </div>

              <button type="submit" className="pm-submit">
                Submit &amp; get started →
              </button>
            </form>

            <StepBar current={1} />
          </div>
        )}

        {/* STEP 3 — SUCCESS */}
        {step === 2 && (
          <div className="pm-success">
            <div className="pm-sring">✓</div>
            <h2>Request submitted!</h2>
            <p>
              Thanks for choosing the{" "}
              <strong>{chosen?.name}</strong> plan. Our team will contact you
              within <strong>30 minutes</strong> to kick things off.
            </p>
            <button className="pm-restart" onClick={reset}>
              ← Explore other plans
            </button>
            <StepBar current={2} />
          </div>
        )}
      </div>
    </div>
  );
}