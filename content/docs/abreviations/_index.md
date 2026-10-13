---
isIndex: false
draft: false
title: "Abréviations (shortcode abbr)"
description: "Page d'exemple du shortcode abbr : abréviations sémantiques avec définition au survol, depuis un title inline ou le fichier data/abbr/fr.yaml."
icon: type
---

Cette page illustre le shortcode `abbr` (`layouts/_shortcodes/abbr.html`) : il balise une abréviation en HTML sémantique (`<abbr>`) et affiche sa définition au survol, sans écrire le HTML à la main.

Survolez les exemples ci-dessous : le curseur affiche le `title` de chaque abréviation, avec le soulignement pointillé natif du navigateur.

## Avec un title inline

Pour une définition ponctuelle :

```markdown
Le {{< abbr text="CSS" title="Cascading Style Sheets" >}} met en forme la page.
```

Rendu : Le {{< abbr text="CSS" title="Cascading Style Sheets" >}} met en forme la page.

## Via le fichier de données

Les définitions récurrentes sont centralisées dans `data/abbr/fr.yaml` :

```yaml
abbreviations:
  - abbr: CSS
    title: Cascading Style Sheets
  - abbr: HTML
    title: HyperText Markup Language
```

Le même appel, sans `title` : Hugo cherche la définition dans ce fichier.

```markdown
Le {{< abbr text="HTML" >}} structure le document.
```

Rendu : Le {{< abbr text="HTML" >}} structure le document.

La correspondance est insensible à la casse et la forme affichée est celle de l'entrée du fichier :

```markdown
Le {{< abbr text="css" >}}, saisi en minuscules dans l'appel.
```

Rendu : Le {{< abbr text="css" >}}, saisi en minuscules — affiché « CSS », la forme canonique du fichier data.

## Abréviation d'une autre langue

L'option `lang` ajoute l'attribut HTML correspondant — utile pour la prononciation par les lecteurs d'écran :

```markdown
En allemand : {{< abbr text="z. B." title="zum Beispiel" lang="de" >}}
```

Rendu : En allemand : {{< abbr text="z. B." title="zum Beispiel" lang="de" >}}

## Ordre de résolution

1. `title` inline — prioritaire ;
2. fichier `data/abbr/{lang}.yaml` — première entrée dont le champ `abbr` correspond (insensible à la casse) ; la forme affichée est celle de l'entrée (`abbr`) ;
3. aucune définition — `<abbr>` sans `title`, et un warning au build : `shortcode abbr: no title found for "…"`.

## HTML rendu

```html
<abbr title="Cascading Style Sheets">CSS</abbr>
```

## Édition dans Sveltia

Le fichier `data/abbr/fr.yaml` est éditable dans le CMS : collection **config** → entrée **Abréviations**. Chaque entrée de la liste porte deux champs : `abbr` et `title`.

## Récapitulatif

| Syntaxe                                | Résultat                        |
| -------------------------------------- | ------------------------------- |
| `{{< abbr text="CSS" >}}`              | Title depuis `data/abbr/fr.yaml` |
| `{{< abbr text="CSS" title="…" >}}`    | Title inline, prioritaire        |
| `{{< abbr text="z. B." lang="de" … >}}` | Attribut `lang` optionnel       |
| `{{< abbr text="XYZ" >}}`              | Sans title + warning au build    |

## Notes

- **Accessibilité** : le `title` d'un `<abbr>` n'apparaît ni au clavier ni au tactile — pour un public large, développez la première occurrence en toutes lettres ; la balise garde sa valeur sémantique.
- **Casse** : la correspondance est insensible à la casse (`css` trouve `CSS`) ; la forme affichée est celle de l'entrée du fichier (`abbr`), pas du texte tapé — les abréviations à casse mixte (`JavaScript`, `OAuth`) restent correctes.
- **Doublons** : en cas d'entrées en double dans le fichier, la première correspondance l'emporte.
- **Styling** : le design system v2 n'a pas de règle `abbr` — rendu natif navigateur (soulignement pointillé), surchargeable dans `assets/css/theme.css`.
- **Multilingue** : une entrée data par langue (`data/abbr/en.yaml`, etc.), résolue via `site.Language.Lang`.
