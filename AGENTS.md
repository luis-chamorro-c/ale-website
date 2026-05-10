# AGENTS.md

This file is the Codex/GPT equivalent of `CLAUDE.md`. Read it before making changes in this repo.

This is Alejandra Chamorro's portfolio website. It is a static Vite React app written in TypeScript.

## Commands

- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## Implementation Notes

- Match the Figma design closely, but convert generated Tailwind-style Figma output into plain React components and CSS.
- Keep routes static and client-side with `react-router-dom`.
- Use CSS files for styling unless a more specific local pattern is introduced.
- Store Figma-exported assets under `src/assets/` before referencing them in components.
- Keep the `By: Alejandra Chamorro` signature linked to `/`.
- Use `/more`, not `/more-projects`, for the more projects route.
- Do not add Tailwind unless explicitly requested.
- Prefer local downloaded Figma assets over short-lived Figma MCP asset URLs.
- The current homepage uses pointer events only on folder labels because the large overlapping folder images can otherwise block hover/click behavior.
- The homepage title uses `Instrument Serif` from Google Fonts and a slight horizontal scale to keep the Figma-sized display text inside the viewport.

## Current Status

Implemented:

- Vite + React + TypeScript scaffold.
- React Router setup.
- `/` homepage with Figma-style folder navigation.
- `/about` page with local Figma assets and responsive layout.
- Local assets:
  - `src/assets/home/`
  - `src/assets/about/`

Not yet implemented:

- `/cpg`
- `/brand-design`
- `/educational-design`
- `/more`

## Files To Know

- `src/App.tsx`: homepage.
- `src/pages/About.tsx`: About page.
- `src/styles.css`: global styles and page-specific CSS.
- `src/main.tsx`: router setup.

## Design Source

Figma file: `125zQrHAeiGxMVrBCzvsA2`

Known useful nodes already read from Figma before hitting plan limits:

- Homepage desktop: `375:322`
- Homepage mobile: `380:467`
- About page: `12:34`
- Penn Netter Center / educational design: `26:131`

Figma MCP may hit the Starter-plan call limit. If it does, continue from local assets and previously captured context where possible.

Known routes:

- `/` homepage
- `/about`
- `/cpg`
- `/brand-design`
- `/educational-design`
- `/more`

## Route Behavior

- Homepage folder `about` links to `/about`.
- Homepage folder `professional cpg work` links to `/cpg`.
- Homepage folder `case study: brand design` links to `/brand-design`.
- Homepage folder `educational design` links to `/educational-design`.
- Homepage folder `more projects` links to `/more`.
- All `By: Alejandra Chamorro` signatures should link to `/`.
