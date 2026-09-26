---
isPage: true
draft: false
title: code bloc
---

## Positionnel, comme le shortcode highlight natif

{{< code html >}}
<p>Bonjour</p>
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

{{< code style="github">}}
:root {
  --menu-width: 18rem;
}
{{< /code >}}