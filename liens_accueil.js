/* ============================================================
   LIENS DE LA PAGE D'ACCUEIL (colonne à gauche, au-dessus des cartouches)
   Ils s'affichent les uns sous les autres, dans l'ordre de cette liste.
   Tous les boutons ont la même largeur ; la hauteur s'adapte au texte.
   Si ça dépasse de l'écran, la colonne défile.

   Chaque bouton :
     image   : lien de l'image de l'icône (facultatif : pas d'image = pas d'icône)
     texte   : texte écrit dans le bouton
     page    : page ouverte dans un nouvel onglet au clic sur le bouton (facultatif)
     copie   : lien copié dans le presse-papier au clic sur le bouton (facultatif)
   Au clic : "page" seul -> ouvre la page | "copie" seul -> copie le lien
             les deux -> ouvre la page ET copie le lien en même temps
     couleur : code hexadécimal du bouton, ex. "#2ecc40" (facultatif : orange par défaut)
   ============================================================ */
const LIENS_ACCUEIL = [

  // ⚠ exemples : remplace-les par tes vrais liens
  { image:   "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/LOGO/PHONE_LOGO.png?raw=true",
    texte:   "+33 7 69 07 13 51",
    page:    "",
    copie:   "+33 7 69 07 13 51",
    couleur: "#f3a51f" },

  { image:   "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/LOGO/MAIL_LOGO.png?raw=true",
    texte:   "benjamin.akehal@gmail.com",
    page:    "",
    copie:   "benjamin.akehal@gmail.com",
    couleur: "#ffe203" },

  { image:   "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/LOGO/LINKEDIN_LOGO.png?raw=true",
    texte:   "Linkedin",
    page:    "https://www.linkedin.com/in/benjamin-akehal-da-ponte ",
    copie:   "",
    couleur: "#3b41f6" },
  
  { image:   "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/LOGO/ITCH_LOGO.png?raw=true",
    texte:   "Itch.io",
    page:    "https://bengamin-dev.itch.io",
    copie:   "",
    couleur: "#fa5353" },
  
  { image:   "https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/LOGO/DISCORD_LOGO.png?raw=true",
    texte:   "Discord",
    page:    "https://discord.gg/9Njf2r7UGn",
    copie:   "",
    couleur: "#6653fa" }

];
