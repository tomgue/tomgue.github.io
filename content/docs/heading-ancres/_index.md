---
isIndex: false
draft: false
title: "Titres ancrables et icônes (render hook)"
description: "Page d'exemple du render hook heading : ancres cliquables sur tous les titres Markdown, avec icône Lucide optionnelle."
icon: heading
---

Cette page illustre le render hook `layouts/_markup/render-heading.html` : chaque titre Markdown (H1 à H6) est rendu comme une ancre cliquable, avec en option une icône Lucide placée **devant le texte du titre**.

Survolez n'importe quel titre ci-dessous : un marqueur `#` apparaît, et l'URL du navigateur pointe vers la section.

## Un titre simple

Aucune option nécessaire : l'identifiant de l'ancre est généré automatiquement par Hugo (Goldmark), à partir du texte du titre.

## Installation {icon="rocket"}

L'attribut `icon="..."` ajoute une icône devant le titre. Le nom doit être un nom Lucide (`rocket`, `wrench`, `map-pin`, `link`...) : c'est le nom du fichier SVG résolu par le module `hugolify-theme-icons`.

L'icône est dimensionnée en `em` (voir `assets/css/theme.css`) : elle grandit avec le titre — grande sur un H2, plus petite sur un H4, sans aucune règle par niveau.

### Niveau 3 {icon="git-branch"}

L'icône fonctionne sur tous les niveaux de titres, pas seulement les H2. Remarquez que l'icône de ce H3 est plus petite que celle du H2 ci-dessus.

#### Niveau 4 {icon="wrench"}

##### Niveau 5 {icon="settings"}

###### Niveau 6 {icon="hash"}

## Ancre personnalisée {#ancre-personnalisee}

L'attribut `{#id}` remplace l'identifiant généré automatiquement. Utile pour des ancres stables que l'on référence depuis d'autres pages, même si le titre change :

```markdown
## Ancre personnalisée {#ancre-personnalisee}
```

## Classe personnalisée {.demo-heading}

L'attribut `{.ma-classe}` est fusionné avec les classes `anchor-heading` et `anchor-heading-{n}` (une par niveau) posées par le hook. Le préfixe `anchor-heading` évite toute collision avec le composant `.heading` du design system Hugolify (bloc d'en-tête de section).

## Toutes les options combinées {#toutes-options icon="sparkles" .demo-heading}

Tout peut être combiné dans un seul bloc d'attributs :

```markdown
## Toutes les options combinées {#toutes-options icon="sparkles" .demo-heading}
```

## Récapitulatif

| Syntaxe                             | Effet                                            |
| ----------------------------------- | ------------------------------------------------ |
| `## Titre`                          | Ancre avec `id` généré automatiquement           |
| `## Titre {icon="rocket"}`           | Icône Lucide devant le titre                     |
| `## Titre {#mon-ancre}`             | Identifiant d'ancre personnalisé                |
| `## Titre {.ma-classe}`             | Classe CSS supplémentaire                       |
| `## Titre {#id icon="rocket" .c}`   | Tout combiné                                    |

## Notes

- **Accessibilité** : l'icône est décorative (`aria-hidden="true"`) ; le lien d'ancre porte un `aria-label` explicite (`Lien vers cette section : {titre}`).
- **Sans le module d'icônes** : le hook garde l'appel avec `templates.Exists "partials/icon.html"` ; si `hugolify-theme-icons` n'est pas importé, les titres s'affichent normalement, sans icône.
- **Taille de l'icône** : `--icon-size: 0.9em` sur `.anchor-heading-icon .icon` (`assets/css/theme.css`) — ajustable en un seul endroit, toutes les icônes suivent.
- **Épaisseur de trait** : réglable via `icons: strokeWidth` dans `config/_default/params.yaml` (défaut Hugolify : 1). Attention : à 0.9em, un trait de 1 rend environ 0.6px à 16px — 1.5 est plus sûr pour les icônes de titres.
- **Icônes de marque** : réservées aux menus sociaux (`brand:github`) ; pour les titres, utilisez les noms Lucide.
