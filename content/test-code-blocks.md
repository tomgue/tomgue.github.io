---
title: Test blocs de code
description: Options des blocs de code — titre, icône du langage, bouton copier.
build:
  list: never
---

Page de test des options des blocs de code, ajoutées par le render hook `layouts/_markup/render-codeblock.html`.

## 1. Titre / nom de fichier

```html {title="index.html"}
<p>Hello World</p>
```

## 2. Icône du langage (mapping auto)

```js {icon}
console.log('Hello');
```

## 3. Bouton copier

```bash {copy}
echo "Hello World"
```

## 4. Tout combiné

```scss {title="styles.scss" icon copy}
body {
  color: rebeccapurple;
}
```

## 5. Sans option (rendu Hugo par défaut)

```html
<p>Hello World</p>
```

## 6. Icône explicite (Simple Icons)

```text {icon="hugo"}
content/
layouts/
```

## 7. Langage non mappé (pas d’icône)

```zig {icon}
const std = @import("std");
```

## 8. Opt-out explicite du bouton copier

```js {copy=false}
console.log('pas de bouton copier');
```
