{{ partial "admin/cms/decapcms/shortcodes/_register.js" (dict
  "shortcode" "abbr"
  "label" (i18n "admin.shortcodes.abbr.label" | default "Abréviations")
  "preview" `<abbr title="${obj.title}" lang="${obj.lang}">${obj.text}</abbr>`
) }}
