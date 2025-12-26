# Guide d'Utilisation du Système de Gestion de Contenu Obsidian

Ce guide explique comment utiliser le système de gestion de contenu basé sur Obsidian et Markdown pour éditer le site web.

## 📁 Structure des Fichiers

```
content/
├── pages/          # Pages principales du site
│   ├── home.md
│   ├── about.md
│   └── ...
├── sections/       # Sections réutilisables
│   ├── mission.md
│   └── ...
├── blog/          # Articles de blog (optionnel)
└── translations/  # Contenu multilingue (optionnel)
```

## 🚀 Configuration Obsidian

1. **Ouvrir le dossier `content/` comme vault Obsidian**
   - Ouvrez Obsidian
   - Cliquez sur "Ouvrir un dossier comme vault"
   - Sélectionnez le dossier `content/`

2. **Les paramètres Obsidian sont déjà configurés** dans `.obsidian/`
   - Mode Live Preview activé
   - Liens Markdown activés
   - Support du français et anglais

## ✍️ Format des Fichiers Markdown

Chaque fichier doit commencer par un **frontmatter YAML** :

```yaml
---
title: Titre de la page
slug: page-slug
lang: fr
meta:
  description: Description pour le SEO
  keywords: mots, clés, séparés, par, virgules
tags:
  - tag1
  - tag2
  - tag3
date: 2024-01-01
author: Nom de l'auteur
---
```

### Champs du Frontmatter

- **title** (requis) : Titre de la page
- **slug** (requis) : Identifiant unique de la page
- **lang** (optionnel) : Langue du contenu (fr, en)
- **meta.description** : Description pour le SEO
- **meta.keywords** : Mots-clés pour le SEO
- **tags** : Tags pour l'organisation
- **date** : Date de publication
- **author** : Auteur du contenu

## 📝 Syntaxe Markdown Supportée

### Titres
```markdown
# Titre 1
## Titre 2
### Titre 3
```

### Texte
```markdown
**Gras** et *italique*
```

### Listes
```markdown
- Item 1
- Item 2
  - Sous-item

1. Premier
2. Deuxième
```

### Liens
```markdown
[Texte du lien](https://url.com)
[[Lien interne Obsidian]]
```

### Images
```markdown
![Description](chemin/vers/image.jpg)
```

### Citations
```markdown
> Ceci est une citation
```

### Code
````markdown
```javascript
const code = "exemple";
```
````

### Tableaux
```markdown
| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Donnée 1  | Donnée 2  |
```

## 🔗 Utilisation dans React

### Méthode 1: Composant MarkdownContent

```jsx
import MarkdownContent from '../components/MarkdownContent';

function MyPage() {
  return (
    <MarkdownContent source="pages/home.md" />
  );
}
```

### Méthode 2: Hook useMarkdownContent

```jsx
import { useMarkdownContent } from '../hooks/useMarkdownContent';
import MarkdownRenderer from '../components/MarkdownRenderer';

function MyPage() {
  const { content, frontmatter, loading, metadata } = useMarkdownContent('pages/home.md');
  
  if (loading) return <div>Chargement...</div>;
  
  return (
    <div>
      <h1>{metadata.title}</h1>
      <MarkdownRenderer content={content} />
    </div>
  );
}
```

### Méthode 3: Charger plusieurs fichiers

```jsx
import { useMultipleMarkdownContent } from '../hooks/useMarkdownContent';

function MyPage() {
  const { contents, loading } = useMultipleMarkdownContent([
    'pages/home.md',
    'sections/mission.md'
  ]);
  
  return (
    <div>
      {contents.map((item, index) => (
        <MarkdownRenderer key={index} content={item.content} />
      ))}
    </div>
  );
}
```

## 🎨 Personnalisation du Rendu

Le composant `MarkdownRenderer` peut être personnalisé :

```jsx
<MarkdownRenderer 
  content={content}
  components={{
    h1: ({ node, ...props }) => (
      <h1 className="custom-class" {...props} />
    ),
    p: ({ node, ...props }) => (
      <p className="custom-paragraph" {...props} />
    )
  }}
/>
```

## 🔄 Workflow de Développement

1. **Éditer dans Obsidian**
   - Ouvrez Obsidian
   - Éditez les fichiers `.md` dans le dossier `content/`
   - Utilisez les fonctionnalités d'Obsidian (liens, tags, graph view)

2. **Voir les changements**
   - Les fichiers sont automatiquement rechargés en développement
   - Le serveur Vite détecte les changements

3. **Build pour production**
   - Exécutez `npm run build`
   - Les fichiers Markdown sont copiés vers `public/content/`
   - Le site est prêt pour le déploiement

## 📚 Fonctionnalités Obsidian Utiles

### Liens Internes
```markdown
[[nom-du-fichier]] - Crée un lien vers un autre fichier Markdown
```

### Tags
```markdown
#tag - Crée un tag pour organiser le contenu
```

### Notes de Bas de Page
```markdown
Texte[^1] avec une note

[^1]: Contenu de la note
```

### Graph View
- Visualisez les connexions entre vos fichiers
- Accessible via le panneau latéral dans Obsidian

## 🛠️ Commandes Utiles

```bash
# Développement
npm run dev

# Build (copie automatiquement les fichiers Markdown)
npm run build

# Copier manuellement les fichiers Markdown
npm run copy-content
```

## 📖 Exemples

Consultez les fichiers d'exemple dans :
- `content/pages/home.md` - Exemple de page complète
- `content/pages/about.md` - Exemple avec structure complexe
- `content/sections/mission.md` - Exemple de section réutilisable

## ❓ Dépannage

### Les fichiers ne se chargent pas
- Vérifiez que les fichiers sont dans `content/`
- Vérifiez le chemin dans le composant React
- Assurez-vous que le frontmatter est correct

### Les styles ne s'appliquent pas
- Vérifiez que Tailwind CSS est configuré
- Les classes sont appliquées automatiquement par `MarkdownRenderer`

### Obsidian ne détecte pas les fichiers
- Vérifiez que vous avez ouvert le bon dossier comme vault
- Redémarrez Obsidian si nécessaire

## 🎯 Bonnes Pratiques

1. **Organisation** : Utilisez des dossiers pour organiser vos fichiers
2. **Noms de fichiers** : Utilisez des noms descriptifs en minuscules avec tirets
3. **Frontmatter** : Toujours inclure title et slug
4. **Tags** : Utilisez des tags cohérents pour faciliter l'organisation
5. **Liens** : Utilisez les liens internes d'Obsidian pour créer des connexions
6. **Images** : Stockez les images dans `content/attachments/` ou `src/components/img/`


