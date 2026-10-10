# Hugolify theme Bootstrap

## Overview

Bootstrap 5 styling layer for [hugolify-theme](https://github.com/hugolify/hugolify-theme).

This module provides the CSS (Bootstrap 5 + SASS) and JavaScript (Bootstrap 5 + Vanilla JS) for hugolify-theme.

## Requirements

- [Hugo extended](https://gohugo.io/installation/) >= 0.141.0
- [hugolify-theme](https://github.com/hugolify/hugolify-theme) >= 2.0.0

## Install

Edit `config/_default/module.yaml`:

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-bootstrap
```

## Customization

### CSS

Override variables in `assets/sass/abstracts/_variables-site.sass`:

```sass
$primary: #000000
$blockquote-color: #333333
$global-spacing: 3rem
$grid-columns: 12
```

Add custom mixins in `assets/sass/abstracts/_mixins.sass`.

#### Semantic column classes

Templates use framework-agnostic column classes mapped to Bootstrap via `$grid-columns`:

| Class | Ratio | Bootstrap (12 cols) |
| --- | --- | --- |
| `.col-xsmall` | 1/3 | `col-md-4` |
| `.col-small` | 1/2 | `col-md-6` |
| `.col-medium` | 2/3 | `col-md-8` |
| `.col-large` | 5/6 | `col-md-10` |
| `.offset-center` | centered | `margin-left: auto` & `margin-right: auto` |
| `.offset-end` | align end | `margin-left: auto` |

Changing `$grid-columns: 16` recalculates all column widths automatically.

### JavaScript

Bootstrap components are opt-in via `params.yaml`. Each component is initialized on `js-*` CSS classes — no `data-bs-*` attributes needed in HTML:

```yaml
bootstrap:
  alert: false
  carousel: false # Use Splide JS instead
  collapse: true
  dropdown: true
  modal: true
  offcanvas: true
  popover: false
  scrollspy: false
  tab: false
  toast: false
  tooltip: false

animation: false # Load js and add data attributes
carousel: true # Load splidejs
map: true # Load leaflet
parallax:
  enable: false # Load js and add data attributes
  cover: -2 # e.g.: for cover element
  heading: -0.25 # e.g.: for heading element
  percentage: 0.5
vimeo: false # Load API Vimeo
youtube: false # Load API Youtube
```

| Class | Component |
| --- | --- |
| `.js-alert-close` | Alert dismiss |
| `.js-carousel` | Carousel |
| `.js-collapse-toggle` + `data-target` | Collapse |
| `.js-drawer-toggle` + `data-target` | Drawer open |
| `.js-drawer-close` | Drawer close |
| `.js-dropdown-toggle` | Dropdown |
| `.js-modal-toggle` + `data-target` | Modal open |
| `.js-modal-close` | Modal close |
| `.js-popover` | Popover |
| `.js-scrollspy` | Scrollspy |
| `.js-tab` | Tab |
| `.js-toast` | Toast (auto-shown) |
| `.js-tooltip` | Tooltip |

Add custom JS in:

- `assets/js/components/custom.js`
- `assets/js/features/custom.js`
- `assets/js/vendors/custom.js`

## Structure

```
assets/
├── sass/
│   ├── main.sass              # Entry point
│   ├── main-theme.sass        # Shared manifest
│   ├── site.sass              # Site overrides
│   ├── theme.sass             # Theme overrides
│   ├── abstracts/             # Variables, mixins, functions
│   ├── base/                  # Element styles
│   ├── layout/                # Header, footer, col, grid, sidebar
│   ├── components/            # UI components
│   ├── pages/                 # Page-specific styles
│   └── vendors/               # Bootstrap, Splide, Leaflet…
└── js/
    ├── main.js                # Entry point
    ├── bootstrap/             # Bootstrap component inits (js-* → Bootstrap)
    ├── components/            # Menu, TOC, video…
    ├── features/              # Animation, carousel, map…
    ├── blocks/                # Block-specific scripts
    ├── utils/                 # Shared utilities
    └── vendors/               # Additional vendors
```

## Icon

https://icons.getbootstrap.com

## Documentation

https://www.hugolify.io/docs/

## Licensing

Hugolify is free for personal or commercial projects (MIT license)
