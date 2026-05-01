# Bhupinder Kumar — Developer Portfolio

A modern, premium single-page portfolio built with **Next.js**, **React**, and **Tailwind CSS**. Dark-first UI with teal accents, soft gradients, glass-style elevated surfaces, and scroll-driven reveals—optimized for readability and a strong first impression.

---

## Features

- **Modern UI** — Dark theme with subtle gradients, elevated cards, and refined borders (light mode supported via `prefers-color-scheme`)
- **Smooth scroll reveal** — Sections fade/slide in using `IntersectionObserver` and CSS transitions (`Reveal`)
- **Fully responsive** — Mobile-first layout; hero split-column, timeline experience, and fluid typography
- **Hero highlights** — Intro, CTAs, resume download, contact row with flag-aware phone links, optional hero portrait
- **Rich experience cards** — Timeline layout, company logos, and nested project blocks where applicable
- **Skills workspace** — Grouped “Tools & languages” grids with brand icons (Simple Icons CDN + fallbacks)
- **Single-page flow** — Navbar anchor links with scroll offset; footer contact strip
- **Polished interactions** — Hover states, subtle shadows, `next/image` for optimised assets

---

## Sections

| Section | What it includes |
|--------|-------------------|
| **Navbar** | Fixed nav, section links, scroll-mt alignment |
| **Hero** | Name, role, tagline, CTAs, email/phones/location, socials, hero image |
| **About** | Story paragraphs + profile photo slot |
| **Experience** | Timeline jobs, logos, achievements & project bullets |
| **Skills** | Categorized skill groups with icon cells |
| **Projects** | Featured work cards with links |
| **Education** | Degree / school card with optional university image |
| **Footer** | Contact CTA, email, phones, copyright |

---

## Tech stack

| Layer | Choice |
|--------|--------|
| **Framework** | [Next.js](https://nextjs.org) 16 (App Router) |
| **UI** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Icons** | Custom SVG icons + [Lucide](https://lucide.dev) fallbacks |
| **Content** | Centralised in `src/data/resume.ts` |
| **Language** | TypeScript |

---

## Prerequisites

- **Node.js** 18.x or newer (20+ recommended for Next 16)
- **npm**, **pnpm**, or **yarn**

---

## Getting started

From the `site` directory:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Run production server (after build)
npm run lint    # ESLint
```

---

## Project structure

```text
site/
├── public/                 # Static assets (hero, about photo, logos, favicon, …)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, fonts, metadata
│   │   ├── page.tsx        # Composes all sections
│   │   └── globals.css     # Theme tokens, utilities, animations
│   ├── components/         # UI sections & shared pieces
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Reveal.tsx
│   │   └── …
│   ├── data/
│   │   └── resume.ts       # Personal copy, jobs, skills, projects, education
│   └── lib/                # Skill icons, flags, helpers
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── next.config.ts
```

---

## Customisation

- **Copy & roles** — Edit `src/data/resume.ts` (`personal`, `about`, `experience`, `skillGroups`, `projects`, `education`).
- **Images** — Place files under `public/` and reference paths like `/hero.jpg`, `/about-photo.jpg`, or set `logoSrc` on experience entries.
- **Resume download** — Set `resumeDownloadUrl` in `personal` when you host a PDF (or wire `DownloadResumeButton` to your file).

---

Built with care using **Next.js**, **React**, and **Tailwind CSS**.
