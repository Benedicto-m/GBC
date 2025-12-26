import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownContent from '../components/MarkdownContent';
import Hero from '../components/Hero';
import { useLanguage } from '../context/LanguageContext';

/**
 * Page générique pour afficher du contenu Markdown
 * Utilise le slug de l'URL pour charger le fichier correspondant
 */
const MarkdownPage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  
  // Construire le chemin du fichier Markdown
  const markdownPath = `pages/${slug || 'home'}.md`;

  return (
    <>
      <MarkdownContent 
        source={markdownPath}
        className="container-custom py-12"
      />
    </>
  );
};

export default MarkdownPage;

