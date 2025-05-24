# Website michael-martin.dev
- credentials im tresor

# Develop
- GitHub repo: github.com/0xMMA/Website
 - using codespaces / devcontainer
 - built with svelte & Tailwind
 - deployed with docker
 - made with love

## VSCode Development Setup
1. Open project in VSCode
2. Accept prompt to "Reopen in Container" (uses .devcontainer)
3. Navigate to `website-ui/` folder
4. Run `npm run dev` to start development server
5. Website will be available at http://localhost:5173

## 'website-ui' 
- npm run dev                                   //startet dev server
- npm run build                                 //erstellt einen prod build

### build & deployment
Deployment is automated via GitHub Actions:

1. **Automatic Deployment**: Push to `main` branch triggers automated build and deployment
2. **Multi-platform Build**: Creates Docker images for both amd64 and arm64 architectures
3. **Versioning**: Tags images with both git SHA (`${{ github.sha }}`) and `latest`
4. **Auto-deploy**: Watchtower automatically pulls and deploys the latest image

**Manual Deployment** (if needed):
1. docker build -t mm-website-ui:1.                // tag/latest ersetzt durch aufsteigende Nummer (aktuell 1)
1. docker tag mm-website-ui 0xmma/mm-website-ui:1  // tag version ersetzen
1. docker login -u 0xmma                           // fragt nach passwort -> accesstoken von dockerhub -> im tresor
1. docker push 0xmma/mm-website-ui:1               // tag version ersetzen

## 'website-backend'
- azure functions
- noch nicht funktional