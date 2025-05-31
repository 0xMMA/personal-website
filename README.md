# Personal Website [michael-martin.dev](https://michael-martin.dev)

Personal website built with SvelteKit and Tailwind CSS, deployed via Docker.

## Development Setup

### VSCode with Dev Container (Recommended)
1. Open project in VSCode
2. Accept prompt to "Reopen in Container" (uses .devcontainer)
3. Navigate to `website-ui/` folder
4. Run `npm run dev` to start development server
5. Website will be available at http://localhost:5173

### Development Commands
```bash
cd website-ui
npm run dev          # Start development server
npm run build        # Create production build
npm run check        # TypeScript and Svelte checks
npm run lint         # Run ESLint and Prettier checks
npm run format       # Format code with Prettier
```

## Deployment

Deployment is automated via GitHub Actions:

- **Trigger**: Push to `main` branch
- **Platform**: linux/amd64 (self-hosted runner)
- **Registry**: Harbor registry
- **Tags**: `website-michael-martin-ui:${{ github.sha }}` and `:latest`
- **Auto-deploy**: Watchtower automatically pulls and deploys latest image

## Tech Stack

- **Frontend**: SvelteKit with TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Deployment**: Docker + Harbor registry
- **CI/CD**: GitHub Actions with self-hosted runner
- **Development**: Dev container setup
