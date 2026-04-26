import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import content from '../content.yaml'

const { contact, meta } = content

const iconMap = { Mail, Github, Linkedin, MapPin }

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Contact() {
  return (
    <PageTransition>
      <div className="container contact-page">
        <motion.div
          initial="hidden" animate="visible" variants={fade}
          className="contact-head"
        >
          <span className="eyebrow">{contact.eyebrow}</span>
        </motion.div>

        <motion.h1
          initial="hidden" animate="visible" variants={fade} custom={1}
          className="display contact-title"
        >
          Let's build<br />
          <em>something.</em>
        </motion.h1>

        <motion.p
          initial="hidden" animate="visible" variants={fade} custom={2}
          className="contact-lede"
        >
          {contact.lede}
        </motion.p>

        <motion.a
          initial="hidden" animate="visible" variants={fade} custom={3}
          href={`mailto:${meta.email}`}
          className="contact-cta display"
          data-hover
        >
          <span>{meta.email}</span>
          <ArrowUpRight size={48} strokeWidth={1} />
        </motion.a>

        <motion.div
          initial="hidden" animate="visible" variants={fade} custom={4}
          className="channels"
        >
          {contact.channels.map((c) => {
            const Icon = iconMap[c.icon]
            const Tag = c.href ? 'a' : 'div'
            return (
              <Tag
                key={c.label}
                href={c.href || undefined}
                target={c.href?.startsWith('http') ? '_blank' : undefined}
                rel={c.href?.startsWith('http') ? 'noreferrer' : undefined}
                className="channel"
                data-hover={c.href ? '' : undefined}
              >
                <Icon size={18} strokeWidth={1.5} />
                <div className="channel-text">
                  <p className="mono channel-label">{c.label}</p>
                  <p className="channel-value">{c.value}</p>
                </div>
                {c.href && <ArrowUpRight size={14} className="channel-arrow" />}
              </Tag>
            )
          })}
        </motion.div>

        <motion.div
          initial="hidden" animate="visible" variants={fade} custom={5}
          className="contact-footer"
        >
          <p className="mono">Response time: {contact.response_time}</p>
          <p className="mono">Currently in {meta.timezone} timezone</p>
        </motion.div>
      </div>

      <style>{`
        .contact-page { padding-top: 8rem; padding-bottom: 4rem; }
        .contact-head { margin-bottom: 3rem; }
        .contact-title {
          font-size: clamp(3.5rem, 12vw, 11rem);
          font-weight: 300;
          line-height: 0.92;
          letter-spacing: -0.04em;
          margin-bottom: 3rem;
        }
        .contact-title em {
          font-style: italic;
          font-weight: 400;
          color: var(--accent);
        }
        .contact-lede {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.5;
          max-width: 38rem;
          margin-bottom: 4rem;
          color: var(--ink-soft);
        }

        .contact-cta {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 300;
          padding: 1.5rem 0;
          margin-bottom: 6rem;
          border-bottom: 1px solid var(--ink);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .contact-cta:hover {
          color: var(--accent);
          padding-left: 1rem;
          gap: 2.5rem;
        }
        .contact-cta:hover svg { transform: translate(8px, -8px) rotate(0deg); }
        .contact-cta svg {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          transform: rotate(-15deg);
        }

        .channels {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--line);
        }
        .channel {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--paper);
          border: 1px solid var(--line);
          position: relative;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        a.channel:hover {
          border-color: var(--ink);
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 var(--ink);
        }
        .channel-text { flex: 1; }
        .channel-label {
          font-size: 0.65rem;
          color: var(--accent);
          margin-bottom: 0.3rem;
        }
        .channel-value {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 400;
        }
        .channel-arrow {
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0.4;
          transition: opacity 0.3s;
        }
        a.channel:hover .channel-arrow { opacity: 1; color: var(--accent); }

        .contact-footer {
          display: flex;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--line);
        }
        .contact-footer .mono { font-size: 0.7rem; }

        @media (max-width: 768px) {
          .channels { grid-template-columns: 1fr; }
          .contact-footer { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </PageTransition>
  )
}
