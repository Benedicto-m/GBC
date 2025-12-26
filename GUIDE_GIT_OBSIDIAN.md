# 🔄 Guide : Commit et Push Automatique avec Obsidian Git

Ce guide explique comment configurer Obsidian pour faire des commits et pushes Git automatiques directement depuis l'éditeur.

## 📦 Étape 1 : Installer le Plugin Obsidian Git

### Méthode 1 : Depuis Obsidian (Recommandé)

1. Ouvrez Obsidian
2. Allez dans **Settings** (⚙️) ou appuyez sur `Ctrl+,`
3. Dans le menu de gauche, cliquez sur **Community plugins**
4. Assurez-vous que **Safe mode** est désactivé
5. Cliquez sur **Browse** pour ouvrir la bibliothèque de plugins
6. Recherchez **"Obsidian Git"** par Vincent Tam
7. Cliquez sur **Install**
8. Cliquez sur **Enable** pour activer le plugin

### Méthode 2 : Installation Manuelle

1. Téléchargez le plugin depuis : https://github.com/Vinzent03/obsidian-git/releases
2. Extrayez le fichier ZIP
3. Copiez le dossier dans `content/.obsidian/plugins/obsidian-git/`
4. Redémarrez Obsidian

## ⚙️ Étape 2 : Configurer Git dans le Projet

### Vérifier que Git est Initialisé

Ouvrez un terminal dans le dossier racine du projet et vérifiez :

```bash
git status
```

Si Git n'est pas initialisé, initialisez-le :

```bash
git init
```

### Configurer Git (si pas déjà fait)

```bash
git config user.name "Votre Nom"
git config user.email "votre.email@example.com"
```

## 🔧 Étape 3 : Configurer Obsidian Git

### Ouvrir les Paramètres du Plugin

1. Dans Obsidian, allez dans **Settings** (⚙️)
2. Dans le menu de gauche, trouvez **Obsidian Git** sous **Community plugins**
3. Cliquez dessus pour ouvrir les paramètres

### Configuration Recommandée

#### Paramètres de Base

- **Vault backup interval (minutes)** : `20`
  - Intervalle en minutes pour les sauvegardes automatiques
  - Recommandé : 20 minutes pour un bon équilibre

- **Auto pull interval (minutes)** : `0` (désactivé)
  - Désactivez si vous travaillez seul
  - Activez si vous travaillez en équipe

- **Auto pull on startup** : `✅ Activé`
  - Récupère les dernières modifications au démarrage

- **Auto push** : `✅ Activé`
  - Push automatique après chaque commit

- **Pull updates on startup** : `✅ Activé`
  - Récupère les mises à jour au démarrage

#### Paramètres de Commit

- **Disable push** : `❌ Désactivé`
  - Permet les pushes automatiques

- **Pull before push** : `✅ Activé`
  - Récupère les changements avant de push

- **Commit message** : `vault backup: {{date}}`
  - Message de commit par défaut
  - Vous pouvez utiliser des variables comme `{{date}}`, `{{time}}`

- **Custom commit message on manual backup** : `✅ Activé`
  - Permet de personnaliser le message lors des sauvegardes manuelles

#### Paramètres Avancés

- **List of files to ignore** :
  ```
  .obsidian/workspace.json
  .obsidian/workspace-mobile.json
  .obsidian/hotkeys.json
  .obsidian/workspaces/
  .DS_Store
  Thumbs.db
  ```

- **List of folders to ignore** :
  ```
  node_modules
  .git
  dist
  build
  ```

## 🚀 Étape 4 : Utilisation

### Commit et Push Automatique

Une fois configuré, Obsidian Git va :

1. **Automatiquement** faire un commit toutes les X minutes (selon votre intervalle)
2. **Automatiquement** push les changements si "Auto push" est activé
3. Créer un message de commit avec la date/heure

### Commit et Push Manuel

Vous pouvez aussi faire un commit manuel :

1. Appuyez sur `Ctrl+P` (ou `Cmd+P` sur Mac) pour ouvrir la commande
2. Tapez "Obsidian Git: Create backup"
3. Appuyez sur Entrée
4. Le commit et push seront effectués immédiatement

### Commandes Disponibles

