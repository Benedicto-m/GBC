import React from 'react';
import { useSectionContent } from '../hooks/usePageContent';
import MarkdownRenderer from './MarkdownRenderer';

/**
 * Composant pour charger et afficher une section Markdown
 * @param {string} slug - Slug de la section
 * @param {Object} className - Classes CSS supplémentaires
 * @param {Object} renderOptions - Options de rendu personnalisées
 */
const MarkdownSection = ({ 
  slug, 
  className = '', 
  renderOptions = {},
  fallback = null 
}) => {
  const { content, frontmatter, loading, error } = useSectionContent(slug);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    );
  }

  if (error) {
    return fallback || (
      <div className="text-gray-500 text-sm">
        Section non disponible
      </div>
    );
  }

  if (!content) {
    return fallback || null;
  }

  return (
    <div className={`markdown-section ${className}`}>
      <MarkdownRenderer content={content} {...renderOptions} />
    </div>
  );
};

export default MarkdownSection;

