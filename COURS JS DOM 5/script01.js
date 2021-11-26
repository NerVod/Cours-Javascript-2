'use strict'

//Exécution du code une fois que le DOM est chargé en mémoire
// on utilise l'évènement DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {
//cette fonction sera éxécutée dès le chargement du DOM en mémoire.
//C'est ici qu'on mettra tout notre code javascript.


//création d'une nouvelle branche du DOM
var elementP = window.document.createElement('p');
console.dir(elementP);
var elementA = window.document.createElement('a');
elementA.href = 'https://www.google.com'
elementA.innerText = 'Ceci est un lien';
elementA.addEventListener('click', function() {
    window.alert('Préparez-vous à aller sur Google !')
});
//On ajoute l'élément a dans les children de l'élément P
elementP.appendChild(elementA);
console.dir(elementP.children);

// On ajoute l'évènement p dans les children de l'élément body du DOM
window.document.body.appendChild(elementP);

elementP.style.backgroundColor = 'purple';
elementP.style['background-color'] = 'pink';
elementP.style['backgroundColor'] = 'white';



// récupère le premier élément dcorrespondant à un sélecteur CSS :
var element = window.document.querySelector('item');
//elementS contient un objet itérable indexé de type HTMLLIElement (voir mdn)
// qui hérite de HTMLElement, qui hérite de ...

// récupère tous les léménets correspondant à un sélecteur CSS :
var elementS = window.document.querySelectorAll('item');
//elementS contient un objet itérable indexé de type NodeList


//récupère tous les éléments correspondant à une classe CSS.

var encoreDesElementS = window.document.getElementsByClassName('item');
console.dir(encoreDesElementS)
//elementS contient un objet itérable indexé de type HTMLCollection


//Array , Nodeliste, HTMLCollection ... sont des objets
// => itérables ( on peut 'boucler dessus)
// =>indexés ( leur porpriétés sont des indices numériques)
//exemples:

for (var i = 0; elementS.length; i++){
    elementS[i].style['font-weight'] = 'bold';
};

var fonctionDeRappel = function(elementEnCoursDeTraitement, indexDeElementEnCoursDeTraitement, objetNodeListLuiMeme) {
    console.dir('exécution de la fonction sur : ' + indexDeElementEnCoursDeTraitement);
    elementEnCoursDeTraitement.style['color'] = 'pink';
}


elementS.forEach(fonctionDeRappel);
// Pour la docu de la méthode .forEach de NodeList


var divElement = window.document.getElementById('carre');
divElement.style['width'] = '150px';
divElement.style['height'] = '150px';
divElement.style['position'] = '100px';
divElement.style['top'] = 'absolute';
divElement.style['background-color'] = 'blue';


// var augmenteLeLeftDeDivElementDe1px = function() {

//     // on récupère le left de l'élément
//     var positionAGauche = parseFloat(divElement.style['left']);
//     // Si cette valeur est NaN ( le left n'est pas défini par exemple)
//     if(isNaN(left)){
//         //on indique que left a pour valeur initiale 0
//         positionAGauche = 0;
//     }
//     positionAGauche ++;

//     divElement.style['left'] = left + 'px';
// }

// var aExecuter = function() {
//     augmenteLeLeftDeDivElementDe1px();

//     window.setTimeout(aExecuter, 50);
//     aExecuter();

//     // => avec requestAnimationFrame
// }

// var animationAdroiteEnCours = false
// window.addEventListener('keydown', function(evenementSurvenu){
//     console.dir(evenementSurvenu);

//     if ('ArrowRight' === evenementSurvenu.code){
//         if(false === animationAdroiteEnCours){
//         augmenteLeLeftDeDivElementDe1px();
//         aExecuter(0);
//     }
//     }

//     window.addEventListener('keyup', function(evenementSurvenu){
    
    
    
//     });


// });

















});