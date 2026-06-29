# OmniPlatform Design System & UI Prototypes

A comprehensive collection of UI prototypes and design system definitions for **OmniPlatform** - an all-in-one enterprise SaaS suite.

## Project Structure

```
stitch_unified_all_in_one_hub/
├── shared/                      # Shared assets (single source of truth)
│   ├── tailwind.config.js       # Design tokens & Tailwind configuration
│   ├── styles.css               # Shared CSS (components, animations, utilities)
│   ├── components/              # Reusable HTML components
│   │   ├── nav.html             # Top navigation bar
│   │   └── sidebar.html         # Sidebar navigation
│   └── TEMPLATE.html            # Starting template for new pages
│
├── pages/                       # All page prototypes
│   ├── core/                    # Core platform pages
│   │   ├── homepage/            # Marketing landing page
│   │   ├── dashboard/           # Main dashboard
│   │   ├── login/               # Authentication
│   │   └── ...
│   ├── messaging/               # Communication features
│   │   ├── inbox/               # Unified inbox
│   │   └── community/           # Community hub
│   ├── collaboration/           # Team collaboration
│   │   ├── meet/                # Video conferencing
│   │   └── people/              # HR & people management
│   ├── marketing/               # Marketing tools
│   │   ├── campaigns/           # Campaign management
│   │   ├── ads/                 # Ad management
│   │   └── funnels/             # Sales funnels
│   ├── admin/                   # Administration
│   ├── analytics/               # Data & insights
│   ├── automation/              # Workflow automation
│   ├── storage/                 # File management
│   ├── security/                # Security & compliance
│   ├── billing/                 # Billing & invoicing
│   ├── support/                 # Customer support
│   ├── developer/               # API & developer tools
│   └── mobile/                  # Mobile companion app
│
├── docs/                        # Documentation
│   ├── DESIGN_LIGHT.md          # Light theme design system
│   └── DESIGN_DARK.md           # Dark theme design system
│
├── assets/                      # Static assets
│   └── images/                  # Image assets
│
└── reference/                   # Competitor research
```

## Technology Stack

| Layer | Technology |
|-------|-----------|
| CSS Framework | Tailwind CSS v3 (CDN) |
| Fonts | Google Fonts (Inter, JetBrains Mono) |
| Icons | Google Material Symbols Outlined |
| JavaScript | Vanilla (no frameworks) |

## Design System

### Colors

The design system follows Material Design 3-inspired token naming:

- **Primary (Deep Navy #000513)**: Headers, navigation, branding
- **Secondary (Vibrant Red #ba002a)**: CTAs, active states, critical elements
- **Tertiary (Warm Yellow #6d5e00)**: Accents, "New" badges, highlights
- **Surface**: Progressive lightness scale for depth
- **Semantic**: Success green, error red, text colors

### Typography

| Token | Size | Weight | Use Case |
|-------|------|--------|----------|
| display-lg | 48px | 700 | Hero headlines |
| headline-lg | 32px | 600 | Section headers |
| headline-md | 24px | 600 | Card titles |
| body-lg | 18px | 400 | Large body text |
| body-md | 16px | 400 | Default body text |
| body-sm | 14px | 400 | Secondary text |
| label-md | 12px | 600 | Labels, badges |

### Spacing

- Base unit: 8px
- Gutter: 24px
- Section padding: 80px
- Container max-width: 1280px

## Getting Started

### Viewing Prototypes

1. Open any `code.html` file directly in a browser
2. Or use a local server (e.g., VS Code Live Server)

### Creating New Pages

1. Copy `shared/TEMPLATE.html` to your target directory
2. Update the page title and content
3. Import shared assets using relative paths:

```html
<script src="../../shared/tailwind.config.js"></script>
<link rel="stylesheet" href="../../shared/styles.css"/>
```

### Using Shared Components

Include component HTML files in your pages:

```html
<!-- Navigation -->
<!-- Paste contents of shared/components/nav.html -->

<!-- Sidebar -->
<!-- Paste contents of shared/components/sidebar.html -->
```

## Available Components

### Navigation (`shared/components/nav.html`)
- Fixed top navigation bar
- Brand logo and name
- Navigation links
- Search, notifications, user avatar

### Sidebar (`shared/components/sidebar.html`)
- Collapsible sidebar navigation
- Active state highlighting
- Icon + label pattern
- Section dividers

### CSS Classes (`shared/styles.css`)

**Cards:**
- `.stat-card` - Statistics display card
- `.glass-card` - Glassmorphism effect card

**Buttons:**
- `.btn` - Base button
- `.btn-primary` - Red CTA button
- `.btn-secondary` - Navy button
- `.btn-outline` - Outlined button

**Badges:**
- `.badge` - Base badge
- `.badge-primary` - Navy badge
- `.badge-secondary` - Red badge
- `.badge-success` - Green badge
- `.badge-warning` - Yellow badge

**Tables:**
- `.data-table` - Styled data table with sticky headers

**Form Elements:**
- `.toggle-switch` - Toggle switch (add `.active` class)

**Animations:**
- `.animate-fade-in` - Fade in animation
- `.animate-slide-in` - Slide in animation
- `.animate-pulse-red` - Pulsing red indicator

**Utilities:**
- `.hide-mobile` - Hide on mobile
- `.show-mobile-only` - Show only on mobile

## Dark Mode

Dark mode is supported via Tailwind's `class` strategy:

```html
<html class="dark">
```

All components include dark mode styles automatically.

## Contributing

1. Use the shared design tokens from `tailwind.config.js`
2. Reuse existing CSS classes from `styles.css`
3. Follow the component patterns in `shared/components/`
4. Place new pages in the appropriate `pages/` subdirectory
5. Use the template (`TEMPLATE.html`) as a starting point

## Deployment

### Quick Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository: `shuddi1962/Omini`
3. Click **Deploy**

### Setup Supabase Database

1. Open `setup.html` in your browser after deployment
2. Click **Start Setup** to create all tables and storage buckets
3. Or run `shared/schema.sql` manually in Supabase SQL Editor

### Environment Variables

Your Supabase credentials are configured in `shared/supabase-client.js`:
- **Project URL**: `https://krdfdhjzwggsuaqjso.supabase.co`
- **Anon Key**: Safe for frontend use

## License

This is a proprietary design system for OmniPlatform.
