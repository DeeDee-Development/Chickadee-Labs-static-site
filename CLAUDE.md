# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Chickadee-Labs-static-site is a static website built with Astro, designed with clean, minimal, modern aesthetics.

## Technology Stack
- **Static Site Generator**: Astro 5.x
- **Language**: TypeScript (strict mode)
- **Deployment**: GitHub Pages via GitHub Actions
- **Design Philosophy**: Clean, minimal, modern (see Design Guide)

## Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:4321)
npm run build        # Build for production (includes type checking)
npm run preview      # Preview production build locally
```

## Design & Content Guidelines

**Design Inspiration**: MyFitnessPal, YAZIO (simplified), WaterMinder

**Skills**:
1. **`.claude/skills/design-guide.md`** - Design principles, layouts, spacing
2. **`.claude/skills/content-messaging.md`** - Writing style, tone, messaging

**Design Approach**: Clean, minimal, modern with generous whitespace and clear hierarchy

**Content Voice**: Plain English, direct and actionable, family-centered care

## Project Structure
```
src/
  ├── pages/          # Route pages (.astro files)
  ├── layouts/        # Page layouts
  ├── components/     # Reusable components
  └── styles/         # Global styles
public/               # Static assets
```

## GitHub Pages Configuration
- **Site URL**: https://yaakovbressler.github.io/Chickadee-Labs-static-site
- **Base path**: `/Chickadee-Labs-static-site` (configured in astro.config.mjs)
- **Deployment**: Automatic via GitHub Actions on push to main branch

## Development Notes
- Astro ships zero JavaScript by default for optimal performance
- TypeScript is configured in strict mode for type safety
- Use Astro components (.astro) for pages and layouts
- Invoke the design-guide skill when making design decisions
- Global styles use CSS variables (design tokens) in `src/styles/global.css`
- Color scheme: Primary blue #0066EE, accent purple #9383FB (from MyFitnessPal inspiration)

## File Structure
```
src/
  ├── pages/          # index.astro (homepage)
  ├── layouts/        # BaseLayout.astro (header, footer, base HTML)
  ├── components/     # Reusable components (add as needed)
  └── styles/         # global.css (design tokens and base styles)
public/               # favicon.svg and static assets
.github/workflows/    # deploy.yml (GitHub Actions for deployment)
```

## Deployment
The site automatically deploys to GitHub Pages when you push to the main branch.

**First-time setup**: Enable GitHub Pages in repository settings:
1. Go to Settings > Pages
2. Under "Build and deployment" > Source: Select "GitHub Actions"
3. The workflow will run automatically on next push

Site will be live at: https://yaakovbressler.github.io/Chickadee-Labs-static-site
