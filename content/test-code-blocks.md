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

## 7. Langage non mappé (pas d'icône)

```zig {icon}
const std = @import("std");
```

## 8. Opt-out explicite du bouton copier

```js {copy=false}
console.log('pas de bouton copier');
```

## 9. Icônes — un exemple par langage du mapping

Un bloc pour chaque langage mappé dans `layouts/_partials/func/GetCodeIcon.html`, dans l'ordre du mapping, alias inclus (`js` et `javascript` partagent la même icône). Les langages non reconnus par Chroma sont rendus en texte brut — l'icône du mapping s'affiche quand même.

```angular {icon}
<button [disabled]="isLoading">Valider</button>
```

```astro {icon}
---
layout: ../layouts/Base.astro
---
<h1>Bonjour</h1>
```

```bash {icon}
echo "Hello World"
```

```bootstrap {icon}
<button class="btn btn-primary">Valider</button>
```

```css {icon}
.title { color: rebeccapurple; }
```

```dart {icon}
void main() { print('Bonjour'); }
```

```docker {icon}
FROM alpine:3
RUN apk add curl
```

```dockerfile {icon}
FROM node:20-alpine
COPY . .
RUN npm ci
```

```drupal {icon}
function demo_form_alter(&$form, $form_state) {
  $form['#validate'][] = 'demo_validate';
}
```

```elixir {icon}
def hello, do: IO.puts("Bonjour")
```

```elm {icon}
main =
  text "Bonjour"
```

```erlang {icon}
hello() ->
  io:format("Bonjour~n").
```

```flutter {icon}
const Text('Bonjour')
```

```git {icon}
git commit -m "feat: blocs de code"
```

```gitlab {icon}
image: node:20
script:
  - npm test
```

```go {icon}
fmt.Println("Bonjour")
```

```golang {icon}
func main() { fmt.Println("Bonjour") }
```

```gql {icon}
query {
  user(id: 1) {
    name
  }
}
```

```graphql {icon}
type Query {
  hello: String
}
```

```haskell {icon}
main = putStrLn "Bonjour"
```

```htm {icon}
<p>Bonjour</p>
```

```html {icon}
<p>Bonjour le monde</p>
```

```hugo {icon}
{{ range .Pages }}{{ .Title }}{{ end }}
```

```java {icon}
System.out.println("Bonjour");
```

```javascript {icon}
console.log("Bonjour");
```

```js {icon}
const somme = (a, b) => a + b;
```

```jsx {icon}
<Bouton label="Bonjour" onClick={valider} />
```

```tsx {icon}
<Bouton label="Bonjour" onClick={valider} />
```

```k8s {icon}
apiVersion: v1
kind: Pod
```

```kotlin {icon}
fun main() = println("Bonjour")
```

```kubernetes {icon}
kubectl get pods -n prod
```

```laravel {icon}
Route::get('/bonjour', fn () => 'Bonjour');
```

```less {icon}
@primaire: rebeccapurple;
.title { color: @primaire; }
```

```lua {icon}
print("Bonjour")
```

```markdown {icon}
**Bonjour le monde**
```

```md {icon}
## Bonjour

Un titre de section.
```

```mongodb {icon}
db.utilisateurs.find({ actif: true })
```

```mysql {icon}
SELECT * FROM utilisateurs WHERE actif = 1;
```

```next {icon}
export default function Page() {
  return <h1>Bonjour</h1>;
}
```

```nextjs {icon}
export const metadata = { title: "Bonjour" };
```

```nginx {icon}
location / {
  proxy_pass http://app:3000;
}
```

```perl {icon}
print "Bonjour\n";
```

```php {icon}
<?php echo "Bonjour";
```

```postgres {icon}
SELECT count(*) FROM utilisateurs;
```

```postgresql {icon}
SELECT NOW();
```

```powershell {icon}
Get-ChildItem -Recurse -Filter *.log
```

```ps1 {icon}
Write-Host "Bonjour"
```

```py {icon}
print("Bonjour")
```

```python {icon}
print("Bonjour le monde")
```

```r {icon}
x <- c(1, 2, 3)
mean(x)
```

```rb {icon}
puts "Bonjour"
```

```react {icon}
<button onClick={valider}>Valider</button>
```

```redis {icon}
SET salut "Bonjour"
```

```rs {icon}
println!("Bonjour");
```

```rust {icon}
fn main() {
    println!("Bonjour le monde");
}
```

```sass {icon}
$primaire: rebeccapurple
```

```scss {icon}
.title {
  color: $primaire;
}
```

```sh {icon}
ls -la
```

```shell {icon}
echo "Bonjour"
```

```solidity {icon}
contract Bonjour {
    string public salut = "Bonjour";
}
```

```sqlite {icon}
SELECT * FROM utilisateurs LIMIT 5;
```

```svg {icon}
<svg xmlns="http://www.w3.org/2000/svg"><circle r="10" /></svg>
```

```svelte {icon}
<h1>{titre}</h1>
```

```swift {icon}
print("Bonjour")
```

```symfony {icon}
#[Route('/bonjour', name: 'bonjour')]
public function bonjour(): Response {}
```

```tailwind {icon}
<div class="flex items-center gap-2">Bonjour</div>
```

```tailwindcss {icon}
@tailwind utilities;
```

```terraform {icon}
resource "aws_instance" "web" {
  ami = "ami-123456"
}
```

```tf {icon}
resource "aws_s3_bucket" "cdn" {
  bucket = "cdn"
}
```

```ts {icon}
const id: number = 1;
```

```typescript {icon}
function direBonjour(nom: string): string {
  return "Bonjour " + nom;
}
```

```vite {icon}
import { defineConfig } from "vite";

export default defineConfig({});
```

```vue {icon}
<template>
  <p>{{ msg }}</p>
</template>
```

```wordpress {icon}
add_action("init", "mon_init");
```

```xml {icon}
<utilisateur>
  <nom>Thomas</nom>
</utilisateur>
```

```zsh {icon}
echo $SHELL
```
