# Mountain School — CIS Architecture Contest 2026

Marketing site and registration form for the *Mountain School* architecture
contest. Static React + Vite single-page app, fully bilingual (RU / EN).

## Tech stack

- React 19 + Vite 8
- React Hook Form for the registration form
- Framer Motion for subtle entrance animations
- CSS Modules + a small set of CSS variables (`src/styles/variables.css`)
- `mailto:` based form handoff, no backend required

## Requirements

- Node.js 20.19+ (or 22.12+) — required by Vite 8
- npm 10+

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the URL printed by Vite (default: `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Outputs a static bundle to `dist/`. To preview the production build locally:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Registration Form

The form validates the fields in the browser, then opens the visitor's default
email app with a prefilled `mailto:` message addressed to
`hello@mountainschool.kg`.

This keeps the site fully static and avoids storing mail service credentials in
the frontend. The visitor still needs to click **Send** in their email app for
the application to reach the inbox.

## Deploy

The project produces a fully static bundle. Any static host works:

| Host                       | Command / setup                                     |
| -------------------------- | --------------------------------------------------- |
| Netlify / Vercel / Cloudflare Pages | Build command: `npm run build`. Publish dir: `dist`. |
| GitHub Pages               | Push the contents of `dist/` to the `gh-pages` branch (e.g. via `gh-pages` CLI). |
| S3 / object storage        | Upload `dist/*`, serve `index.html` for unknown paths (SPA fallback). |

## Internationalisation

All user-facing strings live in [`src/i18n/translations.js`](src/i18n/translations.js).
The selected language is persisted in `localStorage` under `mountainschool.lang`
and falls back to the browser's `navigator.language` for first-time visitors.

To add a new language:

1. Add its code to `SUPPORTED_LANGS` and a new dictionary in `translations.js`.
2. Add a button entry to `LanguageSwitcher.jsx`.

Form select values (`country`, `course`, `format`) use stable codes that do **not**
change with the active language — the backend always sees `KG`, `solo`, `master`,
etc., regardless of the UI label the user saw.

## Project layout

```
src/
  components/        # UI components, each with its CSS Module
  data/              # Static, language-agnostic data (icons, ids)
  hooks/             # Reusable hooks
  i18n/              # Translations + language context
  styles/            # CSS variables
  index.css          # Global resets + utility classes (.container, .section)
public/
  favicon.svg
```
