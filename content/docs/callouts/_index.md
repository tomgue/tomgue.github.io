---
isIndex: false
draft: false
title: "Callouts (render hook blockquote)"
description: "Page d'exemple du render hook blockquote : callouts façon Obsidian avec la syntaxe > [!NOTE], pliables, titres personnalisés et types configurables."
icon: lightbulb
---

Cette page illustre le render hook `layouts/_markup/render-blockquote.html` : toute blockquote Markdown commençant par un indicateur d'alerte est rendue comme une alerte Hugolify, avec **exactement les mêmes classes** que les shortcodes `alert` et `alert-block` (`.alert`, `.alert-{state}`, `.alert-heading`) — même look, mêmes couleurs, mêmes icônes.

La syntaxe de base (`> [!NOTE]`) est compatible GitHub, Obsidian et Typora. La syntaxe étendue (titre personnalisé, callouts pliables `+`/`-`) est compatible Obsidian.

> [!note]
> Un callout minimal. Sans titre personnalisé, le libellé vient de la clé i18n `callout.note` (ici « Remarque »).

## Les cinq types GitHub

> [!note]
> Information utile, même en lecture rapide.

> [!tip]
> Conseil pour faire mieux, ou plus facilement.

> [!important]
> Information clé pour atteindre son objectif.

> [!warning]
> Information urgente qui demande une attention immédiate.

> [!caution]
> Risques négatifs potentiels d'une action.

## Types et alias Obsidian

Au-delà des cinq types GitHub, les types Obsidian sont mappés sur les états du design system (`info`, `success`, `warning`, `danger`, `secondary`, `neutral`, `primary`…) :

> [!abstract]
> Résumé / TL;DR — alias : `abstract`, `summary`, `tldr`.

> [!info]
> Information.

> [!todo]
> Chose à faire.

> [!success]
> Opération réussie — alias : `success`, `check`, `done`.

> [!question]
> Question — alias : `question`, `help`, `faq`.

> [!failure]
> Échec — alias : `failure`, `fail`, `missing`.

> [!danger]
> Danger / erreur — alias : `danger`, `error`.

> [!bug]
> Bogue.

> [!example]
> Exemple.

> [!quote]
> Citation — alias : `quote`, `cite`.

## Titre personnalisé

```markdown
> [!warning] Attention au gorille dans le couloir
> Le titre se place sur la première ligne, après le type. Le **markdown inline** y est interprété.
```

> [!warning] Attention au gorille dans le couloir
> Le titre se place sur la première ligne, après le type. Le **markdown inline** y est interprété.

## Callout titre seul

```markdown
> [!tip] Astuce du jour
```

> [!tip] Astuce du jour

Sans corps, le callout affiche icône et titre seuls — le même rendu que le shortcode `alert`.

## Callouts pliables

Un `+` après le type rend le callout pliable et ouvert ; un `-` le rend pliable et plié.

```markdown
> [!question]+ Cette FAQ est-elle ouverte par défaut ?
> Oui.

> [!faq]- Et celle-ci ?
> Non.
```

> [!question]+ Cette FAQ est-elle ouverte par défaut ?
> Oui — le signe `+` affiche le callout déplié.

> [!faq]- Et celle-ci ?
> Non — le signe `-` affiche le callout plié. Cliquez sur le titre pour déplier : listes, code et liens y fonctionnent.

## Corps Markdown complet

> [!example] Tout passe dans le corps
> Paragraphes, **gras**, listes :
>
> - premier élément
> - deuxième élément
>
> Un bloc de code :
>
> ```html
> <p>Les blocs de code fonctionnent dans un callout.</p>
> ```
>
> Et un [lien externe](https://www.hugolify.io) vers hugolify.io.

## Callouts imbriqués

```markdown
> [!question] Les callouts peuvent-ils être imbriqués ?
> > [!todo] Oui — un callout dans un callout.
```

> [!question] Les callouts peuvent-ils être imbriqués ?
> > [!todo] Oui — un callout dans un callout, par récursivité du hook.

## Attributs par bloc

Les attributs de bloc Goldmark surchargent l'état et l'icône d'un callout précis. Ils se placent sur la ligne suivant le callout :

```markdown
> [!note]
> Un callout « note » relooké.
{state="primary" icon="sparkles"}
```

> [!note]
> Un callout « note » relooké : l'attribut `state` force la couleur, `icon` l'icône Lucide.
{state="primary" icon="sparkles"}

## Types inconnus et personnalisés

> [!maintenance]
> Type inconnu non configuré : rendu discret `neutral`, avec le type humanisé pour titre.

> [!release]
> Type personnalisé déclaré dans `params.yaml` (`callouts.types.release`) : état `success`, icône `rocket`.

## Blockquote classique

> Une blockquote sans indicateur `[!type]` reste inchangée — rendu CommonMark standard.

## Configuration

`config/_default/params.yaml` :

```yaml
callouts:
  enable: true
  icons: true # Icônes Lucide par type
  types: # Types personnalisés : état et icône par type
    release:
      state: success
      icon: rocket
```

`config/_default/hugo.yaml` (attributs de bloc, pour les surcharges par callout) :

```yaml
markup:
  goldmark:
    parser:
      attribute:
        block: true
```

`i18n/fr.yml` (libellés par défaut, utilisés sans titre personnalisé) :

```yaml
callout:
  note: Remarque
  tip: Astuce
  warning: Avertissement
  # …
```

## Récapitulatif

| Syntaxe | Effet |
| --- | --- |
| `> [!note]` | Callout « note » (info) |
| `> [!warning] Titre` | Titre personnalisé (markdown inline) |
| `> [!tip] Titre seul` | Callout sans corps |
| `> [!faq]+ Titre` | Pliable, ouvert |
| `> [!faq]- Titre` | Pliable, plié |
| `{state="primary" icon="sparkles"}` sous un callout | Attributs par bloc |
| `> [!release]` | Type personnalisé via `callouts.types` |
| `> texte` | Blockquote classique, inchangée |

## Notes

- **Compatibilité GitHub** : la syntaxe de base (5 types) s'affiche comme des callouts sur GitHub ; la syntaxe étendue (titre, `+`/`-`) n'est pas comprise par GitHub, qui rend une citation simple.
- **Opt-in** : côté amont Hugolify, `callouts.enable` vaut `false` par défaut — un site qui n'active rien garde le rendu Hugo standard.
- **Shortcodes conservés** : `alert` et `alert-block` fonctionnent à l'identique ; le partial `commons/alert.html` est étendu de façon rétrocompatible.
- **CMS** : les callouts sont du Markdown pur — aucune inscription Sveltia/Decap nécessaire, le contenu round-trip sans perte.
- **Accessibilité** : les callouts pliables utilisent `<details>`/`<summary>` natifs — cliquables au clavier, sans JavaScript.
- **Icônes** : n'importe quel slug Lucide (résolu par `hugolify-theme-icons`) ; `icons: false` les désactive globalement, `{icon=false}` par bloc.
