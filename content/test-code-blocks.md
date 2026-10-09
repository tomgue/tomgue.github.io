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

```js {icon=true}
console.log('Hello');
```

## 3. Bouton copier

```bash {copy=true}
echo "Hello World"
```

## 4. Tout combiné

```scss {title="styles.scss" icon=true copy=true}
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

## 7. Langage non mappé (pas d'icône)

```zig {icon=true}
const std = @import("std");
```

## 8. Opt-out explicite du bouton copier

```js {copy=false}
console.log('pas de bouton copier');
```

## 9. Icônes — un exemple par langage du mapping

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
