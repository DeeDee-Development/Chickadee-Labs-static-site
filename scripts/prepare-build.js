#!/usr/bin/env node

/**
 * Pre-build script that conditionally excludes feature-flagged pages
 * from the build based on site configuration.
 *
 * This ensures that disabled features have ZERO code in the final build.
 */

import { existsSync, mkdirSync, renameSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Import site config (we'll use dynamic import to handle ESM)
const { siteConfig } = await import('../site.config.ts');

// Define pages that can be conditionally excluded
const CONDITIONAL_PAGES = {
  architecture: {
    enabled: siteConfig.features.enableArchitecturePage,
    sourcePath: join(projectRoot, 'src/pages/architecture.astro'),
    backupPath: join(projectRoot, '.build-temp/architecture.astro'),
    scriptPath: join(projectRoot, 'src/scripts/architecture-diagram.ts'),
    scriptBackupPath: join(projectRoot, '.build-temp/architecture-diagram.ts'),
  },
};

console.log('🔧 Preparing build with feature flags...\n');

// Create temp directory if it doesn't exist
const tempDir = join(projectRoot, '.build-temp');
if (!existsSync(tempDir)) {
  mkdirSync(tempDir, { recursive: true });
}

// Process each conditional page
for (const [pageName, config] of Object.entries(CONDITIONAL_PAGES)) {
  if (!config.enabled) {
    console.log(`❌ Feature disabled: ${pageName}`);
    console.log(`   Excluding from build...`);

    // Move page file out of src/pages if it exists
    if (existsSync(config.sourcePath)) {
      renameSync(config.sourcePath, config.backupPath);
      console.log(`   ✓ Moved ${pageName}.astro to .build-temp/`);
    }

    // Move associated script file if it exists
    if (config.scriptPath && existsSync(config.scriptPath)) {
      renameSync(config.scriptPath, config.scriptBackupPath);
      console.log(`   ✓ Moved ${pageName} script to .build-temp/`);
    }

    console.log(`   → Page will NOT be in the build\n`);
  } else {
    console.log(`✅ Feature enabled: ${pageName}`);
    console.log(`   Including in build...`);

    // Restore page file if it was backed up
    if (existsSync(config.backupPath)) {
      renameSync(config.backupPath, config.sourcePath);
      console.log(`   ✓ Restored ${pageName}.astro`);
    }

    // Restore associated script file if it was backed up
    if (config.scriptBackupPath && existsSync(config.scriptBackupPath)) {
      renameSync(config.scriptBackupPath, config.scriptPath);
      console.log(`   ✓ Restored ${pageName} script`);
    }

    console.log(`   → Page will be in the build\n`);
  }
}

console.log('✨ Build preparation complete!\n');
