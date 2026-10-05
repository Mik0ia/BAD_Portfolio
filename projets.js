/* ============================================================
   DONNÉES DU PORTFOLIO — c'est le seul fichier à modifier
   pour ajouter / changer un projet.
   ============================================================ */

// Profil (haut à droite)
const PROFIL = {
  nom: "Benjamin - Akehal daponte",
  photo: "ASSETS/Profile_Picture.jpeg",
  disponibilite: "Temps Partiel",   // "Libre" (vert) | "Temps Partiel" (orange) | "Indisponible" (rouge)
  avatar: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/AVATAR_GIF.gif?raw=true",   // gif affiché à gauche de la page profil
  avatarHit: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/AVATAR_hit_GIF.gif?raw=true",   // gif affiché quand on clique sur l'avatar
  dureeCoup: 1200,   // durée (en ms) pendant laquelle le gif "hit" reste affiché avant de revenir à l'avatar normal
  metier: "Game / Technical designer",   // cadre sous l'avatar (page profil)
  bulle: "Bienvenue sur mon portfolio de game designer. Découvrez mes expériences, compétences et projets qui illustrent ma passion pour le design de jeux vidéo.",   // bulle de dialogue au survol de l'avatar
  cv: "ASSETS/cv-benjamin-akehal--daponte.pdf",   // fichier téléchargé par le bouton à droite du nom
  competences: ["Game Design", "Level Design", "Unreal Engine", "Game Jams"],   // pour le futur cadre Skills (pas affiché pour l'instant)
  liens: [ { nom: "GitHub", url: "https://github.com/Mik0ia" } ],               // pas affiché pour l'instant
  naissance: { jour: 9, mois: 12, annee: 2006 },   // niveau et barre d'XP calculés automatiquement

  /* ---------- Cadre "Stats" de la page profil ---------- */
  stats: {
    // Jauge 1 : durée totale du diplôme et nombre d'années déjà passées (décimales possibles : 1.5)
    diplome: { label: "Diplôme", anneesTotal: 3, anneesFaites: 3 },

    // Jauge 2 : (années de pro de base + durée du stage DÉJÀ effectuée, en années) / prochain palier
    pro: { label: "Pro (junior)", anneesPro: 0, prochainPalier: 2 },

    // Jauge 3 : progression entre la date de début et la date de fin du stage (format AAAA-MM-JJ).
    // Une fois la date de fin dépassée, la jauge reste pleine.
    stage: { label: "Stage", debut: "2026-07-06", fin: "2027-01-06" }          // ⚠ ajuste les dates réelles de ton stage
  },

  // Les 4 statistiques brutes : un texte + un nombre (décimales acceptées), tout est modifiable
  statsBrutes: [
    { texte: "Projets",              auto: "projets" },   // compté automatiquement : nombre de jeux dans la liste PROJETS ci-dessous
    { texte: "Langues",              valeur: 2.5 },
    { texte: "Logiciels maîtrisé",  auto: "logiciels" },   // compté automatiquement : nombre de skills au niveau "Expert" (liste SKILLS)
    { texte: "Engine",               valeur: 2 }
  ]
};

