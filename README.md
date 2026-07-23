# TBD.ai — AI Consulting Site

Marketing site for TBD.ai, an AI-consulting studio. Five pages, each a
self-contained static page with a full-bleed background video, glassmorphic
navigation, and page-specific motion.

Implemented from a Claude Design project (`.dc.html` components converted to
vanilla HTML/CSS/JS).

## Pages
- `index.html` — Homepage (mouse-scrub video, typewriter intro, action pills)
- `capabilities.html` — What we build (join-the-list form)
- `method.html` — How we work (fade in/out video loop)
- `pricing.html` — Pricing framing (retro pager animation)
- `contact.html` — Contact (mouse-parallax video, mailto CTAs)

Shared: `site.css` / `site.js` (responsive hamburger nav), `videos/` (assets).

## Run locally
```bash
python3 -m http.server 8777
# open http://localhost:8777/
```
