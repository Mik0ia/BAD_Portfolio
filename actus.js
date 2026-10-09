/* ============================================================
   ACTUALITÉS (bouton mégaphone sous le bouton PROFIL)
   Chaque actu est un objet de la liste ACTUS ci-dessous.
   Les actus s'affichent de la plus récente à la plus ancienne (le tri est automatique,
   l'ordre dans ce fichier n'a pas d'importance).
   Liste vide = le bouton Actualités n'apparaît pas.

   Chaque actu :
     date   : date de l'actu, au format "AAAA-MM-JJ" (ex. "2026-10-09").
              Affichée avant le titre. Au survol de la date, une bulle dit "Il y a X jours".
     titre  : titre de l'article
     texte  : (facultatif) texte de l'article, écrit entre deux accents graves ( ` ).
              Il fonctionne comme dans textes.js :
                - un retour à la ligne  -> il est gardé tel quel sur la page
                - une ligne vide        -> sépare les paragraphes
                - *mot* italique | **mot** gras | ***mot*** gras + italique
                - lien d'image seul sur sa ligne -> l'image s'affiche centrée (clic = zoom)
                  on peut ajouter une échelle après le lien :  lien : 0.5  |  lien : 1.5
                - EN PLUS : tout autre lien (https://...) écrit dans le texte devient un lien
                  bleu, souligné et cliquable (ouvre un nouvel onglet), sauf s'il pointe vers ce projet GitHub
                  (https://github.com/Mik0ia/BAD_Portfolio...).
              ⚠ N'écris pas d'accent grave ( ` ) ni la suite ${ dans le texte.
     video  : (facultatif) lien YouTube. La vidéo s'affiche tout en bas du texte, dans le même cadre.
              Formats acceptés : https://www.youtube.com/watch?v=XXXXXXXXXXX | https://youtu.be/XXXXXXXXXXX | .../embed/... | .../shorts/...
     liens  : (facultatif) liste de boutons, affichés tout en bas de l'actu. Chaque bouton :
                nom     : texte écrit dans le bouton
                url     : page ouverte dans un nouvel onglet au clic
                survol  : (facultatif) texte de la bulle au survol du bouton
                couleur : (facultatif) code hexadécimal, ex. "#2ecc40" (rouge par défaut)

   Pastille rouge + bouton qui se secoue : ils disparaissent dès que les actualités ont été ouvertes une fois.
   Si tu ajoutes (ou renommes) une actu plus tard, la pastille revient pour ce nouveau contenu.
   (Pour la revoir en test : vide les données du site dans ton navigateur.)
   ============================================================ */
const ACTUS = [

  // ⚠ exemple : remplace-le par ta vraie première actu
  {
    date: "2026-10-09",
    titre: "Le portfolio s'agrandit !",
    texte: `**Nouveau :** les actualités arrivent sur le portfolio.

Tu pourras y suivre mes *nouveaux projets*, mes résultats de Game Jam et tout ce qui se passe de mon côté.

Un lien dans le texte devient cliquable : https://bengamin-dev.itch.io`,
    // video: "https://youtu.be/ufGmag99ZkA",
    liens: [
      { nom: "Itch.io", url: "https://bengamin-dev.itch.io", survol: "Voir mes jeux sur Itch.io", couleur: "#fa5353" }
    ]
  }

];
