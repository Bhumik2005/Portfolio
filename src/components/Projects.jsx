import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const rest      = projects.filter(p => !p.featured);

  return (
    <section id="projects" style={{ padding: '8rem 2.5rem', background: '#06060a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}>
          <p className="mono" style={{ fontSize: '0.7rem', color: '#5eead4', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>// featured work</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Projects that <span style={{ color: '#5eead4' }}>ship</span>
          </h2>
        </motion.div>

        {/* Featured — 2 big cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {featured.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', padding: '2.2rem', transition: 'all 0.3s', cursor: 'default', position: 'relative', overflow: 'hidden' }}
              whileHover={{ y: -5, borderColor: `${p.accentColor}30` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.2rem' }}>{p.emoji}</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = p.accentColor + '60'; e.currentTarget.style.color = p.accentColor; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}>
                    <GitBranch size={14} />
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer"
                    style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = p.accentColor + '60'; e.currentTarget.style.color = p.accentColor; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{p.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.8rem' }}>{p.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {p.tags.map(tag => (
                  <span key={tag} className="mono" style={{ fontSize: '0.7rem', padding: '0.3rem 0.7rem', borderRadius: 5, border: `1px solid ${p.accentColor}25`, color: p.accentColor, background: `${p.accentColor}08` }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest — compact rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {rest.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.3rem 1.8rem', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', transition: 'all 0.2s' }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.12)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.4rem' }}>{p.emoji}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: 3 }}>{p.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>{p.description.slice(0, 70)}...</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                {p.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="mono" style={{ fontSize: '0.68rem', padding: '0.25rem 0.6rem', borderRadius: 5, border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.25)' }}>{tag}</span>
                ))}
                <a href={p.github} target="_blank" rel="noreferrer" style={{ width: 30, height: 30, borderRadius: 7, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#a78bfa'; e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                  <GitBranch size={13} />
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" style={{ width: 30, height: 30, borderRadius: 7, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#5eead4'; e.currentTarget.style.borderColor = 'rgba(94,234,212,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
