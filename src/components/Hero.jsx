import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";

const ROLES = [
  "ML Engineer",
  "Python Developer",
  "Data Science Enthusiast",
  "NLP Builder",
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const [pause, setPause]         = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1400);
      return () => clearTimeout(t);
    }
    const current = ROLES[roleIndex];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPause(true);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, pause, roleIndex]);

  return (
    <span style={{ color: "#a78bfa" }}>
      {displayed}
      <span style={{ borderRight: "2px solid #a78bfa", marginLeft: 2, animation: "blink 1s step-end infinite" }} />
    </span>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

/* Inline style shared by BOTH name lines — identical font stack */
const nameStyle = {
  fontFamily: "'Syne', sans-serif",
  fontWeight: 800,
  display: "block",
  lineHeight: 1.0,
};

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2.5rem", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(109,90,240,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "65%", left: "20%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(94,234,212,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 900, width: "100%", margin: "0 auto", paddingTop: "6rem", paddingBottom: "4rem" }}>

        {/* Badge */}
        <motion.div {...fadeUp(0.1)} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "2.5rem", padding: "0.45rem 1rem", borderRadius: 100, border: "1px solid rgba(167,139,250,0.2)", background: "rgba(167,139,250,0.05)" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 6px #4ade80" }} />
          <span className="mono" style={{ fontSize: "0.72rem", color: "rgba(167,139,250,0.9)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Open to opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.div
          {...fadeUp(0.2)}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.2rem, 9vw, 7rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            marginBottom: "1.2rem",
          }}
        >
          {/* Bhumik — gradient via background-clip */}
          <span style={{
            ...nameStyle,
            background: "linear-gradient(135deg, #5eead4 0%, #a78bfa 60%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "0.05em",
          }}>
            Bhumik
          </span>

          {/* Kumta — plain white, same font, NO gradient tricks */}
          <span style={{
            ...nameStyle,
            color: "rgba(255,255,255,0.92)",
            WebkitTextFillColor: "rgba(255,255,255,0.92)",
          }}>
            Kumta
          </span>
        </motion.div>

        {/* Typing role */}
        <motion.p
          {...fadeUp(0.3)}
          className="mono"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", marginBottom: "1.8rem", minHeight: "1.8rem" }}
        >
          <TypingText />
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.4)}
          style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.4)", fontWeight: 300, maxWidth: 500, lineHeight: 1.8, marginBottom: "3rem", fontFamily: "Inter, sans-serif" }}
        >
          {personal.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "5rem" }}>
          <a href="#projects"
            style={{ padding: "0.85rem 2rem", borderRadius: 10, background: "#6d5af0", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#8872f5"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#6d5af0"; e.currentTarget.style.transform = "translateY(0)"; }}>
            View Projects
          </a>
          <a href="/resume.pdf" download
            style={{ padding: "0.85rem 2rem", borderRadius: 10, border: "1px solid rgba(94,234,212,0.25)", color: "#5eead4", textDecoration: "none", fontSize: "0.9rem", transition: "all 0.2s", background: "rgba(94,234,212,0.04)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(94,234,212,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(94,234,212,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Download Resume ↓
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer"
            style={{ padding: "0.85rem 2rem", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.9rem", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            GitHub →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0.6)} style={{ display: "flex", gap: "3.5rem", flexWrap: "wrap", paddingTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { num: "5",      label: "GitHub Repos" },
            { num: "3",      label: "ML Projects"  },
            { num: "Python", label: "Primary Stack" },
            { num: "Open",   label: "To Work"       },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#a78bfa", fontFamily: "'Syne', sans-serif" }}>{s.num}</div>
              <div className="mono" style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
