# 🚀 Démarrage Rapide : Git Automatique dans Obsidian

## 📋 En 3 Étapes Simples

### ✅ Étape 1 : Installer le Plugin (2 minutes)

1. **Ouvrez Obsidian**
2. Appuyez sur **`Ctrl+,`** (ou `Cmd+,` sur Mac) pour ouvrir les paramètres
3. Dans le menu de gauche, cliquez sur **"Community plugins"**
4. **Désactivez "Safe mode"** si activé (bouton en haut)
5. Cliquez sur **"Browse"** pour ouvrir la bibliothèque de plugins
6. Dans la barre de recherche, tapez : **"Obsidian Git"**
7. Cliquez sur le plugin **"Obsidian Git"** par Vincent Tam
8. Cliquez sur **"Install"**
9. Cliquez sur **"Enable"** pour activer le plugin

### ✅ Étape 2 : Configurer le Plugin (1 minute)

1. Toujours dans les paramètres, trouvez **"Obsidian Git"** dans la liste des plugins
2. Cliquez dessus pour ouvrir les paramètres
3. Configurez ces options :

```
✅ Vault backup interval (minutes) : 20
✅ Auto push : Activé
✅ Pull before push : Activé  
✅ Auto pull on startup : Activé
```

4. Fermez les paramètres

### ✅ Étape 3 : Tester (30 secondes)

1. Modifiez un fichier dans `content/pages/` (ex: `home.fr.md`)
2. Sauvegardez (Ctrl+S)
3. Appuyez sur **`Ctrl+P`** pour ouvrir la commande
4. Tapez : **"Obsidian Git: Create backup"**
5. Appuyez sur **Entrée**
6. Vérifiez que le commit et push sont effectués

## 🎉 C'est Fait !

Maintenant, Obsidian va **automatiquement** :
- ✅ Faire un commit toutes les 20 minutes
- ✅ Push automatiquement vers votre dépôt Git
- ✅ Récupérer les changements au démarrage

## 📝 Commandes Utiles

Appuyez sur **`Ctrl+P`** puis tapez :

- **"Obsidian Git: Create backup"** - Commit et push manuel
- **"Obsidian Git: Pull"** - Récupérer les changements
- **"Obsidian Git: Push"** - Envoyer les changements
- **"Obsidian Git: Show diff"** - Voir les différences

## 🔧 Configuration Avancée

Pour plus de détails, consultez :
- **`GUIDE_GIT_OBSIDIAN.md`** - Guide complet
- **`SETUP_GIT_OBSIDIAN.md`** - Configuration détaillée

## ❓ Problèmes Courants

### Le plugin ne s'installe pas
→ Vérifiez que "Safe mode" est **désactivé**

### Erreur "Git not found"
→ Installez Git : https://git-scm.com/downloads

### Erreur de push
→ Vérifiez que le remote est configuré :
```bash
git remote -v
```

### Commits trop fréquents
→ Augmentez l'intervalle dans les paramètres (ex: 30 ou 60 minutes)

## 🎯 Résumé

1. ✅ Installer "Obsidian Git"
2. ✅ Activer le plugin
3. ✅ Configurer : 20 min, Auto push ON
4. ✅ Tester avec "Create backup"
5. ✅ Profiter des commits automatiques !

