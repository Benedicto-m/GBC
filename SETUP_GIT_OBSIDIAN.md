# ⚡ Configuration Rapide : Git Automatique dans Obsidian

## 🎯 Configuration en 5 Minutes

### 1. Installer le Plugin (2 min)

1. Ouvrez Obsidian
2. `Ctrl+,` → **Community plugins**
3. Désactivez **Safe mode**
4. Cliquez **Browse**
5. Recherchez **"Obsidian Git"**
6. Cliquez **Install** puis **Enable**

### 2. Configurer Git (1 min)

Ouvrez un terminal dans le dossier du projet :

```bash
# Vérifier si Git est initialisé
git status

# Si pas initialisé :
git init

# Configurer Git (si pas déjà fait)
git config user.name "Votre Nom"
git config user.email "votre.email@example.com"
```

### 3. Configurer le Plugin (2 min)

Dans Obsidian :

1. `Ctrl+,` → **Obsidian Git** (sous Community plugins)
2. Configurez :
   - ✅ **Vault backup interval** : `20` minutes
   - ✅ **Auto push** : `Activé`
   - ✅ **Pull before push** : `Activé`
   - ✅ **Auto pull on startup** : `Activé`

### 4. Tester (30 sec)

1. Modifiez un fichier dans `content/pages/`
2. Attendez 20 minutes OU
3. `Ctrl+P` → Tapez "Obsidian Git: Create backup"
4. Vérifiez que le commit et push fonctionnent

## ✅ C'est Tout !

Maintenant, Obsidian va automatiquement :
- ✅ Faire un commit toutes les 20 minutes
- ✅ Push automatiquement vers le dépôt
- ✅ Récupérer les changements au démarrage

## 🔧 Configuration Avancée

Voir `GUIDE_GIT_OBSIDIAN.md` pour la configuration complète.

## 🐛 Problème ?

### Le plugin ne s'installe pas
→ Vérifiez que "Safe mode" est désactivé

### Erreur de push
→ Vérifiez que le remote Git est configuré :
```bash
git remote -v
```

### Commits trop fréquents
→ Augmentez l'intervalle dans les paramètres du plugin

