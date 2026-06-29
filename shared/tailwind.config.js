/**
 * OmniPlatform Design System - Tailwind Configuration
 * Single source of truth for all design tokens
 */
const omniConfig = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary (Deep Navy)
        "primary": "#000513",
        "on-primary": "#ffffff",
        "primary-container": "#001e42",
        "on-primary-container": "#6f87b0",
        "inverse-primary": "#afc7f4",
        "primary-fixed": "#d6e3ff",
        "primary-fixed-dim": "#afc7f4",
        "on-primary-fixed": "#001b3d",
        "on-primary-fixed-variant": "#2f476d",

        // Secondary (Vibrant Red)
        "secondary": "#ba002a",
        "on-secondary": "#ffffff",
        "secondary-container": "#e2213c",
        "on-secondary-container": "#fffbff",
        "secondary-fixed": "#ffdad9",
        "secondary-fixed-dim": "#ffb3b2",
        "on-secondary-fixed": "#410008",
        "on-secondary-fixed-variant": "#92001f",

        // Tertiary (Warm Yellow)
        "tertiary": "#6d5e00",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#c3ab00",
        "on-tertiary-container": "#493f00",
        "tertiary-fixed": "#ffe241",
        "tertiary-fixed-dim": "#e2c600",
        "on-tertiary-fixed": "#211b00",
        "on-tertiary-fixed-variant": "#524700",

        // Error
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        // Surface
        "surface": "#f7fafc",
        "surface-dim": "#d7dadc",
        "surface-bright": "#f7fafc",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f1f4f6",
        "surface-container": "#ebeef0",
        "surface-container-high": "#e5e9eb",
        "surface-container-highest": "#e0e3e5",
        "surface-variant": "#e0e3e5",
        "surface-tint": "#475f86",
        "surface-dark": "#06142E",

        // On Surface
        "on-surface": "#181c1e",
        "on-surface-variant": "#44474e",
        "inverse-surface": "#2d3133",
        "inverse-on-surface": "#eef1f3",

        // Outline
        "outline": "#74777f",
        "outline-variant": "#c4c6cf",

        // Background
        "background": "#f7fafc",
        "on-background": "#181c1e",

        // Semantic
        "text-main": "#121C2D",
        "text-muted": "#52667A",
        "border-subtle": "#E1E8ED",
        "success-green": "#00A91C"
      },

      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },

      spacing: {
        "section-padding": "80px",
        "container-max": "1280px",
        "base": "8px",
        "margin-mobile": "16px",
        "gutter": "24px"
      },

      fontFamily: {
        "display-lg": ["Inter"],
        "display-lg-mobile": ["Inter"],
        "headline-lg": ["Inter"],
        "headline-md": ["Inter"],
        "headline-sm": ["Inter"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "body-sm": ["Inter"],
        "label-md": ["Inter"],
        "code": ["JetBrains Mono"]
      },

      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
        "code": ["14px", { lineHeight: "20px", fontWeight: "400" }]
      },

      boxShadow: {
        "card": "0 4px 20px rgba(0, 30, 66, 0.08)",
        "card-hover": "0 8px 30px rgba(0, 30, 66, 0.12)",
        "modal": "0 16px 48px rgba(0, 30, 66, 0.16)"
      }
    }
  }
};

// Export for both browser and Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = omniConfig;
} else {
  window.omniConfig = omniConfig;
}
