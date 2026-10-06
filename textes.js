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
Benjamin AKEHAL DA-PONTE`,

  // Hearts of Auraliz
  3: `***IL EST RECOMMANDÉ DE JOUER À LA MANETTE, LE JEU EST DÉVELOPPÉ POUR.***

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/HOA/C9NvpZ.png?raw=true

Hearts of Auraliz est un JRPG narratif inspiré des jeux de la sixième génération de consoles, mêlant exploration, combats au tour par tour et mécaniques de timing. Le joueur suit Onde, un jeune garçon parti traverser les mers célestes d’Auraliz pour retrouver son frère disparu après l’attaque d’un groupe de pirates du ciel. Au cours de son voyage, il rencontrera différents compagnons et découvrira un monde où les parties refoulées de chaque personne peuvent prendre vie sous la forme d’armes.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/HOA/F+_zQN.png?raw=true

À travers une aventure centrée sur les personnages et leurs relations, Hearts of Auraliz aborde le thème de l’acceptation de soi. Les combats reposent autant sur la stratégie que sur le lien entre le manieur et son arme, tandis que l’univers mélange paysages oniriques, ambiance mélancolique et esprit d’aventure. Le jeu cherche à proposer une expérience accessible et immersive, dans l’esprit des grands JRPG des années 2000.

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/HOA/iRBTYA.png?raw=true

**Crédits :**

*Benjamin Akehal–Daponte* :

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

*Maëlys Puertas* :

- Concept Artist
- Main Artist
- Environment Artist
- Character Designer
- 3d Texturing

*Lisa Gasquy* :

-Main Texture Artist
-Concept Artist
-Character Designer
-Sprite Artist
-DA referee

*Anthony Colombani-Gailleur* :
- Gameplay referee

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/HOA/AfGA5j.png?raw=true

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/HOA/jAjVr1.png?raw=true
`,

  // Bienvenue dans la boite
  4: `**"Bienvenue dans la boîte"**
  
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

*CONCEPT ART & ILLUSTRATIONS*: Killian TARIN Neige FRANQUINET Adam ESSALHI Alexis PRUDHOMME 

*3D & TEXTURES :* Lisa GASQUY Thomas BERRETTA Laurine CAMPREDON Timotée CHARBONNEAU 

*GAME DESIGN :* Alexis ROGER Benjamin AKEHAL--DAPONTE Diego LLAURY

https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/BDLB/fGRo3A%20(1).png?raw=true
https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/BDLB/hliJYb.png?raw=true
https://github.com/Mik0ia/BAD_Portfolio/blob/main/ASSETS/SCREENS/BDLB/kp6tUe%20(1).png?raw=true

`,

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
