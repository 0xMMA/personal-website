# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is a personal website (michael-martin.dev) built as a SvelteKit frontend:

- **website-ui/**: SvelteKit frontend with Tailwind CSS, built as a static site using `@sveltejs/adapter-static`

The UI follows a component-based layout with main sections:
- Portrait component with personal info
- Start/intro section  
- "The Dev Way" grid section
- Photography and profile pages
- Components are organized in `src/routes/` with shared layout

## Development Setup

### VSCode with Dev Container (Recommended)
1. Open project in VSCode
2. Accept prompt to "Reopen in Container" (uses .devcontainer)
3. Navigate to `website-ui/` folder
4. Run `npm run dev` to start development server
5. Website will be available at http://localhost:5173

### Development Commands (website-ui/)
```bash
cd website-ui
npm run dev          # Start development server (Vite)
npm run build        # Create production build
npm run check        # TypeScript and Svelte checks
npm run lint         # Run ESLint and Prettier checks
npm run format       # Format code with Prettier
```

## Deployment

GitHub Actions workflow automatically deploys to Harbor registry:

- **Trigger**: Push to `main` branch
- **Platform**: linux/amd64 (self-hosted runner)
- **Registry**: Harbor registry
- **Tags**: `website-michael-martin-ui:${{ github.sha }}` and `:latest`
- **Auto-deploy**: Watchtower automatically pulls and deploys latest image

## Key Configuration

- SvelteKit configured for static site generation
- Tailwind CSS for styling with PostCSS plugins (import, nested)
- TypeScript throughout
- ESLint + Prettier for code quality
- Docker-based deployment with automated CI/CD
- Dev container setup for consistent development environment