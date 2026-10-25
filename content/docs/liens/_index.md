---
isIndex: false
draft: false
title: "Liens (render hook)"
description: "Page de démo du render hook link : liens externes du markdown en nouvel onglet avec title traduit et icône native du design system, icônes Lucide sur les liens mailto et tel, liens internes et résolution Hugo conservés."
icon: link
---

Cette page illustre le render hook `layouts/_markup/render-link.html` : les **liens externes http(s) écrits en markdown** s'ouvrent dans un nouvel onglet avec un `title` traduit — le même rendu que le shortcode `blank_link`, sans écrire de shortcode — et les liens `mailto:` et `tel:` reçoivent une icône Lucide (`mail-plus`, `phone`).

La fonctionnalité est activée sous `links` dans `config/_default/params.yaml`.

## Exemples

### Lien externe

```markdown
Voir [Hugolify](https://www.hugolify.io/)
```

Rendu : Voir [Hugolify](https://www.hugolify.io/)

Nouvel onglet (`target="_blank" rel="noreferrer noopener"`), `title` « Hugolify » - lien externe (clé i18n `link.blank_aria` du thème). L'icône affichée après le texte est **native** : le design system l'ajoute en CSS (`a[target="_blank"]::after`) sur tout lien ouvrant un nouvel onglet — shortcode, navigation ou hook.

### Lien externe avec un title markdown

```markdown
[Hugolify docs](https://www.hugolify.io/docs/ "Documentation")
```

Rendu : [Hugolify docs](https://www.hugolify.io/docs/ "Documentation")

Le title écrit par l'auteur est **respecté** — il n'est remplacé que s'il est absent. Le nouvel onglet (et son icône native) s'appliquent quand même.

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

### Lien externe contenant une image

```markdown
[![Dernier commit](https://img.shields.io/github/last-commit/portainer/portainer?style=flat-square&logo=github)](https://github.com/portainer/portainer)
```

Rendu : [![Dernier commit](https://img.shields.io/github/last-commit/portainer/portainer?style=flat-square&logo=github)](https://github.com/portainer/portainer)

Nouvel onglet, mais pas d'icône externe : collée à une image, l'icône native se détacherait du contenu. Une règle site (`a[target="_blank"]:has(img)::after { content: none; }`, `assets/css/site.css`) la masque — elle vaut pour tout lien blank du site, shortcode ou hook (`:has()` : tous les navigateurs modernes).

### Lien mailto

```markdown
[Écrire](mailto:hi@example.com)
```

Rendu : [Écrire](mailto:hi@example.com)

Pas de nouvel onglet (seuls `http`/`https` sont traités) ni d'icône CSS native (pas de `target="_blank"`) : c'est le hook qui ajoute l'icône Lucide `mail-plus` après le texte.

### Lien tel

```markdown
[Appeler](tel:+33123456789)
```

Rendu : [Appeler](tel:+33123456789)

Pas de nouvel onglet (seuls `http`/`https` sont traités) ni d'icône CSS native (pas de `target="_blank"`) : le hook ajoute l'icône Lucide `phone` après le texte, comme pour `mailto:`.

### Lien fragment

```markdown
[Voir les exemples](#exemples)
```

Rendu : [Voir les exemples](#exemples)

Le fragment est recollé au `RelPermalink` de la page courante (comportement du hook embarqué).

## HTML rendu

```html
<!-- externe : title traduit + nouvel onglet ; l'icône vient du design
     system (a[target="_blank"]::after), pas du hook -->
<a href="https://www.hugolify.io/" title="« Hugolify » - lien externe" target="_blank" rel="noreferrer noopener">Hugolify</a>

<!-- mailto : icône émise par le hook, pas de nouvel onglet -->
<a href="mailto:hi@example.com">Écrire <span class="link-icon"><i class="icon icon-mail-plus" aria-hidden="true"></i></span></a>

<!-- tel : icône émise par le hook, pas de nouvel onglet -->
<a href="tel:+33123456789">Appeler <span class="link-icon"><i class="icon icon-phone" aria-hidden="true"></i></span></a>

<!-- interne : inchangé -->
<a href="/docs/abreviations/">Abréviations</a>
```

## Configuration

```yaml
# config/_default/params.yaml
links:
  external:
    enable: true # défaut du thème : false (sortie native inchangée)
    # domains: ['www.example.com'] # hosts internes additionnels
  mailto:
    icon: mail-plus # slug Lucide, false pour désactiver
  tel:
    icon: phone # slug Lucide, false pour désactiver
```

Pas de clé d'icône pour les liens externes : elle serait redondante — le design system décore déjà tout `a[target="_blank"]` (même icône pour `blank_link`, la navigation et le hook, aucune double icône possible).

Les icônes mailto et tel s'appuient sur l'infrastructure native : `partial "icon"` (module hugolify-theme-icons) rend `<i class="icon icon-…">` et la feuille différée `assets/css/icons.css` n'embarque que les icônes réellement utilisées — **tout slug Lucide fonctionne** (`mail`, etc.).

## Récapitulatif

| Cas                            | Résultat                                                          |
| ------------------------------ | ----------------------------------------------------------------- |
| `http(s)` externe              | Nouvel onglet + `rel="noreferrer noopener"` + title traduit + icône native (CSS) |
| `http(s)` avec title markdown  | Title de l'auteur conservé (onglet et icône identiques)           |
| URL nue autoconvertie          | Comme un lien externe                                             |
| Interne (page/ressource)       | Résolu, inchangé                                                  |
| Host du site                   | Inchangé                                                          |
| Externe avec image (badge)     | Nouvel onglet, pas d'icône (règle site `:has(img)`)        |
| `mailto:`                      | Inchangé + icône `mail-plus` (émise par le hook)                  |
| `tel:`                         | Inchangé + icône `phone` (émise par le hook)                      |
| `#fragment`                    | Résolu vers la page courante                                      |

## Notes

- **`blank_link` conservé** : les liens inline n'acceptent pas d'attributs markdown — le shortcode reste le seul moyen d'ajouter un `rel` par lien (ex. `rel="me"`) ou de blanchir un lien dans du HTML brut.
- **Résolution interne** : un hook custom remplace le hook embarqué de Hugo — celui-ci réplique sa résolution (page, ressource de page, ressource globale, fragments et query recollés), les liens relatifs des bundles continuent de fonctionner en multilingue.
- **Icône externe native** : le design system ajoute déjà une icône à tout lien `target="_blank"` (`a[target="_blank"]::after`, `css/base/link.css` — cf. [la doc de `blank_link`](https://www.hugolify.io/docs/shortcodes/blank_link/)). Le hook n'émet donc **aucune icône pour les liens externes** (sinon double icône) ; seuls `mailto:` et `tel:`, sans `target`, reçoivent une icône du hook. Exception : sur les liens contenant une image, une règle site (`a[target="_blank"]:has(img)::after`) masque l'icône native, qui se détacherait de l'image.
- **Icônes mailto et tel** : le hook appelle `partial "icon"` derrière `templates.Exists` — sans hugolify-theme-icons, le rendu reste correct (pas d'icône). La taille s'ajuste via `--icon-size` (règle `.link-icon` dans `assets/css/site.css`).
- **Périmètre** : uniquement le markdown de contenu — TOC, footnotes, liens HTML et partials du thème ne passent pas par le hook.
- **Édition** : les liens markdown restent des liens normaux dans l'éditeur riche Sveltia — rien à configurer côté CMS.
