---
name: Modern Enterprise
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#44474e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#475f86'
  primary: '#000513'
  on-primary: '#ffffff'
  primary-container: '#001e42'
  on-primary-container: '#6f87b0'
  inverse-primary: '#afc7f4'
  secondary: '#ba002a'
  on-secondary: '#ffffff'
  secondary-container: '#e2213c'
  on-secondary-container: '#fffbff'
  tertiary: '#6d5e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c3ab00'
  on-tertiary-container: '#493f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#afc7f4'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2f476d'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ffb3b2'
  on-secondary-fixed: '#410008'
  on-secondary-fixed-variant: '#92001f'
  tertiary-fixed: '#ffe241'
  tertiary-fixed-dim: '#e2c600'
  on-tertiary-fixed: '#211b00'
  on-tertiary-fixed-variant: '#524700'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
  surface-dark: '#06142E'
  border-subtle: '#E1E8ED'
  text-main: '#121C2D'
  text-muted: '#52667A'
  success-green: '#00A91C'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
---

## Brand & Style

The brand personality for this design system is **Powerful, Approachable, and Professional**. It is engineered for an all-in-one suite that balances technical robustness with ease of use. The design style follows a **Corporate / Modern** aesthetic, utilizing ample whitespace, a refined color palette, and high-quality typography to ensure clarity and reliability.

The visual language draws from the efficiency of developer-centric tools while incorporating the warmth of user-facing marketing platforms. It avoids unnecessary ornamentation, focusing instead on structural integrity, clear information hierarchy, and intuitive interaction patterns that signal enterprise-grade security and storage capabilities.

## Colors

This design system uses a sophisticated palette designed to communicate trust and energy. 

- **Primary (Deep Navy):** Used for core branding, headers, and navigation to establish authority and professional stability.
- **Secondary (Vibrant Red):** Reserved for high-impact CTAs, error states, and critical notification badges to provide a sharp contrast against the navy.
- **Tertiary (Warm Yellow):** Utilized sparingly as an accent for "New" tags, special promotions, or highlights to inject a human-centric warmth.
- **Neutral (Soft Gray/White):** The foundation of the UI, ensuring a clean, open feel with high legibility.

Backgrounds primarily use the neutral palette, while dark surfaces are reserved for technical contexts like code blocks or sidebars to create visual separation.

## Typography

The typography system is built on **Inter** for its exceptional legibility and neutral, modern character. It utilizes a clear scale to manage complex information environments.

- **Headlines:** Use tight letter-spacing and heavy weights for impact. In Hero sections, a subtle italicization can be applied to specific keywords to emphasize the "human" aspect of the software.
- **Body:** Set with generous line height to maintain readability across dense documentation or storage lists.
- **Labels:** Small, uppercase, and slightly tracked out to differentiate from standard body text in UI metadata or badges.
- **Code:** A secondary monospaced font is used for technical implementation details and storage paths.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop views, centering content within a 1280px container to maintain focus. 

- **Grid:** A 12-column grid system is used for desktop and tablet, collapsing to a single column on mobile. 
- **Rhythm:** An 8px base unit drives all spacing decisions. 
- **Density:** The system prioritizes "generous whitespace" to prevent cognitive overload. Vertical section padding is kept high (80px+) to clearly delineate different value propositions and functional blocks.
- **Responsive:** On mobile, margins reduce to 16px and internal component padding is tightened to maximize screen real estate.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

- **Surfaces:** Most background elements are flat. Depth is created by placing white "Card" containers on top of the neutral light-gray background.
- **Shadows:** Use extremely diffused, low-opacity shadows (e.g., `box-shadow: 0 4px 20px rgba(0, 30, 66, 0.08)`) to lift interactive elements like cards and modals.
- **Overlays:** Navigation menus and flyouts use a semi-transparent backdrop blur to maintain context while focusing user attention.
- **Borders:** Low-contrast outlines (`#E1E8ED`) are used for static containers to provide structure without the weight of shadows.

## Shapes

The shape language is consistently **Rounded**, reflecting an approachable yet structured personality. 

- **Standard Radius:** 8px for smaller components like input fields and chips.
- **Large Radius:** 12px to 16px for primary cards and containers to soften the "enterprise" feel.
- **Interactive Elements:** Buttons utilize a slightly higher roundedness or pill-shape to distinguish them from structural layout elements.
- **Consistency:** Avoid sharp 0px corners entirely to maintain the approachable brand promise.

## Components

- **Buttons:** Primary buttons use the Secondary Red with white text; Secondary buttons use the Primary Navy with white text. Both feature 8px corner radii and a subtle hover lift.
- **Cards:** White backgrounds, 12px-16px corner radii, and soft ambient shadows. Used for product features and pricing tiers.
- **Input Fields:** 8px radius, subtle border (`#E1E8ED`), and a 2px Primary Navy focus ring.
- **Chips & Badges:** Pill-shaped (fully rounded). Tertiary Yellow is used for "New" or "Live" statuses; Success Green for "Stable" or "Completed."
- **Lists:** Storage and communication lists should feature high vertical padding (16px per row) with subtle dividers to ensure data clarity.
- **Navigation:** A sticky top-bar with Primary Navy background or high-contrast white, featuring a clear "Intuit-style" ecosystem switcher for multi-app access.