// window est l'objet global
window;
// window est créé par le navigateur
// window contient un ensemble de prpriétés
// et de méthodes
// exemple :
window.alert();
window.prompt();
//window.console est une propriété
//qui contient un objet qui contient
//des méthodes pour agir sur la console du navifateur
// exemple:
console.dir('Hello'); // affiche 'hello' dans la console
console.dir(window.document); // affiche le contenu de window.document
window.document.title; // correspond à la propriété qui contient la valeur du mété title
window.document.children[0].children[1].style.backgroundColor = "red";


window.document.children[0].children[1].children[0].style.fontSize = "24px";
window.document.children[0].children[1].children[0].style.fontWeight = "bold";

// l'objet
