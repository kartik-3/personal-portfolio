# Kartik Sehgal — Portfolio

A personal portfolio built with React, Vite, React Router, and Framer Motion. Designed with an editorial aesthetic — warm cream palette, Fraunces display serif paired with Inter and JetBrains Mono — with motion that's used intentionally rather than decoratively.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── App.jsx                 # Route definitions + AnimatePresence
├── main.jsx                # React entry
├── components/
│   ├── Nav.jsx             # Fixed nav with live CT clock + active-route underline
│   ├── Footer.jsx          # Persistent footer
│   ├── Cursor.jsx          # Custom cursor (desktop only, mix-blend-difference)
│   └── PageTransition.jsx  # Shared motion wrapper for routes
├── pages/
│   ├── Home.jsx            # Hero + skills marquee + selected work
│   ├── About.jsx           # Bio, side panel, skills toolkit
│   ├── Work.jsx            # Full experience timeline
│   └── Contact.jsx         # Contact channels + email CTA
└── styles/
    └── globals.css         # CSS variables, base styles, paper-grain texture
```

## Design rationale

**Aesthetic direction: editorial / refined minimal.** The portfolio reads like a print publication — warm off-white paper (`#f5f1ea`), single accent color (a burnt orange `#c2410c`), and a subtle grain overlay so it never feels sterile.

**Typography.** Three fonts, each doing one job:
- **Fraunces** (variable serif) — display headings, italics for emphasis
- **Inter** — body copy, UI
- **JetBrains Mono** — eyebrows, labels, metadata

**Motion philosophy.** Page transitions, staggered reveals on first paint, scroll-triggered fades for sections. No bouncy spinners, no confetti. A custom cursor, a live clock, an infinite skills marquee, and project cards that subtly inset their padding on hover — these are the small moments that earn the "designed" feeling.

**Color tokens** are all in `src/styles/globals.css` as CSS variables. Change `--accent` once and the whole site adopts a new identity.

## Working with Claude Code

This project is set up to be productive with [Claude Code](https://docs.claude.com/en/docs/claude-code). Suggested first prompts:

- `Read README.md and src/App.jsx, then walk me through the routing structure.`
- `Add a Projects page that pulls from a static array of side projects with screenshots and live links.`
- `Add dark mode — use prefers-color-scheme as the default but let me toggle it from the nav.`
- `Add a /resume route that renders my resume as a printable single-page layout.`
- `Build a contact form on /contact that posts to a Formspree endpoint.`
- `Swap the accent color from burnt orange to forest green and adjust hover states accordingly.`
- `Add a blog section with MDX support.`

Claude Code will pick up the existing patterns — the `PageTransition` wrapper, the `eyebrow` / `display` / `mono` utility classes, and the per-component scoped `<style>` blocks — and extend them consistently.

## Customization checklist

Before you deploy, update:

- [ ] `index.html` — title and meta description
- [ ] `src/components/Nav.jsx` — timezone if not Central Time (`'America/Chicago'`)
- [ ] `src/pages/Home.jsx` — selected projects (currently pulled from your work)
- [ ] `src/pages/Contact.jsx` — confirm contact channels are correct

## Deploy

This is a static SPA — drop the `dist/` folder onto any host:
- **Vercel / Netlify** — connect the repo, framework preset "Vite", done
- **GitHub Pages** — `npm run build`, push `dist/` to a `gh-pages` branch
- **Cloudflare Pages** — same flow as Vercel

For SPAs you need a catch-all redirect to `index.html`. Vercel and Netlify handle this automatically; for others add the appropriate config (`_redirects`, `vercel.json`, etc.).

## License

Personal project — feel free to study the code, but don't redistribute the content.
