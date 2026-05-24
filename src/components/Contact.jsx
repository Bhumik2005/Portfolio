import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Link, CheckCircle, AlertCircle, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";
import { personal } from "../data/portfolio";

const SERVICE_ID  = "service_jzs3o69";
const TEMPLATE_ID = "template_p9lxwst";
const PUBLIC_KEY  = "O8S4xa_N28YLh9T7LGihE";

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 10,
  padding: '0.75rem 1rem',
  color: '#e8e8f0',
  fontSize: '0.88rem',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s',
};

const labelStyle = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.65rem',
  color: 'rgba(255,255,255,0.25)',
  letterSpacing: '0.1em',
  marginBottom: '0.5rem',
  display: 'block',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in Name, Email and Message.');
      return;
    }
    setStatus('loading');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name:    form.name,
        email:   form.email,
        subject: form.subject || 'No subject',
        message: form.message,
      }, PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ padding: '8rem 2.5rem', background: '#08080e' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}>
          <p className="mono" style={{ fontSize: '0.7rem', color: '#5eead4', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>// get in touch</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Let's <span style={{ color: '#5eead4' }}>connect</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Left — links */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>Open to roles and collaborations</h3>
            <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.85, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
              I'm actively looking for ML Engineering, Data Science, or Python Developer roles.
              If you're building something interesting or hiring, I'd love to talk.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: personal.github,            Icon: Link,         label: 'GitHub',   sub: `github.com/${personal.githubUsername}`,      hoverColor: 'rgba(167,139,250,0.08)' },
                { href: personal.leetcode,          Icon: ExternalLink, label: 'LeetCode', sub: `leetcode.com/u/${personal.leetcodeUsername}`, hoverColor: 'rgba(251,191,36,0.06)'  },
                { href: personal.linkedin,          Icon: Link,         label: 'LinkedIn', sub: 'linkedin.com/in/yourprofile',                hoverColor: 'rgba(96,165,250,0.06)'  },
                { href: `mailto:${personal.email}`, Icon: Mail,         label: 'Email',    sub: personal.email,                               hoverColor: 'rgba(94,234,212,0.06)'  },
              ].map(({ href, Icon, label, sub, hoverColor }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.2rem', borderRadius: 14, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.01)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = hoverColor; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.01)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} style={{ color: 'rgba(255,255,255,0.45)' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: 2 }}>{label}</p>
                    <p className="mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>{sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', padding: '2.2rem' }}>
            <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '1.8rem' }}>Send a message</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={labelStyle}>NAME</label>
                  <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>EMAIL</label>
                  <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>SUBJECT</label>
                <input name="subject" type="text" placeholder="Opportunity / Collaboration" value={form.subject} onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <div>
                <label style={labelStyle}>MESSAGE</label>
                <textarea name="message" rows="5" placeholder="Tell me about the role or project..." value={form.message} onChange={handleChange}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              {/* Success message */}
              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.85rem 1rem', borderRadius: 10, background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', color: '#4ade80' }}>
                  <CheckCircle size={16} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>Message sent! I'll get back to you soon.</span>
                </div>
              )}

              {/* Error message */}
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.85rem 1rem', borderRadius: 10, background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', color: '#f87171' }}>
                  <AlertCircle size={16} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                style={{ width: '100%', padding: '0.9rem', borderRadius: 12, background: status === 'loading' ? '#4a3fa8' : '#6d5af0', border: 'none', color: '#fff', fontWeight: 700, fontSize: '0.95rem', cursor: status === 'loading' ? 'not-allowed' : 'pointer', fontFamily: 'Syne, sans-serif', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 4 }}
                onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.background = '#8872f5'; e.currentTarget.style.transform = 'translateY(-2px)'; }}}
                onMouseLeave={e => { if (status !== 'loading') { e.currentTarget.style.background = '#6d5af0'; e.currentTarget.style.transform = 'translateY(0)'; }}}
              >
                {status === 'loading'
                  ? <><Loader size={16} className="animate-spin" /> Sending...</>
                  : 'Send Message →'
                }
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
