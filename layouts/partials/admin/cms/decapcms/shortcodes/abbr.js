{{ partial "admin/cms/decapcms/shortcodes/_register.js" (dict
  "shortcode" "abbr"
  "label" "Abréviations"
  "mode" "dialog"
  "summary" "{{text}}"
  "preview" `<abbr title="${obj.title}" lang="${obj.lang}">${obj.text}</abbr>`
) }}
