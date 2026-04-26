import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import content from '../content.yaml'

const { experience } = content

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function Work() {
  return (
    <PageTransition>
      <div className="container work-page">
        <motion.div
          className="work-head"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{experience.eyebrow}</span>
          <h1 className="display work-title">
            Six years <em>shipping</em><br />
            production software.
          </h1>
          <p className="work-lede">{experience.lede}</p>
        </motion.div>

        <div className="timeline">
          {experience.jobs.map((job, idx) => (
            <motion.article
              key={job.company}
              className="job"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={itemVariant}
            >
              <div className="job-marker">
                <span className="mono">0{idx + 1}</span>
                <span className="job-line" />
              </div>

              <div className="job-content">
                <header className="job-header">
                  <div>
                    <h2 className="display job-company">{job.company}</h2>
                    <p className="job-role">{job.role}</p>
                  </div>
                  <div className="job-meta">
                    <p className="mono">{job.period}</p>
                    <p className="mono">{job.location}</p>
                  </div>
                </header>

                <ul className="job-bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="job-stack">
                  {job.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .work-page { padding-top: 8rem; padding-bottom: 4rem; }
        .work-head { margin-bottom: 6rem; max-width: 50rem; }
        .work-head .eyebrow { display: block; margin-bottom: 1.5rem; }
        .work-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 300;
          line-height: 1.05;
          margin-bottom: 1.5rem;
        }
        .work-title em {
          font-style: italic;
          font-weight: 400;
          color: var(--accent);
        }
        .work-lede {
          font-size: 1.05rem;
          color: var(--ink-soft);
          max-width: 32rem;
        }

        .timeline {
          display: flex;
          flex-direction: column;
        }
        .job {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 2rem;
          padding: 4rem 0;
          border-top: 1px solid var(--line);
        }
        .job:last-child { border-bottom: 1px solid var(--line); }

        .job-marker {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 0.4rem;
        }
        .job-marker .mono { font-size: 0.75rem; }
        .job-line {
          width: 1px;
          height: 100%;
          background: var(--line);
          margin-left: 2px;
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--line);
        }
        .job-company {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 0.4rem;
        }
        .job-role {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.1rem;
          color: var(--accent);
          font-weight: 300;
        }
        .job-meta {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .job-meta .mono { font-size: 0.7rem; }

        .job-bullets {
          list-style: none;
          margin-bottom: 2rem;
        }
        .job-bullets li {
          padding: 0.6rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--ink-soft);
          line-height: 1.6;
          border-bottom: 1px dashed var(--line);
        }
        .job-bullets li:last-child { border-bottom: none; }
        .job-bullets li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-family: var(--font-mono);
        }

        .job-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .job-stack span {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.05em;
          padding: 0.3rem 0.8rem;
          background: var(--bg-alt);
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--ink-soft);
          transition: all 0.3s;
        }
        .job-stack span:hover {
          background: var(--ink);
          color: var(--bg);
          border-color: var(--ink);
        }

        @media (max-width: 768px) {
          .job {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 3rem 0;
          }
          .job-marker { flex-direction: row; align-items: center; }
          .job-line { display: none; }
          .job-header { flex-direction: column; gap: 1rem; }
          .job-meta { text-align: left; }
        }
      `}</style>
    </PageTransition>
  )
}
