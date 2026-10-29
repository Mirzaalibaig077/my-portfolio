# Mirza M. Ali — Personal Portfolio

A fast, responsive, single-page personal portfolio built with Vite + React + Tailwind CSS. Inspired by the clean, profile-first layout of the Hugo Academic CV theme — rebuilt from scratch in React (no Hugo, no copied theme code).

## Tech stack

- **Vite + React** (JavaScript)
- **Tailwind CSS** (dark mode via the `class` strategy)
- **lucide-react** for icons
- **framer-motion** for subtle scroll/fade-in animations (respects `prefers-reduced-motion`)

No backend, no router, no database. A static single-page site with smooth-scroll anchor navigation.

## Quick start

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
├── index.html
├── tailwind.config.js        # accent color tokens, fonts, dark mode
├── postcss.config.js
├── vite.config.js            # base path + vendor chunk splitting
├── public/                   # static assets (photo, CV, project images)
└── src/
    ├── main.jsx
    ├── App.jsx               # composes all sections in order
    ├── index.css             # Tailwind directives, theme variables, base styles
    ├── data/
    │   └── portfolio.js      # ← THE ONLY FILE YOU EDIT FOR CONTENT
    ├── hooks/
    │   ├── useTheme.js        # dark/light theme + localStorage persistence
    │   └── useActiveSection.js # scrollspy for the navbar active link
    └── components/           # one component per file
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── ThemeToggle.jsx
        └── SectionHeading.jsx
```

## Editing content — `src/data/portfolio.js`

All personal content lives in this one file as a single exported object. Components read from it and contain **no hardcoded personal text** — edit only this file to update the site.

- `meta` — name, title, location, email, phone, `showPhone`, socials, tagline, `photo`, `resume`.
- `about` — `summary` paragraph and `interests` list.
- `experience` — array of `{ role, company, location, dates, projects[] }`; each project has `{ name, bullets[] }`.
- `skills` — array of `{ category, items[] }` rendered as chips (no bars).
- `projects` — array of `{ title, description, impact, tech[], githubUrl, liveUrl, image }`. Leave `githubUrl` / `liveUrl` as empty strings to hide those buttons.
- `education` — `{ degree, institution, location, dates }`.

**Asset paths are relative (no leading slash)** — e.g. `photo: 'profile.jpg'`. Components prepend `import.meta.env.BASE_URL` automatically, so the same paths work on Vercel/Netlify (root) and GitHub Pages (subpath).

### Show / hide the phone number

In `portfolio.js`:

```js
meta: { ..., showPhone: false } // set to true to show your phone in Contact
```

## Replacing the profile photo

1. Drop your image into `public/` (e.g. `public/Profile.jpg`).
2. In `portfolio.js` set `meta.photo` to the exact filename, including capitalization.

The current profile photo is `public/Profile.jpg`. If the photo file fails to load, the Hero automatically shows an initials avatar.

## Replacing the CV

Replace `public/Mirza_Ali_Resume.pdf` with your real PDF (keep the same filename, or rename it and update `meta.resume` in `portfolio.js`). The "Download CV" button in the navbar links here.

## Replacing project screenshots

Replace `public/project-guidely.svg`, `public/project-ai-talk.svg`, `public/project-exertio.svg` with your images (any format), and update each project's `image` field in `portfolio.js`. The SVG files are placeholders.

## Adding project links

In `portfolio.js`, set `githubUrl` and/or `liveUrl` for each project. An empty string hides that button. External links open in a new tab with `rel="noopener noreferrer"`.

## Changing the accent color

The accent is **indigo**, defined in two places:

1. **`src/index.css`** — the CSS variable `--accent-rgb` (used for accent text, borders, tints and focus rings). There is one value for light mode and one for dark mode (a lighter shade for contrast on dark backgrounds). Values are space-separated RGB.

   ```css
   :root { --accent-rgb: 79 70 229; }    /* indigo-600 (light) */
   .dark  { --accent-rgb: 129 140 248; } /* indigo-400 (dark)  */
   ```

2. **`tailwind.config.js`** — `accent.600` and `accent.700` are the **solid button** background and hover color. Update these to match.

Example — switch to blue:

```css
:root { --accent-rgb: 37 99 235; }   /* blue-600 (light) */
.dark  { --accent-rgb: 96 165 250; } /* blue-400 (dark)  */
```

```js
// tailwind.config.js
accent: { 600: '#2563eb', 700: '#1d4ed8', /* ... */ }
```

## Dark mode

- Defaults to the visitor's **system preference** (`prefers-color-scheme`).
- The navbar toggle overrides it and persists the choice in `localStorage` (with a safe fallback if storage is unavailable).
- A small inline script in `index.html` applies the theme before paint to avoid a flash of the wrong theme.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`) and a single `h1` (Hero), one `h2` per section, `h3` per card.
- Icon-only buttons/links have `aria-label`s; the mobile menu button reports `aria-expanded` / `aria-controls`.
- Visible focus rings; external links use `target="_blank" rel="noopener noreferrer"`.
- Animations respect `prefers-reduced-motion` (content stays fully visible; no motion).

## Deploying

### Vercel (recommended)
1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** the repo. The framework preset is auto-detected as **Vite**.
3. Build command: `npm run build` · Output directory: `dist`.
4. Deploy. No extra config needed.

Or with the CLI:

```bash
npm i -g vercel
vercel
```

### Netlify
- Build command: `npm run build` · Publish directory: `dist`.

### GitHub Pages (project site, e.g. `user.github.io/<repo>`)
Vite needs the correct base path so assets resolve under the subpath:

```bash
BASE_PATH=/your-repo/ npm run build
```

Then deploy the generated `dist/` folder (a `.nojekyll` file is included so GitHub serves the assets correctly). You can do this with a GitHub Actions workflow that builds and publishes `dist` to the `gh-pages` branch, or via the Pages settings.

## TODO list

- [ ] Replace `public/profile.svg` with your real photo (update `meta.photo`).
- [ ] Replace `public/Mirza_Ali_Resume.pdf` with your real CV.
- [ ] Replace `public/project-guidely.svg` with a real screenshot.
- [ ] Replace `public/project-ai-talk.svg` with a real screenshot.
- [ ] Replace `public/project-exertio.svg` with a real screenshot.
- [ ] Fill in `githubUrl` / `liveUrl` for each project in `src/data/portfolio.js` (currently empty).
- [ ] Set `meta.showPhone = true` in `src/data/portfolio.js` if you want your phone number shown in Contact.

## License

Personal portfolio template — free to adapt for your own use.
