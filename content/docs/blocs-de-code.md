---
isIndex: false
draft: false
title: "Blocs de code : titre, icône et bouton copier"
description: "Page d'exemple du render hook codeblock : titre ou nom de fichier, icône du langage et bouton « copier le code » sur les blocs de code Markdown."
---

Cette page illustre le render hook `layouts/_markup/render-codeblock.html` : chaque bloc de code fenced Markdown peut afficher un en-tête avec un titre ou un nom de fichier, l'icône de son langage et un bouton « copier le code ». Les options se passent dans l'info string du bloc, sans shortcode.

## Titre / nom de fichier

L'attribut `title="..."` affiche un en-tête avec un titre ou un nom de fichier :

```html {title="index.html"}
<p>Hello World</p>
```

## Icône du langage (mapping auto)

L'attribut `icon=true` affiche l'icône du langage du bloc, résolue par le partial `layouts/_partials/func/GetCodeIcon.html` (slugs Simple Icons, alias inclus) :

```js {icon=true}
console.log('Hello');
```

## Bouton copier

L'attribut `copy=true` ajoute un bouton « copier le code », avec un retour visuel de 2 s à la copie :

```bash {copy=true}
echo "Hello World"
```

## Tout combiné

```scss {title="styles.scss" icon=true copy=true}
body {
  color: rebeccapurple;
}
```

## Sans option (rendu Hugo par défaut)

Un bloc sans option passe par `transform.HighlightCodeBlock` : rendu strictement identique à celui de Hugo, aucune régression.

```html
<p>Hello World</p>
```

## Icône explicite (Simple Icons)

L'attribut `icon="..."` force une icône donnée (slug Simple Icons) — utile pour un langage non mappé ou pour le texte brut :

```text {icon="hugo"}
content/
layouts/
```

## Langage non mappé (pas d'icône)

Un langage absent du mapping n'affiche pas d'icône (`zig` ici) :

```zig {icon=true}
const std = @import("std");
```

## Opt-out explicite

`copy=false` (resp. `icon=false`) désactive l'option même si elle est activée globalement dans la configuration du site :

```js {copy=false}
console.log('pas de bouton copier');
```

## Récapitulatif

| Syntaxe                  | Effet                                     |
| ------------------------ | ----------------------------------------- |
| `{title="index.html"}`   | En-tête avec titre / nom de fichier       |
| `{icon=true}`            | Icône du langage (mapping auto)           |
| `{icon="python"}`        | Icône explicite (slug Simple Icons)       |
| `{icon=false}`           | Désactive l'icône                          |
| `{copy=true}`            | Bouton « copier le code »                 |
| `{copy=false}`           | Désactive le bouton copier                 |

## Notes

- **Défauts globaux** : `params.code.copy` et `params.code.icon` (`config/_default/params.yaml`) activent les options pour tout le site ; l'info string du bloc gagne toujours.
- **Syntaxe** : un attribut sans valeur (`{icon}`, `{copy}`) est invalide pour le parseur d'attributs Markdown (Goldmark) — toujours écrire `icon=true` / `copy=true`.
- **Langages non reconnus par Chroma** (drupal, flutter, mongodb…) : rendus en texte brut, mais l'icône du mapping s'affiche ; une icône explicite (`{icon="drupal"}`) reste la solution la plus propre.
- **Accessibilité** : vrai `<button>` avec `aria-label` basculé vers « Code copié » pendant 2 s, fallback `execCommand` pour les contextes non sécurisés.
- **Icônes du bouton** : Lucide `copy` / `check`, émises via le partial `icon` du module `hugolify-theme-icons` ; sans ce module, le bouton reste fonctionnel avec son libellé texte.

## Icônes — un exemple par langage du mapping

Un bloc pour chaque langage mappé dans `layouts/_partials/func/GetCodeIcon.html`, dans l'ordre du mapping, alias inclus (`js` et `javascript` partagent la même icône). Les langages non reconnus par Chroma sont rendus en texte brut — l'icône du mapping s'affiche quand même.

```angular {icon=true}
<button [disabled]="isLoading">Valider</button>
```

```astro {icon=true}
---
layout: ../layouts/Base.astro
---
<h1>Bonjour</h1>
```

```bash {icon=true}
echo "Hello World"
```

```bootstrap {icon=true}
<button class="btn btn-primary">Valider</button>
```

```css {icon=true}
.title { color: rebeccapurple; }
```

```dart {icon=true}
void main() { print('Bonjour'); }
```

```docker {icon=true}
FROM alpine:3
RUN apk add curl
```

```dockerfile {icon=true}
FROM node:20-alpine
COPY . .
RUN npm ci
```

```drupal {icon=true}
function demo_form_alter(&$form, $form_state) {
  $form['#validate'][] = 'demo_validate';
}
```

```elixir {icon=true}
def hello, do: IO.puts("Bonjour")
```

```elm {icon=true}
main =
  text "Bonjour"
```

