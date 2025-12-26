import React from 'react';
import { useMarkdownContent } from '../hooks/useMarkdownContent';
import MarkdownRenderer from './MarkdownRenderer';

/**
 * Composant complet pour charger et afficher du contenu Markdown
 * @param {string} source - Chemin du fichier Markdown (relatif à content/)
 * @param {Object} className - Classes CSS supplémentaires
 * @param {Object} renderOptions - Options de rendu personnalisées
 */
const MarkdownContent = ({ 
  source, 
  className = '', 
  renderOptions = {},
  fallback = null 
}) => {
  const { content, frontmatter, loading, error, metadata } = useMarkdownContent(source);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gbc-green mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du contenu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
        <h3 className="text-red-800 font-bold mb-2">Erreur de chargement</h3>
        <p className="text-red-600">{error}</p>
        {fallback && <div className="mt-4">{fallback}</div>}
      </div>
    );
  }

  if (!content) {
    return fallback || (
      <div className="text-center text-gray-500 py-12">
        <p>Aucun contenu disponible</p>
      </div>
    );
  }

  return (
    <div className={`markdown-wrapper ${className}`}>
      {metadata.title && (
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gbc-black mb-4">
            {metadata.title}
          </h1>
          {metadata.description && (
            <p className="text-xl text-gray-600 font-sans">{metadata.description}</p>
          )}
        </div>
      )}
      <MarkdownRenderer content={content} {...renderOptions} />
      {metadata.tags && metadata.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {metadata.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gbc-green/10 text-gbc-green rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MarkdownContent;


