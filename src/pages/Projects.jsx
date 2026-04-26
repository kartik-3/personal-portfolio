import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import content from '../content.yaml'

const { projects } = content

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Projects() {
  return (
    <PageTransition>
      <div className="container projects-page">
        <motion.div
          className="projects-head"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          <span className="eyebrow">{projects.eyebrow}</span>
          <h1 className="display projects-title">
            Things I've built<br />
            <em>on my own time.</em>
          </h1>
          <p className="projects-lede">{projects.lede}</p>
        </motion.div>

        <div className="projects-grid">
          {projects.items.map((p, idx) => (
            <motion.article
              key={p.title}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={idx}
            >
              <div className="project-top">
                <span className="mono project-period">{p.period}</span>
                {p.github_url && (
                  <a href={p.github_url} target="_blank" rel="noreferrer" className="project-link" data-hover>
                    GitHub <ArrowUpRight size={14} />
                  </a>
                )}
              </div>

              <h2 className="display project-title">{p.title}</h2>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mono">More on GitHub</p>
          <a href={projects.github_url} target="_blank" rel="noreferrer" className="github-cta display" data-hover>
            <span>github.com/kartik-3</span>
            <ArrowUpRight size={32} strokeWidth={1} />
          </a>
        </motion.div>
      </div>

      <style>{`
        .projects-page { padding-top: 8rem; padding-bottom: 4rem; }
        .projects-head { margin-bottom: 6rem; max-width: 52rem; }
        .projects-head .eyebrow { display: block; margin-bottom: 1.5rem; }
        .projects-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 300;
          line-height: 1.05;
          margin-bottom: 1.5rem;
        }
        .projects-title em {
          font-style: italic;
          font-weight: 400;
          color: var(--accent);
        }
        .projects-lede {
          font-size: 1.05rem;
          color: var(--ink-soft);
          max-width: 36rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          border: 1px solid var(--line);
          margin-bottom: 8rem;
        }
        .project-card {
          padding: 3rem;
          border: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: background 0.3s;
        }
        .project-card:hover { background: var(--bg-alt); }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .project-period { font-size: 0.7rem; color: var(--muted); }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent);
          transition: gap 0.3s;
        }
        .project-link:hover { gap: 0.5rem; }

        .project-title {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 400;
          line-height: 1.15;
        }
        .project-desc {
          font-size: 0.95rem;
          color: var(--ink-soft);
          line-height: 1.7;
          flex: 1;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .project-tags span {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 0.2rem 0.6rem;
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--muted);
        }

        .projects-footer {
          padding-top: 4rem;
          border-top: 1px solid var(--line);
        }
        .projects-footer .mono { font-size: 0.7rem; color: var(--accent); margin-bottom: 1rem; }
        .github-cta {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          font-size: clamp(1.5rem, 3.5vw, 2.5rem);
          font-weight: 300;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .github-cta:hover { color: var(--accent); gap: 1.75rem; }

        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .project-card { padding: 2rem; }
        }
      `}</style>
    </PageTransition>
  )
}
