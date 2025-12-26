import { useState, useEffect } from 'react';
import { loadPageContent, loadSectionContent } from '../utils/contentLoader';
import { useLanguage } from '../context/LanguageContext';

/**
 * Hook pour charger le contenu d'une page
 * @param {string} slug - Slug de la page
 * @returns {Object} - { content, frontmatter, metadata, loading, error }
 */
export function usePageContent(slug) {
  const { language } = useLanguage();
  const [content, setContent] = useState('');
  const [frontmatter, setFrontmatter] = useState({});
  const [metadata, setMetadata] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);

      try {
        const result = await loadPageContent(slug, language);
        setContent(result.content);
        setFrontmatter(result.frontmatter);
        setMetadata(result.metadata);
      } catch (err) {
        console.error(`Erreur lors du chargement de la page ${slug}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      load();
    }
  }, [slug, language]);

  return {
    content,
    frontmatter,
    metadata,
    loading,
    error,
  };
}

/**
 * Hook pour charger une section
 * @param {string} slug - Slug de la section
 * @returns {Object} - { content, frontmatter, loading, error }
 */
export function useSectionContent(slug) {
  const { language } = useLanguage();
  const [content, setContent] = useState('');
  const [frontmatter, setFrontmatter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);

      try {
        const result = await loadSectionContent(slug, language);
        setContent(result.content);
        setFrontmatter(result.frontmatter);
      } catch (err) {
        console.error(`Erreur lors du chargement de la section ${slug}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      load();
    }
  }, [slug, language]);

  return {
    content,
    frontmatter,
    loading,
    error,
  };
}

