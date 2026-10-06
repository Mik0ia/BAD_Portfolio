/* ============================================================
   LIENS DES PAGES PROJET  (cadre "liens", tout en bas de la page du jeu)
   Chaque liste est liée à l'id du jeu (champ "id" dans projets.js).
   Pas de liste (ou liste vide) = le cadre n'apparaît pas.

   Chaque bouton :
     nom     : texte écrit dans le bouton
     url     : page ouverte dans un nouvel onglet au clic
     survol  : texte de la bulle quand on survole le bouton (facultatif)
     couleur : code hexadécimal du bouton, ex. "#2ecc40" (facultatif : rouge par défaut)

   Les boutons se placent les uns à côté des autres, espacés, et passent
   à la ligne s'il y en a trop pour la largeur du cadre.
   ============================================================ */
const LIENS = {

  // KC-5125   ⚠ exemple : remplace-le par tes vrais liens
  1: [
    { nom: "Jouer",  url: "https://github.com/Mik0ia", survol: "Télécharger le jeu", couleur: "#2ecc40" },
    { nom: "GitHub", url: "https://github.com/Mik0ia", survol: "Voir le projet sur GitHub" },
    { nom: "Vidéo",  url: "https://youtu.be/ufGmag99ZkA", survol: "Voir la vidéo sur YouTube", couleur: "#3b82f6" }
  ],

  // M.A.S.K Operator
  2: [],

  // Hearts of Auraliz
  3: [],

  // Bienvenue dans la boite
  4: [],

  // Project : HUMANIZE
  5: [],

  // Strokes of Madness
  6: [],

  // Kenshin Neko
  7: [],

  // Zelda Triforce Showdwon
  8: [],

  // Terra Card Game
  9: [],

  // Untouchable Meal
  10: []

};
