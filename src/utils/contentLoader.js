/**
 * Chargeur de contenu intelligent qui charge les fichiers Markdown
 * selon la langue et le type de contenu
 */

import { loadMarkdown } from './markdownLoader';

/**
 * Charge le contenu d'une page selon la langue
 * @param {string} slug - Slug de la page (ex: "home", "about")
 * @param {string} lang - Langue (fr, en)
 * @returns {Promise<Object>} - { content, frontmatter, metadata }
 */
export async function loadPageContent(slug, lang = 'fr') {
  const path = `pages/${slug}.${lang}.md`;
  
  try {
    const result = await loadMarkdown(path);
    return {
      ...result,
      metadata: {
        title: result.frontmatter.title || '',
        slug: result.frontmatter.slug || slug,
        lang: result.frontmatter.lang || lang,
        description: result.frontmatter.meta?.description || '',
        keywords: result.frontmatter.meta?.keywords || '',
        tags: result.frontmatter.tags || [],
        ...result.frontmatter,
      },
    };
  } catch (error) {
    console.warn(`Page ${slug}.${lang}.md non trouvée, tentative avec ${slug}.md`);
    // Fallback: essayer sans la langue
    try {
      const fallbackPath = `pages/${slug}.md`;
      const result = await loadMarkdown(fallbackPath);
      return {
        ...result,
        metadata: {
          title: result.frontmatter.title || '',
          slug: result.frontmatter.slug || slug,
          lang: result.frontmatter.lang || lang,
          description: result.frontmatter.meta?.description || '',
          keywords: result.frontmatter.meta?.keywords || '',
          tags: result.frontmatter.tags || [],
          ...result.frontmatter,
        },
      };
    } catch (fallbackError) {
      console.error(`Erreur lors du chargement de ${slug}:`, fallbackError);
      return {
        content: '',
        frontmatter: {},
        metadata: {
          title: '',
          slug,
          lang,
          description: '',
          keywords: '',
          tags: [],
        },
      };
    }
  }
}

/**
 * Charge une section réutilisable
 * @param {string} slug - Slug de la section (ex: "mission")
 * @param {string} lang - Langue (fr, en)
 * @returns {Promise<Object>} - { content, frontmatter }
 */
export async function loadSectionContent(slug, lang = 'fr') {
  const path = `sections/${slug}.${lang}.md`;
  
  try {
    return await loadMarkdown(path);
  } catch (error) {
    // Fallback: essayer sans la langue
    try {
      const fallbackPath = `sections/${slug}.md`;
      return await loadMarkdown(fallbackPath);
    } catch (fallbackError) {
      console.error(`Erreur lors du chargement de la section ${slug}:`, fallbackError);
      return {
        content: '',
        frontmatter: {},
      };
    }
  }
}

/**
 * Charge plusieurs sections
 * @param {Array<string>} slugs - Tableau de slugs de sections
 * @param {string} lang - Langue (fr, en)
 * @returns {Promise<Array<Object>>} - Tableau de { content, frontmatter }
 */
export async function loadMultipleSections(slugs, lang = 'fr') {
  const promises = slugs.map(slug => loadSectionContent(slug, lang));
  return Promise.all(promises);
}

