---
isPage: true
draft: false
title: Sous page
---

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.

`` {{ $nested := (index site.Params.admin.collections .).nested.depth | default site.Params.admin.nested.depth }}
{{ if gt $nested 1 }}
nested: {
  depth: {{ $nested }},
  subfolders: true,
  summary: '{{`{{title}}`}}'
},
{{ partialCached "admin/cms/decapcms/collection/config/parent.yml" . . }}
{{ end }} ``
