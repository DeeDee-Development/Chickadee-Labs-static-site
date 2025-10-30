/**
 * DeeDee Health Color Palettes
 *
 * Centralized color configuration for the entire site.
 * Inspired by the chickadee logo and health-focused design systems.
 */

// Define all available color palettes
const colorPalettes = {
  'warm-caring': {
    name: 'Warm & Caring',
    description: 'Approachable, friendly, nurturing - emphasizes warmth and care',
    primary: {
      blue: '#F5A623',      // Golden Orange - main brand color from chickadee background
      purple: '#2B2B2B',    // Deep Charcoal - from the bird's head, used for contrast
    },
    semantic: {
      success: '#33C759',   // Green for success states
    },
    text: {
      primary: '#2B2B2B',   // Deep charcoal - matches the bird
      secondary: '#6B5344', // Warm brown for secondary text
      light: 'rgba(255, 255, 255, 0.95)', // Light text on dark backgrounds
      muted: 'rgba(255, 255, 255, 0.8)',  // Muted light text
      faded: 'rgba(255, 255, 255, 0.6)',  // Faded light text
    },
    background: {
      white: '#FFFFFF',     // Pure white background
      light: '#FFF8F0',     // Warm off-white with cream tint
      subtle: '#FEF5EB',    // Very subtle cream background
    },
    border: {
      default: '#F4E8D0',   // Soft cream border
      light: 'rgba(255, 255, 255, 0.2)', // Light border on dark backgrounds
    },
    gradients: {
      hero: 'linear-gradient(135deg, #F5A623 0%, #E89B3C 100%)', // Golden orange to amber
      subtle: 'linear-gradient(180deg, #FFF8F0 0%, #FEF5EB 100%)', // Soft cream gradient
    },
    shadows: {
      light: 'rgba(0, 0, 0, 0.05)',
      medium: 'rgba(0, 0, 0, 0.1)',
      dark: 'rgba(0, 0, 0, 0.3)',
    },
  },
  'golden-hour': {
    name: 'Golden Hour',
    description: 'Energetic, optimistic, vibrant - more dynamic feel',
    primary: {
      blue: '#E89B3C',      // Rich Amber - saturated golden orange
      purple: '#8B6F47',    // Warm Brown - from the chickadee's wings
    },
    semantic: {
      success: '#33C759',
    },
    text: {
      primary: '#2B2B2B',
      secondary: '#6B5344',
      light: 'rgba(255, 255, 255, 0.95)',
      muted: 'rgba(255, 255, 255, 0.8)',
      faded: 'rgba(255, 255, 255, 0.6)',
    },
    background: {
      white: '#FFFFFF',
      light: '#FFF5E8',     // Warm peachy off-white
      subtle: '#FFEFD8',    // Peach-tinted subtle background
    },
    border: {
      default: '#FFDAA8',   // Peach border
      light: 'rgba(255, 255, 255, 0.2)',
    },
    gradients: {
      hero: 'linear-gradient(135deg, #E89B3C 0%, #8B6F47 100%)', // Golden orange to warm brown
      subtle: 'linear-gradient(180deg, #FFF5E8 0%, #FFEFD8 100%)', // Peachy gradient
    },
    shadows: {
      light: 'rgba(0, 0, 0, 0.05)',
      medium: 'rgba(0, 0, 0, 0.1)',
      dark: 'rgba(0, 0, 0, 0.3)',
    },
  },
  'autumn-comfort': {
    name: 'Autumn Comfort',
    description: 'Grounded, trustworthy, cozy - more mature and stable',
    primary: {
      blue: '#D97B29',      // Burnt Orange - deeper, earthier tone
      purple: '#6B5344',    // Chocolate Brown - rich, grounded brown
    },
    semantic: {
      success: '#33C759',
    },
    text: {
      primary: '#2B2B2B',
      secondary: '#6B5344',
      light: 'rgba(255, 255, 255, 0.95)',
      muted: 'rgba(255, 255, 255, 0.8)',
      faded: 'rgba(255, 255, 255, 0.6)',
    },
    background: {
      white: '#FFFFFF',
      light: '#FAF5F0',     // Warm wheat off-white
      subtle: '#F5EDE3',    // Soft wheat tan background
    },
    border: {
      default: '#E8D4B8',   // Wheat tan border
      light: 'rgba(255, 255, 255, 0.2)',
    },
    gradients: {
      hero: 'linear-gradient(135deg, #D97B29 0%, #6B5344 100%)', // Burnt orange to chocolate brown
      subtle: 'linear-gradient(180deg, #FAF5F0 0%, #F5EDE3 100%)', // Wheat gradient
    },
    shadows: {
      light: 'rgba(0, 0, 0, 0.05)',
      medium: 'rgba(0, 0, 0, 0.1)',
      dark: 'rgba(0, 0, 0, 0.3)',
    },
  },
  'tech-blue': {
    name: 'Tech Blue',
    description: 'Modern, professional, tech-forward - original blue theme',
    primary: {
      blue: '#0066EE',      // Main brand blue
      purple: '#9383FB',    // Accent purple
    },
    semantic: {
      success: '#33C759',
    },
    text: {
      primary: '#151824',   // Dark charcoal
      secondary: '#5A5A5A', // Medium gray
      light: 'rgba(255, 255, 255, 0.95)',
      muted: 'rgba(255, 255, 255, 0.8)',
      faded: 'rgba(255, 255, 255, 0.6)',
    },
    background: {
      white: '#FFFFFF',
      light: '#F8F9FA',     // Light gray
      subtle: '#FAFBFC',    // Very subtle gray
    },
    border: {
      default: '#EBEBF0',   // Default border
      light: 'rgba(255, 255, 255, 0.2)',
    },
    gradients: {
      hero: 'linear-gradient(135deg, #0066EE 0%, #9383FB 100%)', // Blue to purple
      subtle: 'linear-gradient(180deg, #C1E5F5 0%, #E8F6FC 100%)', // Light blue gradient
    },
    shadows: {
      light: 'rgba(0, 0, 0, 0.05)',
      medium: 'rgba(0, 0, 0, 0.1)',
      dark: 'rgba(0, 0, 0, 0.3)',
    },
  },
} as const;

