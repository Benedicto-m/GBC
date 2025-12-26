# 🚀 Système de Gestion de Contenu avec Obsidian

Ce projet utilise **Obsidian** comme éditeur de contenu pour gérer le site web avec des fichiers Markdown.

## ⚡ Démarrage Rapide

### 1. Configuration Obsidian

1. Installez [Obsidian](https://obsidian.md/) si ce n'est pas déjà fait
2. Ouvrez Obsidian
3. Cliquez sur "Ouvrir un dossier comme vault"
4. Sélectionnez le dossier `content/` de ce projet

### 2. Éditer le Contenu

1. Ouvrez les fichiers `.md` dans Obsidian
2. Éditez le contenu directement
3. Les changements sont automatiquement détectés par Vite en développement

### 3. Structure Recommandée

```
content/
├── pages/          # Pages principales
│   ├── home.md
│   ├── about.md
│   └── ...
├── sections/       # Sections réutilisables
│   └── mission.md
└── blog/          # Articles (optionnel)
```

## 📝 Format des Fichiers

Chaque fichier Markdown doit commencer par un frontmatter YAML :

```yaml
---
title: Titre de la page
slug: page-slug
lang: fr
meta:
  description: Description SEO
  keywords: mots, clés
tags:
  - tag1
  - tag2
---
```

## 💻 Utilisation dans le Code

### Composant Simple

```jsx
import MarkdownContent from '../components/MarkdownContent';

function MyPage() {
  return <MarkdownContent source="pages/home.md" />;
}
```

### Hook Personnalisé

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

## 🎨 Fonctionnalités

- ✅ Support complet du Markdown (GFM)
- ✅ Frontmatter YAML pour les métadonnées
- ✅ Liens internes Obsidian `[[fichier]]`
- ✅ Tags `#tag`
- ✅ Styles Tailwind CSS automatiques
- ✅ Multilingue (fr/en)
- ✅ SEO avec métadonnées

## 📚 Documentation Complète

Consultez [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) pour la documentation complète.

## 🔧 Commandes

```bash
# Développement
npm run dev

# Build (copie automatiquement les fichiers Markdown)
npm run build

# Copier manuellement les fichiers Markdown
npm run copy-content
```

## 🎯 Exemples

- `content/pages/home.md` - Page d'accueil
- `content/pages/about.md` - Page à propos
- `content/sections/mission.md` - Section mission

## ❓ Besoin d'Aide ?

Consultez le guide complet dans `CONTENT_GUIDE.md` ou les exemples dans `src/examples/`.