/* Chaque projet :
   type   : "Jeu Vidéo" | "Jeu de Société" | "Jeu Mobile"
   statut : "En cours" | "Terminé" | "En pause" | "Indisponible"
   image  : lien d'un jpg 500x500 (vide = placeholder)
   nom    : affiché au survol de la cartouche
   description : texte affiché sous la grosse cartouche 3D au survol
*/
const PROJETS = [
  { type: "Jeu Vidéo", statut: "Terminé", image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/CARTOUCHES/KC-5125_LOGO.png?raw=true", nom: "KC-5125",
    description: "Un jeu d'horreur et de simulation de vol réaliser en 72h lors d'une Mini Game Jam avec 2 de mes camarades de classe." },
  { type: "Jeu Vidéo", statut: "Terminé",  image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/CARTOUCHES/Mask_Operator_LOGO.png?raw=true",nom: "M.A.S.K Operator", 
    description: "Un FPS multijoueur asymétrique ou les joueur doivent réparé un générateur diriger par l'Opérateur qui peut activer les différents modes de vue de leurs masques." },
  { type: "Jeu Vidéo", statut: "En cours", image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/CARTOUCHES/Hearts_of_Auraliz_LOGO.png?raw=true", nom: "Hearts of Auraliz",
    description: "Un JRPG inspiré des années 2000, ou on incarne Onde qui doit apprendre à accepter sa partie refoulé pour retrouver son frère." },
  { type: "Jeu Vidéo", statut: "Terminé",  image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/CARTOUCHES/Bienvenue_dans_la_boite_LOGO.png?raw=true", nom: "Bienvenue dans la boite",
    description: "Une expérience de jeux d'horreur psychologique sous pression réalisé pour la Jam Academy 2026 en 48h avec une équipe d'étudiants." },
  { type: "Jeu Vidéo", statut: "Terminé", image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/CARTOUCHES/Project_Humanize_LOGO.png?raw=true", nom: "Project : HUMANIZE",
    description: "Une expérience VR qui prend place dans l'esprit d'une intelligence qui vous emmène dans sa représentation des émotions : Sérénité et Liberté." },
  { type: "Jeu Vidéo", statut: "Terminé",  image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/CARTOUCHES/Strokes_of_Madness_LOGO.png?raw=true", nom: "Strokes of Madness",
    description: "Un jeu dans lequel vous devez échapper à un monde surréaliste en pliant la gravité et en cartographiant votre sortie avec seulement un stylo." },
  { type: "Jeu Vidéo", statut: "En pause", image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/CARTOUCHES/Kenshin_Neko_LOGO.png?raw=true", nom: "Kenshin Neko",
    description: "un court plateformer réalisé sous Unreal Engine en 1 mois, ou vous incarnez un chat Samouraï qui doit venger son maitre." },

  { type: "Jeu de Société", statut: "En cours",  image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/CARTOUCHES/ZTS_LOGO.png?raw=true", nom: "Zelda Triforce Showdwon",
    description: "Un jeu de carte à collectionner inspiré de l'univers de The Legends Of Zelda, votre but sera de compléter votre Triforce avant vos adversaires ou d'être le seul survivant du champs de bataille pour l'emporter." },
  { type: "Jeu de Société", statut: "Indisponible", image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/CARTOUCHES/TERRA_LOGO.png?raw=true", nom: "Terra Card Game",
    description: "Un jeu de carte à collectionner simple et stratégique ou chaque joueur incarne un chef d'armée qui doit triomphé des autres pour être le dernier sur le champs de bataille." },

  { type: "Jeu Mobile", statut: "En pause", image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/CARTOUCHES/Untouchable_Meal_LOGO.png?raw=true", nom: "Untouchable Meal",
    description: "Un jeu d'ambiance RP multijoueur inspiré de l'Undercover et du Loup Garou ou les joueurs doivent aider Al Capone à récupérer la marchandise sans se faire démasquer par leurs ennemis" }
];

/* ============================================================
   SKILLS (cadre "SKILLS" de la page profil)
   Ils s'affichent les uns sous les autres, dans l'ordre de cette liste.
   Si ça dépasse du cadre, la page défile.

   image       : lien d'un jpg/png carré (vide = placeholder)
   nom         : nom du skill
   description : texte affiché à côté du logo
   niveau      : "Amateur" (cadre bronze) | "Intermédiaire" (cadre argent) | "Expert" (cadre or)
                 -> le niveau s'affiche aussi dans une bulle au survol du skill
                 -> chaque skill au niveau "Expert" compte dans "Logiciels maîtrisé" (tous les skills sont des logiciels)
   ============================================================ */
const SKILLS = [
  // ⚠ exemples : remplace-les par tes vrais skills et tes vrais logos
  { image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SKILLS/UE_LOGO.png?raw=true", nom: "Unreal Engine", niveau: "Expert",
    description: "Blueprints, prototypage de mécaniques et de niveaux, utilisé sur la plupart de mes projets." },
  { image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SKILLS/Canva_LOGO.png?raw=true", nom: "Canva", niveau: "Expert",
    description: "Créations de Jeux de sociétés et Jeux de cartes ainsi que présentations travaillés." },
  { image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SKILLS/Blender_LOGO.png?raw=true", nom: "Blender", niveau: "Intermédiaire",
    description: "Modélisation, Rig et Animation de modèle 3D variés spécialisé dans le style rétro." },
  { image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SKILLS/Unity_LOGO.png?raw=true", nom: "Unity", niveau: "Intermédiaire",
    description: "Prototypage rapide et développement en C# pour des projets de Game Jam." },
  { image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SKILLS/GitHub_LOGO.png?raw=true", nom: "Github", niveau: "Intermédiaire",
    description: "Indispensable de mes projets pour les stocker ainsi qu'héberger des ressources." },
  { image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SKILLS/Figma_LOGO.png?raw=true", nom: "Figma", niveau: "Intermédiaire",
    description: "Prototypage de UI et créations d'assets 2D pour tout les types de projets. " },
  { image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SKILLS/Claude_LOGO.png?raw=true", nom: "Claude", niveau: "Intermédiaire",
    description: "Outil pratique pour le vibe coding, prototype de jeu sur navigateurs et autres." },
  { image: "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SKILLS/Pt_LOGO.png?raw=true", nom: "Substance Painter 3d", niveau: "Amateur",
    description: "Création de texture pour mes assets 3d, nécessite encore de l'apprentissage." },
];
