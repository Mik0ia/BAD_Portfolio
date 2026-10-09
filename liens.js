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
    { nom : "Itch.io", url : "https://noe-inglebert.itch.io/kc-5125", survol : "Télécharger le jeu sur Itch.io", couleur: "#cc2e2e"}
    //{ nom: "Jouer",  url: "https://github.com/Mik0ia", survol: "Télécharger le jeu", couleur: "#2ecc40" },
    //{ nom: "GitHub", url: "https://github.com/Mik0ia", survol: "Voir le projet sur GitHub" },
    //{ nom: "Vidéo",  url: "https://youtu.be/ufGmag99ZkA", survol: "Voir la vidéo sur YouTube", couleur: "#3b82f6" }
  ],

  // M.A.S.K Operator
  2: [
    { nom : "Itch.io", url : "https://noe-inglebert.itch.io/mask-operator", survol : "Télécharger le jeu sur Itch.io", couleur : "#cc2e2e"}
  ],

  // Hearts of Auraliz
  3: [
   { nom : "Itch.io", url : "https://bengamin-dev.itch.io/hearts-of-auraliz", survol : "Télécharger le jeu sur Itch.io", couleur : "#cc2e2e"}
   
  ],

  // Bienvenue dans la boite
  4: [
    { nom : "Itch.io", url : "https://padi6613ar.itch.io/bienvenue-dans-la-boite", survol : "Télécharger le jeu sur Itch.io", couleur : "#cc2e2e"}
  ],

  // Project : HUMANIZE
  5: [
    { nom : "Itch.io", url : "https://noe-inglebert.itch.io/exprience-vr-humanize", survol : "Télécharger le jeu sur Itch.io", couleur : "#cc2e2e"}
  ],

  // Strokes of Madness
  6: [
    { nom : "Itch.io", url : "https://noe-inglebert.itch.io/stroke-of-madness", survol : "Télécharger le jeu sur Itch.io", couleur : "#cc2e2e"}
  ],

  // Kenshin Neko
  7: [
    { nom : "Itch.io", url : "https://bengamin-dev.itch.io/kenshin-neko", survol : "Télécharger le jeu sur Itch.io", couleur : "#cc2e2e"}
  ],

  // Zelda Triforce Showdwon
  8: [
    { nom : "Lien TCG Arena", url : "https://tcg-arena.fr/load/aHR0cHMlM0ElMkYlMkZtaWswaWEuZ2l0aHViLmlvJTJGWmVsZGEtVHJpZm9yY2UtU2hvd2Rvd24lMkZHYW1lRmlsZXMlMkZHYW1lX1plbGRhX1RyaWZvcmNlX1Nob3dkb3duLmpzb24=", survol : "Ajouter à votre catalogue de jeu TCG Arena", couleur : "#ae00ff"},
    { nom : "Discord", url : "https://discord.gg/DJGt97S6tw", survol : "Catégorie dans le discord pour ZTS", couleur : "#3b41f6"},
    { nom : "Règles", url : "https://docs.google.com/document/d/1pq0hcpWtqeUqezxZkCP4cIaozBUl5ZCBw7W-pzluUYg/edit?usp=sharing", survol : "Règles du jeu", couleur : "#fffb00"},
    { nom : "Github", url : "https://github.com/Mik0ia/Zelda-Triforce-Showdown", survol : "Repositorie du sur jeu TCG Arena", couleur : "#9400a8"}
  ],

  // Terra Card Game
  9: [],

  // Untouchable Meal
  10: []

};
