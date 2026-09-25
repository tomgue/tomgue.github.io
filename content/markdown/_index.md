---
isPage: true
draft: false
title: Markdown
---

# Icons
{{< fa size="3x" icon="camera" style="duotone" base="solid" >}}
{{< fa icon="user" style="duotone" base="solid" >}}

## Icônes de base

{{< fa icon="user" >}} <!-- fa-solid fa-user -->
{{< fa icon="user" style="regular" >}} <!-- fa-regular fa-user -->
{{< fa icon="user" style="light" >}} <!-- fa-light fa-user -->
{{< fa icon="user" style="thin" >}} <!-- fa-thin fa-user -->
{{< fa icon="github" style="brands" >}} <!-- fa-brands fa-github -->

## Tailles

{{< fa icon="user" size="xs" >}} <!-- fa-user fa-xs -->
{{< fa icon="user" size="lg" >}} <!-- fa-user fa-lg -->
{{< fa icon="user" size="2x" >}} <!-- fa-user fa-2x -->
{{< fa icon="user" size="10x" >}} <!-- fa-user fa-10x -->
{{< fa icon="user" fixed-width="true" >}} <!-- fa-user fa-fw -->

## Animations (FA6 + FA7)

{{< fa icon="spinner" spin="true" >}} <!-- fa-spinner fa-spin -->
{{< fa icon="spinner" pulse="true" >}} <!-- fa-spinner fa-pulse -->
{{< fa icon="spinner" beat="true" >}} <!-- fa-spinner fa-beat (FA7) -->
{{< fa icon="circle" fade="true" >}} <!-- fa-circle fa-fade (FA7) -->
{{< fa icon="bounce" bounce="true" >}} <!-- fa-bounce fa-bounce (FA7) -->

## Duotone (exigent le paramètre 'base')

{{< fa icon="user" style="duotone" size="2x" base="regular" >}} <!-- fa-duotone fa-regular fa-user -->
{{< fa icon="user" style="duotone" size="2x" base="light" >}} <!-- fa-duotone fa-light fa-user -->
{{< fa icon="user" style="duotone" size="2x" base="solid" >}} <!-- fa-duotone fa-solid fa-user -->
{{< fa icon="user" style="duotone" size="2x" base="thin" >}} <!-- fa-duotone fa-thin fa-user -->

## Sharp

{{< fa icon="user" style="sharp" size="2x" base="solid" >}} <!-- fa-sharp fa-solid fa-user -->
{{< fa icon="user" style="sharp" size="2x" base="regular" >}} <!-- fa-sharp fa-regular fa-user -->

## Sharp-duotone

{{< fa icon="user" style="sharp-duotone" base="solid" >}} <!-- fa-sharp-duotone fa-solid fa-user -->
{{< fa icon="user" style="sharp-duotone" base="regular" >}}<!-- fa-sharp-duotone fa-regular fa-user -->

## Transformations

{{< fa icon="user" flip="horizontal" >}} <!-- fa-user fa-flip-horizontal -->
{{< fa icon="user" flip="vertical" >}} <!-- fa-user fa-flip-vertical -->
{{< fa icon="user" flip="both" >}} <!-- fa-user fa-flip-both -->
{{< fa icon="user" rotate="45" >}} <!-- fa-user fa-rotate-45 -->
{{< fa icon="user" rotate="180" >}} <!-- fa-user fa-rotate-180 -->

## Autres options utiles

{{< fa icon="user" border="true" >}} <!-- fa-user fa-border -->
{{< fa icon="user" pull="left" >}} <!-- fa-user fa-pull-left -->
{{< fa icon="user" pull="right" >}} <!-- fa-user fa-pull-right -->
{{< fa icon="user" list="true" >}} <!-- fa-user fa-li (pour les listes) -->
{{< fa icon="user" inverse="true" >}} <!-- fa-user fa-inverse (clair sur fond sombre) -->
{{< fa icon="user" class="text-red-500" >}} <!-- fa-user avec classe CSS personnalisée -->
{{< fa icon="user" title="Mon profil utilisateur" >}} <!-- avec tooltip et aria-label -->

## Combinaisons avancées

{{< fa icon="spinner" style="solid" size="3x" spin="true" pulse="true" border="true" >}}
<!-- fa-spinner fa-3x fa-spin fa-pulse fa-border -->

{{< fa icon="user" style="duotone" base="solid" size="2x" flip="horizontal" rotate="90" class="text-blue-600" >}}
<!-- fa-duotone fa-solid fa-user fa-2x fa-flip-horizontal fa-rotate-90 text-blue-600 -->

---

Testing Font Awesome 7 shortcode:

Solid user icon: {{< fa icon="user" >}}

Regular user icon: {{< fa icon="user" style="regular" >}}

Light user icon with size: {{< fa icon="user" style="light" size="2x" >}}

Spinner with spin: {{< fa icon="spinner" spin="true" >}}

Duotone user: {{< fa icon="user" style="duotone" base="solid" >}}

Sharp user: {{< fa icon="user" style="sharp" base="solid" >}}

GitHub brand: {{< fa icon="github" style="brands" >}}

User with beat animation (FA7): {{< fa icon="user" style="solid" beat="true" >}}

User with bounce animation (FA7): {{< fa icon="user" style="solid" bounce="true" >}}

User with border: {{< fa icon="user" style="solid" border="true" >}}

User pulled left: {{< fa icon="user" style="solid" pull="left" >}}

User rotated 45 degrees: {{< fa icon="user" style="solid" rotate="45" >}}

User flipped horizontally: {{< fa icon="user" style="solid" flip="horizontal" >}}

User with title: {{< fa icon="user" style="solid" title="Mon utilisateur" >}}

List item icon:

## Mes 5 réalisations cette semaine

1. {{< fa icon="trophy" style="solid" list="true" >}} Objectif mensuel atteint
2. {{< fa icon="code" style="solid" list="true" >}} Nouvelle fonctionnalité déployée
3. {{< fa icon="users" style="solid" list="true" >}} Équipe agrandie de 3 personnes
4. {{< fa icon="chart-line" style="solid" list="true" >}} Performance en hausse de 25%
5. {{< fa icon="heart" style="regular" list="true" >}} Feedback client exceptionnel

Inverse style (for dark backgrounds): {{< fa icon="user" style="solid" inverse="true" >}}

Custom class: {{< fa icon="user" style="solid" class="text-blue-500" >}}

Combined: {{< fa icon="spinner" style="solid" size="2x" spin="true" pulse="true" border="true" class="text-red-600" >}}
---

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
58. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```plain
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg 'The Dojocat'

## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H\~2\~O

### [ins](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [mark](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

: Definition 1
with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
\~ Definition 1

Term 2
\~ Definition 2a
\~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
_here be dragons_
:::
