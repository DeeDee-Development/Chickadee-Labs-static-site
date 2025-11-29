---
name: design-guide
description: Visual design system for Chickadee Health static site. Covers color themes, typography, spacing, and layout patterns inspired by MyFitnessPal, YAZIO, and WaterMinder. Use when making design decisions, choosing colors, styling components, implementing themes, or creating UI elements.
---

# Design Guide Skill

## Design Philosophy

**Goal**: Create a clean, minimal, modern website that prioritizes clarity and user focus.

**PRIMARY Inspiration Sources**:
- [**MyFitnessPal**](https://www.myfitnesspal.com/): Beautiful layout, clean and easy
- [**YAZIO**](https://www.yazio.com/en): Clean and modern (but simplified - avoid "too much going on")
- [**WaterMinder**](https://waterminder.com/): Modern, dynamic, clever

## Detailed Design Analysis from Inspiration Sites

### From MyFitnessPal (Beautiful, Clean, Easy)

**Visual Hierarchy**:
- Progressive disclosure model - stack content vertically with clear section breaks
- Each feature gets dedicated real estate with accompanying imagery
- Phone mockups, lifestyle photography, and icons create visual breathing room
- Prevents cognitive overload

**Color Palette**:
- MyFitnessPal uses vibrant blue (#0066EE) and purple (#9383FB)
- This color scheme is available as the **'tech-blue' theme** in `src/config/colors.ts`
- Currently using **'warm-caring' theme** with golden orange from chickadee logo
- All themes maintain restrained palettes to avoid visual noise

**Typography**:
- **Font family**: Inter (contemporary, geometric feel)
- **Large display**: 48-68px for headlines (emphasizes key messages)
- **Body copy**: 16px, ensures legibility
- **Font weights**: 600-700 for headers, 400 for body (creates distinction)
- Clear hierarchy without introducing multiple typeface families

**Spacing & Grid**:
- Consistent 16px/20px padding and margin units establish rhythm
- Desktop layouts shift to 2-column grids
- Mobile maintains single-column flow
- Whitespace around CTAs prevents interaction overwhelm

**Micro-interactions**:
- Subtle transitions (150-300ms cubic-bezier curves)
- On buttons and accordions
- Add polish without distraction
- "Patient, unhurried visual communication"

### From YAZIO (Clean, Modern, Simple)

**What Works**:
- **Modular card layouts** for features (Easy Tracking, Barcode Scanner, etc.)
- **Subtle imagery** that complements, doesn't dominate - phone mockups support content
- **Minimal navigation** keeping focus on primary actions
- **Cool blues and whites** as primary colors - trustworthy, health-focused
- **Soft greens** for checkmarks and positive elements
- **Gradient backgrounds** (#C1E5F5 to #E8F6FC) - clean, professional tone
- Large, readable headlines with generous whitespace between sections
- Ample line-height prevents visual fatigue
- Horizontal spacers break content into digestible chunks

**What to Avoid** (Too Much Going On):
- Repetitive CTAs (they had 6+ app store badges - too pushy)
- Don't need script density or aggressive tracking
- Keep it simple on the backend

### From WaterMinder (Modern, Dynamic, Clever)

**Visual Aesthetic**:
- **Minimalist, health-focused** design
- Premium yet accessible
- Generous whitespace and clean typography
- Focus on core functionality over decoration

**Color & Theme**:
- **Dual-theme system** (light/dark modes) - modern pattern
- Light variant: high contrast with subtle blues/teals (suggests hydration)
- Dark mode reduces eye strain
- Mirrors contemporary app design (iOS/macOS ecosystems)

**Layout**:
- **Hero-first structure**: prominent app screenshots, immediate CTAs
- Then progressive feature revelation
- Consistent grid alignment
- Alternating image/text blocks create visual rhythm without monotony

**Typography**:
- **Bold, sans-serif typefaces** (likely system fonts)
- Highly readable body copy
- Generous vertical rhythm - substantial margins between sections
- Prevents cognitive overload during scrolling

**Modern/Dynamic Elements**:
- **Animated particles** (via particles.js) - subtle, not overwhelming
- **Responsive imagery** with theme variants built-in
- **Progressive disclosure**: FAQs, reviews, features unfold as you scroll (don't overwhelm on entry)
- **Cross-device visualization**: Watch, phone, iPad, Mac mockups show ecosystem

**Clever Details**:
- **Leverages platform conventions** (Apple's design language) rather than fighting them
- Feels native to ecosystem while maintaining distinct branding
- Consistent visual patterns and mascot characters

## Core Design Principles (Synthesized)

### 1. Visual Hierarchy & Layout
- **Progressive disclosure**: Stack content vertically with clear section breaks
- **Hero-first structure**: Prominent opening with immediate value prop, then progressive feature revelation
- **Generous whitespace**: Prevent cognitive overload, create breathing room
- **Modular card layouts**: Each feature/content block gets dedicated space
- **Alternating image/text blocks**: Create visual rhythm without monotony
- **Grid-based responsive**: 2-column desktop, single-column mobile

### 2. Color Palette

**IMPORTANT**: Color palettes are centralized in `src/config/colors.ts` and are **NOT fixed**. The active theme can be changed by updating the `ACTIVE_THEME` variable.

**Available Color Themes** (in `src/config/colors.ts`):

1. **'warm-caring'** (currently active) - Approachable, friendly, nurturing
   - Primary: Golden Orange (#F5A623) from chickadee logo
   - Accent: Deep Charcoal (#2B2B2B)
   - Warm cream backgrounds and borders

2. **'golden-hour'** - Energetic, optimistic, vibrant
   - Primary: Rich Amber (#E89B3C)
   - Accent: Warm Brown (#8B6F47)
   - Peachy backgrounds

3. **'autumn-comfort'** - Grounded, trustworthy, cozy
   - Primary: Burnt Orange (#D97B29)
   - Accent: Chocolate Brown (#6B5344)
   - Wheat-toned backgrounds

4. **'tech-blue'** - Modern, professional, tech-forward
   - Primary: Vibrant blue (#0066EE)
   - Accent: Purple (#9383FB)
   - Cool gray backgrounds

**How to Use Colors**:
- Always reference CSS variables (e.g., `var(--color-primary)`) rather than hardcoded hex values
- All colors are automatically mapped to CSS variables from the active theme
- Switch themes by changing `ACTIVE_THEME` in `src/config/colors.ts`
- Each theme includes: primary colors, text colors, backgrounds, borders, gradients, and shadows

**Color Philosophy**:
- **Semantic colors**: Success green (#33C759) across all themes
- **Neutrals**: Each theme has custom text, background, and border colors
- **Gradients**: Hero and subtle gradients tailored to each theme
- **Restraint**: 2-3 main colors to maintain focus without visual noise

### 3. Typography
- **Font family**: Inter (or similar modern, geometric sans-serif)
- **Hierarchy**:
  - Large display: 48-68px, bold (headlines, key messages)
  - Body: 16-18px, regular (readability)
  - Font weight variation: 600-700 headers, 400 body
- **Line height**: 1.5-1.6 (ample spacing, prevents fatigue)
- **Single font family**: Use weight/size variation instead of multiple typefaces

### 4. Spacing & Rhythm
- **Consistent units**: 16px/20px base padding and margins
- **Generous vertical rhythm**: Substantial margins between sections
- **Horizontal spacers**: Break content into digestible chunks
- **Whitespace around CTAs**: Prevent interaction overwhelm
- **Mobile-first responsive methodology**

### 5. Interactions & Motion
- **Subtle transitions**: 150-300ms cubic-bezier curves
- **Animated particles**: Sparingly (particles.js style) - add interest without distraction
- **Hover states**: Clear visual feedback
- **Progressive enhancement**: Core content works without JavaScript
- **Patient, unhurried communication**: Don't rush the user

### 6. Navigation & CTAs
- **Minimal navigation**: Keep focus on primary content and actions
- **Clear, non-repetitive CTAs**: Avoid excessive duplication
- **Immediate value**: Hero section should have clear primary CTA
- **Whitespace around buttons**: Visual breathing room

### 7. Imagery & Visual Elements
- **Complementary, not dominant**: Images support content, don't overpower
- **Phone mockups**: Show app in context (like all three inspiration sites)
- **Lifestyle photography**: Optional, if used should be subtle
- **Icons**: Support feature descriptions
- **Responsive imagery**: Theme variants if using dark mode
- **Platform conventions**: Leverage familiar patterns (iOS/macOS design language if appropriate)

### 8. Modern Features
- **Optional dark mode**: Light theme primary, dark theme optional
- **Smooth scrolling**: Progressive disclosure as user scrolls
- **Cross-device visualization**: Show app on iPhone, iPad, Watch
- **Gradient hero sections**: Modern, eye-catching but professional

## Anti-Patterns to Avoid

❌ **Too much going on**: Repetitive CTAs (6+ app store badges), visual noise, aggressive tracking
❌ **Dense layouts**: Cramped spacing, overwhelming information dumps
❌ **Heavy JavaScript**: Keep it fast, accessible, performant
❌ **Multiple font families**: Stick to one, use weight/size for hierarchy
❌ **Distracting animations**: Motion should be purposeful and subtle
❌ **Decoration over function**: Every element should serve a purpose

## Decision Framework

When making design choices, ask:
1. **Does this add clarity or clutter?**
2. **Is there enough whitespace/breathing room?**
3. **Does this follow the established visual hierarchy?**
4. **Would this feel at home on MyFitnessPal, YAZIO (simplified), or WaterMinder?**
5. **Is the interaction subtle and purposeful?**
6. **Does it maintain the "patient, unhurried" communication style?**

## Implementation Notes

### Color System
- **Source of truth**: `src/config/colors.ts` contains all color palettes
- **Always use CSS variables**: Reference `var(--color-primary)`, never hardcode hex values
- **Theme switching**: Change `ACTIVE_THEME` in `src/config/colors.ts` to switch entire site theme
- **Available themes**: 'warm-caring', 'golden-hour', 'autumn-comfort', 'tech-blue'
- **CSS variables**: Automatically generated and mapped in `src/styles/global.css`

### General Implementation
- Prefer CSS over JavaScript for animations when possible
- Use semantic HTML for accessibility
- Ensure responsive design from the start (mobile-first)
- Test on multiple devices/screen sizes
- Keep page weight low for fast loading
- Consider particles.js for subtle background animation
- Use Inter font (or system font fallback)
- Implement proper focus states for keyboard navigation
- Ensure 4.5:1 contrast ratio minimum (WCAG AA)

## Related Skills

- [`content-messaging`](./content-messaging.md) - Writing tone, copy guidelines, plain English principles
- [`data-inspired-narrative-content`](./data-inspired-narrative-content/SKILL.md) - Data visualization with narrative storytelling