- **Obsidian Git: Create backup** - Commit et push manuel
- **Obsidian Git: Pull** - Récupérer les changements
- **Obsidian Git: Push** - Envoyer les changements
- **Obsidian Git: Show diff** - Voir les différences
- **Obsidian Git: View source control** - Voir le contrôle de version

## 📝 Étape 5 : Configurer le Remote (si nécessaire)

Si vous utilisez un dépôt distant (GitHub, GitLab, etc.) :

### Ajouter un Remote

```bash
git remote add origin https://github.com/votre-username/votre-repo.git
```

### Configurer l'Authentification

#### Méthode 1 : HTTPS avec Token

1. Créez un Personal Access Token sur GitHub/GitLab
2. Utilisez le token comme mot de passe lors du push

#### Méthode 2 : SSH (Recommandé)

1. Générez une clé SSH :
```bash
ssh-keygen -t ed25519 -C "votre.email@example.com"
```

2. Ajoutez la clé publique à votre compte GitHub/GitLab

3. Changez l'URL du remote :
```bash
git remote set-url origin git@github.com:votre-username/votre-repo.git
```

## 🔒 Étape 6 : Sécurité et Bonnes Pratiques

### Fichiers à Ignorer

Assurez-vous que `.gitignore` contient :

```gitignore
node_modules/
dist/
build/
.env
.env.local
.DS_Store
Thumbs.db

# Obsidian
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.obsidian/hotkeys.json
.obsidian/workspaces/
```

### Configuration Recommandée pour le Projet

Créez ou modifiez `content/.obsidian/plugins/obsidian-git/data.json` :

```json
{
  "vaultBackupInterval": 20,
  "autoPullInterval": 0,
  "autoPullOnBoot": true,
  "disablePush": false,
  "pullBeforePush": true,
  "disablePopups": false,
  "listChangedFilesInMessageBody": false,
  "commitMessage": "vault backup: {{date}}",
  "commitDateFormat": "YYYY-MM-DD HH:mm:ss",
  "autoSaveInterval": 0,
  "autoCommitAfterFileChange": true,
  "fileChangeTime": 2000,
  "submoduleRecurseCheckout": false,
  "gitDir": "",
  "showStatusBar": true,
  "updateSubmodules": false,
  "customMessageOnAutoBackup": false,
  "autoBackupAfterFileChange": false,
  "syncMethod": "merge",
  "disablePush": false,
  "pullBeforePush": true,
  "listChangedFilesInMessageBody": false
}
```

## 🎯 Configuration Rapide (Résumé)

1. ✅ Installer le plugin Obsidian Git
2. ✅ Activer le plugin
3. ✅ Configurer l'intervalle de sauvegarde (20 min recommandé)
4. ✅ Activer "Auto push"
5. ✅ Activer "Pull before push"
6. ✅ Configurer le remote Git (si nécessaire)
7. ✅ Tester avec un commit manuel

## 🐛 Dépannage

### Le plugin ne fonctionne pas

1. Vérifiez que Git est installé sur votre système
2. Vérifiez que le vault est un dépôt Git valide
3. Redémarrez Obsidian

### Erreur de push

1. Vérifiez que le remote est configuré : `git remote -v`
2. Vérifiez vos identifiants Git
3. Vérifiez que vous avez les permissions sur le dépôt

### Commits trop fréquents

1. Augmentez l'intervalle dans les paramètres
2. Désactivez "Auto commit after file change"

### Conflits Git

1. Utilisez "Pull" manuellement pour résoudre les conflits
2. Configurez "Pull before push" pour éviter les conflits

## 📚 Ressources

- **Plugin Obsidian Git** : https://github.com/Vinzent03/obsidian-git
- **Documentation Obsidian** : https://help.obsidian.md/
- **Guide Git** : https://git-scm.com/doc

## ✅ Checklist de Configuration

- [ ] Plugin Obsidian Git installé
- [ ] Plugin activé
- [ ] Git initialisé dans le projet
- [ ] Remote configuré (si nécessaire)
- [ ] Intervalle de sauvegarde configuré
- [ ] Auto push activé
- [ ] Fichiers ignorés configurés
- [ ] Test de commit manuel réussi
- [ ] Test de push automatique réussi

