---
isIndex: false
draft: false
title: "Titres ancrables et icônes"
description: "Page d'exemple du render hook heading : ancres cliquables sur tous les titres Markdown, avec icône Lucide optionnelle."
---

Cette page illustre le render hook `layouts/_markup/render-heading.html` : chaque titre Markdown (H1 à H6) est rendu comme une ancre cliquable, avec en option une icône Lucide placée devant le texte.

Survolez n'importe quel titre ci-dessous : un marqueur `#` apparaît, et l'URL du navigateur pointe vers la section.

## Un titre simple

Aucune option nécessaire : l'identifiant de l'ancre est généré automatiquement par Hugo (Goldmark), à partir du texte du titre.

## Installation {icon="rocket"}

L'attribut `icon="..."` ajoute une icône devant le titre. Le nom doit être un nom Lucide (`rocket`, `wrench`, `map-pin`, `link`...) : c'est le nom du fichier SVG résolu par le module `hugolify-theme-icons`.

### Niveau 3 {icon="git-branch"}

L'icône fonctionne sur tous les niveaux de titres, pas seulement les H2.

#### Niveau 4 {icon="wrench"}

##### Niveau 5 {icon="settings"}

###### Niveau 6 {icon="hash"}

## Ancre personnalisée {#ancre-personnalisee}

L'attribut `{#id}` remplace l'identifiant généré automatiquement. Utile pour des ancres stables que l'on référence depuis d'autres pages, même si le titre change :

```markdown
## Ancre personnalisée {#ancre-personnalisee}
```

## Classe personnalisée {.demo-heading}

L'attribut `{.ma-classe}` est fusionné avec les classes `heading` et `heading-{n}` (une par niveau) déjà posées par le hook, ce qui permet un styling CSS fin sans toucher aux modules.

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
- **Épaisseur de trait** : les icônes suivent le paramètre site `icons: strokeWidth` du module (défaut Hugolify : 1 ; 1.5 recommandé pour 1 em).
- **Icônes de marque** : réservées aux menus sociaux (`brand:github`) ; pour les titres, utilisez les noms Lucide.
