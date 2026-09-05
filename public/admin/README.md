# Sveltia CMS Configuration for Astro Modular Theme

This folder contains the Sveltia CMS configuration for the Astro Modular theme.

## Configuration File

- **`config.yml`** - Main Sveltia CMS configuration file
- **`index.html`** - Sveltia CMS entry point

## Configuration Overview

The configuration in `config.yml` is designed to match exactly the TypeScript interfaces defined in `src/content/docs/api.md`:

### Content Collections

1. **Posts** (`/src/content/posts/`)
   - Matches `PostData` interface
   - Fields: title, description, date, tags, draft, image, imageAlt, imageOG, hideCoverImage, hideTOC, targetKeyword, noIndex, body

2. **Pages** (`/src/content/pages/`)
   - Matches `PageData` interface
   - Fields: title, description, draft, lastModified, image, imageAlt, hideCoverImage, hideTOC, noIndex, body

3. **Projects** (`/src/content/projects/`)
   - Matches `ProjectData` interface
   - Fields: title, description, date, categories, repositoryUrl, demoUrl, status, image, imageAlt, hideCoverImage, hideTOC, draft, noIndex, featured, body

4. **Documentation** (`/src/content/docs/`)
   - Matches `DocumentationData` interface
   - Fields: title, description, category, order, lastModified, version, image, imageAlt, hideCoverImage, hideTOC, draft, noIndex, showTOC, featured, body

5. **Special Pages** (File Collection)
   - Matches `SpecialData` interface
   - Files: home.md, 404.md, posts.md, projects.md, docs.md
   - Fields: title, description, hideTOC, body

## Field Types Mapping

| TypeScript Type | Sveltia CMS Widget | Notes |
|----------------|-------------------|-------|
| `string` | `string` | Single-line text |
| `string` (description) | `text` | Multi-line text |
| `Date` | `datetime` with `type: date` | Date picker |
| `string[]` (tags/categories) | `list` with `field: string` | Array of strings |
| `boolean` | `boolean` | Toggle switch |
| `string` (image path) | `image` | Image uploader |
| `string` (URL) | `string` | URL input |
| `string` (status) | `select` | Dropdown with predefined options |
| `number` (order) | `number` | Numeric input |
| `body/content` | `richtext` | Rich text editor (Markdown) |

## Setup Instructions

1. **Update GitHub Repository**
   Edit `public/admin/config.yml` and update the backend configuration:
   ```yaml
   backend:
     name: github
     repo: your-username/your-repo  # Change this
     branch: main
   ```

2. **Access Sveltia CMS**
   Navigate to `/admin/` on your deployed site (e.g., `https://your-site.com/admin/`)

3. **Authentication**
   - Sveltia CMS uses GitHub OAuth for authentication
   - Make sure your GitHub token has write access to the repository

## Customization

### Adding New Fields

To add a custom field to a collection:

```yaml
fields:
  - name: new_field
    label: New Field
    widget: string  # or any other widget type
    required: false
    default: ""
    hint: "Description of the field"
```

### Changing Collection Settings

You can customize:
- `label` - Display name in CMS
- `icon` - Material Symbols icon name
- `folder` - Content directory path
- `format` - File format (yaml-frontmatter, json, etc.)
- `extension` - File extension
- `sortable_fields` - Fields that can be sorted
- `summary` - Entry summary template

### Available Icons

Browse Material Symbols icons at: https://fonts.google.com/icons?icon.set=Material+Symbols

Example icons used:
- `article` - Posts
- `description` - Pages
- `work` - Projects
- `school` - Documentation
- `star` - Special Pages

## Validation

The configuration includes the Sveltia CMS JSON schema reference for IDE validation:

```yaml
# yaml-language-server: $schema=https://unpkg.com/@sveltia/cms/schema/sveltia-cms.json
```

This enables autocomplete and validation in VS Code with the YAML extension.

## Backend Configuration

Currently configured for GitHub. Other backends supported by Sveltia CMS:
- `github` (default)
- `gitlab`
- `bitbucket`
- `azure`
- `gitea`

## Media Configuration

- `media_folder: /public/media` - Where uploaded media is stored
- `public_folder: /media` - Public URL path for media

## Publish Modes

- `editorial_workflow` - Draft → Review → Publish workflow
- `simple` - Direct publishing without review

## References

- [Sveltia CMS Documentation](https://sveltiacms.app/)
- [Astro Modular Theme API](file:///workspaces/sandboxe/astro-modular/src/content/docs/api.md)
- [Material Symbols Icons](https://fonts.google.com/icons?icon.set=Material+Symbols)

## Notes

- All optional fields have `required: false` and appropriate default values
- Boolean fields default to `false` unless specified otherwise
- The configuration preserves all fields from the TypeScript interfaces
- File paths use the `/src/content/` structure matching the Astro Modular theme
