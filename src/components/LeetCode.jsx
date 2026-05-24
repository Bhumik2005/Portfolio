import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { personal, leetcodeTopics } from "../data/portfolio";

const statusConfig = {
  done:   { color: '#4ade80', label: 'Done'        },
  active: { color: '#fbbf24', label: 'In Progress' },
  todo:   { color: 'rgba(255,255,255,0.2)', label: 'Upcoming' },
};

export default function LeetCode() {
  return (
    <section id="leetcode" style={{ padding: '8rem 2.5rem', background: '#06060a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}>
          <p className="mono" style={{ fontSize: '0.7rem', color: '#fbbf24', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>// problem solving</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            DSA on <span style={{ color: '#fbbf24' }}>LeetCode</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

          {/* Stats card */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', padding: '2.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(251,191,36,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>⚡</div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 3 }}>{personal.leetcodeUsername}</h3>
                <p className="mono" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>leetcode.com/u/Bhumik_Kumta</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: '2rem' }}>
              {[
                { label: 'Total', value: '—', color: '#a78bfa' },
                { label: 'Easy',  value: '—', color: '#4ade80' },
                { label: 'Medium',value: '—', color: '#fbbf24' },
                { label: 'Hard',  value: '—', color: '#f87171' },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: '1.1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: s.color, fontFamily: 'Syne' }}>{s.value}</div>
                  <div className="mono" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="mono" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center', marginBottom: '1.5rem' }}>Update stats as you solve more problems</p>

            <a href={personal.leetcode} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '0.85rem', borderRadius: 12, border: '1px solid rgba(251,191,36,0.2)', background: 'rgba(251,191,36,0.05)', color: '#fbbf24', textDecoration: 'none', fontWeight: 500, fontSize: '0.85rem', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(251,191,36,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(251,191,36,0.05)'}>
              <ExternalLink size={14} />
              View LeetCode Profile
            </a>
          </motion.div>

          {/* Roadmap card */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', padding: '2.2rem' }}>
            <p className="mono" style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.8rem' }}>DSA Roadmap Progress</p>

            {leetcodeTopics.map((topic, i) => {
              const cfg = statusConfig[topic.status];
              return (
                <motion.div key={topic.name}
                  initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 0', borderBottom: i < leetcodeTopics.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: cfg.color, display: 'inline-block', flexShrink: 0 }}></span>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>{topic.name}</span>
                  </div>
                  <span className="mono" style={{ fontSize: '0.68rem', color: cfg.color, padding: '0.2rem 0.6rem', borderRadius: 5, border: `1px solid ${cfg.color}25`, background: `${cfg.color}10` }}>{cfg.label}</span>
                </motion.div>
              );
            })}

            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.25)', marginTop: '1.8rem', lineHeight: 1.7 }}>
              Practising DSA in Python daily to crack technical interviews at top tech companies.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