```erlang {icon=true}
hello() ->
  io:format("Bonjour~n").
```

```flutter {icon=true}
const Text('Bonjour')
```

```git {icon=true}
git commit -m "feat: blocs de code"
```

```gitlab {icon=true}
image: node:20
script:
  - npm test
```

```go {icon=true}
fmt.Println("Bonjour")
```

```golang {icon=true}
func main() { fmt.Println("Bonjour") }
```

```gql {icon=true}
query {
  user(id: 1) {
    name
  }
}
```

```graphql {icon=true}
type Query {
  hello: String
}
```

```haskell {icon=true}
main = putStrLn "Bonjour"
```

```htm {icon=true}
<p>Bonjour</p>
```

```html {icon=true}
<p>Bonjour le monde</p>
```

```hugo {icon=true}
{{ range .Pages }}{{ .Title }}{{ end }}
```

```java {icon=true}
System.out.println("Bonjour");
```

```javascript {icon=true}
console.log("Bonjour");
```

```js {icon=true}
const somme = (a, b) => a + b;
```

```jsx {icon=true}
<Bouton label="Bonjour" onClick={valider} />
```

```tsx {icon=true}
<Bouton label="Bonjour" onClick={valider} />
```

```k8s {icon=true}
apiVersion: v1
kind: Pod
```

```kotlin {icon=true}
fun main() = println("Bonjour")
```

```kubernetes {icon=true}
kubectl get pods -n prod
```

```laravel {icon=true}
Route::get('/bonjour', fn () => 'Bonjour');
```

```less {icon=true}
@primaire: rebeccapurple;
.title { color: @primaire; }
```

```lua {icon=true}
print("Bonjour")
```

```markdown {icon=true}
**Bonjour le monde**
```

```md {icon=true}
## Bonjour

Un titre de section.
```

```mongodb {icon=true}
db.utilisateurs.find({ actif: true })
```

```mysql {icon=true}
SELECT * FROM utilisateurs WHERE actif = 1;
```

```next {icon=true}
export default function Page() {
  return <h1>Bonjour</h1>;
}
```

```nextjs {icon=true}
export const metadata = { title: "Bonjour" };
```

```nginx {icon=true}
location / {
  proxy_pass http://app:3000;
}
```

```perl {icon=true}
print "Bonjour\n";
```

```php {icon=true}
<?php echo "Bonjour";
```

```postgres {icon=true}
SELECT count(*) FROM utilisateurs;
```

```postgresql {icon=true}
SELECT NOW();
```

```powershell {icon=true}
Get-ChildItem -Recurse -Filter *.log
```

```ps1 {icon=true}
Write-Host "Bonjour"
```

```py {icon=true}
print("Bonjour")
```

```python {icon=true}
print("Bonjour le monde")
```

```r {icon=true}
x <- c(1, 2, 3)
mean(x)
```

```rb {icon=true}
puts "Bonjour"
```

```react {icon=true}
<button onClick={valider}>Valider</button>
```

```redis {icon=true}
SET salut "Bonjour"
```

```rs {icon=true}
println!("Bonjour");
```

```rust {icon=true}
fn main() {
    println!("Bonjour le monde");
}
```

```sass {icon=true}
$primaire: rebeccapurple
```

```scss {icon=true}
.title {
  color: $primaire;
}
```

```sh {icon=true}
ls -la
```

```shell {icon=true}
echo "Bonjour"
```

```solidity {icon=true}
contract Bonjour {
    string public salut = "Bonjour";
}
```

```sqlite {icon=true}
SELECT * FROM utilisateurs LIMIT 5;
```

```svg {icon=true}
<svg xmlns="http://www.w3.org/2000/svg"><circle r="10" /></svg>
```

```svelte {icon=true}
<h1>{titre}</h1>
```

```swift {icon=true}
print("Bonjour")
```

```symfony {icon=true}
#[Route('/bonjour', name: 'bonjour')]
public function bonjour(): Response {}
```

```tailwind {icon=true}
<div class="flex items-center gap-2">Bonjour</div>
```

```tailwindcss {icon=true}
@tailwind utilities;
```

```terraform {icon=true}
resource "aws_instance" "web" {
  ami = "ami-123456"
}
```

```tf {icon=true}
resource "aws_s3_bucket" "cdn" {
  bucket = "cdn"
}
```

```ts {icon=true}
const id: number = 1;
```

```typescript {icon=true}
function direBonjour(nom: string): string {
  return "Bonjour " + nom;
}
```

```vite {icon=true}
import { defineConfig } from "vite";

export default defineConfig({});
```

```vue {icon=true}
<template>
  <p>{{ msg }}</p>
</template>
```

```wordpress {icon=true}
add_action("init", "mon_init");
```

```xml {icon=true}
<utilisateur>
  <nom>Thomas</nom>
</utilisateur>
```

```zsh {icon=true}
echo $SHELL
```
