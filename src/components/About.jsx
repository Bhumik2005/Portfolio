import { motion } from "framer-motion";
import { personal, skills, skillCategories } from "../data/portfolio";

const SectionLabel = ({ text }) => (
  <p className="mono" style={{ fontSize: '0.7rem', color: '#a78bfa', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{text}</p>
);

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 2.5rem', background: '#08080e' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}>
          <SectionLabel text="// about me" />
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Passionate about{' '}
            <span style={{ color: '#a78bfa' }}>Machine Learning</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'start' }}>

          {/* Left — text */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '1rem' }}>{personal.bio}</p>
            <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: '3rem', fontSize: '1rem' }}>{personal.bio2}</p>

            {Object.entries(skillCategories).map(([cat, meta]) => (
              <div key={cat} style={{ marginBottom: '1.8rem' }}>
                <p className="mono" style={{ fontSize: '0.68rem', color: meta.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem', opacity: 0.8 }}>{meta.label}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {skills.filter(s => s.category === cat).map(s => (
                    <span key={s.name} className="mono" style={{ fontSize: '0.76rem', padding: '0.35rem 0.85rem', borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.02)', transition: 'all 0.2s', cursor: 'default' }}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — card */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', padding: '2.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <img src={personal.avatar} alt="Bhumik" style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid rgba(167,139,250,0.3)' }} />
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 3 }}>{personal.name}</h3>
                  <p className="mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>{personal.role}</p>
                </div>
              </div>

              {/* Skill bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {skills.slice(0, 6).map((skill, i) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span className="mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>{skill.name}</span>
                      <span className="mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: 3, background: 'rgba(255,255,255,0.05)', borderRadius: 100, overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.07, ease: 'easeOut' }}
                        style={{ height: '100%', borderRadius: 100, background: skillCategories[skill.category].color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Links */}
              {[
                { href: personal.github,             label: `github.com/${personal.githubUsername}` },
                { href: personal.leetcode,           label: `leetcode.com/u/${personal.leetcodeUsername}` },
                { href: `mailto:${personal.email}`,  label: personal.email },
              ].map(l => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.65rem 0.9rem', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.8rem', marginBottom: 8, transition: 'all 0.2s', fontFamily: 'JetBrains Mono, monospace' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; e.currentTarget.style.background = 'rgba(167,139,250,0.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'transparent'; }}>
                  <span style={{ color: '#a78bfa' }}>→</span> {l.label}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
