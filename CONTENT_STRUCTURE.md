# Structure du Contenu Markdown

Ce document décrit la structure complète du système de gestion de contenu basé sur Markdown et Obsidian.

## 📁 Organisation des Fichiers

```
content/
├── pages/              # Pages principales du site
│   ├── home.fr.md      # Page d'accueil (français)
│   ├── home.en.md      # Page d'accueil (anglais)
│   ├── about.fr.md     # Page à propos
│   ├── productions.fr.md
│   ├── apiculture.fr.md
│   ├── transformation.fr.md
│   ├── contact.fr.md
│   └── ...
├── sections/           # Sections réutilisables
│   ├── mission.fr.md
│   ├── mission.en.md
│   └── ...
└── .obsidian/          # Configuration Obsidian
```

## 📝 Format des Fichiers

### Frontmatter YAML

Chaque fichier Markdown doit commencer par un frontmatter YAML :

```yaml
---
title: Titre de la page
slug: page-slug
lang: fr
type: page
meta:
  description: Description pour le SEO
  keywords: mots, clés, séparés
tags:
  - tag1
  - tag2
sections:
  - section1
  - section2
---
```

### Champs du Frontmatter

#### Pages (`type: page`)

- **title** (requis) : Titre principal de la page
- **slug** (requis) : Identifiant unique (ex: "home", "about")
- **lang** (requis) : Langue du contenu (fr, en)
- **type** : Type de contenu (page, section)
- **meta.description** : Description pour le SEO
- **meta.keywords** : Mots-clés pour le SEO
- **tags** : Tags pour l'organisation
- **sections** : Liste des sections à charger

#### Sections (`type: section`)

- **title** : Titre de la section
- **slug** : Identifiant unique
- **lang** : Langue
- **type** : "section"

## 🔄 Système de Chargement

### Par Langue

Le système charge automatiquement le fichier selon la langue :

1. `pages/home.fr.md` (si langue = fr)
2. `pages/home.en.md` (si langue = en)
3. `pages/home.md` (fallback)

### Utilisation dans React

#### Méthode 1: Hook usePageContent

```jsx
import { usePageContent } from '../hooks/usePageContent';
import MarkdownRenderer from '../components/MarkdownRenderer';

function MyPage() {
  const { content, metadata, loading } = usePageContent('home');
  
  if (loading) return <div>Chargement...</div>;
  
  return (
    <div>
      <h1>{metadata.title}</h1>
      <MarkdownRenderer content={content} />
    </div>
  );
}
```

#### Méthode 2: Composant MarkdownContent

```jsx
import MarkdownContent from '../components/MarkdownContent';

function MyPage() {
  return <MarkdownContent source="pages/home.fr.md" />;
}
```

#### Méthode 3: Section Réutilisable

```jsx
import MarkdownSection from '../components/MarkdownSection';

function MyPage() {
  return <MarkdownSection slug="mission" />;
}
```

## 📚 Pages Disponibles

### home
- **Fichier** : `content/pages/home.fr.md`
- **Slug** : `home`
- **Sections** : mission, sectors, cultures, stats, cta

### about
- **Fichier** : `content/pages/about.fr.md`
- **Slug** : `about`
- **Sections** : intro, vision, positioning, foundation, growth, values, sectors, vision2025

### productions
- **Fichier** : `content/pages/productions.fr.md`
- **Slug** : `productions`
- **Contenu** : Liste des produits agricoles

### apiculture
- **Fichier** : `content/pages/apiculture.fr.md`
- **Slug** : `apiculture`
- **Contenu** : Informations sur l'apiculture

### transformation
- **Fichier** : `content/pages/transformation.fr.md`
- **Slug** : `transformation`
- **Status** : strategic (axe stratégique)

### contact
- **Fichier** : `content/pages/contact.fr.md`
- **Slug** : `contact`
- **Contenu** : Coordonnées et formulaire

## 🔧 Sections Réutilisables

### mission
- **Fichier** : `content/sections/mission.fr.md`
- **Usage** : Section mission réutilisable sur plusieurs pages

## ✏️ Édition dans Obsidian

1. Ouvrez Obsidian
2. Ouvrez le dossier `content/` comme vault
3. Naviguez vers `pages/` ou `sections/`
4. Éditez les fichiers `.md`
5. Les changements sont automatiquement détectés

## 🌍 Multilingue

Pour ajouter une version anglaise :

1. Créez `content/pages/home.en.md`
2. Utilisez le même frontmatter avec `lang: en`
3. Traduisez le contenu
4. Le système charge automatiquement selon la langue sélectionnée

## 📖 Exemples

### Page Simple

```markdown
---
title: Ma Page
slug: ma-page
lang: fr
type: page
---

# Titre Principal

Contenu de la page...
```

### Section Réutilisable

```markdown
---
title: Ma Section
slug: ma-section
type: section
lang: fr
---

## Titre de Section

Contenu de la section...
```

## 🎯 Bonnes Pratiques

1. **Nommage** : Utilisez des noms descriptifs en minuscules avec tirets
2. **Frontmatter** : Toujours inclure title, slug, lang
3. **Organisation** : Gardez les pages dans `pages/`, sections dans `sections/`
4. **Liens** : Utilisez les liens internes Obsidian `[[nom-fichier]]`
5. **Tags** : Utilisez des tags cohérents pour l'organisation

## 🔄 Workflow

1. **Édition** : Éditez dans Obsidian
2. **Sauvegarde** : Les fichiers sont sauvegardés automatiquement
3. **Développement** : Vite détecte les changements (hot-reload)
4. **Build** : Les fichiers sont copiés vers `public/content/` lors du build

## ❓ Dépannage

### Le contenu ne se charge pas
- Vérifiez que le fichier existe dans `content/pages/` ou `content/sections/`
- Vérifiez le format du frontmatter (YAML valide)
- Vérifiez le slug dans le code React

### Les styles ne s'appliquent pas
- Les styles sont appliqués automatiquement par `MarkdownRenderer`
- Vérifiez que Tailwind CSS est configuré

### Obsidian ne détecte pas les fichiers
- Vérifiez que vous avez ouvert le bon dossier comme vault
- Redémarrez Obsidian si nécessaire

