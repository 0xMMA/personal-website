# Website michael-martin.dev
- credentials im tresor

# Develop
- GitHub repo: github.com/0xMMA/Website
 - using codespaces / devcontainer
 - built with svelte & Tailwind
 - deployed with docker
 - made with love

## 'website-ui' 
- npm run dev                                   //startet dev server
- npm run build                                 //erstellt einen prod build

### build & deployment
1. docker build -t mm-website-ui:1.                // tag/latest ersetzt durch aufsteigende Nummer (aktuell 1)

1. docker tag mm-website-ui 0xmma/mm-website-ui:1  // tag version ersetzen

1. docker login -u 0xmma                           // fragt nach passwort -> accesstoken von dockerhub -> im tresor

1. docker push 0xmma/mm-website-ui:1               // tag version ersetzen

1. portainer  
    1. login zvaris server       
    
    1. stack website-mm stoppen     
    1. images 0xmma/mm-website-ui:1 löschen
    1. neues image pullen
    1. stack image version updaten
    1. starten

## 'website-backend'
- azure functions
- noch nicht funktional