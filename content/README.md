# Système de Gestion de Contenu Obsidian

Ce dossier contient tous les fichiers Markdown pour gérer le contenu du site web.

## Structure

- `pages/` - Contenu des pages principales
- `sections/` - Sections réutilisables
- `blog/` - Articles de blog (si nécessaire)
- `translations/` - Contenu multilingue

## Format des fichiers

Chaque fichier Markdown doit commencer par un frontmatter YAML :

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
---
```

## Utilisation avec Obsidian

1. Ouvrez ce dossier comme un vault Obsidian
2. Éditez les fichiers Markdown directement
3. Utilisez les fonctionnalités d'Obsidian :
   - Liens internes `[[nom-du-fichier]]`
   - Tags `#tag`
   - Notes de bas de page
   - Graph view pour voir les connexions

## Syntaxe Markdown supportée

- Titres (# ## ###)
- Listes (ordonnées et non ordonnées)
- Liens [texte](url)
- Images ![alt](url)
- Code blocks
- Tableaux
- Citations (>)
- Gras **texte** et italique *texte*


