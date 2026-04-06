# Nick Ranz — Portfolio

Personal portfolio site built with React and Vite. Showcases my experience, skills, and projects as a full-stack software developer.

## Stack

- **React** + **Vite**
- **React Router** — client-side routing
- **Ant Design** — UI component library
- **CSS** — custom design system (no Tailwind), following a "No-Line" tonal layering philosophy

## Features

- Hero section with headshot, years of experience, and intro
- Experience timeline with support for multi-project roles (e.g. FedTec)
- Skills matrix broken down by category (Languages, Frameworks, Cloud/DevOps, etc.)
- Contact page with information registry and message form
- Contact modal accessible from the hero section
- Resume viewer modal with PDF preview and download
- Pac-Man easter egg

## Project Structure

```
src/
├── assets/          # Static files (headshot, resume PDF)
├── components/      # Reusable UI components
├── pages/           # Route-level page components
├── constants.js     # All content data (experience, skills, contact links, projects)
└── App.jsx          # Root layout and routes
```

## Content Updates

All personal data lives in `src/constants.js`. To update experience, skills, contact info, or projects — edit that file only.

## Built With AI

This project was designed and developed with the assistance of:

- **[Claude Code](https://claude.ai/code)** (Anthropic) — AI coding assistant used throughout development for component building, refactoring, and architecture decisions
- **[Google Stitch](https://stitch.withgoogle.com)** — Used for UI/UX design mockups and design system generation

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
