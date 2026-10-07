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
  1: `***Bienvenue à bord pour votre premier vol, pilote.***

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/KC/seMl5f.png?raw=true

Votre mission du jour : atteindre la cible indiquée sur votre radar. Des entités insectoïdes de classe B se sont installées le long de votre itinéraire. Leurs éclaireurs tenteront d'alerter les essaims dès qu'ils vous repéreront. Évitez-les à tout prix.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/KC/VJYS1Z.png?raw=true

Des tours à infrasons ont été déployées sur votre trajectoire. Si vous vous retrouvez encerclé, repérez-les : elles peuvent repousser ces créatures.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/KC/RGAQRGAQ.PNG?raw=true

**N'oubliez pas : toute trahison est passible de mort.**

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/KC/QEDVSDV.PNG?raw=true
`,

  // M.A.S.K Operator
  2: `***Bienvenue dans les profondeurs, mécaniciens. *** 

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/MO/6w9YNz.png?raw=true

Votre escouade a été déployée pour rétablir l'alimentation d'une tour infrasonique. Des entités insectoïdes de classe C ont envahi les tunnels du générateur. L'environnement est instable, plongé dans l'obscurité et hostile. Les grottes sont d'un noir profond. Votre visibilité est assurée par votre casque M.A.S.K. (Mechanics Assist & Surveillance Kit).

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/MO/SC7Shq.png?raw=true

Ce casque alterne entre différents filtres tactiques activés à distance par l'opérateur de votre escouade :  

- **Filtre rouge** : met en évidence les entités hostiles et les munitions. 
- **Filtre vert** : affiche l'état de santé et les ressources à récupérer. 
- **Filtre bleu** : suit les mécaniciens alliés et affiche la mini-carte. Marqueurs violets : indiquent les objectifs de la mission.  

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/MO/h0GIZo.png?raw=true
https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/MO/GGOctM.png?raw=true
https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/MO/gAETcd.png?raw=true

Vous êtes équipés d'un fusil amélioré pour la défense et le contrôle de foule. Utilisez-le à bon escient ; les munitions sont limitées. Votre opérateur assurera une communication constante, changera les modes du casque selon l'évolution de la situation, guidera l'escouade et coordonnera les déplacements vers l'objectif. 

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/MO/s8BiiJ.png?raw=true

Toutefois, les interférences et la configuration des tunnels pourraient vous faire perdre le contact visuel avec vos coéquipiers.  Restez vigilants. Restez groupés autant que possible. Atteignez le générateur. Réparez-le. Rétablissez le fonctionnement de la tour.  

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/MO/SC7Shq.png?raw=true

**N'oubliez pas : toute trahison est passible de mort.**

**Crédits :** 

Raphaël BARRIÈRE
Noé INGLEBERT 
Diego LLAURY
Benjamin AKEHA--DA PONTE`,

  // Hearts of Auraliz
  3: `***IL EST RECOMMANDÉ DE JOUER À LA MANETTE, LE JEU EST DÉVELOPPÉ POUR.***

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/HOA/C9NvpZ.png?raw=true

***Hearts of Auraliz*** est un JRPG narratif inspiré des jeux de la sixième génération de consoles, mêlant exploration, combats au tour par tour et mécaniques de timing. Le joueur suit Onde, un jeune garçon parti traverser les mers célestes d’Auraliz pour retrouver son frère disparu après l’attaque d’un groupe de pirates du ciel. Au cours de son voyage, il rencontrera différents compagnons et découvrira un monde où les parties refoulées de chaque personne peuvent prendre vie sous la forme d’armes.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/HOA/F+_zQN.png?raw=true

À travers une aventure centrée sur les personnages et leurs relations, Hearts of Auraliz aborde le thème de l’acceptation de soi. Les combats reposent autant sur la stratégie que sur le lien entre le manieur et son arme, tandis que l’univers mélange paysages oniriques, ambiance mélancolique et esprit d’aventure. Le jeu cherche à proposer une expérience accessible et immersive, dans l’esprit des grands JRPG des années 2000.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/HOA/iRBTYA.png?raw=true

**Crédits :**

*Benjamin AKEHAL--DA PONTE* :

-Game Designer
-Developper
-UI / UX Designer
-Level Designer
-3d Modeling
-3d Texturing
-3d Rigging
-3d Animation
-Narrative Designer
-Play Test QA

*Maëlys PUERTAS* :

- Concept Artist
- Main Artist
- Environment Artist
- Character Designer
- 3d Texturing

*Lisa GASQUY* :

-Main Texture Artist
-Concept Artist
-Character Designer
-Sprite Artist
-DA referee

*Anthony COMBANI-GAILLEUR* :
- Gameplay referee

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/HOA/AfGA5j.png?raw=true

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/HOA/jAjVr1.png?raw=true
`,

  // Bienvenue dans la boite
  4: `***"Bienvenue dans la boîte"***
  
https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/BDLB/ZCsv8O%20(1).png?raw=true

Vous incarnez une sardine qui travaille dans une usine de mise en conserve de soupe de sardines. Tout en accomplissant vos tâches et en élaborant un plan pour devenir libre, vous devez échapper à la pression de votre patron, qui ne laissera passer aucun moment de fainéantise.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/BDLB/BEY8n1%20(1).png?raw=true

**Controles:** ZQSD et clic gauche pour toute les interactions.

**Aides :**

*- Vous pouvez mettre les poissons par terre et vous en occupez plus tard.
- Vous pouvez déplacer les poissons qui tomberaient par terre pour les mettre directement dans le broyeur.
- La plaque à deviser a une collision capricieuse, éloignez-vous pour déviser correctement.*

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/BDLB/kt+d36%20(1).png?raw=true

**Crédits : **

*CONCEPT ART & ILLUSTRATIONS*: Killian TARIN / Neige FRANQUINET / Adam ESSALHI / Alexis PRUDHOMME 

*3D & TEXTURES :* Lisa GASQUY / Thomas BERRETTA / Laurine  CAMPREDON / Timotée CHARBONNEAU 

*GAME DESIGN :* Alexis ROGER / Benjamin AKEHAL--DA PONTE / Diego LLAURY

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/BDLB/fGRo3A%20(1).png?raw=true
https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/BDLB/hliJYb.png?raw=true
https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/BDLB/kp6tUe%20(1).png?raw=true

`,

  // Project : HUMANIZE
  5: `
***Project Humanize*** est un projet étudiant dans lequel nous devions réaliser une expérience en VR sur le thème des émotions. Nous avons choisi d'adopter une approche poétique et narrative en mettant en place une histoire simple : une intelligence artificielle simule des émotions pour observer les réactions d'un humain face à celles-ci.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/ProjH/image_2025-04-28_085026935-YBg79x849ahXRnB9.jpeg?raw=true

Nous avons ainsi conçu trois niveaux, représentant respectivement la *sérénité*, *la liberté* et *l'absence d'émotion*.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/ProjH/image_2025-04-28_095655312-m2W8NPQMnkiV3vLO.jpeg?raw=true
https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/ProjH/image_2025-04-28_095747502-m5KMJDb9QDCV8V2l.jpeg?raw=true
https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/ProjH/image_2025-04-28_095936311-YBg791eBzyfRGzqM.jpeg?raw=true

Notre consigne imposait également de créer une expérience immersive, et non un jeu. Nous avons donc limité les interactions aux gestes les plus instinctifs et naturels, afin que tout type de public puisse y participer facilement.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/ProjH/image_2025-04-28_095431814-mxB4o58bOyUE6vEg.jpeg?raw=true

**Crédits :** 

Benjamin AKEHAL--DA PONTE
Simon COUSIN 
Diego LLAURY

`,

  // Strokes of Madness
  6: `***Strokes of Madness*** est un jeu de labyrinthe où le joueur doit trouver la sortie d’un labyrinthe non linéaire. Pour s’aider, il ne dispose que de deux interactions. Avec le clic gauche, il peut dessiner sur toutes les surfaces, comme il le souhaite. Afin de se repérer dans ce labyrinthe où tout se ressemble, il devra se servir de cette capacité pour cartographier l’environnement et marquer son passage. La seconde interaction permet au joueur de changer son point de gravité en regardant un mur et en maintenant le clic droit. Grâce à ces deux interactions, il a un contrôle total sur son exploration : le plafond peut devenir le sol, et il peut annoter librement chaque surface.

Le but du jeu est de créer une expérience originale et perturbante, où le joueur tente de se repérer dans un level design qui semble irréel. Entre les portails et les changements de gravité, il est impossible de s’orienter sans marquer son passage. Le level design est non linéaire : le joueur peut accéder à la fin instantanément, mais aussi retourner directement au début. Cela permet d’éviter l’illusion de progression, où le joueur penserait avancer alors qu’il reste dans la même zone, l’encourageant ainsi à cartographier l’ensemble du labyrinthe.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/SOM/mlQE5A.png?raw=true

Le principal défi de ce jeu, au-delà des aspects techniques liés aux portails et aux changements de gravité, a été le level design. Nous avons dû imaginer un environnement parfaitement symétrique, visible et jouable depuis tous les angles possibles. Penser au pathfinding du joueur avec six points de vue potentiels a représenté un véritable challenge.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/SOM/xutY4c.png?raw=true

Dans le prototype final, nous avons réussi à créer une expérience singulière et déroutante. Entre les changements de perspective et un level design qui se répète, le jeu rend fous les joueurs autant que les level designers.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/SOM/8kTz4a.png?raw=true

**Crédits :** 

Benjamin AKEHAL--DA PONTE 
Noé INGLEBERT 
Raphaël BARRIÈRE

`,

  // Kenshin Neko
  7: `
  https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/KN/mlQE5A.png?raw=true
  
  ***Kenshin Neko*** est un court jeu de plateforme dans lequel vous incarnez un chat ninja nommé Kenshin Neko, dont la quête est de venger son maître.
  
  https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/KN/yZCnHG.png?raw=true

  Ce projet était un projet d'algorithme de 1 mois en seconde année de Game Design pour tester nos compétences. Pour ce rendu un simple prototype Unreal nous était demandé, cependant j'ai profiter de l'exercice pour me tester personnellement en faisant un jeu complet notamment les assets de personnages que j'ai modélisé seul.

  https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/KN/5WUEtZ.png?raw=true
  https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/KN/J4ljsQ.png?raw=true
  https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/KN/lFYLLX.png?raw=true
  https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/KN/2xw9Oq.png?raw=true

  `,

  // Zelda Triforce Showdwon
  8: `***Zelda: Triforce Showdown*** est un jeu de cartes à collectionner se déroulant dans l’univers de The Legend of Zelda. L’objectif de ce projet est de proposer un TCG cohérent avec l’œuvre originale de Nintendo, en respectant à la fois son esthétique et ses mécaniques emblématiques, notamment celles de Breath of the Wild et Tears of the Kingdom.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/ZTS/caprure.PNG?raw=true

**Structure du jeu : **

Chaque joueur dispose d’un deck de 63 cartes, composé de :

- *45 cartes dans le deck principal*
- *12 sanctuaires*
- *1 créature divine*
- *2 héros*
- *3 fragments de Triforce*

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/ZTS/Capture4.PNG?raw=true : 0.75

**Conditions de victoire :**

Il existe deux manières de remporter la partie :

- *Être le dernier joueur à avoir son héros encore en vie sur le champ de bataille.*
- *Assembler sa Triforce avant les autres joueurs.*

Chaque fragment de Triforce possède un objectif spécifique, plus ou moins complexe selon le deck. Une fois cet objectif accompli, le fragment peut être forgé, accordant un bonus durable pour le reste de la partie.
Ce système récompense l’investissement stratégique tout en offrant aux joueurs en difficulté une opportunité de revenir dans la course.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/ZTS/Capture.PNG?raw=true

**Exploration et sanctuaires : **

À chaque tour, le joueur :

- *Pioche une carte.*
- *Révèle un sanctuaire.*

Les sanctuaires proviennent d’un deck séparé, placé face cachée. Ils peuvent être épuisés pour générer de l’essence de leur couleur.Cette mécanique symbolise l’exploration du monde : plus les joueurs découvrent de sanctuaires, plus ils accèdent à de nouvelles possibilités — invoquer des guerriers, activer des capacités ou jouer des cartes de soutien — à l’image de la progression dans BOTW et TOTK.

**Les essences et les peuples :**

Les couleurs d’essence sont directement liées aux peuples d’Hyrule :

- *Essence Piaf*
- *Essence Goron*
- *Essence Gerudo, etc.*

Chaque race possède sa propre identité ludique, avec des mécaniques et des stratégies qui reflètent fidèlement leur représentation dans les jeux.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/ZTS/Capture3.PNG?raw=true

**Les créatures divines :**

Dernier pilier du gameplay inspiré de la saga : les créatures divines. Ces cartes puissantes fonctionnent comme des guerriers auxquels le joueur a toujours accès, mais à un coût très élevé.

Leur particularité réside dans leur double nature : elles peuvent être placées aussi bien dans la zone des sanctuaires que sur le champ de bataille. Selon leur position, leurs effets varient, rappelant le rôle unique des créatures divines dans les jeux, à la fois machines colossales et lieux sacrés.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/ZTS/Capture5.PNG?raw=true
`,

  // Terra Card Game
  9: ``,

  // Untouchable Meal
  10: ``,

  // Les Contes de l Ouest
  11: `
  https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/LCDO/image_2025-04-27_160224733-AVL7j6BbxziNP053.webp?raw=true : 0.5
  
  **Présentation :**

  ***Les Contes de l’Ouest*** est un jeu de rôle initiatique, qui prend place au Far West destiné à des joueurs de 10 ans et plus. Il constitue une porte d’entrée idéale vers les jeux de rôle classiques et encourage la créativité de tous les participants.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/LCDO/dsc00494-avl78rboz5s7om9e-mxB4wDoPNBcop7JL.png?raw=true

Avec des règles simples à comprendre, de nombreuses aides, et des personnages attachants, Les Contes de l’Ouest offre une expérience inoubliable à partager entre amis ou en famille. Jouable de 3 à 7 participants, ce jeu revisite les grands concepts des jeux de rôle tout en s’assurant que personne n’est laissé de côté, qu’il s’agisse des joueurs ou du maître du jeu.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/LCDO/dsc00498-amq1eyvnm9cqk0mn-1-Yyv9lMVa3Li4MrM0.png?raw=true

**Les règles résumé :**

Le maître du jeu place des planches les unes à la suite des autres pour former un plateau. Il pioche ensuite une carte par case, qu’il associe à chacune d’entre elles pour les modifier. Le maître du jeu doit inventer une quête dans laquelle les joueurs progresseront. Ces derniers choisissent un personnage doté d’un passif et de compétences qu’ils débloqueront au fur et à mesure de la partie.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/LCDO/img_20240112_153909-YZ9x27NaX6tVr91Z.jpg?raw=true : 0.5

Le maître du jeu crée des événements pour les joueurs à l’aide des cartes, qu’il intègre à son histoire. Si les joueurs parviennent à surmonter ces événements, ils débloquent de nouvelles compétences et continuent d’avancer sur le plateau. Une fois arrivés à la case finale, les joueurs vivent une ultime péripétie pour conclure leur aventure. S’ils réussissent à la surmonter, ils remportent la partie.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/LCDO/dsc00464-mxb4od5em5t6bked-m7V3G11nZziDokly.png?raw=true

**Pourquoi vous allez aimer ? :**

Les contes de L'ouest est un jeu idéal pour jeunes comme adultes, il permet de découvrir et redécouvrir le jeu de rôle pour tous, avec des mécaniques simples et originales. 

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/LCDO/dsc00500-a85ezbjzboso9nbk-AR0LaRk9VksZbJ7P.png?raw=true

Si vous cherchez à vivre une expérience créative à partager avec vos proches, dont vous parlerez encore après, les contes de l'ouest est le jeu pour vous.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/LCDO/dsc00491-dwxv2rprjwcxlevx-AVL7jrg2DKIxXXNx.png?raw=true

**Crédits :**

Benjamin AKEHAL--DA PONTE
Raphaël BARRIÈRE 
Alex CAVALLARO
Louka VERGÈS

`

};
