import { Link } from 'react-router-dom'
import content from '../content.yaml'

const { footer, meta } = content

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-block">
            <p className="mono footer-label">Currently</p>
            <p>{footer.currently}</p>
          </div>
          <div className="footer-block">
            <p className="mono footer-label">Elsewhere</p>
            <ul className="footer-links">
              <li><a href={meta.github_url} target="_blank" rel="noreferrer">GitHub ↗</a></li>
              <li><a href={meta.linkedin_url} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
              <li><a href={`mailto:${meta.email}`}>Email ↗</a></li>
            </ul>
          </div>
          <div className="footer-block">
            <p className="mono footer-label">Navigate</p>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-block footer-mark">
            <span className="display footer-k">k.</span>
          </div>
        </div>

        <div className="footer-bottom mono">
          <span>© {new Date().getFullYear()} {meta.name} — All rights reserved</span>
          <span>{footer.built_by}</span>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 6rem 0 2rem;
          border-top: 1px solid var(--line);
          margin-top: 6rem;
          position: relative;
          z-index: 2;
          background: var(--bg-alt);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-label {
          margin-bottom: 1rem;
          color: var(--accent);
        }
        .footer-block p {
          font-family: var(--font-display);
          font-size: 1.25rem;
          line-height: 1.4;
          font-weight: 300;
        }
        .footer-block strong {
          font-weight: 500;
          font-style: italic;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .footer-links a {
          font-size: 0.95rem;
          transition: color 0.3s;
        }
        .footer-links a:hover { color: var(--accent); }

        .footer-mark {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }
        .footer-k {
          font-size: 8rem;
          line-height: 0.7;
          color: var(--ink);
          font-weight: 300;
          font-style: italic;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--line);
          font-size: 0.7rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-mark { display: none; }
          .footer-bottom { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </footer>
  )
}
