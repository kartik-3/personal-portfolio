import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import content from '../content.yaml'

const { about } = content

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function About() {
  return (
    <PageTransition>
      <div className="container about-page">
        <motion.div
          className="about-head"
          initial="hidden" animate="visible" variants={fadeInUp}
        >
          <span className="eyebrow">{about.eyebrow}</span>
          <h1 className="display about-title">
            Engineer focused on <em>backend systems,</em><br />
            data infrastructure, and <em>thoughtful</em><br />
            user-facing software.
          </h1>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-bio"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp} custom={1}
          >
            <p className="lede">{about.bio_lede}</p>
            {about.bio_paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <motion.aside
            className="about-side"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp} custom={2}
          >
            <div className="side-block">
              <p className="mono side-label">Based in</p>
              <p>{about.location}</p>
            </div>
            <div className="side-block">
              <p className="mono side-label">Currently</p>
              <p>{about.currently}</p>
            </div>
            <div className="side-block">
              <p className="mono side-label">Education</p>
              {about.education.map((e, i) => (
                <p key={i} style={i > 0 ? { marginTop: '0.6rem' } : {}}>
                  {e.degree}<br />{e.school} · GPA {e.gpa}
                </p>
              ))}
            </div>
            <div className="side-block">
              <p className="mono side-label">Recognition</p>
              <p>{about.recognition}</p>
            </div>
          </motion.aside>
        </div>

        {/* Skills */}
        <section className="skills">
          <motion.div
            className="skills-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="eyebrow">Toolkit</span>
            <h2 className="display skills-title">What I work with.</h2>
          </motion.div>

          <div className="skills-grid">
            {about.skills.map((group, idx) => (
              <motion.div
                key={group.label}
                className="skill-group"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp} custom={idx}
              >
                <p className="mono skill-label">{group.label}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .about-page { padding-top: 8rem; padding-bottom: 4rem; }
        .about-head { margin-bottom: 5rem; max-width: 60rem; }
        .about-head .eyebrow { display: block; margin-bottom: 1.5rem; }
        .about-title {
          font-size: clamp(2.25rem, 5vw, 4.25rem);
          font-weight: 300;
          line-height: 1.05;
        }
        .about-title em {
          font-style: italic;
          font-weight: 400;
          color: var(--accent);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 5rem;
          padding-top: 4rem;
          border-top: 1px solid var(--line);
          margin-bottom: 8rem;
        }
        .about-bio { display: flex; flex-direction: column; gap: 1.5rem; }
        .about-bio .lede {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 300;
          line-height: 1.4;
          color: var(--ink);
        }
        .about-bio p { font-size: 1rem; color: var(--ink-soft); line-height: 1.7; }

        .about-side {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-left: 2rem;
          border-left: 1px solid var(--line);
        }
        .side-block p:not(.mono) { font-size: 1rem; line-height: 1.5; }
        .side-label { color: var(--accent); margin-bottom: 0.5rem; }

        /* Skills */
        .skills { padding-top: 4rem; border-top: 1px solid var(--line); }
        .skills-head { margin-bottom: 4rem; }
        .skills-head .eyebrow { display: block; margin-bottom: 1rem; }
        .skills-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 300;
          line-height: 1;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem;
        }
        .skill-group {
          padding-top: 1.5rem;
          border-top: 1px solid var(--ink);
        }
        .skill-label { color: var(--accent); margin-bottom: 1.25rem; }
        .skill-group ul { list-style: none; }
        .skill-group li {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 300;
          line-height: 1.4;
          padding: 0.3rem 0;
          transition: transform 0.3s, color 0.3s;
        }
        .skill-group li:hover {
          transform: translateX(8px);
          color: var(--accent);
          font-style: italic;
        }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
          .about-side { padding-left: 0; border-left: none; padding-top: 2rem; border-top: 1px solid var(--line); }
          .skills-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
      `}</style>
    </PageTransition>
  )
}
