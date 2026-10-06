/* ============================================================
   LIENS DE LA PAGE D'ACCUEIL (colonne à gauche, au-dessus des cartouches)
   Ils s'affichent les uns sous les autres, dans l'ordre de cette liste.
   Tous les boutons ont la même largeur ; la hauteur s'adapte au texte.
   Si ça dépasse de l'écran, la colonne défile.

   Chaque bouton :
     image   : lien de l'image de l'icône (facultatif : pas d'image = pas d'icône)
     texte   : texte écrit dans le bouton
     page    : page ouverte dans un nouvel onglet au clic sur le bouton (facultatif)
     copie   : lien copié dans le presse-papier au clic sur la petite icône
               "copier" à droite du bouton (facultatif : pas de lien = pas d'icône)
     couleur : code hexadécimal du bouton, ex. "#2ecc40" (facultatif : orange par défaut)
   ============================================================ */
const LIENS_ACCUEIL = [

  // ⚠ exemples : remplace-les par tes vrais liens
  { image:   "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SKILLS/GitHub_LOGO.png?raw=true",
    texte:   "GitHub",
    page:    "https://github.com/Mik0ia",
    copie:   "https://github.com/Mik0ia",
    couleur: "#3b82f6" },

  { image:   "",
    texte:   "Mon portfolio en ligne",
    page:    "https://github.com/Mik0ia/BAD_Portfolio",
    copie:   "https://github.com/Mik0ia/BAD_Portfolio",
    couleur: "#2ecc40" }

];
