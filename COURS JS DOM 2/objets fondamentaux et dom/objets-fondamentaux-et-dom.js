
// window est l'objet global
window;
// window est créé par le navigateur
// window contient 1 ensemble
// de propriétés et de méthodes
// Exemple :
window.alert();
window.prompt();
// window.console est une propriété
// qui contient un objet qui contient 
// des méthodes pour agir sur la 
// console du navigateur.
// Exemple
console.dir('Hello'); // affiche Hello dans la console
console.dir(window.document); // affiche le contenu de window.document dans la console
window.document.title; // correspond à la propriété qui contient la valeur du méta title

// On peut également les propriétés des sous-objets de l'objet
// document et modifier leur valeur à notre convenance.
window.document.children[0].children[1].style.backgroundColor = "red";
window.document.children[0].children[1].children[0].style.fontSize = "24px";
window.document.children[0].children[1].children[0].style.fontWeight = "bold";

// L'objet document contient également de méthode utilitaires
// pour récupérer des référence à des objets du DOM :
// Exemple :
var objetCorrespondantAMonParagraphe= window.document.querySelector('p'); // permet de récupérer le premier objet du DOM qui correspond au sélecteur CSS 'p'
objetCorrespondantAMonParagraphe; // contient une référence à l'objet qui représente le
// paragraphe en mémoire
// Cet objet contient de propriété et des méthodes.
// Définition de la méthode onclick :
objetCorrespondantAMonParagraphe.onclick = function(){
    window.alert('Cliqué !');

    // Ici un algorithme qui va incrémenter
    // la valeur de marge à gauche de l'objet
    // à intervalle de temps régulier
    window.setInterval( function(){
        var margeAGauche = objetCorrespondantAMonParagraphe.style.marginLeft;
        margeAGauche = parseFloat(margeAGauche);
        if (isNaN(margeAGauche)) {
            margeAGauche = 0;
        }
        margeAGauche++;
        if (margeAGauche<300) {
            objetCorrespondantAMonParagraphe.style.marginLeft = margeAGauche + 'px';
        }
    
    
    }, 50);

}


