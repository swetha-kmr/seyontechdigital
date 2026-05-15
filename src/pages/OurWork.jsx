import { useState, useEffect, useRef } from "react";

const caseStudies = [
  {
    id: "healthcare",
    number: "01",
    category: "Healthcare & Wellness",
    client: "MedCore Clinics",
    icon: "🩺",
    tagline: "When trust is the product, design is the proof.",
    accentColor: "#0ea5e9",
    accentLight: "#f0f9ff",
    accentBorder: "#bae6fd",
    tags: ["Brand Identity", "Web Design", "App UI", "Patient Experience"],
    intro:
      "MedCore expanded from 3 to 12 locations but their brand hadn't grown with them. Patients at each site experienced something different. Trust was inconsistent. Referrals were stalling.",
    body: [
      "We conducted a full brand audit across every touchpoint — signage, staff uniforms, appointment confirmations, website, and app. The cumulative effect was a brand that felt like it had no centre of gravity.",
      "A new visual system was built from the ground up — anchored by a logotype that communicates precision and warmth simultaneously, moving away from sterile blues toward a confident teal-and-white system.",
      "The website was rebuilt with a patient-first content architecture leading with outcomes, not services. Booking flows were reduced from 7 steps to 3. The app was redesigned around actual patient usage patterns.",
      "All 12 locations launched under the unified system over six months — training materials, environmental graphics, and digital templates shipped on time and on budget.",
    ],
    stats: [
      { value: "+38%", label: "Patient Bookings" },
      { value: "12", label: "Locations Launched" },
      { value: "4.9★", label: "App Store Rating" },
      { value: "−61%", label: "Booking Drop-Off" },
    ],
    deliverables: ["Brand System", "Website Redesign", "Mobile App UI", "Environmental Graphics", "Staff Training Kit"],
  },
  {
    id: "ai-automation",
    number: "02",
    category: "AI Automation",
    client: "TechScale Ventures",
    icon: "🤖",
    tagline: "500 hours of manual work. Automated in 6 weeks.",
    accentColor: "#8b5cf6",
    accentLight: "#faf5ff",
    accentBorder: "#ddd6fe",
    tags: ["AI Calling Software", "CRM Integration", "Workflow Automation", "Lead Nurturing"],
    intro:
      "TechScale's sales team was spending 70% of their time on manual follow-ups, data entry, and lead qualification. They had growth ambitions but were bottlenecked by process.",
    body: [
      "We mapped every manual touchpoint in their sales pipeline — 47 individual tasks that consumed the team daily. Most could be fully automated; the rest could be dramatically simplified.",
      "An AI calling system was deployed for initial lead qualification, handling the first 3 minutes of every sales conversation, routing hot leads directly to human reps with full context already loaded.",
      "WhatsApp automation flows were built for nurturing — personalised sequences triggered by lead behavior, not just time. The CRM was rebuilt to surface the right lead at the right moment.",
      "Result: the sales team now spends 90% of their time on high-value conversations. Pipeline velocity increased 3.2x with the same headcount.",
    ],
    stats: [
      { value: "3.2×", label: "Pipeline Velocity" },
      { value: "500hrs", label: "Automated Monthly" },
      { value: "+84%", label: "Lead Response Rate" },
      { value: "6 wks", label: "Full Deployment" },
    ],
    deliverables: ["AI Calling System", "WhatsApp Automation", "CRM Rebuild", "Lead Scoring Model", "Analytics Dashboard"],
  },
  {
    id: "paid-ads",
    number: "03",
    category: "Paid Ads Management",
    client: "Arcstone Builders",
    icon: "🏗️",
    tagline: "Lead generation that works as hard as the people it represents.",
    accentColor: "#f97316",
    accentLight: "#fff7ed",
    accentBorder: "#fed7aa",
    tags: ["Google Ads", "Lead Generation", "SEO", "Conversion Optimisation"],
    intro:
      "Arcstone had the reputation to compete at the premium end of residential construction — but their digital presence was costing them qualified leads every single day.",
    body: [
      "The brief was direct: immediately signal that Arcstone operates at a premium level and make it effortless for the right client to start a conversation. Everything else is noise.",
      "Google Ads campaigns were rebuilt from scratch — high-intent keywords, tight geographic targeting, and ad copy that spoke directly to premium buyers rather than bargain hunters.",
      "A custom quote estimator was integrated — four questions about project type, budget, timeline, and location — routing to either a booking form or downloadable guide based on response quality.",
      "SEO was rebuilt with local landing pages for each service area. Within 90 days, Arcstone ranked #1 organically for eight of their twelve priority keywords.",
    ],
    stats: [
      { value: "3×", label: "Qualified Leads" },
      { value: "90 days", label: "To Full ROI" },
      { value: "#1", label: "Local Search Rank" },
      { value: "+142%", label: "Organic Traffic" },
    ],
    deliverables: ["Google Ads Strategy", "Quote Calculator", "SEO Programme", "Landing Pages", "Content Strategy"],
  },
  {
    id: "social-media",
    number: "04",
    category: "Social Media Marketing",
    client: "Saffron & Salt",
    icon: "🍽️",
    tagline: "A brand built to make people hungry before they arrive.",
    accentColor: "#f59e0b",
    accentLight: "#fffbeb",
    accentBorder: "#fde68a",
    tags: ["Social Media", "Brand Identity", "Campaign", "Content Strategy"],
    intro:
      "Three Michelin-starred founders wanted to open a luxury dining group in a city crowded with ambition. The brief: make people desperate to get a table before they'd eaten a single bite.",
    body: [
      "The social strategy was a 60-day pre-launch teaser — one image per day, no caption, no context, just mood. Pure aesthetic, relentlessly consistent.",
      "Content was rooted in antique spice trade aesthetics — aged papers, deep saffron golds, inked typography — modernised into something luxurious without feeling like a museum.",
      "By opening week the account had 40,000 followers who had never been told what the restaurant served. The mystery was the marketing.",
      "The campaign ran across Instagram, outdoor, and targeted mailers to food media. Reservation waitlists opened and filled within hours.",
    ],
    stats: [
      { value: "6 hrs", label: "To Sell Out Opening Night" },
      { value: "220K", label: "Campaign Reach" },
      { value: "+61%", label: "Reservation Rate" },
      { value: "40K", label: "Followers Pre-Launch" },
    ],
    deliverables: ["Social Campaign", "Brand Identity", "Content Calendar", "Influencer Outreach", "Print Collateral"],
  },
  {
    id: "ecommerce",
    number: "05",
    category: "Website & Funnels",
    client: "Lumière Fashion",
    icon: "🛍️",
    tagline: "Three times the industry average conversion rate. Here's how.",
    accentColor: "#ec4899",
    accentLight: "#fdf2f8",
    accentBorder: "#fbcfe8",
    tags: ["E-commerce", "UX Strategy", "Funnel Design", "Conversion Optimisation"],
    intro:
      "Lumière had a cult following — stylists, fashion editors, the kind of customers who discover a brand early. Their conversion rate was 1.9%. That's a website problem. We fixed it.",
    body: [
      "We spent two weeks not designing anything. Full conversion audit — heatmaps, session recordings, exit surveys. Customers loved the brand but didn't trust the sizing and abandoned at surprise shipping costs.",
      "The funnel was rebuilt with frictionless architecture. Shipping costs surfaced on the product page. Guest checkout as default. Three-click checkout for returning customers.",
      "A fit guide tool built on a simple quiz gave personalised size recommendations — virtually eliminating sizing-related returns and the trust problem that caused them.",
      "Editorial content became shoppable. Products embedded within lookbooks and styling features. Sessions from editorial pages run 40% longer and convert at 2.8× the site average.",
    ],
    stats: [
      { value: "6.4%", label: "Conversion Rate" },
      { value: "3×", label: "Industry Average" },
      { value: "+₹1.8Cr", label: "Additional Annual Revenue" },
      { value: "−44%", label: "Cart Abandonment" },
    ],
    deliverables: ["Website Redesign", "Fit Guide Tool", "Checkout Optimisation", "Editorial Experience", "Email Flows"],
  },
  {
    id: "fitness-app",
    number: "06",
    category: "App Design & Brand",
    client: "FORMA Studio",
    icon: "💪",
    tagline: "40,000 followers. 28,000 app downloads. 60 days.",
    accentColor: "#10b981",
    accentLight: "#f0fdf4",
    accentBorder: "#a7f3d0",
    tags: ["App Design", "Brand Identity", "Social Strategy", "Community Building"],
    intro:
      "FORMA wanted to build a studio brand with a genuine community at its centre, and an app that people actually used past day 30. The fitness market is crowded with apps people abandon.",
    body: [
      "The brand was built to feel nothing like a traditional gym. Earthy palette — deep forest greens, off-whites, terracotta — paired with an elegant serif that reads more like a wellness journal than a weight room.",
      "The app was built around a single insight: people quit fitness apps because the apps make them feel behind. FORMA inverts this — celebrating consistency over intensity, progress over perfection.",
      "iOS and Android built simultaneously with a shared design system. Onboarding outputs a genuinely personalised programme. 30-day retention in the first cohort: 92%.",
      "The social launch ran 'The 6am Club' — daily posts featuring real members and their morning routines. Authentic, consistent, community-first. 40,000 followers before the doors opened.",
    ],
    stats: [
      { value: "40K", label: "Followers in 60 Days" },
      { value: "28K", label: "App Downloads" },
      { value: "92%", label: "30-Day Retention" },
      { value: "4.8★", label: "App Store Rating" },
    ],
    deliverables: ["Brand Identity", "iOS & Android App", "Onboarding Flow", "Social Strategy", "Community Framework"],
  },
];

