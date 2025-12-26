/**
 * Chargeur de fichiers Markdown utilisant import.meta.glob de Vite
 * Ce système permet de charger les fichiers Markdown de manière statique
 */

import { parseMarkdown } from './markdownParser';

// Import de tous les fichiers Markdown depuis content/ avec ?raw
const markdownModules = import.meta.glob('/content/**/*.md', { 
  eager: false,
  query: '?raw',
  import: 'default'
});

/**
 * Charge un fichier Markdown par son chemin relatif depuis content/
 * @param {string} path - Chemin relatif (ex: "pages/home.md")
 * @returns {Promise<Object>} - { content, frontmatter }
 */
export async function loadMarkdown(path) {
  // Normaliser le chemin
  const normalizedPath = path.replace(/\\/g, '/');
  const fullPath = `/content/${normalizedPath}`;
  
  // Chercher le module correspondant
  const moduleKey = Object.keys(markdownModules).find(key => {
    const normalizedKey = key.replace(/\\/g, '/');
    return normalizedKey === fullPath || normalizedKey.endsWith(`/${normalizedPath}`);
  });

  if (!moduleKey) {
    // Fallback: essayer avec fetch
    try {
      const response = await fetch(`/content/${normalizedPath}`);
      if (response.ok) {
        const text = await response.text();
        return parseMarkdown(text);
      }
    } catch (fetchError) {
      console.warn(`Fichier Markdown non trouvé: ${path}`, fetchError);
    }
    
    return {
      content: '',
      frontmatter: {},
    };
  }

  try {
    const module = await markdownModules[moduleKey]();
    const rawContent = typeof module === 'string' ? module : module.default || '';
    
    // Parser le frontmatter
    return parseMarkdown(rawContent);
  } catch (error) {
    console.error(`Erreur lors du chargement de ${path}:`, error);
    // Fallback avec fetch
    try {
      const response = await fetch(`/content/${normalizedPath}`);
      if (response.ok) {
        const text = await response.text();
        return parseMarkdown(text);
      }
    } catch (fetchError) {
      // Ignorer l'erreur de fallback
    }
    return {
      content: '',
      frontmatter: {},
    };
  }
}

/**
 * Liste tous les fichiers Markdown disponibles
 * @param {string} pattern - Pattern de recherche (ex: "pages/**")
 * @returns {Array<string>} - Liste des chemins
 */
export function listMarkdownFiles(pattern = '**/*.md') {
  return Object.keys(markdownModules)
    .map(key => key.replace('/content/', '').replace(/\\/g, '/'))
    .filter(path => {
      // Filtrer selon le pattern si fourni
      if (pattern === '**/*.md') return true;
      const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
      return regex.test(path);
    });
}

/**
 * Charge plusieurs fichiers Markdown
 * @param {Array<string>} paths - Tableau de chemins
 * @returns {Promise<Array<Object>>} - Tableau de { content, frontmatter }
 */
export async function loadMultipleMarkdown(paths) {
  const promises = paths.map(path => loadMarkdown(path));
  return Promise.all(promises);
}

