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
    date: "2026-01-08",
    titre: "Notre jeu pour la Global Game Jam 2026",
    texte: `**Mask Operator** est le jeu que nous avons réalisé pour la Global Game Jam 2026. Dans ce jeu de tir d'horreur asymétrique, les joueurs incarnent des "Diver" qui doivent réparer le générateur dans le souterrain. Pour les aider, "l'Opérateur" peut mettre des modes d'affichage sur leurs masques pour leur permettre de mieux voir dans l'obscurité.
    
    https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/MO/h0GIZo.png?raw=true
    `, 
    liens: [
      { nom: "Post LINKEDIN", url: "https://lnkd.in/p/eydRKBqZ", survol: "", couleur: "#0c36ee" }
    ],  
  },
  {
    date: "2025-10-22",
    titre: "Tout se ressemble dans ce labyrinthe ?",
    texte : `**Strokes of Madness** est un jeu que nous avons réalisé pour la Mini Jame Gam #48. Dans ce jeu, tout se ressemble et le seul moyen de se repérer dans ce dédale est le stylo rouge à disposition pour marquer votre chemin, en espérant ne pas devenir fou.
    
    https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/SOM/mlQE5A.png?raw=true
    `,
    liens : [
      { nom : "Post LINKEDIN", url : "https://lnkd.in/p/eFqs3hSD", survol : "", couleur: "#0c36ee"}
    ]
  },
    {
    date: "2026-10-19",
    titre: "Monsieur Capone vous convie à sa table.",
    texte : `Il y a de cela deux ans, à ÉCOLE BRASSART, nous avons travaillé sur un workshop de jeu mobile autour du film Les Incorruptibles.

    Dans ce jeu, chaque joueur incarne un rôle directement inspiré du film. Al Capone est le maître du jeu : son objectif est d'obtenir le mot détenu par les « Acolytes » à chaque manche. Le Policier, quant à lui, cherche lui aussi à découvrir leurs mots sans se faire repérer. Mais attention : il ne connaît que la catégorie du mot et doit improviser pour éviter de se faire exécuter à la fin de la partie !

    https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/UM/Screenshot_2026-10-19-01-54-29-971_com.android.chrome-edit.jpg?raw=true : 0.5
    `,
    liens : [
      { nom : "Site", url : "https://mik0ia.github.io/Untouchable-Meal/", survol : "Lien du Jeu", couleur : "#960025"},
      { nom : "Post LINKEDIN", url : "https://lnkd.in/p/e9kHFFuE", survol : "Linkedin", couleur: "#0c36ee"}
    ]
  },
  {
    date: "2026-05-07",
    titre: "Des sardines en boîte ou des Sardines dans une boîte ?",
    texte : `**Bienvenue dans la boîte** est un jeu d'horreur psychologique où le joueur doit suivre la chaîne de production de soupe de sardines en boîte, sauf que plus les jours passent, plus les effectifs se réduisent. Une fois qu'il est seul, il pense être le prochain à disparaître. Va-t-il alors trouver un moyen de s'enfuir avant son "licenciement", ou satisfaire Jorjor Well, le patron de cette entreprise lugubre ?
    
    https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/BDLB/BEY8n1%20(1).png?raw=true
    `,
    liens : [
      { nom : "Post LINKEDIN", url : "https://lnkd.in/p/ebFRaFxN", survol : "", couleur: "#0c36ee"}
    ]
  },
    {
    date: "2026-10-11",
    titre: "Mon portfolio :",
    texte : ` **Aujourd'hui je partage enfin mon nouveau portfolio profitez bien de votre visite !**`,
  }
];
