/**
 * Script pour copier les fichiers Markdown de content/ vers public/content/
 * À exécuter avant le build pour que les fichiers soient disponibles en production
 */

import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

function copyRecursive(src, dest) {
  const stats = statSync(src);
  
  if (stats.isDirectory()) {
    // Créer le dossier de destination
    mkdirSync(dest, { recursive: true });
    
    // Copier tous les fichiers et dossiers
    const entries = readdirSync(src);
    for (const entry of entries) {
      // Ignorer les dossiers .obsidian et autres fichiers cachés
      if (entry.startsWith('.') && entry !== '.gitkeep') {
        continue;
      }
      
      const srcPath = join(src, entry);
      const destPath = join(dest, entry);
      copyRecursive(srcPath, destPath);
    }
  } else {
    // Copier le fichier
    const destDir = dirname(dest);
    mkdirSync(destDir, { recursive: true });
    copyFileSync(src, dest);
  }
}

const srcDir = join(rootDir, 'content');
const destDir = join(rootDir, 'public', 'content');

console.log('Copie des fichiers Markdown...');
console.log(`Source: ${srcDir}`);
console.log(`Destination: ${destDir}`);

try {
  copyRecursive(srcDir, destDir);
  console.log('✅ Fichiers Markdown copiés avec succès!');
} catch (error) {
  console.error('❌ Erreur lors de la copie:', error);
  process.exit(1);
}


