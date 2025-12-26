import matter from 'gray-matter';

/**
 * Parse un fichier Markdown avec frontmatter
 * @param {string} markdownContent - Le contenu Markdown brut
 * @returns {Object} - Objet avec data (frontmatter) et content (markdown)
 */
export function parseMarkdown(markdownContent) {
  try {
    const { data, content } = matter(markdownContent);
    return {
      frontmatter: data || {},
      content: content.trim(),
    };
  } catch (error) {
    console.error('Erreur lors du parsing Markdown:', error);
    return {
      frontmatter: {},
      content: markdownContent,
    };
  }
}

/**
 * Charge un fichier Markdown depuis le système de fichiers
 * @param {string} path - Chemin relatif vers le fichier depuis content/
 * @returns {Promise<Object>} - Objet avec frontmatter et content
 */
export async function loadMarkdownFile(path) {
  try {
    // En développement, on peut utiliser import.meta.glob de Vite
    // Pour la production, les fichiers seront importés statiquement
    const response = await fetch(`/content/${path}`);
    if (!response.ok) {
      throw new Error(`Fichier non trouvé: ${path}`);
    }
    const text = await response.text();
    return parseMarkdown(text);
  } catch (error) {
    console.error(`Erreur lors du chargement de ${path}:`, error);
    return {
      frontmatter: {},
      content: '',
    };
  }
}

/**
 * Extrait les métadonnées d'un fichier Markdown
 * @param {string} markdownContent - Le contenu Markdown brut
 * @returns {Object} - Métadonnées extraites
 */
export function extractMetadata(markdownContent) {
  const { frontmatter } = parseMarkdown(markdownContent);
  return {
    title: frontmatter.title || '',
    slug: frontmatter.slug || '',
    lang: frontmatter.lang || 'fr',
    description: frontmatter.meta?.description || '',
    keywords: frontmatter.meta?.keywords || '',
    tags: frontmatter.tags || [],
    date: frontmatter.date || null,
    author: frontmatter.author || '',
    ...frontmatter,
  };
}

