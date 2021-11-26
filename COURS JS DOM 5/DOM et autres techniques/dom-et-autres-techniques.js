'use strict';

// Exécution du code une fois que le DOM
// est chargé en mémoire (en utilisant
// l'évènement DOMContentLoaded).
window.addEventListener('DOMContentLoaded', function(){
  // Cette fonction SERA exécuté dès le
  // chargement du DOM en mémoire. C'est
  // Ici qu'on mettra tout notre code
  // JavaScript.
  
  // Création d'une nouvelle "branche" du DOM
  var elementP = window.document.createElement('p');
  var elementA = window.document.createElement('a');
  elementA.href = 'https://www.google.com';
  elementA.innerText = 'Ceci est un lien';
  // Définir des gestionnaires d'évènement
  // sur des objets du DOM
  elementA.addEventListener('click', function(){
    window.alert('Préparez vous à aller sur google !');
  });
  // On ajoute l'élèment a dans les children de l'élèment p
  elementP.appendChild(elementA);
  console.dir(elementP.children);
  // On ajoute l'élèment p dans les children de l'élèment body du DOM
  window.document.body.appendChild(elementP);

  // Modifier des propriétés de style
  // des objet du DOM (3 possibilité pour y accéder)
  elementP.style.backgroundColor = 'purple';
  elementP.style['background-color'] = 'pink';
  elementP.style['backgroundColor'] = 'white';

  // Récupère le premier élément correspondant à un
  // SELECTEUR css
  var element = window.document.querySelector('.item');
  console.dir(element);
  // elementS contient 1 objet de type HTMLLiElement
  // - https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement/
  // Qui hérite de HTMLElement
  // - https://developer.mozilla.org/fr/docs/Web/API/HTMLElement
  // Qui hérite de....

  // Récupère tous les éléments correspondant à un
  // SELECTEUR css
  var elementS = window.document.querySelectorAll('.item');
  console.dir(elementS);
  // elementS contient 1 objet itérable indexé de type NodeList
  // - https://developer.mozilla.org/fr/docs/Web/API/NodeList

  // Récupère tous les éléments correspondant à une
  // une CLASSE CSS
  var encoreDesElementS = window.document.getElementsByClassName('item');
  console.dir(encoreDesElementS);
  // elementS contient 1 objet itérable indexé de type HTMLCollection
  // - https://developer.mozilla.org/fr/docs/Web/API/HTMLCollection

  // Array, NodeListe, HTMLCollection, ... sont des objets 
  // -> itérable (on peut "boucler" dessus)
  // -> indexés (leur propriétés sont des indices numériques)
  // Exemple :
  for( var i = 0; i < elementS.length; i++) {
    elementS[i].style['font-weight'] = 'bold';
  }

  // La méthode forEach des objets de type NodeList
  // prend en argument un CALLBACK (une FONCTION DE RAPPEL)
  // Cette fonction ne doit PAS être exécutée par le développeur
  // Elle SERA exécutée par la méthode .forEach()
  // Exemple :
  var fonctionDeRappel = function(elementEnCoursDeTraitement, indexDeElementEnCoursDeTraitement, objetNodeListLuiMeme){
    console.log('exécution de la fonction sur : ' + indexDeElementEnCoursDeTraitement);
    elementEnCoursDeTraitement.style['color'] = 'pink';
  };

  elementS.forEach(fonctionDeRappel);
  // Pour la document de la méthode .forEach de NodeList :
  // - https://developer.mozilla.org/fr/docs/Web/API/NodeList/forEach

  var divElement = window.document.getElementById('carre');
  divElement.style['top'] = '150px';
  divElement.style['width'] = '100px';
  divElement.style['height'] = '100px';
  divElement.style['position'] = 'absolute';
  divElement.style['background-color'] = 'blue';

  var augmenteLeLeftDeDivElementDe1px = function(){
    // On récupère le left de l'élèment
    var positionAGauche = parseFloat(divElement.style['left']);
    // Si cette valeur est NaN (la positionAGauche n'est pas défini par exemple)
    if (isNaN(positionAGauche)) {
      // On indique que la positionAGauche à pour valeur initiale 0
      positionAGauche = 0;
    }
    // On incrémente la positionAGauche
    positionAGauche++;
    // On assigne positionAGauche au style left de l'élèment
    divElement.style['left'] = positionAGauche + 'px';
  }
  
  // Faire en sorte que la fonction qui incrémente
  // soit déclenchée par le navigateur au click sur l'élèment
  divElement.addEventListener('click', augmenteLeLeftDeDivElementDe1px);
  // Faire en sorte que la fonction qui incrémente
  // soit déclenchée par le navigateur à intervalle de temps régulier
  // -> avec setInterval
  // window.setInterval(augmenteLeLeftDeDivElementDe1px, 50);
  // -> avec setTimeout :
  /*var aExecuter = function() {
    augmenteLeLeftDeDivElementDe1px();
    // Déclencher l'exécution de la fonction aExecuter à l'issue d'un délai
    // Il s'agit d'un sorte de récursion
    window.setTimeout(aExecuter, 50);
  };
  aExecuter();*/
  // -> avec requestAnimationFrame :
  // Variable animationADroiteEnCours qui determine si la récursion à lieu ou non
  // - False : la récursion ne se produit pas, l'animation n'a pas lieu
  // - True : la récursion se produit, l'effet d'animation a lieu
  /*var animationADroiteEnCours = false;
  var aExecuter = function(tempsEcoule) {
    if (animationADroiteEnCours) {
        augmenteLeLeftDeDivElementDe1px();
        // Déclencher l'exécution de la fonction aExecuter à l'issue d'un délai
        // Il s'agit d'un sorte de récursion
        window.requestAnimationFrame(aExecuter);
    }
  };*/
  //aExecuter(0);

  // Première approche intuitive pour gérer les déplacements :
  /*window.addEventListener('keydown', function(evenementSurvenu){
    // evenementSurvenu contient un objet d'évènement fourni par
    // le navigateur lors de l'exécution de ce gestionnaire d'évènement
    // console.dir(evenementSurvenu);

    // Bonne pratique : écrire ses conditions avec la valeur avant la variable
    // - https://fr.wikipedia.org/wiki/Condition_Yoda
    if ('ArrowRight' === evenementSurvenu.code) {
        if (false === animationADroiteEnCours) {
          animationADroiteEnCours = true;
          aExecuter(0);
        }
    }
  });*/

  /*window.addEventListener('keyup', function(evenementSurvenu){
    animationADroiteEnCours = false;
  });*/


  /*var leMoteurPourLesAnimation = function(tempsEcoule) {
    if (directions.droite) {
        augmenteLeLeftDeDivElementDe1px();
        // Déclencher l'exécution de la fonction aExecuter à l'issue d'un délai
        // Il s'agit d'un sorte de récursion     
    }
    window.requestAnimationFrame(leMoteurPourLesAnimation);
  };
  leMoteurPourLesAnimation(0);*/

  var monJeu = {
    directions: {
      haut: false,
      droite: false,
      bas: false,
      gauche: false
    },
    incrementationDePosition: function(position, increment){
      // On récupère la valeur correspondant à la position en argument
      var valeurDeLaPosition = parseFloat(divElement.style[position]);
      // Si cette valeur est NaN (la positionAGauche n'est pas défini par exemple)
      if (isNaN(valeurDeLaPosition)) {
        // On indique que la positionAGauche à pour valeur initiale 0
        valeurDeLaPosition = 0;
      }
      // On incrémente la positionAGauche
      valeurDeLaPosition = valeurDeLaPosition + increment;
      // On assigne positionAGauche au style left de l'élèment
      divElement.style[position] = valeurDeLaPosition + 'px';
    },
    leMoteurPourLesAnimations: function(tempsEcoule) {
      if (this.directions.droite) {
        this.incrementationDePosition('left', 1);
      }
      if (this.directions.gauche) {
        this.incrementationDePosition('left', -1);
      }
      if (this.directions.haut) {
        this.incrementationDePosition('top', -1);
      }
      if (this.directions.bas) {
        this.incrementationDePosition('top', 1);
      }
    },
    start: function(){
      var ici = this;
      // Deuxième approche pour gérer les déplacements :
      window.addEventListener('keydown', function(evenementSurvenu){
        // Bonne pratique : écrire ses conditions avec la valeur avant la variable
        // - https://fr.wikipedia.org/wiki/Condition_Yoda
        if ('ArrowRight' === evenementSurvenu.code) {
          ici.directions.droite = true;
        }
        if ('ArrowLeft' === evenementSurvenu.code) {
          ici.directions.gauche = true;
        }
        if ('ArrowUp' === evenementSurvenu.code) {
          ici.directions.haut = true;
        }
        if ('ArrowDown' === evenementSurvenu.code) {
          ici.directions.bas = true;
        }
      });

      window.addEventListener('keyup', function(evenementSurvenu){
        if ('ArrowRight' === evenementSurvenu.code) {
          ici.directions.droite = false;
        }
        if ('ArrowLeft' === evenementSurvenu.code) {
          ici.directions.gauche = false;
        }
        if ('ArrowUp' === evenementSurvenu.code) {
          ici.directions.haut = false;
        }
        if ('ArrowDown' === evenementSurvenu.code) {
          ici.directions.bas = false;
        }
      });

      window.setInterval(function(){
        ici.leMoteurPourLesAnimations();
      },25);
    }
  };

  monJeu.start();

  console.dir(monJeu);
});
   
