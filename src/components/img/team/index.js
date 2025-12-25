// Export centralisé de toutes les images de l'équipe
// Toutes les images de l'équipe doivent être placées dans ce dossier (src/components/img/team/)
// 
// STRUCTURE RECOMMANDÉE :
// - administration/ : images de l'équipe managériale
//   - directeur-general.jpg
//   - directeur-financier.jpg
//   - secretaire-admin.jpg
//   - etc.
// - technique/ : images du personnel technique
//   - chef-exploitation.jpg
//   - responsable-apiculture.jpg
//   - technicien-1.jpg
//   - etc.
// - ouvriers/ : images des ouvriers (peut être organisé par catégorie)
//   - ouvrier-1.jpg
//   - ouvrier-2.jpg
//   - etc.

// Placeholder par défaut (utilisé temporairement jusqu'à ce que les vraies images soient ajoutées)
import placeholderTeam from '../agriculteur.jpeg';

// Exemple d'imports pour les images d'administration (décommentez et ajoutez vos images)
// import directeurGeneral from './administration/directeur-general.jpg';
// import directeurFinancier from './administration/directeur-financier.jpg';
// import secretaireAdmin from './administration/secretaire-admin.jpg';
// import responsableRH from './administration/responsable-rh.jpg';
// import responsableCommercial from './administration/responsable-commercial.jpg';

// Exemple d'imports pour les images techniques (décommentez et ajoutez vos images)
// import chefExploitation from './technique/chef-exploitation.jpg';
// import responsableApiculture from './technique/responsable-apiculture.jpg';
// import responsableAgriculture from './technique/responsable-agriculture.jpg';
// import technicienTransformation1 from './technique/technicien-transformation-1.jpg';
// import technicienTransformation2 from './technique/technicien-transformation-2.jpg';

// Exemple d'imports pour les ouvriers (décommentez et ajoutez vos images)
// import ouvrier1 from './ouvriers/ouvrier-1.jpg';
// import ouvrier2 from './ouvriers/ouvrier-2.jpg';
// etc.

// Fonction pour obtenir l'image d'un membre de l'équipe
// Cette fonction peut être étendue pour charger dynamiquement les images
// selon le rôle, la catégorie ou l'ID du membre
export const getTeamImage = (role, category = 'default', memberId = null) => {
  // Pour l'instant, retourne le placeholder
  // Quand vous ajouterez les vraies images, vous pouvez créer une logique ici
  // pour mapper les rôles/catégories aux bonnes images
  
  // Exemple de logique future :
  // if (category === 'Administration') {
  //   switch(role) {
  //     case 'Directeur Général': return directeurGeneral;
  //     case 'Directeur Financier': return directeurFinancier;
  //     default: return placeholderTeam;
  //   }
  // }
  
  return placeholderTeam;
};

// Export par défaut
export default {
  placeholder: placeholderTeam,
  getTeamImage,
};

