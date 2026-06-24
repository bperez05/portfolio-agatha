"use client";

import Nav from "@/components/Nav";
import FadeSection from "@/components/FadeSection";
import { Mail, Phone } from "lucide-react";

const experiences = [
  {
    title: "Apple Genius — Baybrook NSO",
    location: "Houston, TX",
    date: "Jan 2026",
    bullets: [
      "Selected for new store opening based on strong performance history",
      "Mac and iPhone repair support + Apple Business introductions",
      "Peer resource for appointment quality and customer interaction best practices",
    ],
  },
  {
    title: "Apple Genius",
    location: "Dallas, TX",
    date: "Nov 2024–Present",
    bullets: [
      "Operationally excellent service with accountability and empathy",
      "Complex service issue resolution with a customer-centered approach",
      "Mentorship, Downloads participation, and real-time floor leadership",
      "Certified: macOS troubleshooting, hardware diagnostics, quality repair",
    ],
  },
  {
    title: "Apple Technical Expert",
    location: "Dallas, TX",
    date: "Apr 2023–Nov 2024",
    bullets: [
      "Connect & Personalize modeling for Trade-In, carrier activation, and services",
      "Repair workflow enhancements → higher sessions per queued hour",
      "Same Unit Repair above 98% for over a year",
    ],
  },
  {
    title: "Apple Technical Specialist",
    location: "Dallas, TX",
    date: "Oct 2022–Apr 2023",
    bullets: [
      "Same-day technical solutions in high-volume retail",
      "Shared customer trends with leadership to improve operations",
      "Customer education on products, services, and upgrades",
    ],
  },
  {
    title: "Apple Product Zone Specialist",
    location: "San Antonio & Dallas, TX",
    date: "Oct 2021–2022",
    bullets: [
      "Cross-functional collaboration with Expert and Pro teams",
      "Drove AppleCare+, Business Introductions, Trade-In, and carrier activation",
      "One-to-many support model for customer engagement and conversion",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Arts, Communication Studies",
    school: "St. Mary's University",
    location: "San Antonio, TX",
    date: "2021",
    note: "Double major with Business Administration",
  },
];

const skills = [
  "Operational Excellence & Floor Leadership",
  "Team Alignment, Mentorship & Coaching",
  "Customer Engagement & Sales Enablement",
  "Cross-Functional Collaboration",
  "Workflow Optimization & Queue Management",
  "Conflict Resolution & Escalation Support",
  "Communication & Relationship Building",
  "macOS Troubleshooting & Hardware Diagnostics",
  "Apple Business Introductions",
  "Ready for Pickup & Express Appointment Workflows",
];

const stats = [
  { value: "4+", label: "Years at Apple" },
  { value: "98%+", label: "Same Unit Repair Rate" },
  { value: "5", label: "Roles / Promotions" },
  { value: "3", label: "Texas Markets Served" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Hero */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "6rem", paddingBottom: "4rem" }}>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Dallas, TX · Apple Retail</p>

          <div style={{ marginBottom: "0.75rem" }}>
            <h1 style={{
              fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400,
              fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: 1.1, color: "var(--text-primary)", margin: 0,
            }}>
              Agatha Estrada
            </h1>
            <span className="hero-underline" />
          </div>

          <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "var(--text-muted)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", margin: "1.25rem 0 1rem", fontWeight: 400 }}>
            Apple Genius · Customer Experience · Technical Operations
          </p>

          <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: 520, marginBottom: "2.5rem", lineHeight: 1.8 }}>
            Five years building Apple&apos;s customer experience in Texas — from product demos to complex diagnostics.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <HeroButton href="#experience" variant="outline">View Experience</HeroButton>
            <HeroButton href="#contact" variant="filled">Get in Touch</HeroButton>
          </div>
        </section>

        {/* About */}
        <FadeSection id="about" style={{ paddingBlock: "6rem" }}>
          <p className="eyebrow" style={{ marginBottom: "2.5rem" }}>About</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start" }}>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, margin: 0 }}>
              Agatha blends deep technical expertise with genuine customer care — the kind that turns a stressful Genius Bar appointment into a confident, informed experience. Over four years across three Texas Apple markets, she has mentored peers, streamlined repair workflows, and driven operational excellence in some of Apple&apos;s most high-volume retail environments.
              <br /><br />
              Based in Dallas, TX. St. Mary&apos;s University graduate in Communication Studies and Business Administration.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {stats.map((s) => (
                <div key={s.label} style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "1.5rem", borderRadius: "4px" }}>
                  <div style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", color: "var(--accent)", fontWeight: 600, lineHeight: 1, marginBottom: "0.4rem" }}>{s.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>

        {/* Education */}
        <FadeSection id="education" style={{ paddingBlock: "6rem" }}>
          <p className="eyebrow" style={{ marginBottom: "2.5rem" }}>Education</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {education.map((edu, i) => (
              <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 600, fontSize: "1.05rem", color: "var(--text-primary)", margin: "0 0 0.2rem" }}>{edu.degree}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.825rem", margin: 0 }}>{edu.school} · {edu.location}</p>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "var(--accent)", whiteSpace: "nowrap" }}>{edu.date}</span>
                </div>
                {edu.note && <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: "0.5rem 0 0", fontStyle: "italic" }}>{edu.note}</p>}
              </div>
            ))}
          </div>
        </FadeSection>

        {/* Experience */}
        <FadeSection id="experience" style={{ paddingBlock: "6rem" }}>
          <p className="eyebrow" style={{ marginBottom: "2.5rem" }}>Experience</p>
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            <div style={{ position: "absolute", left: "6px", top: "8px", bottom: "8px", width: "1px", background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {experiences.map((exp, i) => <TimelineCard key={i} exp={exp} />)}
            </div>
          </div>
        </FadeSection>

        {/* Skills */}
        <FadeSection id="skills" style={{ paddingBlock: "6rem" }}>
          <p className="eyebrow" style={{ marginBottom: "2.5rem" }}>Skills</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {skills.map((skill) => <SkillPill key={skill} label={skill} />)}
          </div>
        </FadeSection>

        {/* Contact */}
        <FadeSection id="contact" style={{ paddingBlock: "6rem", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "2.5rem" }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} style={{ display: "block", width: i === 2 ? "8px" : "4px", height: i === 2 ? "8px" : "4px", borderRadius: "50%", background: i === 2 ? "var(--accent)" : "var(--border)" }} />
            ))}
          </div>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Contact</p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--text-primary)", margin: "0 0 2.5rem" }}>
            Let&apos;s connect.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
            <ContactItem icon={<Mail size={16} />} label="axestrada@outlook.com" href="mailto:axestrada@outlook.com" />
            <ContactItem icon={<Phone size={16} />} label="214-686-3805" href="tel:+12146863805" />
          </div>
        </FadeSection>
      </main>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", margin: 0 }}>© 2026 Agatha Estrada</p>
      </footer>
    </>
  );
}

