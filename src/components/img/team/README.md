# Guide d'Organisation des Images de l'Équipe

Ce dossier contient toutes les images des membres de l'équipe GBC SARLU.

## Structure Recommandée

Pour une meilleure organisation, créez des sous-dossiers selon les catégories :

```
team/
├── administration/
│   ├── directeur-general.jpg
│   ├── directeur-financier.jpg
│   ├── secretaire-admin.jpg
│   ├── responsable-rh.jpg
│   └── responsable-commercial.jpg
├── technique/
│   ├── chef-exploitation.jpg
│   ├── responsable-apiculture.jpg
│   ├── responsable-agriculture.jpg
│   ├── technicien-transformation-1.jpg
│   └── technicien-transformation-2.jpg
└── ouvriers/
    ├── ouvrier-1.jpg
    ├── ouvrier-2.jpg
    └── ...
```

## Comment Ajouter des Images

1. **Placez vos images** dans le dossier approprié (administration, technique, ou ouvriers)
2. **Nommez les fichiers** de manière descriptive (ex: `directeur-general.jpg`, `ouvrier-1.jpg`)
3. **Mettez à jour** le fichier `index.js` pour importer vos nouvelles images
4. **Modifiez la fonction `getTeamImage`** pour mapper les rôles aux bonnes images

## Exemple d'Import

Dans `index.js`, ajoutez vos imports :

```javascript
import directeurGeneral from './administration/directeur-general.jpg';
import ouvrier1 from './ouvriers/ouvrier-1.jpg';
```

Puis modifiez la fonction `getTeamImage` :

```javascript
export const getTeamImage = (role, category = 'default', memberId = null) => {
  // Mapping des rôles aux images
  if (category === 'Direction') {
    switch(role) {
      case 'Directeur Général': return directeurGeneral;
      case 'Directeur Financier': return directeurFinancier;
      default: return placeholderTeam;
    }
  }
  
  // Mapping par ID pour les ouvriers
  if (category === 'Ouvriers Agricoles') {
    switch(memberId) {
      case 301: return ouvrier1;
      case 302: return ouvrier2;
      default: return placeholderTeam;
    }
  }
  
  return placeholderTeam;
};
```

## Formats d'Images Supportés

- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## Taille Recommandée

- **Équipe managériale** : 400x400px minimum
- **Personnel technique** : 300x300px minimum
- **Ouvriers** : 200x200px minimum

## Notes

- Toutes les images doivent être optimisées pour le web
- Utilisez des noms de fichiers en minuscules avec des tirets
- Le placeholder par défaut (`agriculteur.jpeg`) sera utilisé pour les images manquantes







