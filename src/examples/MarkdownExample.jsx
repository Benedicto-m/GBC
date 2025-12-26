import React from 'react';
import MarkdownContent from '../components/MarkdownContent';
import SectionTitle from '../components/SectionTitle';

/**
 * Exemple d'utilisation du système Markdown
 * Ce composant montre comment utiliser MarkdownContent dans vos pages
 */
const MarkdownExample = () => {
  return (
    <div className="container-custom py-12">
      <SectionTitle 
        title="Exemple d'utilisation Markdown" 
        subtitle="Comment intégrer le contenu Markdown dans vos pages"
      />
      
      {/* Exemple 1: Charger une page complète */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Page complète</h2>
        <MarkdownContent source="pages/home.md" />
      </section>

      {/* Exemple 2: Charger une section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Section réutilisable</h2>
        <MarkdownContent source="sections/mission.md" />
      </section>

      {/* Exemple 3: Utilisation avec options personnalisées */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Avec classes personnalisées</h2>
        <MarkdownContent 
          source="pages/about.md"
          className="bg-gbc-gray p-8 rounded-xl"
        />
      </section>
    </div>
  );
};

export default MarkdownExample;

