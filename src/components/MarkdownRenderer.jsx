import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

/**
 * Composant pour rendre du contenu Markdown en HTML stylisé
 * @param {string} content - Contenu Markdown à rendre
 * @param {Object} className - Classes CSS supplémentaires
 * @param {Object} components - Composants personnalisés pour le rendu
 */
const MarkdownRenderer = ({ 
  content, 
  className = '', 
  components = {},
  ...props 
}) => {
  const defaultComponents = {
    // Personnalisation des titres
    h1: ({ node, ...props }) => (
      <h1 className="text-4xl md:text-5xl font-display font-bold text-gbc-black mb-6 mt-8 first:mt-0" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-3xl md:text-4xl font-display font-bold text-gbc-black mb-5 mt-7" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-2xl md:text-3xl font-display font-semibold text-gbc-black mb-4 mt-6" {...props} />
    ),
    h4: ({ node, ...props }) => (
      <h4 className="text-xl md:text-2xl font-display font-semibold text-gbc-black mb-3 mt-5" {...props} />
    ),
    h5: ({ node, ...props }) => (
      <h5 className="text-lg md:text-xl font-bold text-gbc-black mb-2 mt-4" {...props} />
    ),
    h6: ({ node, ...props }) => (
      <h6 className="text-base md:text-lg font-bold text-gbc-black mb-2 mt-4" {...props} />
    ),
    
    // Paragraphes
    p: ({ node, ...props }) => (
      <p className="text-lg text-gray-600 mb-4 leading-relaxed font-sans" {...props} />
    ),
    
    // Listes
    ul: ({ node, ...props }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-600 font-sans" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-600 font-sans" {...props} />
    ),
    li: ({ node, ...props }) => (
      <li className="ml-4 text-lg leading-relaxed" {...props} />
    ),
    
    // Liens
    a: ({ node, ...props }) => (
      <a 
        className="text-gbc-blue hover:text-gbc-green underline transition-colors font-medium" 
        {...props} 
      />
    ),
    
    // Images
    img: ({ node, ...props }) => (
      <img 
        className="rounded-xl shadow-lg my-6 w-full h-auto object-cover" 
        {...props} 
      />
    ),
    
    // Code blocks
    code: ({ node, inline, ...props }) => {
      if (inline) {
        return (
          <code className="bg-gray-100 text-gbc-blue px-2 py-1 rounded text-sm font-mono" {...props} />
        );
      }
      return (
        <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm" {...props} />
      );
    },
    pre: ({ node, ...props }) => (
      <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto my-4" {...props} />
    ),
    
    // Citations
    blockquote: ({ node, ...props }) => (
      <blockquote 
        className="border-l-4 border-gbc-green pl-6 py-2 my-4 italic text-gray-700 bg-gbc-gray/50 rounded-r-lg" 
        {...props} 
      />
    ),
    
    // Tableaux
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-300 rounded-lg" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => (
      <thead className="bg-gbc-green text-white" {...props} />
    ),
    tbody: ({ node, ...props }) => (
      <tbody className="bg-white" {...props} />
    ),
    tr: ({ node, ...props }) => (
      <tr className="border-b border-gray-200 hover:bg-gray-50" {...props} />
    ),
    th: ({ node, ...props }) => (
      <th className="px-4 py-3 text-left font-bold" {...props} />
    ),
    td: ({ node, ...props }) => (
      <td className="px-4 py-3 border-b border-gray-200" {...props} />
    ),
    
    // Ligne horizontale
    hr: ({ node, ...props }) => (
      <hr className="my-8 border-t-2 border-gray-200" {...props} />
    ),
    
    // Texte en gras et italique
    strong: ({ node, ...props }) => (
      <strong className="font-bold text-gbc-black" {...props} />
    ),
    em: ({ node, ...props }) => (
      <em className="italic" {...props} />
    ),
    
    ...components,
  };

  if (!content) {
    return null;
  }

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={defaultComponents}
        {...props}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;

