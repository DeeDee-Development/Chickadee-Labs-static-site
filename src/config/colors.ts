/**
 * DeeDee Health Color Palette
 *
 * Centralized color configuration for the entire site.
 * Inspired by MyFitnessPal, YAZIO, and WaterMinder design systems.
 */

export const colors = {
  // Primary Brand Colors
  primary: {
    blue: '#0066EE',      // Main brand blue - used for CTAs, links, focus states
    purple: '#9383FB',    // Accent purple - used in gradients and highlights
  },

  // Semantic Colors
  semantic: {
    success: '#33C759',   // Green for success states
  },

  // Text Colors
  text: {
    primary: '#151824',   // Main text color - dark charcoal
    secondary: '#5A5A5A', // Secondary text - medium gray
    light: 'rgba(255, 255, 255, 0.95)', // Light text on dark backgrounds
    muted: 'rgba(255, 255, 255, 0.8)',  // Muted light text
    faded: 'rgba(255, 255, 255, 0.6)',  // Faded light text
  },

  // Background Colors
  background: {
    white: '#FFFFFF',     // Pure white background
    light: '#F8F9FA',     // Light gray background
    subtle: '#FAFBFC',    // Very subtle gray background
  },

  // Border & Divider Colors
  border: {
    default: '#EBEBF0',   // Default border color
    light: 'rgba(255, 255, 255, 0.2)', // Light border on dark backgrounds
  },

  // Gradient Definitions
  gradients: {
    hero: 'linear-gradient(135deg, #0066EE 0%, #9383FB 100%)',
    subtle: 'linear-gradient(180deg, #C1E5F5 0%, #E8F6FC 100%)',
  },

  // Shadow Colors (for consistency)
  shadows: {
    light: 'rgba(0, 0, 0, 0.05)',
    medium: 'rgba(0, 0, 0, 0.1)',
    dark: 'rgba(0, 0, 0, 0.3)',
  },
} as const;

/**
 * Helper function to generate CSS variable declarations from the color config
 * This can be used to generate CSS custom properties programmatically
 */
export function generateCSSVariables(): string {
  return `
    /* Primary Colors */
    --color-primary: ${colors.primary.blue};
    --color-accent: ${colors.primary.purple};

    /* Semantic Colors */
    --color-success: ${colors.semantic.success};

    /* Text Colors */
    --color-text: ${colors.text.primary};
    --color-text-light: ${colors.text.secondary};

    /* Background Colors */
    --color-bg: ${colors.background.white};
    --color-bg-light: ${colors.background.light};

    /* Border Colors */
    --color-border: ${colors.border.default};

    /* Gradients */
    --gradient-hero: ${colors.gradients.hero};
    --gradient-subtle: ${colors.gradients.subtle};
  `.trim();
}

export default colors;
