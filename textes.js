/* ============================================================
   TEXTES DES PAGES PROJET
   Chaque texte est lié à l'id du jeu (champ "id" dans projets.js).
   Il s'affiche dans un cadre sur la page du jeu, sous la présentation.
   Pas de texte (ou texte vide) = le cadre n'apparaît pas.

   Écris entre les deux accents graves ( ` ) :
     - un retour à la ligne  -> il est gardé tel quel sur la page
     - une ligne vide        -> sépare les paragraphes
     - *mot*                 -> mot en italique
     - **mot**               -> mot en gras
     - ***mot***             -> mot en gras ET italique
     - lien d'image seul sur sa ligne -> l'image s'affiche centrée dans le cadre,
                            entre les deux morceaux de texte (voir l'exemple ci-dessous)
                            on peut ajouter une échelle après le lien :  lien : 0.5  (moitié de la taille), lien : 1.5 (une fois et demie)
                            (le lien doit finir par .png .jpg .jpeg .gif .webp .svg, avec ou sans ?raw=true)
   ⚠ N'écris pas d'accent grave ( ` ) ni la suite ${ dans le texte.
   ============================================================ */
const TEXTES = {

  // KC-5125
  1: `Voici un exemple de premier paragraphe : j'ai travaillé sur le **game design** et le *level design* du jeu.
Ce retour à la ligne apparaît aussi sur la page.

Et voici un second paragraphe, séparé par une ligne vide. On peut aussi mélanger : ***gras et italique***.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SKILLS/Blender_LOGO.png?raw=true : 0.5

Et voici un troisième paragraphe, sous l'image.`,

  // M.A.S.K Operator
  2: ``,

  // Hearts of Auraliz
  3: ``,

  // Bienvenue dans la boite
  4: ``,

  // Project : HUMANIZE
  5: ``,

  // Strokes of Madness
  6: ``,

  // Kenshin Neko
  7: ``,

  // Zelda Triforce Showdwon
  8: ``,

  // Terra Card Game
  9: ``,

  // Untouchable Meal
  10: ``

};