function HeroButton({ href, variant, children }: { href: string; variant: "outline" | "filled"; children: React.ReactNode }) {
  const base: React.CSSProperties = { display: "inline-block", padding: "0.75rem 1.75rem", textDecoration: "none", fontSize: "0.875rem", letterSpacing: "0.04em", borderRadius: "2px", transition: "opacity 0.2s, background 0.2s" };
  const styles: React.CSSProperties = variant === "outline"
    ? { ...base, border: "1px solid var(--accent)", color: "var(--accent)", background: "transparent", fontWeight: 400 }
    : { ...base, background: "var(--accent)", color: "#0f0f0f", border: "none", fontWeight: 500 };
  return (
    <a href={href} style={styles}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; if (variant === "outline") el.style.background = "var(--accent-soft)"; else el.style.opacity = "0.85"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; if (variant === "outline") el.style.background = "transparent"; else el.style.opacity = "1"; }}
    >{children}</a>
  );
}

function TimelineCard({ exp }: { exp: (typeof experiences)[0] }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", left: "-1.75rem", top: "1.1rem", width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", border: "2px solid var(--bg)", transform: "translateX(-1px)" }} />
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "2px solid transparent", borderRadius: "4px", padding: "1.5rem", transition: "border-color 0.2s, background 0.2s, transform 0.2s" }}
        onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderLeftColor = "var(--accent)"; el.style.background = "var(--accent-soft)"; el.style.transform = "translateY(-2px)"; }}
        onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderLeftColor = "transparent"; el.style.background = "var(--surface)"; el.style.transform = "translateY(0)"; }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 600, fontSize: "1.05rem", color: "var(--text-primary)", margin: "0 0 0.2rem" }}>{exp.title}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.825rem", margin: 0 }}>{exp.location}</p>
          </div>
          <span style={{ fontSize: "0.75rem", color: "var(--accent)", whiteSpace: "nowrap" }}>{exp.date}</span>
        </div>
        <ul style={{ margin: 0, paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          {exp.bullets.map((b, i) => <li key={i} style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}

function SkillPill({ label }: { label: string }) {
  return (
    <span style={{ display: "inline-block", padding: "0.5rem 1rem", border: "1px solid var(--border)", borderRadius: "100px", fontSize: "0.825rem", color: "var(--text-primary)", background: "var(--surface)", cursor: "default", transition: "border-color 0.2s, color 0.2s" }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLSpanElement; el.style.borderColor = "var(--accent)"; el.style.color = "var(--accent)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLSpanElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--text-primary)"; }}
    >{label}</span>
  );
}

function ContactItem({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a href={href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-muted)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
    >
      <span style={{ color: "var(--accent)" }}>{icon}</span>
      {label}
    </a>
  );
}