/**
 * ACTIVE THEME - Change this to switch color palettes
 * Available: 'warm-caring' | 'golden-hour' | 'autumn-comfort' | 'tech-blue'
 */
export const ACTIVE_THEME: keyof typeof colorPalettes = 'warm-caring';

// Export all palettes and the active one
export const colors = colorPalettes[ACTIVE_THEME];
export const themes = colorPalettes;

/**
 * Generate CSS for a specific theme
 */
function generateThemeCSS(theme: typeof colorPalettes[keyof typeof colorPalettes]): string {
  return `
    --color-primary: ${theme.primary.blue};
    --color-accent: ${theme.primary.purple};
    --color-success: ${theme.semantic.success};
    --color-text: ${theme.text.primary};
    --color-text-light: ${theme.text.secondary};
    --color-text-on-dark: ${theme.text.light};
    --color-text-muted: ${theme.text.muted};
    --color-text-faded: ${theme.text.faded};
    --color-bg: ${theme.background.white};
    --color-bg-light: ${theme.background.light};
    --color-bg-subtle: ${theme.background.subtle};
    --color-border: ${theme.border.default};
    --color-border-light: ${theme.border.light};
    --gradient-hero: ${theme.gradients.hero};
    --gradient-subtle: ${theme.gradients.subtle};
    --shadow-color-light: ${theme.shadows.light};
    --shadow-color-medium: ${theme.shadows.medium};
    --shadow-color-dark: ${theme.shadows.dark};
  `.trim();
}

/**
 * Generate CSS for all themes
 * This creates :root[data-theme="..."] selectors for each theme
 * The :root prefix increases specificity to override the default :root styles
 */
export function generateAllThemesCSS(): string {
  return Object.entries(colorPalettes)
    .map(([key, theme]) => {
      return `:root[data-theme="${key}"] {\n  ${generateThemeCSS(theme)}\n}`;
    })
    .join('\n\n');
}

export default colors;
