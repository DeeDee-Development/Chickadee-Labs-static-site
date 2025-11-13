#!/usr/bin/env node

/**
 * Post-build script that restores any temporarily moved files
 * back to their original locations after the build completes.
 */

import { existsSync, renameSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('\n🔄 Restoring temporarily moved files...\n');

// Define files to restore
const FILES_TO_RESTORE = [
  {
    name: 'architecture.astro',
    backupPath: join(projectRoot, '.build-temp/architecture.astro'),
    targetPath: join(projectRoot, 'src/pages/architecture.astro'),
  },
  {
    name: 'architecture-diagram.ts',
    backupPath: join(projectRoot, '.build-temp/architecture-diagram.ts'),
    targetPath: join(projectRoot, 'src/scripts/architecture-diagram.ts'),
  },
];

let restoredCount = 0;

for (const file of FILES_TO_RESTORE) {
  if (existsSync(file.backupPath)) {
    renameSync(file.backupPath, file.targetPath);
    console.log(`✓ Restored ${file.name}`);
    restoredCount++;
  }
}

if (restoredCount === 0) {
  console.log('ℹ  No files needed to be restored');
} else {
  console.log(`\n✨ Restored ${restoredCount} file(s)\n`);
}
