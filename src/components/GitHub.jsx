import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { personal } from "../data/portfolio";

const repos = [
  { name: "fake-news-detector",  desc: "Fake News Detection using NLP & ML",         lang: "Python",     dot: "#3572A5", href: "https://github.com/Bhumik2005/fake-news-detector"  },
  { name: "iris-classification", desc: "Iris species classifier — full ML pipeline",  lang: "Python",     dot: "#3572A5", href: "https://github.com/Bhumik2005/iris-classification" },
  { name: "Titanic-Survival",    desc: "Titanic survival prediction",                 lang: "Python",     dot: "#3572A5", href: "https://github.com/Bhumik2005/Titanic-Survival"    },
  { name: "feedback-mern",       desc: "Full-stack MERN feedback collection app",     lang: "JavaScript", dot: "#f1e05a", href: "https://github.com/Bhumik2005/feedback-mern"       },
  { name: "Portfolio",           desc: "Personal developer portfolio — React + Vite", lang: "JavaScript", dot: "#f1e05a", href: "https://github.com/Bhumik2005/Portfolio"           },
];

export default function GitHub() {
  return (
    <section id="github" style={{ padding: '8rem 2.5rem', background: '#08080e' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}>
          <p className="mono" style={{ fontSize: '0.7rem', color: '#a78bfa', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>// source code</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            All on <span style={{ color: '#a78bfa' }}>GitHub</span>
          </h2>
        </motion.div>

        {/* Profile banner */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem', padding: '2.2rem', borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', marginBottom: '1.5rem' }}>
          <img src={personal.avatar} alt="GitHub" style={{ width: 64, height: 64, borderRadius: '50%', border: '2px solid rgba(167,139,250,0.3)', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>{personal.name}</h3>
            <p className="mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em', marginBottom: 6 }}>@{personal.githubUsername}</p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.88rem' }}>ML Engineer · Python Developer · Open to work</p>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', flexShrink: 0 }}>
            {[{ n: '5', l: 'Repos' }, { n: '3', l: 'Python' }, { n: '2', l: 'JS' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#a78bfa', fontFamily: 'Syne' }}>{s.n}</div>
                <div className="mono" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 3 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <a href={personal.github} target="_blank" rel="noreferrer"
            style={{ padding: '0.7rem 1.5rem', borderRadius: 10, background: '#6d5af0', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.background = '#8872f5'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#6d5af0'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View Profile
          </a>
        </motion.div>

        {/* Repo rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {repos.map((repo, i) => (
            <motion.a key={repo.name} href={repo.href} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 1.8rem', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.2)'; e.currentTarget.style.background = 'rgba(167,139,250,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.01)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(167,139,250,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 7h18M3 12h18M3 17h18"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)', marginBottom: 3 }}>{repo.name}</p>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>{repo.desc}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: repo.dot, display: 'inline-block' }}></span>
                  <span className="mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>{repo.lang}</span>
                </div>
                <ExternalLink size={14} style={{ color: 'rgba(255,255,255,0.2)' }} />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
