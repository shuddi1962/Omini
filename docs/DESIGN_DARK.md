---
name: Modern Enterprise Dark
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#c1c6d6'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#8b919f'
  outline-variant: '#414754'
  surface-tint: '#acc7ff'
  primary: '#acc7ff'
  on-primary: '#002f67'
  primary-container: '#468fff'
  on-primary-container: '#00285a'
  inverse-primary: '#005cbd'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#ffb784'
  on-tertiary: '#502500'
  tertiary-container: '#df7306'
  on-tertiary-container: '#451f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001a40'
  on-primary-fixed-variant: '#004591'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb784'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  max-width: 1440px
---

## Brand & Style
The design system establishes a high-performance environment tailored for professional, data-intensive workflows. The brand personality is authoritative and focused, prioritizing clarity and information density. By moving to a deep charcoal palette, the interface reduces eye strain for long-form technical work while maintaining a premium, "command center" aesthetic.

The design style is **Corporate / Modern**, utilizing subtle depth and high-contrast typography to ensure navigation remains intuitive. It emphasizes precision through structured layouts and consistent alignment, evoking a sense of reliability and enterprise-grade stability.

## Colors
This design system utilizes a layered "Deep Navy/Charcoal" palette to define hierarchy in a dark environment. The primary color has been shifted from the deep brand navy to a vibrant **#3d8bff** (Electric Blue) to ensure AAA accessibility and interactive prominence against the dark background.

*   **Background (#0a0c10):** The foundational layer, providing a void-like canvas for focused work.
*   **Surface Containers:** Progressive lightness (from #0d1117 to #30363d) is used to indicate elevation and nesting.
*   **Outlines:** Used sparingly to define boundaries between similar tonal layers without adding visual noise.
*   **Text:** High-contrast white (#f0f6fc) is reserved for headings, while muted grays facilitate long-form reading and metadata.

## Typography
Inter is used exclusively to maintain a systematic and utilitarian feel. The hierarchy relies on weight transitions and slight negative letter-spacing on larger headlines to ensure a tight, professional appearance. 

For dark mode, font weights are slightly lighter than their light-mode counterparts to prevent "haloing" or visual smearing of white text on dark backgrounds. All body text should maintain a minimum contrast ratio of 7:1.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop dashboards, centering the content area at a maximum width of 1440px. A 12-column system is used for data visualization and complex forms.

*   **Grid:** 12 columns with 24px gutters.
*   **Rhythm:** An 8px base unit (derived from "Round Eight" principles) governs all padding and margins. 
*   **Mobile:** Layout reflows to a single column with 16px side margins. Horizontal scrolling is permitted for large data tables.

## Elevation & Depth
In this dark theme, depth is communicated through **Tonal Layers** rather than heavy shadows. As elements "rise" toward the user, they become lighter in hex value.

*   **Level 0 (Background):** #0a0c10 (The lowest plane).
*   **Level 1 (Cards/Containers):** #161b22 with a 1px #30363d outline.
*   **Level 2 (Modals/Popovers):** #21262d with a subtle 10% opacity white outer glow (4px blur) to simulate light catch.
*   **Interactive:** Hover states on surface containers should lighten the background color by one tier or use a subtle primary color tint.

## Shapes
The design system adopts a **Rounded (8px)** approach for its primary shape language. This softens the industrial nature of the dark color palette without appearing overly consumer-focused.

*   **Default (rounded-md):** 0.5rem (8px) for buttons, input fields, and cards.
*   **Large (rounded-lg):** 1rem (16px) for major dashboard containers and modals.
*   **Extra Large (rounded-xl):** 1.5rem (24px) for featured promotional banners or onboarding cards.

## Components
Consistent component styling ensures the interface remains predictable across complex enterprise modules.

*   **Buttons:** Primary buttons use the adjusted brand blue (#3d8bff) with white text. Secondary buttons use an outline style with the #30363d border and #f0f6fc text.
*   **Input Fields:** Surfaces use #0d1117 with a #30363d border. On focus, the border transitions to #3d8bff with a subtle outer glow.
*   **Cards:** Use the "surface-low" (#161b22) color with a 1px border. No shadows are applied to cards to maintain a clean, flat appearance.
*   **Lists/Tables:** Use alternating row stripes (Zebra striping) with #0a0c10 and #0d1117. Headers are sticky with a #161b22 background and a bottom border.
*   **Chips:** Small, low-profile indicators using #21262d background and #8b949e text for a subtle, non-distracting presence.