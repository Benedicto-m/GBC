import { useState, useEffect } from 'react';
import { parseMarkdown } from '../utils/markdownParser';
import { loadMarkdown } from '../utils/markdownLoader';

/**
 * Hook personnalisé pour charger et utiliser du contenu Markdown
 * @param {string|Object} source - Chemin du fichier ou contenu Markdown brut
 * @param {Object} options - Options de chargement
 * @returns {Object} - { content, frontmatter, loading, error }
 */
export function useMarkdownContent(source, options = {}) {
  const [content, setContent] = useState('');
  const [frontmatter, setFrontmatter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadContent() {
      setLoading(true);
      setError(null);

      try {
        let parsed = null;

        // Si source est une string, c'est un chemin de fichier
        if (typeof source === 'string') {
          // Essayer d'abord avec le loader Vite
          try {
            parsed = await loadMarkdown(source);
          } catch (loadError) {
            // Fallback: essayer avec fetch
            const response = await fetch(`/content/${source}`);
            if (!response.ok) {
              throw new Error(`Fichier non trouvé: ${source}`);
            }
            const text = await response.text();
            parsed = parseMarkdown(text);
          }
        }
        // Si source est un objet avec content, utiliser directement
        else if (source?.content) {
          parsed = parseMarkdown(source.content);
        }
        // Si source est déjà parsé
        else if (source?.frontmatter !== undefined) {
          parsed = source;
        }
        else {
          throw new Error('Format de source non supporté');
        }

        setContent(parsed.content || '');
        setFrontmatter(parsed.frontmatter || {});
      } catch (err) {
        console.error('Erreur lors du chargement du contenu Markdown:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, [source]);

  return {
    content,
    frontmatter,
    loading,
    error,
    metadata: {
      title: frontmatter.title || '',
      slug: frontmatter.slug || '',
      lang: frontmatter.lang || 'fr',
      description: frontmatter.meta?.description || '',
      keywords: frontmatter.meta?.keywords || '',
      tags: frontmatter.tags || [],
    },
  };
}

/**
 * Hook pour charger plusieurs fichiers Markdown
 * @param {Array<string>} sources - Tableau de chemins de fichiers
 * @returns {Object} - { contents, loading, error }
 */
export function useMultipleMarkdownContent(sources) {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAll() {
      setLoading(true);
      setError(null);

      try {
        const { loadMultipleMarkdown } = await import('../utils/markdownLoader');
        const results = await loadMultipleMarkdown(sources);
        setContents(results);
      } catch (err) {
        console.error('Erreur lors du chargement des contenus:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (sources && sources.length > 0) {
      loadAll();
    } else {
      setLoading(false);
    }
  }, [sources]);

  return { contents, loading, error };
}
