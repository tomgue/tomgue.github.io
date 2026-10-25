---
isIndex: false
draft: false
title: "Liens (render hook)"
description: "Page de démo du render hook link : les liens externes du markdown s'ouvrent dans un nouvel onglet avec un title traduit, miroir du shortcode blank_link — liens internes et résolution Hugo conservés."
icon: link
---

Cette page illustre le render hook `layouts/_markup/render-link.html` : les **liens externes http(s) écrits en markdown** s'ouvrent dans un nouvel onglet avec un `title` traduit — le même rendu que le shortcode `blank_link`, sans écrire de shortcode.

La fonctionnalité est activée sous `links.external` dans `config/_default/params.yaml`.

## Exemples

### Lien externe

```markdown
Voir [Hugolify](https://www.hugolify.io/)
```

Rendu : Voir [Hugolify](https://www.hugolify.io/)

Le lien s'ouvre dans un nouvel onglet (`target="_blank" rel="noreferrer noopener"`) et son `title` vaut « Hugolify » - lien externe (clé i18n `link.blank_aria` du thème).

### Lien externe avec un title markdown

```markdown
[Hugolify docs](https://www.hugolify.io/docs/ "Documentation")
```

Rendu : [Hugolify docs](https://www.hugolify.io/docs/ "Documentation")

Le title écrit par l'auteur est **respecté** — il n'est remplacé que s'il est absent.

### Lien interne

```markdown
[Abréviations](/docs/abreviations/)
```

Rendu : [Abréviations](/docs/abreviations/)

Résolu comme le fait le hook embarqué de Hugo : page, puis ressource de page, puis ressource globale — aucun nouvel onglet, URL pérenne même si le permalien change.

### Lien vers un host du site

```markdown
[Accueil](https://tomgue.github.io/)
```

Rendu : [Accueil](https://tomgue.github.io/)

Les hosts des sites (toutes les langues) sont exclus du nouvel onglet — un lien vers votre propre domaine reste en navigation courante.

### Lien email

```markdown
[Écrire](mailto:hi@example.com)
```

Rendu : [Écrire](mailto:hi@example.com)

Seuls les schémas `http`/`https` sont traités — `mailto:`, `tel:`, etc. restent inchangés.

### Lien fragment

```markdown
[Voir les exemples](#exemples)
```

Rendu : [Voir les exemples](#exemples)

Le fragment est recollé au `RelPermalink` de la page courante (comportement du hook embarqué).

## HTML rendu

```html
<!-- externe -->
<a href="https://www.hugolify.io/" title="« Hugolify » - lien externe" target="_blank" rel="noreferrer noopener">Hugolify</a>

<!-- interne, inchangé -->
<a href="/docs/abreviations/">Abréviations</a>
```

## Configuration

```yaml
# config/_default/params.yaml
links:
  external:
    enable: true # défaut du thème : false (sortie native inchangée)
    # domains: ['www.example.com'] # hosts internes additionnels
```

## Récapitulatif

| Cas                                    | Résultat                                              |
| -------------------------------------- | ----------------------------------------------------- |
| `http(s)` externe                     | Nouvel onglet + `rel="noreferrer noopener"` + title traduit |
| `http(s)` avec title markdown         | Title de l'auteur conservé                            |
| Interne (page/ressource)               | Résolu, inchangé                                      |
| Host du site                           | Inchangé                                              |
| `mailto:` / `tel:`                   | Inchangés                                             |
| `#fragment`                           | Résolu vers la page courante                          |

## Notes

- **`blank_link` conservé** : les liens inline n'acceptent pas d'attributs markdown — le shortcode reste le seul moyen d'ajouter un `rel` par lien (ex. `rel="me"`) ou de blanchir un lien dans du HTML brut.
- **Résolution interne** : un hook custom remplace le hook embarqué de Hugo — celui-ci réplique sa résolution (page, ressource de page, ressource globale, fragments et query recollés), les liens relatifs des bundles continuent de fonctionner en multilingue.
- **Périmètre** : uniquement le markdown de contenu — TOC, footnotes, liens HTML et partials du thème ne passent pas par le hook.
- **Édition** : les liens markdown restent des liens normaux dans l'éditeur riche Sveltia — rien à configurer côté CMS.
