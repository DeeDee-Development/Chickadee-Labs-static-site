# Feature Flags

This document explains how to control which features are included in the production build.

## Architecture Page

The architecture page (`/architecture`) contains a detailed system architecture diagram that is password-protected. You can completely enable or disable this page from being built.

### How to Enable/Disable

Edit `site.config.js`:

```typescript
export const siteConfig = {
  features: {
    // Set to true to ENABLE the architecture page
    // Set to false to DISABLE it completely
    enableArchitecturePage: false,  // ← Change this
  },
} as const;
```

### What Happens When Disabled

When `enableArchitecturePage: false`:
- ✅ The `/architecture` page is **not built** at all
- ✅ **No HTML** file is generated for the page
- ✅ **No JavaScript** code (including the 549KB Cytoscape library) is included in the build
- ✅ **No CSS** for the architecture page is in the build
- ✅ The page is **completely absent** from the deployed site
- ✅ The source files remain in your codebase for easy re-enabling

### What Happens When Enabled

When `enableArchitecturePage: true`:
- The `/architecture` page **is built** and accessible
- The page remains **password-protected** via the PasswordGate component
- All architecture diagram assets (JavaScript, CSS) are included in the build
- Users must enter the correct password to view the content

### Build Process

The build process automatically handles feature flags:

1. **Pre-build** (`npm run prebuild`): Temporarily moves disabled feature files out of `src/pages/`
2. **Build** (`npm run build`): Astro builds only the pages that are present
3. **Post-build** (`npm run postbuild`): Restores all files to their original locations

This ensures:
- Your source code stays intact
- Git commits aren't affected
- Disabled features have **zero** code in the final build

### Verification

To verify the architecture page is excluded from a build:

```bash
# Build the site
npm run build

# Check for architecture files (should return 0)
find dist -name "*architecture*" | wc -l

# Check for architecture mentions (should return 0)
grep -r "architecture" dist/ | wc -l
```

### Development Mode

In development mode (`npm run dev`), feature flags are **not enforced**. You can access all pages including disabled ones at:
- http://localhost:4321/architecture

This allows you to work on disabled features locally.

### Adding New Feature Flags

To add a new feature flag for another page:

1. Add the feature flag to `site.config.ts`
2. Add the page configuration to `scripts/prepare-build.js` in the `CONDITIONAL_PAGES` object
3. Add the corresponding restore paths to `scripts/restore-build.js`

## Security Note

Feature flags provide **build-time exclusion** - disabled features are not present in the deployed site at all. This is different from runtime feature flags which hide features but still include the code in the bundle.
