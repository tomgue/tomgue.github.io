---
isIndex: false
draft: false
title: "Liens (render hook)"
description: "Page de démo du render hook link : liens externes du markdown en nouvel onglet avec title traduit et icône Lucide, icône sur les liens mailto, liens internes et résolution Hugo conservés."
icon: link
---

Cette page illustre le render hook `layouts/_markup/render-link.html` : les **liens externes http(s) écrits en markdown** s'ouvrent dans un nouvel onglet avec un `title` traduit et une **icône Lucide**, et les liens `mailto:` reçoivent une icône — le même rendu que le shortcode `blank_link`, sans écrire de shortcode.

La fonctionnalité est activée sous `links` dans `config/_default/params.yaml`.

## Exemples

### Lien externe

```markdown
Voir [Hugolify](https://www.hugolify.io/)
```

Rendu : Voir [Hugolify](https://www.hugolify.io/)

Nouvel onglet (`target="_blank" rel="noreferrer noopener"`), `title` « Hugolify » - lien externe (clé i18n `link.blank_aria` du thème), icône Lucide `external-link`.

### Lien externe avec un title markdown

```markdown
[Hugolify docs](https://www.hugolify.io/docs/ "Documentation")
```

Rendu : [Hugolify docs](https://www.hugolify.io/docs/ "Documentation")

Le title écrit par l'auteur est **respecté** — il n'est remplacé que s'il est absent. Icône et nouvel onglet s'appliquent quand même.

### URL nue autoconvertie

```markdown
https://www.hugolify.io/docs/sections/
```

Rendu : https://www.hugolify.io/docs/sections/

Les URLs nues converties par linkify passent par le hook : même traitement qu'un lien externe.

### Lien interne

```markdown
[Abréviations](/docs/abreviations/)
```

Rendu : [Abréviations](/docs/abreviations/)

Résolu comme le fait le hook embarqué de Hugo : page, puis ressource de page, puis ressource globale — aucun nouvel onglet, aucune icône, URL pérenne même si le permalien change.

### Lien vers un host du site

```markdown
[Accueil](https://tomgue.github.io/)
```

Rendu : [Accueil](https://tomgue.github.io/)

Les hosts des sites (toutes les langues) sont exclus du nouvel onglet — un lien vers votre propre domaine reste en navigation courante.

### Lien mailto

```markdown
[Écrire](mailto:hi@example.com)
```

Rendu : [Écrire](mailto:hi@example.com)

Pas de nouvel onglet (seuls `http`/`https` sont traités), mais une icône Lucide `mail-plus` est ajoutée après le texte.

### Lien tel

```markdown
[Appeler](tel:+33123456789)
```

Rendu : [Appeler](tel:+33123456789)

Inchangé — `tel:` n'est pas couvert par défaut.

### Lien fragment

```markdown
[Voir les exemples](#exemples)
```

Rendu : [Voir les exemples](#exemples)

Le fragment est recollé au `RelPermalink` de la page courante (comportement du hook embarqué).

## HTML rendu

```html
<!-- externe : title traduit + nouvel onglet + icône -->
<a href="https://www.hugolify.io/" title="« Hugolify » - lien externe" target="_blank" rel="noreferrer noopener">Hugolify <span class="link-icon"><i class="icon icon-external-link" aria-hidden="true"></i></span></a>

<!-- mailto : icône seule, pas de nouvel onglet -->
<a href="mailto:hi@example.com">Écrire <span class="link-icon"><i class="icon icon-mail-plus" aria-hidden="true"></i></span></a>

<!-- interne : inchangé -->
<a href="/docs/abreviations/">Abréviations</a>
```

## Configuration

```yaml
# config/_default/params.yaml
links:
  external:
    enable: true # défaut du thème : false (sortie native inchangée)
    icon: external-link # slug Lucide, false pour désactiver
    # domains: ['www.example.com'] # hosts internes additionnels
  mailto:
    icon: mail-plus # slug Lucide, false pour désactiver
```

Les icônes s'appuient sur l'infrastructure native : `partial "icon"` (module hugolify-theme-icons) rend `<i class="icon icon-…">` et la feuille différée `assets/css/icons.css` n'embarque que les icônes réellement utilisées — **tout slug Lucide fonctionne** (`square-arrow-out-up-right`, `mail`, etc.).

## Récapitulatif

| Cas                            | Résultat                                                          |
| ------------------------------ | ----------------------------------------------------------------- |
| `http(s)` externe              | Nouvel onglet + `rel="noreferrer noopener"` + title traduit + icône `external-link` |
| `http(s)` avec title markdown  | Title de l'auteur conservé (onglet et icône identiques)           |
| URL nue autoconvertie          | Comme un lien externe                                             |
| Interne (page/ressource)       | Résolu, inchangé                                                  |
| Host du site                   | Inchangé                                                          |
| `mailto:`                      | Inchangé + icône `mail-plus`                                       |
| `tel:`                         | Inchangé                                                          |
| `#fragment`                    | Résolu vers la page courante                                      |

## Notes

- **`blank_link` conservé** : les liens inline n'acceptent pas d'attributs markdown — le shortcode reste le seul moyen d'ajouter un `rel` par lien (ex. `rel="me"`) ou de blanchir un lien dans du HTML brut.
- **Résolution interne** : un hook custom remplace le hook embarqué de Hugo — celui-ci réplique sa résolution (page, ressource de page, ressource globale, fragments et query recollés), les liens relatifs des bundles continuent de fonctionner en multilingue.
- **Icônes** : le hook appelle `partial "icon"` derrière `templates.Exists` — sans hugolify-theme-icons, le rendu reste correct (pas d'icône). La taille s'ajuste via `--icon-size` (règle `.link-icon` dans `assets/css/site.css`).
- **Périmètre** : uniquement le markdown de contenu — TOC, footnotes, liens HTML et partials du thème ne passent pas par le hook.
- **Édition** : les liens markdown restent des liens normaux dans l'éditeur riche Sveltia — rien à configurer côté CMS.
