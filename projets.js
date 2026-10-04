/* ============================================================
   DONNÉES DU PORTFOLIO — c'est le seul fichier à modifier
   pour ajouter / changer un projet.
   ============================================================ */

// Profil (haut à droite)
const PROFIL = {
  nom: "Benjamin - Akehal daponte",
  photo: "ASSETS/Profile_Picture.jpeg",
  disponibilite: "Libre",   // "Libre" (vert) | "Temps Partiel" (orange) | "Indisponible" (rouge)
  naissance: { jour: 9, mois: 12, annee: 2006 }   // niveau et barre d'XP calculés automatiquement
};

/* Chaque projet :
   type   : "Jeu Vidéo" | "Jeu de Société" | "Jeu Mobile"
   statut : "En cours" | "Terminé" | "En pause"
   image  : lien d'un jpg 500x500 (vide = placeholder)
   nom    : affiché au survol de la cartouche
*/
const PROJETS = [
  { type: "Jeu Vidéo", statut: "En cours", image: "ASSETS/Profile_Picture.jpeg", nom: "Projet Vidéo 1" },
  { type: "Jeu Vidéo", statut: "Terminé",  image: "ASSETS/Profile_Picture.jpeg", nom: "Projet Vidéo 2" },
  { type: "Jeu Vidéo", statut: "En pause", image: "", nom: "Projet Vidéo 3" },
  { type: "Jeu Vidéo", statut: "Terminé",  image: "", nom: "Projet Vidéo 4" },
  { type: "Jeu Vidéo", statut: "En cours", image: "", nom: "Projet Vidéo 5" },
  { type: "Jeu Vidéo", statut: "Terminé",  image: "", nom: "Projet Vidéo 6" },
  { type: "Jeu Vidéo", statut: "En pause", image: "", nom: "Projet Vidéo 7" },
  { type: "Jeu Vidéo", statut: "En cours", image: "", nom: "Projet Vidéo 8" },

  { type: "Jeu de Société", statut: "Terminé",  image: "", nom: "Projet Société 1" },
  { type: "Jeu de Société", statut: "En cours", image: "", nom: "Projet Société 2" },

  { type: "Jeu Mobile", statut: "En pause", image: "", nom: "Projet Mobile 1" }
];
