# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is a personal website (michael-martin.dev) with two main components:

- **website-ui/**: SvelteKit frontend with Tailwind CSS, built as a static site using `@sveltejs/adapter-static`
- **website-backend/**: Azure Functions backend (.NET 6) - currently non-functional per README

The UI follows a component-based layout with main sections:
- Portrait component with personal info
- Start/intro section  
- "The Dev Way" grid section
- Components are organized in `src/routes/` with shared layout

## Development Commands

### Frontend (website-ui/)
```bash
cd website-ui
npm run dev          # Start development server
npm run build        # Create production build
npm run check        # TypeScript and Svelte checks
npm run lint         # Run ESLint and Prettier checks
npm run format       # Format code with Prettier
```

### Root Level
```bash
npm run dev          # Starts both rollup watch and SWA with backend
```

## Docker Deployment

The project uses Docker for deployment with a specific workflow:

1. Build: `docker build -t mm-website-ui:1 .`
2. Tag: `docker tag mm-website-ui 0xmma/mm-website-ui:1`
3. Push to DockerHub: `docker push 0xmma/mm-website-ui:1`
4. Deploy via Portainer on remote server

The website-ui includes nginx.conf for static file serving in production.

## Key Configuration

- SvelteKit configured for static site generation
- Tailwind CSS for styling with PostCSS plugins (import, nested)
- TypeScript throughout
- ESLint + Prettier for code quality