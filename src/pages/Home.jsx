import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import content from '../content.yaml'

const { home } = content

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
}
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function Home() {
  return (
    <PageTransition>
      <section className="hero container">
        <motion.div variants={stagger} initial="initial" animate="animate" className="hero-grid">
          <motion.div variants={fadeUp} className="hero-meta">
            <span className="eyebrow">{home.eyebrow}</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="display hero-title">
            Software <em>engineer</em><br />
            building <span className="underline-mark">resilient</span><br />
            systems &amp; <em>interfaces.</em>
          </motion.h1>

          <motion.div variants={fadeUp} className="hero-bottom">
            <p className="hero-lede">{home.hero_lede}</p>

            <div className="hero-actions">
              <Link to="/work" className="btn-primary" data-hover>
                View Work <ArrowUpRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost" data-hover>
                Get in touch
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div className="marquee-content" key={i}>
              {home.marquee_skills.map((skill) => (
                <span key={skill}>
                  <span className="display">{skill}</span>
                  <span className="dot-sep">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Selected work preview */}
      <section className="container selected">
        <div className="selected-head">
          <span className="eyebrow">{home.selected_eyebrow}</span>
          <h2 className="display selected-title">{home.selected_heading}</h2>
        </div>

        <div className="selected-list">
          {home.selected_projects.map((p) => (
            <Link to="/work" key={p.num} className="selected-item" data-hover>
              <span className="mono selected-num">{p.num}</span>
              <div className="selected-main">
                <h3 className="display selected-name">{p.title}</h3>
                <p className="selected-desc">{p.desc}</p>
                <div className="selected-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <span className="selected-org mono">{p.org}</span>
              <ArrowUpRight className="selected-arrow" size={20} />
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .hero {
          padding-top: 8rem;
          padding-bottom: 6rem;
        }
        .hero-grid {
          display: grid;
          gap: 4rem;
        }
        .hero-title {
          font-size: clamp(3rem, 8.5vw, 8rem);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 0.95;
        }
        .hero-title em {
          font-style: italic;
          font-weight: 400;
          color: var(--accent);
        }
        .underline-mark {
          position: relative;
          display: inline-block;
        }
        .underline-mark::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0.08em;
          width: 100%;
          height: 0.12em;
          background: var(--accent);
          opacity: 0.3;
        }

        .hero-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: end;
          padding-top: 3rem;
          border-top: 1px solid var(--line);
        }
        .hero-lede {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 32rem;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }
        .btn-primary, .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 999px;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .btn-primary {
          background: var(--ink);
          color: var(--bg);
        }
        .btn-primary:hover {
          background: var(--accent);
          transform: translate(2px, -2px);
        }
        .btn-ghost {
          border: 1px solid var(--ink);
        }
        .btn-ghost:hover {
          background: var(--ink);
          color: var(--bg);
        }

        /* Marquee */
        .marquee {
          padding: 2.5rem 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
          background: var(--bg-alt);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee-content {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          padding-right: 2.5rem;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 300;
          font-style: italic;
        }
        .marquee-content .display { letter-spacing: -0.02em; }
        .dot-sep {
          color: var(--accent);
          font-size: 0.6em;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Selected */
        .selected { padding: 8rem 0 2rem; }
        .selected-head {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        .selected-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 300;
          line-height: 1;
        }
        .selected-list {
          border-top: 1px solid var(--line);
        }
        .selected-item {
          display: grid;
          grid-template-columns: 60px 1fr 200px 30px;
          gap: 2rem;
          align-items: start;
          padding: 2.5rem 0;
          border-bottom: 1px solid var(--line);
          position: relative;
          transition: padding 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .selected-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent-soft);
          opacity: 0;
          transition: opacity 0.4s;
          z-index: -1;
        }
        .selected-item:hover {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .selected-item:hover::before { opacity: 0.5; }
        .selected-num {
          font-size: 0.7rem;
          padding-top: 0.5rem;
        }
        .selected-name {
          font-size: 1.75rem;
          font-weight: 400;
          margin-bottom: 0.6rem;
          line-height: 1.1;
        }
        .selected-desc {
          color: var(--ink-soft);
          max-width: 36rem;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        .selected-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .selected-tags span {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 0.25rem 0.7rem;
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--muted);
        }
        .selected-org {
          align-self: start;
          padding-top: 0.7rem;
          font-size: 0.7rem;
        }
        .selected-arrow {
          align-self: start;
          margin-top: 0.4rem;
          opacity: 0.4;
          transition: all 0.4s;
        }
        .selected-item:hover .selected-arrow {
          opacity: 1;
          transform: translate(4px, -4px);
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .hero { padding-top: 6rem; }
          .hero-bottom {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-actions { justify-content: flex-start; }
          .selected-item {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .selected-org, .selected-arrow, .selected-num { display: none; }
          .selected-item:hover { padding-left: 0; padding-right: 0; }
        }
      `}</style>
    </PageTransition>
  )
}