function useReveal(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function CaseStudyCard({ study, index }) {
  const ref = useRef(null);
  const visible = useReveal(ref);
  const isEven = index % 2 === 0;
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      ref={ref}
      id={study.id}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        marginBottom: 72,
        scrollMarginTop: 80,
      }}
    >
      {/* Chapter line */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
        <span style={{
          fontSize: 11, fontWeight: 800, letterSpacing: "0.22em",
          color: study.accentColor, fontFamily: "monospace",
        }}>{study.number}</span>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${study.accentBorder}, transparent)` }} />
        <span style={{
          fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase",
          color: "#9ca3af", fontWeight: 500,
        }}>{study.category}</span>
      </div>

      {/* Hero grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isEven ? "1fr 380px" : "380px 1fr",
        gap: 48,
        alignItems: "start",
        marginBottom: 48,
      }}>

        {/* Visual panel */}
        <div style={{ order: isEven ? 2 : 1 }}>
          <div style={{
            borderRadius: 20,
            aspectRatio: "4/3",
            background: `linear-gradient(135deg, ${study.accentLight} 0%, #fff 100%)`,
            border: `1px solid ${study.accentBorder}`,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 12, position: "relative", overflow: "hidden",
          }}>
            {/* subtle grid */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `linear-gradient(${study.accentColor}08 1px, transparent 1px), linear-gradient(90deg, ${study.accentColor}08 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }} />
            {/* accent blob */}
            <div style={{
              position: "absolute", top: "25%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: 160, height: 160, borderRadius: "50%",
              background: `radial-gradient(circle, ${study.accentColor}18 0%, transparent 70%)`,
            }} />
            <span style={{ fontSize: 60, position: "relative", zIndex: 1 }}>{study.icon}</span>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: study.accentColor,
              opacity: 0.8, position: "relative", zIndex: 1,
            }}>{study.client}</span>
            {/* corner brackets */}
            {[
              { top: 16, left: 16, t: true, l: true },
              { top: 16, right: 16, t: true, r: true },
              { bottom: 16, left: 16, b: true, l: true },
              { bottom: 16, right: 16, b: true, r: true },
            ].map((c, i) => (
              <div key={i} style={{
                position: "absolute", width: 20, height: 20,
                top: c.top, left: c.left, right: c.right, bottom: c.bottom,
                borderTop: c.t ? `2px solid ${study.accentColor}` : "none",
                borderLeft: c.l ? `2px solid ${study.accentColor}` : "none",
                borderBottom: c.b ? `2px solid ${study.accentColor}` : "none",
                borderRight: c.r ? `2px solid ${study.accentColor}` : "none",
                borderTopLeftRadius: c.t && c.l ? 4 : 0,
                borderTopRightRadius: c.t && c.r ? 4 : 0,
                borderBottomLeftRadius: c.b && c.l ? 4 : 0,
                borderBottomRightRadius: c.b && c.r ? 4 : 0,
              }} />
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
            {study.tags.map(t => (
              <span key={t} style={{
                fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "4px 11px", borderRadius: 6,
                border: `1px solid ${study.accentBorder}`,
                color: study.accentColor,
                background: study.accentLight,
                fontWeight: 600,
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Text panel */}
        <div style={{ order: isEven ? 1 : 2 }}>
          <div style={{
            fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
            color: study.accentColor, marginBottom: 12, fontWeight: 700,
          }}>{study.client}</div>

          <h2 style={{
            fontSize: "clamp(24px, 2.5vw, 36px)",
            fontWeight: 800, lineHeight: 1.1,
            color: "#0f172a", marginBottom: 14,
            letterSpacing: "-0.02em",
          }}>{study.category}</h2>

          <p style={{
            fontSize: 15, fontStyle: "italic", fontWeight: 600,
            color: study.accentColor, lineHeight: 1.6, marginBottom: 18,
            opacity: 0.9,
          }}>"{study.tagline}"</p>

          <p style={{ fontSize: 15, lineHeight: 1.85, color: "#4b5563", marginBottom: 24 }}>
            {study.intro}
          </p>

          {/* Stats row inline */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12,
          }}>
            {study.stats.map((s, i) => (
              <div key={i} style={{
                background: study.accentLight,
                border: `1px solid ${study.accentBorder}`,
                borderRadius: 12, padding: "14px 16px",
              }}>
                <div style={{
                  fontSize: 22, fontWeight: 800,
                  color: study.accentColor, lineHeight: 1, marginBottom: 4,
                }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#6b7280", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expandable body */}
      <div style={{
        background: "#f8fafc",
        border: "1px solid #e8ecf0",
        borderRadius: 16,
        overflow: "hidden",
      }}>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "18px 28px", background: "none", border: "none", cursor: "pointer",
            textAlign: "left",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", letterSpacing: "0.04em" }}>
            Full Case Study
          </span>
          <span style={{
            fontSize: 18, color: study.accentColor,
            transform: expanded ? "rotate(180deg)" : "none",
            transition: "transform 0.25s ease",
            display: "inline-block",
          }}>↓</span>
        </button>

        {expanded && (
          <div style={{ padding: "0 28px 28px" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "18px 52px", marginBottom: 28,
              borderTop: "1px solid #e8ecf0", paddingTop: 24,
            }}>
              {study.body.map((para, i) => (
                <p key={i} style={{
                  fontSize: 14, lineHeight: 1.85,
                  color: i === 0 ? "#1e293b" : "#64748b",
                  fontWeight: i === 0 ? 500 : 400,
                  borderLeft: i === 0 ? `3px solid ${study.accentColor}` : "none",
                  paddingLeft: i === 0 ? 16 : 0,
                }}>{para}</p>
              ))}
            </div>

            {/* Deliverables */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", flexWrap: "wrap", gap: 16,
            }}>
              <div>
                <div style={{
                  fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "#9ca3af", marginBottom: 10, fontWeight: 600,
                }}>Deliverables</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {study.deliverables.map(d => (
                    <span key={d} style={{
                      fontSize: 12, padding: "5px 14px", borderRadius: 999,
                      background: "#fff", border: "1px solid #e2e8f0",
                      color: "#475569",
                    }}>{d}</span>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "AI Automation", "Paid Ads Management", "Social Media Marketing", "Website & Funnels", "App Design & Brand", "Healthcare & Wellness"];

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter(s => s.category === activeFilter || s.deliverables.some(d => d.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <section
      id="our-work"
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        fontFamily: "'DM Sans', 'Inter', sans-serif",
        color: "#0f172a",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* ── Section Header ── */}
      <div style={{
        padding: "80px 80px 56px",
        borderBottom: "1px solid #f0f4f8",
        background: "#fff",
      }}>
        {/* Label */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 11, fontWeight: 700, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#8b5cf6",
          background: "#f5f3ff", padding: "5px 14px", borderRadius: 999,
          marginBottom: 24,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6" }} />
          Our Work
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <div style={{ maxWidth: 580 }}>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800, lineHeight: 1.0,
              letterSpacing: "-0.03em", color: "#0f172a", marginBottom: 16,
            }}>
              Stories That<br />
              <span style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Move Markets</span>
            </h1>
            <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.8, fontWeight: 400 }}>
              Real clients. Measurable results. Each case study below is the full story — what the problem was, how we solved it, and exactly what happened next.
            </p>
          </div>

          {/* Stats summary */}
          <div style={{
            display: "flex", gap: 32, flexShrink: 0,
          }}>
            {[
              { num: "150+", label: "Projects" },
              { num: "6", label: "Industries" },
              { num: "100%", label: "Client Satisfaction" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 28, fontWeight: 800, color: "#0f172a",
                  letterSpacing: "-0.02em",
                }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "#9ca3af", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick-jump pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 40 }}>
          {caseStudies.map(s => (
            <a key={s.id} href={`#${s.id}`} style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 12, padding: "7px 16px",
              background: "#f8fafc", border: "1px solid #e2e8f0",
              borderRadius: 999, color: "#475569", textDecoration: "none",
              fontWeight: 500, transition: "all 0.18s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = s.accentLight;
                e.currentTarget.style.borderColor = s.accentBorder;
                e.currentTarget.style.color = s.accentColor;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#f8fafc";
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.color = "#475569";
              }}
            >
              <span>{s.icon}</span>
              <span>{s.client}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Filter bar ── */}
      <div style={{
        padding: "24px 80px",
        borderBottom: "1px solid #f0f4f8",
        display: "flex", gap: 8, flexWrap: "wrap",
        background: "#fafbfc",
        position: "sticky", top: 0, zIndex: 50,
      }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveFilter(cat)} style={{
            fontSize: 12, fontWeight: 600,
            padding: "7px 16px", borderRadius: 999,
            border: activeFilter === cat ? "1.5px solid #8b5cf6" : "1px solid #e2e8f0",
            background: activeFilter === cat ? "#8b5cf6" : "#fff",
            color: activeFilter === cat ? "#fff" : "#6b7280",
            cursor: "pointer", transition: "all 0.15s ease",
            letterSpacing: "0.02em",
          }}>{cat}</button>
        ))}
      </div>

      {/* ── Case studies ── */}
      <div style={{ padding: "72px 80px 48px" }}>
        {filtered.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} index={i} />
        ))}
      </div>

      
    
    </section>
  );
}