# Utkarsh Tiwari – Developer Portfolio

A modern, performance‑focused developer portfolio built with React, TypeScript, Tailwind CSS (v4), and Vite. It features a clean dark aesthetic with subtle teal accents, smooth interactions, responsive navigation (desktop + mobile slide‑in menu), and a data‑driven architecture for easy customization.

---

## ✨ Features

- Hero section with social/email side rails & scroll‑aware sticky navbar (auto hide on scroll down)
- Sections: About, Skills, Experience (tabbed), Featured Projects + Grid, Contact
- Animated splash screen loader with fail‑safe timeout
- Mobile navigation drawer with body scroll lock & focus handling
- Data‑driven content (projects, experience, socials, skills) via a single `siteData` file
- Featured project alternating layout + secondary “Other Projects” cards
- Accessible semantic markup & keyboard‑friendly navigation stubs
- Per‑skill colored hover glows & micro‑interactions
- Framer Motion ready (only a few places used—can be expanded)
- Easy theming through Tailwind + utility classes

---

## 🧱 Tech Stack

| Layer | Stack |
|-------|-------|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v4 (@tailwindcss/vite) |
| Animation | Framer Motion |
| Icons | react-icons |
| Utilities | clsx |

---

## 📂 Project Structure (key parts)

```
src/
  components/        Reusable UI pieces (Navbar, Footer, SplashScreen)
  sections/          Page sections (Hero, About, Skills, Experience, Projects, Contact)
  pages/             Page-level composition (`Landing`)
  data/siteData.tsx  Central content & type definitions (projects, experience, skills, socials)
  assets/            Static asset placeholders / logos
  App.tsx            App shell (splash + layout)
```

---

## 🚀 Getting Started

Clone & install:

```bash
git clone <your-fork-or-repo-url>
cd <project-folder>
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## 🛠 Customization Guide

| What | Where | How |
|------|-------|-----|
| Name / Branding | `Navbar`, `Footer`, `Hero` | Replace text + accent icon |
| Social Links | `src/data/siteData.tsx` | Edit `socials` array |
| Experience | `siteData.tsx` | Update `experience` items + bullets |
| Projects | `siteData.tsx` | Mark `featured: true` for showcase items |
| Skills & Exploring | `About.tsx` + `siteData.tsx` | Adjust arrays / hover styling map |
| Resume | `public/resume.pdf` | Replace file (keep same name) |
| Colors | `tailwind.config.js` or utility classes | Tweak teal brand & backgrounds |
| Splash Timing | `SplashScreen.tsx` | Adjust phase durations / timeout |

Add more sections: create a component in `sections/` and import it in `Landing.tsx`.

---

## 💡 Design Notes

- Avoid heavy background images to keep CLS low.
- Use consistent `scroll-mt-*` on sections so anchor links align below the navbar.
- Mobile nav locks body scroll to prevent layout shift.
- Per‑skill glow effects use utility shadow + color overlays; keep subtle to preserve readability.

---

## ♿ Accessibility (Baseline)

- Semantic landmarks (`nav`, `footer`, `section` with headings)
- Focusable mobile menu trigger
- Color contrast: Teal + dark background meets WCAG for text ≥ 14px (verify if you adjust hues)
- Recommended next steps: add skip link, ARIA labels for experience tabs, focus trap in mobile drawer, reduced motion preference detection.

---

## 📈 Performance Tips

- Lazy‑load large images (currently placeholders) via dynamic imports or `<img loading="lazy"/>`.
- Consider splitting Framer Motion usage if animation bundle grows.
- Deploy behind an edge CDN (Vercel / Netlify auto handles this).

---

## 🚢 Deployment

| Platform | Notes |
|----------|-------|
| Vercel | Easiest: import repo → auto detects Vite → deploy |
| Netlify | Use build command `npm run build` & publish `dist/` |
| GitHub Pages | `npm run build` then push `dist` via action or gh-pages branch |

Environment variables: Not required for static build.

---

## 🧪 Future Enhancements (Ideas)

- Scroll reveal animations (Framer Motion variants per section)
- Light mode toggle or system preference
- Integrated contact form (EmailJS / serverless function)
- Blog / writing section with MDX
- Project image gallery & live previews
- Theme generator (dynamic accent color selection)

---

## 🔐 License

Personal portfolio source – feel free to fork and adapt. Remove my name & content before publishing your own. Add a formal license (e.g., MIT) if you want others to reuse it.

---

## 🙌 Attribution

Inspired by modern minimalist developer portfolio patterns (Brittany Chiang style influences) with custom adjustments.

---

### ✅ Quick Checklist Before Publishing

- [ ] Replace resume PDF
- [ ] Update social links
- [ ] Verify project links (GitHub / live demos)
- [ ] Set proper meta tags / Open Graph in `index.html`
- [ ] Add real project images (optimize & compress)
- [ ] Run `npm run build` and test `dist/` locally

---

Feel free to open an issue or suggest improvements. Happy building!
