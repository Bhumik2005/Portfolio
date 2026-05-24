import { navLinks, personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 2.5rem', background: '#06060a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        <div>
          <span className="shimmer-text" style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.3rem' }}>BK.</span>
          <p className="mono" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', marginTop: 6, letterSpacing: '0.05em' }}>
            © 2026 {personal.name} · ML Engineer & Python Developer
          </p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="mono"
              style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.2)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.2)'}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
