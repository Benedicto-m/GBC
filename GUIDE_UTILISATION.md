# 🚀 Guide d'Utilisation - Système de Gestion de Contenu Obsidian

## 📋 Vue d'Ensemble

Tout le contenu éditable du site web est maintenant dans le dossier `content/` et peut être modifié directement depuis **Obsidian**.

## 🎯 Configuration Initiale

### 1. Installer Obsidian

Téléchargez et installez [Obsidian](https://obsidian.md/) si ce n'est pas déjà fait.

### 2. Ouvrir le Vault

1. Ouvrez Obsidian
2. Cliquez sur "Ouvrir un dossier comme vault"
3. Naviguez vers le dossier `content/` de votre projet
4. Sélectionnez-le et ouvrez-le

### 3. Vérifier la Configuration

La configuration Obsidian est déjà en place dans `.obsidian/`. Vous devriez voir :
- Mode Live Preview activé
- Liens Markdown activés
- Support du français

## ✏️ Éditer le Contenu

### Pages Principales

Les pages principales sont dans `content/pages/` :

- **home.fr.md** - Page d'accueil
- **about.fr.md** - Page à propos
- **productions.fr.md** - Page des productions
- **apiculture.fr.md** - Page apiculture
- **transformation.fr.md** - Page transformation
- **contact.fr.md** - Page contact

### Sections Réutilisables

Les sections réutilisables sont dans `content/sections/` :

- **mission.fr.md** - Section mission

### Format d'Édition

Chaque fichier commence par un **frontmatter YAML** :

```yaml
---
title: Titre de la page
slug: page-slug
lang: fr
meta:
  description: Description SEO
  keywords: mots, clés
---
```

Ensuite, écrivez votre contenu en **Markdown** :

```markdown
# Titre Principal

**Texte en gras** et *texte en italique*

## Sous-titre

- Liste à puces
- Item 2

1. Liste numérotée
2. Item 2
```

## 🔄 Workflow de Développement

### 1. Éditer dans Obsidian

1. Ouvrez Obsidian
2. Naviguez vers le fichier à éditer (ex: `pages/home.fr.md`)
3. Modifiez le contenu
4. Sauvegardez (Ctrl+S ou automatique)

### 2. Voir les Changements

En développement :

```bash
npm run dev
```

Les changements sont automatiquement détectés et rechargés dans le navigateur.

### 3. Build pour Production

```bash
npm run build
```

Les fichiers Markdown sont automatiquement copiés vers `public/content/` pour la production.

## 📚 Structure Complète

```
content/
├── pages/              # Pages principales
│   ├── home.fr.md
│   ├── about.fr.md
│   ├── productions.fr.md
│   ├── apiculture.fr.md
│   ├── transformation.fr.md
│   └── contact.fr.md
├── sections/           # Sections réutilisables
│   └── mission.fr.md
└── .obsidian/          # Configuration Obsidian
    ├── app.json
    └── workspace.json
```

## 🎨 Fonctionnalités Markdown

### Titres

```markdown
# Titre 1
## Titre 2
### Titre 3
```

### Formatage

```markdown
**Gras** et *Italique*
```

### Listes

```markdown
- Item 1
- Item 2

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

## 🌍 Ajouter une Langue

Pour ajouter une version anglaise :

1. Créez `content/pages/home.en.md`
2. Copiez le contenu de `home.fr.md`
3. Traduisez le contenu
4. Changez `lang: fr` en `lang: en` dans le frontmatter

Le système charge automatiquement selon la langue sélectionnée.

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev

# Build (copie automatiquement les fichiers MD)
npm run build

# Copier manuellement les fichiers Markdown
npm run copy-content
```

## 📖 Documentation Complète

- **CONTENT_GUIDE.md** - Guide complet du système
- **CONTENT_STRUCTURE.md** - Structure détaillée des fichiers
- **SYSTEME_MARKDOWN.md** - Vue d'ensemble technique
- **README_OBSIDIAN.md** - Démarrage rapide

## ❓ Questions Fréquentes

### Comment ajouter une nouvelle page ?

1. Créez un fichier dans `content/pages/` (ex: `nouvelle-page.fr.md`)
2. Ajoutez le frontmatter avec title, slug, lang
3. Écrivez le contenu en Markdown
4. Créez la route dans `src/App.jsx` si nécessaire

### Comment modifier une section existante ?

1. Ouvrez le fichier dans Obsidian
2. Modifiez le contenu Markdown
3. Sauvegardez
4. Les changements apparaissent automatiquement

### Les changements ne s'affichent pas ?

1. Vérifiez que le serveur de développement est lancé (`npm run dev`)
2. Vérifiez que le fichier est bien sauvegardé
3. Rechargez la page dans le navigateur
4. Vérifiez la console pour les erreurs

### Comment ajouter des images ?

1. Placez les images dans `src/components/img/`
2. Utilisez le chemin relatif dans Markdown : `![alt](../img/image.jpg)`
3. Ou utilisez les imports existants dans le code React

## 🎯 Exemples

### Modifier la Page d'Accueil

1. Ouvrez `content/pages/home.fr.md` dans Obsidian
2. Modifiez le contenu après le frontmatter
3. Sauvegardez
4. Voir les changements dans le navigateur

### Ajouter une Section

1. Créez `content/sections/ma-section.fr.md`
2. Ajoutez le frontmatter
3. Écrivez le contenu
4. Utilisez `<MarkdownSection slug="ma-section" />` dans React

## ✅ Checklist

- [ ] Obsidian installé
- [ ] Vault ouvert dans `content/`
- [ ] Fichiers Markdown créés
- [ ] Frontmatter configuré
- [ ] Contenu écrit
- [ ] Serveur de développement lancé
- [ ] Changements visibles dans le navigateur

## 🆘 Support

Pour toute question ou problème :
1. Consultez la documentation dans les fichiers `.md`
2. Vérifiez les exemples dans `content/pages/`
3. Consultez les composants dans `src/components/`

