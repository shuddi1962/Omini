# Quick Start Guide

## Viewing Prototypes

Open any `code.html` file in your browser:

```
# Windows
start pages\core\dashboard\code.html

# Mac
open pages/core/dashboard/code.html

# Linux
xdg-open pages/core/dashboard/code.html
```

Or use VS Code Live Server extension for hot-reload.

## Creating a New Page

1. **Copy the template:**
   ```bash
   cp shared/TEMPLATE.html pages/your-category/your-page/index.html
   ```

2. **Update the HTML head to use shared assets:**
   ```html
   <script src="../../shared/tailwind.config.js"></script>
   <link rel="stylesheet" href="../../shared/styles.css"/>
   ```

3. **Add your page content in the `<main>` section**

4. **Use shared component classes:**
   - `.stat-card` for metric cards
   - `.btn-primary` for red buttons
   - `.badge-success` for green badges
   - `.data-table` for tables

## Directory Structure

```
shared/
  tailwind.config.js    ← Design tokens (colors, fonts, spacing)
  styles.css            ← Reusable CSS classes
  components/           ← HTML snippets to copy
    nav.html            ← Top navigation
    sidebar.html        ← Side navigation
  TEMPLATE.html         ← Starting template

pages/
  core/                 ← Main app pages
  messaging/            ← Inbox, community
  collaboration/        ← Meet, HR
  marketing/            ← Campaigns, ads, funnels
  admin/                ← User management, settings
  analytics/            ← Intelligence dashboard
  automation/           ← Workflow builder
  storage/              ← File management
  security/             ← Compliance, vault
  billing/              ← Invoicing
  support/              ← Customer support
  developer/            ← API portal
  mobile/               ← Mobile companion
```

## Key CSS Classes

| Class | Description |
|-------|-------------|
| `.stat-card` | White card with shadow for stats |
| `.glass-card` | Glassmorphism blur effect |
| `.btn` + `.btn-primary` | Red CTA button |
| `.btn-secondary` | Navy button |
| `.badge-success` | Green pill badge |
| `.data-table` | Styled table with sticky headers |
| `.sidebar-nav-item` | Sidebar link with hover/active states |
| `.animate-fade-in` | Fade in animation |

## Dark Mode

Add `dark` class to `<html>`:
```html
<html class="dark">
```

All components automatically adapt to dark mode.

## Need Help?

Check the full `README.md` for complete documentation.
