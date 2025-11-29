# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Chickadee-Labs-static-site is the marketing website for Chickadee Health (part of the DeeDee ecosystem). Built with Astro for optimal performance - ships zero JavaScript by default.

## Technology Stack

- **Framework**: Astro 5.x (static site generator)
- **Language**: TypeScript (strict mode)
- **Deployment**: GitHub Pages via GitHub Actions
- **Domain**: https://chickadee.family

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production (includes type checking)
npm run preview      # Preview production build locally
```

## Project Structure

```
src/
  ├── pages/           # Route pages (.astro files)
  ├── layouts/         # BaseLayout.astro (header, footer, SEO)
  ├── components/      # Reusable components (PasswordGate.astro)
  ├── config/          # Configuration (colors.ts)
  ├── scripts/         # TypeScript modules (sms-opt-in.ts)
  └── styles/          # CSS (global.css, sms-opt-in.css)
public/                # Static assets (favicon, images, CNAME)
scripts/               # Build scripts (prepare-build.js, restore-build.js)
.github/workflows/     # deploy.yml (GitHub Actions)
.claude/skills/        # Claude Code skills
site.config.js         # Feature flags
```

## Skills Reference

The `.claude/skills/` directory contains specialized guidance:

1. **`design-guide.md`** - Visual design system, color themes, typography, spacing
2. **`content-messaging.md`** - Writing style, tone, plain English principles
3. **`data-inspired-narrative-content.md`** - Data visualization + narrative storytelling (Apple Health-inspired)
4. **`interactive-data-visualizations.md`** - Interactive/expandable metric cards (stub - in progress)

**When to invoke skills:**
- Use `design-guide` for any visual/styling decisions
- Use `content-messaging` when writing copy or page content
- Use `data-inspired-narrative-content` when building data dashboards or metric displays

## Color Theming System

**Theme Configuration:**
- Color palettes are centralized in `src/config/colors.ts`
- Active theme is set in `src/layouts/BaseLayout.astro` via the `THEME` constant (line ~10)
- Themes are applied via `data-theme` attribute on `<html>` element

**Available Themes:**
- `warm-caring` - Golden orange, nurturing
- `golden-hour` - Rich amber, energetic (current default)
- `autumn-comfort` - Burnt orange, grounded
- `tech-blue` - Blue/purple, professional (MyFitnessPal-inspired)

**How to Switch Themes:**
1. Open `src/layouts/BaseLayout.astro`
2. Change `const THEME = 'golden-hour'` to desired theme
3. Hot reload applies the new theme instantly

**Important:** Always use CSS variables (`var(--color-primary)`) - never hardcode hex values.

## Feature Flags

Some pages can be conditionally excluded from production builds.

**Configuration:** `site.config.js`
```javascript
features: {
  enableArchitecturePage: false,  // /architecture page
}
```

**How It Works:**
- `scripts/prepare-build.js` runs before build, moves disabled pages to `.build-temp/`
- `scripts/restore-build.js` runs after build, restores files for local development
- Disabled pages have ZERO code in the final production build

## External Integrations

### Tally Forms
Forms are embedded via Tally.so iframes:
- **Contact form:** `https://tally.so/embed/Gxxekp` (contact.astro)
- **Waitlist:** `https://tally.so/r/q445pY` (multiple pages)

Include `<script src="https://tally.so/widgets/embed.js"></script>` for dynamic height.

### DeeDee Backend API
The SMS opt-in form (`/sms-opt-in/`) communicates with the DeeDee backend:
- **Local dev:** `http://localhost:8000`
- **Production:** Cloud Run URL (configured via `PUBLIC_API_URL` env var)
- **Endpoint:** `POST /api/v1/opt-in`

See `src/scripts/sms-opt-in.ts` for implementation.

### SEO Integrations
- **Sitemap:** Auto-generated via `@astrojs/sitemap` at `/sitemap-index.xml`
- **Robots.txt:** Auto-generated via `astro-robots-txt`
- **Meta tags:** Handled by `astro-seo` in BaseLayout

## Component Patterns

### Page Structure
All pages follow this pattern:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Page Title | Chickadee Health"
  description="SEO description"
  simpleNav={true}  // Optional: simplified nav for secondary pages
>
  <!-- Page content -->
</BaseLayout>
```

### BaseLayout Props
- `title` - Page title (defaults to main SEO title)
- `description` - Meta description
- `simpleNav` - Boolean to hide nav links (for legal/secondary pages)
- `image` - OG image path (defaults to /og-image.png)
- `noindex` - Boolean to exclude from search engines

### CSS Conventions
- Use CSS variables from global.css (`var(--space-lg)`, `var(--font-size-xl)`)
- Fluid sizing via `clamp()` is preferred over media query overrides
- Scoped styles in `<style>` blocks within .astro files
- Separate CSS files only for complex pages (e.g., `sms-opt-in.css`)

## Development Workflow

### Adding a New Page
1. Create `src/pages/page-name.astro`
2. Import and wrap with `BaseLayout`
3. Set appropriate `title`, `description`, `simpleNav` props
4. Add to footer navigation in `BaseLayout.astro` if needed

### Changing the Color Theme
1. Edit `src/layouts/BaseLayout.astro`
2. Change `const THEME = 'golden-hour'` to desired theme
3. Available: `warm-caring`, `golden-hour`, `autumn-comfort`, `tech-blue`

### Adding External Forms
Use Tally.so iframes with `data-tally-src` attribute for lazy loading.

## Claude Code Plugins

Enabled plugins (see `.claude/settings.json`):
- **frontend-design** - Production-grade frontend interface generation
- **feature-dev** - Guided feature development with architecture focus

## Related Projects (DeeDee Ecosystem)

This site is the marketing/public website for Chickadee Health (part of DeeDee).

**Related Repositories:**
- `~/Documents/GitHub/DeeDee-Prototype` - iOS app (Swift 6.0, SwiftUI, SwiftData)
- `~/Documents/GitHub/DeeDee-Backend` - Backend API (FastAPI, MongoDB, Telnyx SMS)

The SMS opt-in form on this site connects to DeeDee-Backend.

### Product Features Reference (for messaging accuracy)

When writing marketing copy, these are the actual iOS app capabilities:

**Health Monitoring Tiles** (what users see in the app):
- Risks, Mobility, Activity, Rest, Vitals, Fatigue, Environmental

**Data Sources** (from Apple Watch + iPhone via HealthKit):
- Walking speed, gait patterns, step count
- Sleep stages and quality
- Heart rate variability
- Active energy and exercise minutes

**Key Differentiator**: DeeDee predicts fall risk days/weeks ahead using pattern analysis. It is NOT a fall detection system (which alerts after a fall). Marketing copy should emphasize "prevention" and "early warning," not "detection."

**Terminology**:
- "Flock" = family care network (the people receiving alerts)
- Plain English required: See `content-messaging` skill for translation guidelines

## Deployment

The site automatically deploys to GitHub Pages when you push to the main branch.

**First-time setup**: Enable GitHub Pages in repository settings:
1. Go to Settings > Pages
2. Under "Build and deployment" > Source: Select "GitHub Actions"
3. Configure custom domain: chickadee.family (creates CNAME file)

Site is live at: https://chickadee.family
