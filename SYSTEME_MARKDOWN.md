# 📝 Système de Gestion de Contenu avec Obsidian - Vue d'Ensemble

## 🎯 Objectif

Ce système permet d'éditer le contenu du site web directement depuis **Obsidian** en utilisant des fichiers Markdown. C'est un CMS (Content Management System) headless basé sur Markdown.

## 🏗️ Architecture

```
┌─────────────────┐
│   Obsidian      │  ← Éditeur de contenu
│   (content/)    │
└────────┬────────┘
         │
         │ Fichiers .md
         │
┌────────▼────────┐
│  Parser MD      │  ← Parse frontmatter + contenu
│  (markdownParser)│
└────────┬────────┘
         │
         │ { content, frontmatter }
         │
┌────────▼────────┐
│  React Hooks    │  ← Chargement asynchrone
│  (useMarkdown)  │
└────────┬────────┘
         │
         │ JSX
         │
┌────────▼────────┐
│  Renderer       │  ← Rendu avec styles Tailwind
│  (MarkdownRenderer)│
└─────────────────┘
```

## 📦 Composants Principaux

### 1. **Parsing** (`src/utils/markdownParser.js`)
- Parse les fichiers Markdown avec frontmatter YAML
- Extrait les métadonnées (title, slug, tags, etc.)

### 2. **Chargement** (`src/utils/markdownLoader.js`)
- Charge les fichiers Markdown de manière statique (Vite)
- Fallback avec fetch pour le développement
- Support des imports multiples

### 3. **Hooks React** (`src/hooks/useMarkdownContent.js`)
- `useMarkdownContent(source)` - Charge un fichier
- `useMultipleMarkdownContent(sources)` - Charge plusieurs fichiers
- Gestion du loading et des erreurs

### 4. **Composants** 
- `MarkdownRenderer` - Rendu basique du Markdown
- `MarkdownContent` - Composant complet avec chargement automatique

## 🚀 Utilisation

### Méthode 1: Composant Simple (Recommandé)

```jsx
import MarkdownContent from '../components/MarkdownContent';

function MyPage() {
  return <MarkdownContent source="pages/home.md" />;
}
```

### Méthode 2: Hook Personnalisé

```jsx
import { useMarkdownContent } from '../hooks/useMarkdownContent';
import MarkdownRenderer from '../components/MarkdownRenderer';

function MyPage() {
  const { content, metadata, loading } = useMarkdownContent('pages/home.md');
  
  if (loading) return <div>Chargement...</div>;
  
  return (
    <div>
      <h1>{metadata.title}</h1>
      <MarkdownRenderer content={content} />
    </div>
  );
}
```

### Méthode 3: Intégration dans une Page Existante

```jsx
import MarkdownContent from '../components/MarkdownContent';

function HomePage() {
  return (
    <>
      <Hero title="Accueil" />
      
      {/* Section avec contenu Markdown */}
      <section className="py-12">
        <MarkdownContent source="sections/mission.md" />
      </section>
      
      {/* Autres sections... */}
    </>
  );
}
```

## 📁 Structure des Fichiers

```
content/
├── pages/              # Pages principales
│   ├── home.md
│   ├── about.md
│   └── ...
├── sections/           # Sections réutilisables
│   ├── mission.md
│   └── ...
├── blog/              # Articles (optionnel)
└── .obsidian/         # Configuration Obsidian
    ├── app.json
    └── workspace.json
```

## 🔧 Configuration

### Vite (`vite.config.js`)
- Plugin personnalisé pour servir les fichiers Markdown en développement
- Alias `@content` pour accès facile
- Copie automatique vers `public/content/` lors du build

### Scripts (`package.json`)
- `npm run dev` - Développement avec hot-reload
- `npm run build` - Build avec copie automatique des fichiers MD
- `npm run copy-content` - Copie manuelle des fichiers MD

## 🎨 Styles

Le `MarkdownRenderer` applique automatiquement les styles Tailwind :
- Titres avec classes `font-display`, `font-bold`
- Paragraphes avec `text-gray-600`, `leading-relaxed`
- Liens avec `text-gbc-blue`, `hover:text-gbc-green`
- Code blocks avec `bg-gray-900`, `text-gray-100`
- Etc.

## 🌍 Multilingue

Le système supporte le multilingue via le frontmatter :

```yaml
---
title: Titre en français
slug: page
lang: fr
---
```

Pour plusieurs langues, créez des fichiers séparés :
- `pages/home.fr.md`
- `pages/home.en.md`

## 🔄 Workflow

1. **Édition** : Éditez les fichiers `.md` dans Obsidian
2. **Sauvegarde** : Les fichiers sont sauvegardés dans `content/`
3. **Développement** : Vite détecte les changements automatiquement
4. **Production** : Les fichiers sont copiés vers `public/content/` lors du build

## 📚 Fonctionnalités Obsidian

- ✅ **Liens internes** : `[[nom-fichier]]` crée des liens entre fichiers
- ✅ **Tags** : `#tag` pour organiser le contenu
- ✅ **Graph View** : Visualisez les connexions entre fichiers
- ✅ **Notes de bas de page** : `[^1]` pour les références
- ✅ **Live Preview** : Voir le rendu en temps réel

## 🛠️ Dépendances

- `react-markdown` - Rendu Markdown en React
- `remark-gfm` - Support GitHub Flavored Markdown
- `remark-breaks` - Support des sauts de ligne
- `gray-matter` - Parsing du frontmatter YAML

## 📖 Documentation

- **Guide complet** : `CONTENT_GUIDE.md`
- **Démarrage rapide** : `README_OBSIDIAN.md`
- **Exemples** : `src/examples/MarkdownExample.jsx`
- **Page d'exemple** : `src/pages/HomeWithMarkdown.jsx`

## ✅ Avantages

1. **Édition facile** : Interface Obsidian intuitive
2. **Versioning** : Les fichiers MD sont versionnés avec Git
3. **Pas de base de données** : Tout est dans des fichiers
4. **Flexibilité** : Structure libre, pas de schéma imposé
5. **Performance** : Contenu statique, chargement rapide
6. **Collaboration** : Plusieurs personnes peuvent éditer en parallèle

## 🎯 Prochaines Étapes

1. Ouvrez Obsidian et configurez le vault dans `content/`
2. Éditez les fichiers d'exemple existants
3. Créez vos propres pages dans `content/pages/`
4. Intégrez le contenu dans vos composants React
5. Personnalisez les styles si nécessaire

## ❓ Support

Pour toute question, consultez :
- `CONTENT_GUIDE.md` pour la documentation détaillée
- Les exemples dans `src/examples/`
- Les fichiers d'exemple dans `content/pages/`


