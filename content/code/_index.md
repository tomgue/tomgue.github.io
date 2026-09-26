---
isPage: true
draft: false
title: code bloc
---

## Positionnel, comme le shortcode highlight natif

{{< code html >}}
<p>Bonjour</p>
{{< /code >}}

{{< code lang="html" title="index.html" style="nord" >}}
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>
<body>
  ...
  <!-- Le reste du contenu -->
  ...
</body>
</html>
{{< /code >}}

## Avec options highlight natives + options maison

{{< code lang="go" title="main.go" hl_lines="2 3" >}}
package main

func main() {
    println("Hello")
}
{{< /code >}}

## Icône personnalisée, sans bouton copier

{{< code lang="yaml" icon="fa-solid fa-gears" copy=false >}}
server:
  port: 8080
{{< /code >}}

## Avec style Github

{{< code lang="css" style="github">}}
:root {
  --menu-width: 18rem;
}
{{< /code >}}