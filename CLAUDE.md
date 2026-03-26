# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is a personal website (michael-martin.dev) built as a SvelteKit frontend, served via Nginx in Docker.

- **website-ui/**: SvelteKit 2 frontend with Svelte 4, Tailwind CSS 3, and TypeScript, built as a static site using `@sveltejs/adapter-static`

### Routes

- `/` — Home page: Start intro section, Portrait, TheDevWay grid (8 developer values)
- `/profile/` — Professional profile with skills, certifications, and daily tools
- `/photography/` — Photo gallery (placeholder with sample data)

### Component Organization

Components are co-located in `src/routes/` (no separate components directory):
- `start.svelte` — Intro with LinkedIn/GitHub links
- `portrait.svelte` — Portrait image
- `theDevWay.svelte` — 8-item value grid using `$lib/shard.svelte` cards
- `etcPrinciple.svelte` — ETC principle section (6 cards, also uses `$lib/shard.svelte`)
- `left.svelte` — Legacy sidebar (unused, kept for reference)
- `right.svelte` — Legacy sidebar (unused, kept for reference)

Shared library (`src/lib/`):
- `shard.svelte` — Reusable card component (title + content slot)

### Styling

- Tailwind CSS with PostCSS plugins: `postcss-nested`, `tailwindcss`, `autoprefixer`
- Global CSS variables defined in `src/app.pcss` (dark background `#131516`, foreground `rgb(200, 195, 188)`)
- **Color scheme**: dark/neutral with orange accent `rgb(249, 115, 22)` used sparingly (section separators, name highlight). UI is mostly grayscale — avoid introducing blue, purple, or other saturated colors.
- Card/section headers use soft gray `rgb(209, 213, 219)` — not bright white
- Tech tags, tool lists, etc. use neutral `bg-gray-700/30 text-gray-300`
- Inline SVG icons (Font Awesome)

## Development Setup

### Dev Container (Recommended)
1. Open project in VSCode
2. Accept prompt to "Reopen in Container" (uses `.devcontainer/`)
3. Navigate to `website-ui/`
4. Run `npm run dev` — available at http://localhost:5173

Note: Vite uses file polling (250ms) for dev container compatibility. Dev server binds to `0.0.0.0`.

### Commands (run from `website-ui/`)
```bash
npm run dev            # Start dev server (Vite)
npm run build          # Production build (static output to build/)
npm run preview        # Preview production build
npm run check          # TypeScript and Svelte checks (svelte-check)
npm run check:watch    # Watch mode for checks
npm run lint           # Prettier + ESLint checks
npm run format         # Auto-format with Prettier
```

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`:

1. Builds multi-stage Docker image (node:18-alpine → nginx:alpine)
2. Pushes to Harbor registry with tags: `website-michael-martin-ui:{sha}` and `:latest`
3. Triggers Watchtower to auto-pull and deploy the latest image
4. Runs on self-hosted runner (`zvaris`, linux/amd64)

Nginx serves static files with SPA routing (`try_files $uri $uri/ /index.html`).

## Workflow

- **At the start of a new session**, always offer to start the dev server (`npm run dev -- --host` from `website-ui/`) so the user can review changes live before pushing. Run it in the background.
- **Before pushing**, confirm with the user that they've reviewed the changes in the browser.

## Verification

You are not done until you have verified your changes work. Always run `npm run check` from `website-ui/` after making changes to catch compilation and type errors before presenting work as complete.

## Key Configuration

- **Static site**: `adapter-static` with `200.html` fallback, SSR disabled, prerender enabled
- **TypeScript**: Strict mode, bundler module resolution
- **Linting**: ESLint (TypeScript + Svelte) + Prettier (tabs, single quotes, no trailing commas, 100 width)
- **Node**: `engine-strict=true` in `.npmrc`
- **Dependabot**: Configured for weekly devcontainer updates
