# Weather App

A React + Vite weather app built step-by-step as a learning project.

See @README.md for setup and @SPEC.md for the full project plan.

## Commands

- Install deps: `npm install`
- Run dev server: `npm run dev` (opens at http://localhost:5173)
- Build for prod: `npm run build`
- Preview prod build: `npm run preview`

## Architecture

- `index.html` — single HTML file; React mounts into `<div id="root">`
- `src/main.jsx` — entry point; boots React
- `src/App.jsx` — root component; holds top-level layout and state
- `src/components/` — one file per UI component (created in Step 2+)

## Code style

- Use `.jsx` extension for all React component files
- Component names are PascalCase (`WeatherCard.jsx`)
- One component per file

## Workflow

- Build features one step at a time per SPEC.md
- Run `npm run dev` to test changes in the browser before marking a step done

## Design System

No design system yet — DESIGN.md will be added before Step 5 (Polish).
Until then: functional styles only, no pixel-perfect decisions needed.

## Gotchas

- API keys go in `.env.local` (format: `VITE_API_KEY=...`) — never commit them
- Vite exposes env vars to the browser only if they start with `VITE_`
- `npm run dev` must be running for hot-reload to work
