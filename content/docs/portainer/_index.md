---
isIndex: false
draft: false
title: Portainer
description: Interface web d'administration de l'environnement Docker.
icon: brand:portainer
---

{{< badge text="Production" state="success" >}}
{{< badge text="Auto-hébergé" state="primary" >}}
{{< badge text="CE" state="secondary" >}}
{{< badge text="Manuel" state="warning" >}}

[![Docker pulls](https://img.shields.io/docker/pulls/portainer/portainer-ce?style=flat-square&logo=docker&label=pulls)](https://hub.docker.com/r/portainer/portainer-ce)
[![Version](https://img.shields.io/docker/v/portainer/portainer-ce/lts?sort=semver&style=flat-square)](https://hub.docker.com/r/portainer/portainer-ce)
[![Image size](https://img.shields.io/docker/image-size/portainer/portainer-ce/lts?style=flat-square&label=image)](https://hub.docker.com/r/portainer/portainer-ce)
[![Dernier commit](https://img.shields.io/github/last-commit/portainer/portainer?style=flat-square&logo=github)](https://github.com/portainer/portainer)

## {{< icon icon="info" >}} En bref

Portainer CE est l'interface web qui me sert à superviser et dépanner l'hôte Docker : conteneurs, images, volumes, réseaux et stacks Compose depuis le navigateur, avec la console et les logs en direct.

Il n'est \*\*pas\*\* la source de vérité : chaque service vit dans son \`docker-compose.yml\` sur le disque. Portainer sert à observer, redémarrer, explorer — pas à créer.

| | |
|---|---|
| \*\*Image\*\* | \`portainer/portainer-ce:lts\` |
| \*\*Hôte\*\* | \`srv-01\` |
| \*\*Accès\*\* | \`https://portainer.example.com\` (via reverse proxy) |
| \*\*Ports exposés\*\* | aucun en direct — \`9443\` interne uniquement |
| \*\*Réseau Docker\*\* | \`proxy\` (externe) |
| \*\*Emplacement\*\* | \`/srv/docker/portainer/\` |
| \*\*Politique de restart\*\* | \`unless-stopped\` |
| \*\*Mise à jour\*\* | manuelle (lire le changelog avant) |
| \*\*RAM au repos\*\* | \~50 Mo |

## {{< icon icon="container" >}} Déploiement

Arborescence sur l'hôte :

\`\`\`text
/srv/docker/portainer/
└── docker-compose.yml
\`\`\`

\`docker-compose.yml\` :

\`\`\`yaml
services:
  portainer:
    image: portainer/portainer-ce:lts
    container_name: portainer
    restart: unless-stopped
    security_opt:
      - no-new-privileges:true
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - portainer_data:/data
    networks:
      - proxy

networks:
  proxy:
    external: true

volumes:
  portainer_data:
\`\`\`

Pas de fichier \`.env\` : Portainer ne prend pas de variable d'environnement obligatoire.

{{< details summary="Premier lancement — le piège des 5 minutes" >}}

Le compte admin doit être créé \*\*dans les 5 minutes\*\* qui suivent le démarrage du
conteneur, sinon le service se coupe de lui-même. Si c'est arrivé, un simple
redémarrage du conteneur rouvre la fenêtre :

\`\`\`bash
docker compose restart portainer
\`\`\`

Ouvrir \`https://portainer.example.com\` immédiatement après le \`up -d\` et créer
l'utilisateur admin.

{{< /details >}}

## {{< icon icon="settings" >}} Configuration

### Fonctionnement

- Connexion au démon Docker via le socket monté (\`/var/run/docker.sock\`)
- UI en HTTPS sur le port \`9443\` interne — certificat géré par le reverse proxy
- Le port \`8000\` (tunnel Edge Agent) n'est \*\*pas\*\* ouvert : pas d'agents Edge prévus

### Reverse proxy

Sous-domaine \`portainer.example.com\` → conteneur sur le réseau \`proxy\`, port interne \`9443\`. \*\*Activer le support WebSockets dans la config du proxy\*\*, sinon la console des conteneurs ne fonctionne pas.

## {{< icon icon="database-backup" >}} Sauvegardes

- \*\*À sauvegarder\*\* : le volume nommé \`portainer_data\` (base BoltDB : utilisateurs, endpoints, réglages)
- \*\*Méthode\*\* : \`docker run --rm -v portainer_data:/data -v /srv/backups:/backup alpine tar czf /backup/portainer-data.tar.gz -C /data .\` chaque soir
- \*\*Rétention\*\* : 30 jours
- Perdre Portainer ne fait perdre \*\*aucun\*\* service en cours — seulement la supervision

## {{< icon icon="wrench" >}} Maintenance

### Commandes utiles

\`\`\`bash
docker compose ps
docker compose logs -f --tail=100
\`\`\`

### Mise à jour

1. Lire les notes de version ([releases GitHub](https://github.com/portainer/portainer/releases))
2. \`docker compose pull && docker compose up -d\`
3. Vérifier la connexion à l'environnement local (socket)

### Restauration

1. Arrêter : \`docker compose down\`
2. Restaurer le volume depuis la sauvegarde (\`tar xzf\` dans \`/data\`)
3. Relancer : \`docker compose up -d\`

## {{< icon icon="triangle-alert" >}} Points d'attention

{{< alert text="Le socket Docker monté dans le conteneur donne un accès équivalent root à l'hôte : exposer Portainer uniquement via le reverse proxy, jamais en direct sur Internet, et avec un mot de passe admin costaud." state="danger" >}}

- Ne pas activer Watchtower sur Portainer : mise à jour manuelle uniquement, après lecture du changelog
- Le montage \`:ro\` du socket est une hygiène, pas une barrière — la vraie protection est l'absence d'exposition directe
- Si l'instance se coupe seule juste après installation : c'est le timeout des 5 minutes, redémarrer le conteneur

## {{< icon icon="link" >}} Ressources

- {{< icon icon="brand:docker" >}} [Image Docker Hub](https://hub.docker.com/r/portainer/portainer-ce)
- {{< icon icon="brand:github" >}} [Dépôt GitHub](https://github.com/portainer/portainer)
- {{< icon icon="book-open" >}} [Documentation officielle](https://docs.portainer.io/)
- {{< icon icon="book-open" >}} [Guide d'installation Docker (Linux)](https://docs.portainer.io/start/install-ce/server/docker/linux)
