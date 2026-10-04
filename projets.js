/* ============================================================
   DONNÉES DU PORTFOLIO — c'est le seul fichier à modifier
   pour ajouter / changer un projet.
   ============================================================ */

// Vidéo YouTube jouée en fond de page (lien complet, court ou "watch")
const VIDEO_FOND = "https://youtu.be/K1DrIADKmqc";

// Profil (haut à droite)
const PROFIL = {
  nom: "Benjamin - Akehal daponte",
  photo: "",      // lien d'un jpg ; vide = placeholder
  niveau: 19,
  xp: 0.72        // de 0 à 1 (0 = barre vide, 1 = barre pleine)
};

/* Chaque projet :
   type   : "Jeu Vidéo" | "Jeu de Société" | "Jeu Mobile"
   statut : "En cours" | "Terminé" | "En pause"
   image  : lien d'un jpg 500x500 (vide = placeholder)
   nom    : affiché au survol de la cartouche
*/
const PROJETS = [
  { type: "Jeu Vidéo", statut: "En cours", image: "", nom: "Projet Vidéo 1" },
  { type: "Jeu Vidéo", statut: "Terminé",  image: "", nom: "Projet Vidéo 2" },
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
