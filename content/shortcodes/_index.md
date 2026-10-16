---
isPage: true
draft: false
title: Shortcodes
isIndex: false
---

## Hugolify shortcodes

### Alert

{{< alert text="Curabitur scelerisque sollicitudin lobortis" state="dark" >}}

{{< alert text="Suspendisse egestas augue a egestas consectetur" state="light" >}}

{{< alert text="Sed pharetra, massa eu varius egestas" state="warning" >}}

{{< alert text="Donec varius velit nisi, a accumsan odio molestie ut" state="info" >}}

{{< alert text="Maecenas at quam vel lorem malesuada euismod nec vel nibh" state="success" >}}

{{< alert text="Cras ac facilisis nunc" state="danger" >}}

### Alert block

{{< alert-block state="info" >}}Curabitur scelerisque sollicitudin lobortis. Sed pharetra, massa eu varius
egestas, metus nulla rutrum diam, et accumsan purus lacus vel ante.

- Suspendisse egestas augue a egestas consectetur.
- Aliquam interdum hendrerit porta.
- Maecenas at quam vel lorem malesuada euismod nec vel nibh.
- Cras ac facilisis nunc.{{< /alert-block >}}

{{< alert-block state="warning" >}}Hugolify uses Bootstrap variables and Hugolify variables.{{< /alert-block >}}

### Badge

{{< badge text="Danger" state="danger" >}}

{{< badge text="Dark" state="dark" >}}

{{< badge text="Info" state="info" >}}

{{< badge text="Light" state="light" >}}

{{< badge text="Primary" state="primary" >}}

{{< badge text="Secondary" state="secondary" >}}

{{< badge text="Success" state="success" >}}

{{< badge text="Warning" state="warning" >}}

### Blank link

{{< blank_link text="Cras ac facilisis nunc" link="#" >}}

### Blockquote

{{< blockquote quote="Donec varius velit nisi, a accumsan odio molestie ut" >}}

{{< blockquote quote="Donec varius velit nisi, a accumsan odio molestie ut" title="Sed Pharetra" >}}

{{< blockquote quote="Donec varius velit nisi, a accumsan odio molestie ut" title="Sed Pharetra" text="Egestas augue a egestas" >}}

{{< blockquote quote="Donec varius velit nisi, a accumsan odio molestie ut" title="Sed Pharetra" text="Egestas augue a egestas" >}}

### Button

{{< button text="Back home" url="/" >}}

{{< button text="External link button" url="/" blank=true >}}

{{< button text="Danger button" url="/" class="btn-danger" >}}

{{< button text="Dark button" url="/" class="btn-dark" >}}

{{< button text="Ghost button" url="/" class="btn-ghost" >}}

{{< button text="Info button" url="/" class="btn-info" >}}

{{< button text="Light button" url="/" class="btn-light" >}}

{{< button text="Link button" url="/" class="btn-link" >}}

{{< button text="Secondary button" url="/" class="btn-secondary" >}}

{{< button text="Success button" url="/" class="btn-success" >}}

{{< button text="Warning button" url="/" class="btn-warning" >}}

### Dailymotion

{{< dailymotion x9t0c4w >}}

### Details

{{< details summary="Maecenas at quam" >}}Maecenas at quam vel lorem malesuada euismod nec vel nibh{{< /details >}}

### Figure

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1783352602/bernd-dittrich-tfwcwynxibw-unsplash_jkndoe.jpg" alt="Alternative text" legend="Donec varius velit nisi, a accumsan" credit="Donec varius velit nisi, a accumsan odio molestie ut" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1783352602/bernd-dittrich-tfwcwynxibw-unsplash_jkndoe.jpg" alt="Alternative text" legend="Donec varius velit nisi, a accumsan" credit="Donec varius velit nisi, a accumsan odio molestie ut" >}}

### Map

{{< map markers=`{"coordinates":[44.8425666,-0.5737107]},{"coordinates":[45.8425666,1.5937107]},{"coordinates":[46.8425666,-0.5737107]}` >}}

### Twitch

{{< twitch 2656646242 >}}

### Video

{{< video mp4="/videos/lawyerify-independent.mp4" webm="/videos/lawyerify-independent.mp4" controls=true screenshot=true legend="Donec varius velit nisi, a accumsan" credit="Donec varius velit nisi, a accumsan odio molestie ut" >}}

## Hugo shortcodes

### Highlight

{{< highlight go "linenos=table,hl_lines=8 15-17,linenostart=199" >}}
// GetTitleFunc returns a func that can be used to transform a string to
// title case.
//
// The supported styles are
//
// - "Go" (strings.Title)
// - "AP" (see https://www.apstylebook.com/)
// - "Chicago" (see https://www.chicagomanualofstyle.org/home.html)
//
// If an unknown or empty style is provided, AP style is what you get.
func GetTitleFunc(style string) func(s string) string {
switch strings.ToLower(style) {
case "go":
return strings.Title
case "chicago":
return transform.NewTitleConverter(transform.ChicagoStyle)
default:
return transform.NewTitleConverter(transform.APStyle)
}
}
{{< /highlight >}}

### QR

{{< qr text="https://gohugo.io" />}}

### Twitter

{{< x user="SanDiegoZoo" id="1453110110599868418" >}}

### Vimeo

{{< vimeo 146022717 vimeo "iframe title" >}}

### Youtube

{{< youtube id="JP8HNPKQWfI" title="Proin maximus" class="youtube" >}}
