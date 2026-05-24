import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const education = [
  {
    type: "degree",
    title: "Bachelor of Engineering",
    subtitle: "Computer Engineering",           // ← update your branch
    institution: "Your College Name",           // ← update your college
    location: "Mumbai, India",                  // ← update location
    year: "2023 – 2027",                        // ← update years
    description: "Focused on machine learning, data structures, algorithms and software engineering. Active member of the coding club.",
    color: "#a78bfa",
  },
];

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera — Andrew Ng",
    year: "2024",
    link: "#",                                  // ← add your cert link
    color: "#5eead4",
  },
  {
    title: "Python for Data Science",
    issuer: "Kaggle",
    year: "2024",
    link: "#",
    color: "#fbbf24",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    year: "2024",
    link: "#",
    color: "#f472b6",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "8rem 2.5rem", background: "#06060a" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: "5rem" }}>
          <p className="mono" style={{ fontSize: "0.7rem", color: "#a78bfa", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>// background</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Education &amp; <span style={{ color: "#a78bfa" }}>Certifications</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "start" }}>

          {/* Education */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "2rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(167,139,250,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap size={18} style={{ color: "#a78bfa" }} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "rgba(255,255,255,0.6)" }}>Degree</h3>
            </div>

            {education.map((edu, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ borderRadius: 18, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "2rem", position: "relative", overflow: "hidden" }}>

                {/* top accent line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${edu.color}, transparent)` }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 4 }}>{edu.title}</h4>
                    <p style={{ color: edu.color, fontSize: "0.88rem", fontWeight: 500 }}>{edu.subtitle}</p>
                  </div>
                  <span className="mono" style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.04)", padding: "0.3rem 0.7rem", borderRadius: 6, border: "1px solid rgba(255,255,255,0.07)", whiteSpace: "nowrap" }}>{edu.year}</span>
                </div>

                <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>{edu.institution}</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", marginBottom: "1.2rem" }}>{edu.location}</p>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75 }}>{edu.description}</p>
              </motion.div>
            ))}

            {/* Currently learning */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginTop: "1.2rem", borderRadius: 14, border: "1px dashed rgba(94,234,212,0.2)", background: "rgba(94,234,212,0.03)", padding: "1.4rem 1.6rem" }}>
              <p className="mono" style={{ fontSize: "0.68rem", color: "#5eead4", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Currently Exploring</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Deep Learning", "PyTorch", "LLM Fine-tuning", "MLOps", "FastAPI"].map(t => (
                  <span key={t} className="mono" style={{ fontSize: "0.75rem", padding: "0.3rem 0.75rem", borderRadius: 6, border: "1px solid rgba(94,234,212,0.15)", color: "rgba(94,234,212,0.7)", background: "rgba(94,234,212,0.05)" }}>{t}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "2rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(251,191,36,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Award size={18} style={{ color: "#fbbf24" }} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "rgba(255,255,255,0.6)" }}>Certifications</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {certifications.map((cert, i) => (
                <motion.a key={i}
                  href={cert.link} target="_blank" rel="noreferrer"
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.3rem 1.5rem", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${cert.color}30`; e.currentTarget.style.background = `${cert.color}06`; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.transform = "translateX(0)"; }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: cert.color, flexShrink: 0, boxShadow: `0 0 8px ${cert.color}60` }} />
                    <div>
                      <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", marginBottom: 3 }}>{cert.title}</p>
                      <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)" }}>{cert.issuer}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <span className="mono" style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.25)" }}>{cert.year}</span>
                    <ExternalLink size={13} style={{ color: "rgba(255,255,255,0.2)" }} />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* GitHub contribution graph */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ marginTop: "1.5rem", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "1.5rem", overflow: "hidden" }}>
              <p className="mono" style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>GitHub Activity</p>
              <img
                src="https://ghchart.rshah.org/6d5af0/Bhumik2005"
                alt="GitHub contribution chart"
                style={{ width: "100%", borderRadius: 8, opacity: 0.85 }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
