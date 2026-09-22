---
isPage: true
draft: false
title: Contact
blocks:
  - type: form
    ui:
      theme: light
      grid: container
      offset: center
      align: center
    items:
      - name: nom
        label: Nom
        type: text
        required: true
        full: false
        autocomplete: name
      - name: email
        label: Email
        type: email
        required: true
        full: false
        autocomplete: email
      - name: message
        label: Message
        type: textarea
        required: true
        full: false
    name: contact
    submit: Envoyer
  - type: title
    heading:
      text: « En soumettant ce formulaire, vous acceptez que les informations saisies soient traitées par le biais du service Netlify Forms afin de répondre à votre demande. Pour en savoir plus sur la gestion de vos données et exercer vos droits, consultez notre Politique de Confidentialité. »
    ui:
      theme: light
      grid: container
      offset: center
      align: center
---
