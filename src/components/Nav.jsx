import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import content from '../content.yaml'

const { meta } = content

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Chicago',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
      setTime(now)
    }
    update()
    const interval = setInterval(update, 30000)
    return () => clearInterval(interval)
  }, [])

  const links = [
    { to: '/', label: 'Home', num: '01' },
    { to: '/about', label: 'About', num: '02' },
    { to: '/work', label: 'Work', num: '03' },
    { to: '/contact', label: 'Contact', num: '04' }
  ]

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav-inner">
        <Link to="/" className="logo">
          <span className="logo-mark display">k.</span>
          <span className="logo-text">
            <span>{meta.name}</span>
            <span className="mono">{meta.role_short} / {meta.location}</span>
          </span>
        </Link>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                <span className="num mono">{link.num}</span>
                <span className="label">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-meta mono">
          <span className="dot" />
          <span>{time} CT</span>
        </div>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.5rem 0;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          background: transparent;
        }
        .nav-scrolled {
          background: rgba(245, 241, 234, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
          padding: 1rem 0;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .logo-mark {
          font-size: 2rem;
          color: var(--ink);
          line-height: 0.8;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .logo-text .mono {
          font-size: 0.65rem;
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.5rem;
        }
        .nav-links a {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
          font-size: 0.95rem;
          position: relative;
          transition: opacity 0.3s;
        }
        .nav-links a .num {
          font-size: 0.65rem;
          opacity: 0.5;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 1px;
          background: var(--ink);
          transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-links a:hover::after,
        .nav-links a.active::after { width: 100%; }
        .nav-links a.active { font-weight: 500; }

        .nav-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .nav-links { gap: 1.25rem; }
          .nav-links a .num { display: none; }
          .nav-meta, .logo-text { display: none; }
        }
      `}</style>
    </motion.nav>
  )
}
