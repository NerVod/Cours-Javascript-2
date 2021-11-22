'use strict';

/**
 * Retour sur la syntaxe des boucle et conditions
 */

// Boucle avec compteur
var compteur = 1;
while(compteur < 10) {
    // instructions
    compteur++;
}
// Syntaxe simplifiée avec :
for(var compteur = 1;compteur < 10;compteur++){
    // instructions
}

var a = 0;
// Conditions avec plusieurs égalités
if ( a === 10) {
    // instructions
} else {
    if (a === 20) {
    // instructions
    } else {
        if (a === 30) {
            // instructions
        } else{
            // instructions
        };
    };
};
// Syntaxe simplifiée avec :
switch(a) {
    case 10: // correspond à if ( a === 10) {
        // instructions
        break;
    case 20: // correspond à if ( a === 20) {
        // instructions
        break;
    case 30: // correspond à if ( a === 30) {
        // instructions
        break;
    default: // correspond au else de dernier niveau
        // instructions
}

/**
 * Les déclarations d'objets et prototypes
 */

// Déclaration littérale :
var unObjetLitteral = {
    propriete1: 10,
    propriete2: 'Hello world',
    methode1: function(){
        // des instructions...
    },
    methode2: function(){
        // des instructions...
    },
    "Ceci est une propriété dont le nom contient des espace": true
}; 

// Déclaration de fonctions constructeur
// et l'instanciation d'objets à partir
// de ces fonctions :
// Déclaration du (de la fonction) constructeur
var MonConstructeur = function(){
    this.propriete1 = 10;
    this.propriete2 = 'Hello world';
    this.methode1 = function(){
        // des instructions
    };
    this.methode2 = function(){
        // des instructions
    };
    this['Ceci est une propriété dont le nom contient des espaces'] = true;
};
// Instanciation (création d'un objet avec le constructeur) :
var unObjetBaseSurMonConstructeur = new MonConstructeur();

// Utilisation :
// Accéder à une propriété d'un objet :
unObjetBaseSurMonConstructeur['propriete1'];
unObjetLitteral.propriete1;

// On peut utiliser le . ou les [], peu importe
// la façon dont l'objet a été créé

// Supprimer une propriété :
// mot clé delete
delete unObjetLitteral.propriete1;
delete unObjetBaseSurMonConstructeur.propriete1;

// La principale différence entre un objet créé à base de 
// fonction constructeur et un objet créé à base de littéral
// est que l'objet à base de fonction constructeur a pour
// TYPE le nom de la fonction constructeur

/**
 * Les prototypes
 */

// Les objet en JavaScript on tous un prototype
// C'est à dire un objet sur lequel ils sont basés.
// Par défaut, tous les objets (littéraux ou basés sur
// une fonction constructeur) on pour prototype
// le prototype de l'objet fondamental Object :
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object

// Par exemple :
var unAutreObjet = {};
unAutreObjet.__proto__; // contient le prototype de Object
unAutreObjet.__proto__.__proto__; // contient le prototype du prototype de Object : null
// Et null est le seul objet qui n'a pas de prototype en Javascript

// Déclarer ses propres prototypes :
// 2 possibilité :
// 1 - Créer un objet à partir d'un autre objet à l'aide de Object.create()
// 2 -  Créer une fonction constructeur et définir un objet dans la propriété .prototype de la fonction constructeur

/**
 * 1 - Object.create()
 */
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// Exemple :
// Constructeur de lapins préhistoriques
var LapinPrehistorique = function(){
    this.cri = 'Gnaaaarl !';
    this.couleur = 'Blanc';
    this.caractere = 'Très agressif';
    this.aDesDentsDeSabre = true;
    this.intellect = 'Faible';
    this.sExprimer = function(){
        window.alert(this.cri);
    };
}
// Création d'un lapin préhistorique
var unLapinPrehistorique = new LapinPrehistorique();

// Création de descendants basés sur le prototype de lapin préhistorique :
// -> Création d'un objet de définition de propriété.
// Cette objet décrit la liste des propriété propre des objets qu'on souhaite
// créér et est documenté ici :
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
var objetDeDefinitionDePropriete =  {
    cri: {
        writable:  true, // peut-on modifier la valeur de la propriété cri ?
        enumerable: true, // peut-on lister la  propriete cri dans une boucle for... in... par exemple ?
        configurable: true, // peut-on supprimer la propriete à l'aide de delete ?
        value: 'Squiiik' // quelle est la valeur de la propriété cri ?
    },
    caractere: {
        writable:  true,
        enumerable: true,
        configurable: true, 
        value: 'Craintif'
    },
    aDesDentsDeSabre: {
        writable:  true,
        enumerable: true,
        configurable: true, 
        value: false
    },
    aDesGrandesOreilles: {
        writable:  true,
        enumerable: true,
        configurable: true, 
        value: true
    }
};
// -> Utilisation de la méthode Object.create() pour créer des objet
// à partir de unLapinPrehistorique et ayant pour propriétés propres
// les propriétés définies dans l'objet de définition de propriété :
var lapinDeGarene1 = Object.create(unLapinPrehistorique,objetDeDefinitionDePropriete);
var lapinDeGarene2 = Object.create(unLapinPrehistorique,objetDeDefinitionDePropriete);
var lapinDeGarene3 = Object.create(unLapinPrehistorique,objetDeDefinitionDePropriete);

// On peut avoir des chaîne de prototype. Par exemple :
var lapinDuFutur = Object.create(lapinDeGarene2, {
    cri: {
        writable:  true, // peut-on modifier la valeur de la propriété cri ?
        enumerable: true, // peut-on lister la  propriete cri dans une boucle for... in... par exemple ?
        configurable: true, // peut-on supprimer la propriete à l'aide de delete ?
        value: 'Bonjour je m\'appelle je m\'appelle Jean-Mi' // quelle est la valeur de la propriété cri ?
    },
    intellect: {
        writable:  true, // peut-on modifier la valeur de la propriété cri ?
        enumerable: true, // peut-on lister la  propriete cri dans une boucle for... in... par exemple ?
        configurable: true, // peut-on supprimer la propriete à l'aide de delete ?
        value: 'Extremement intelligent' // quelle est la valeur de la propriété cri ?
    }
});

/**
 * 2 - Propriété .prototype des fonctions constructeur
 */

var MonFabricantDePCAmericain = function(){
    this.cpu = 'Intel';
    this.carteGraphique = 'Nvidia';
    this.demarrage = 'Tadaaaam !';
    this.prix = 2000;
}
// Création d'un objet qui servira de prototype :
// Ici un objet à base de fonction constructeur
var unPCAmericain = new MonFabricantDePCAmericain();

var MonFabricantDePCChinois = function(p){
    this.prix = 1000;
    this.puissance = p
}

MonFabricantDePCChinois.prototype = unPCAmericain;

var unPCChinois = new MonFabricantDePCChinois('3ghz');
var unAutrePCChinois = new MonFabricantDePCChinois('3.5ghz');

unPCChinois.prix; // 1000
unPCChinois.__proto__.prix; // 2000

/**
 * 3 - Design pattern (patron de conception) constructeur (avec prototype)
 */
// Consiste déclarer des constructeurs
// qui ne contienne que des propriétés
var FabricantDeVoiture = function(marque) {
    this.marque = marque;
    this.essence = 100;
    this.klaxon = 'Pouet pouet !';
}
// Et déporter toutes les méthodes dans le 
// prototype de la fonction constructeur
FabricantDeVoiture.prototype.roule = function(){
     this.essence--;
}
FabricantDeVoiture.prototype.klaxonne = function(){
    window.alert(this.klaxon);
}
// Objectif : Optimiser l'utilisation de la mémoire
// en limitant les duplication de code. En effet,
// plutôt que de REcréer chaque fonction dans chaque
// objet à chaque instanciation, chaque fonction n'est
// créé qu'une seule fois dans le prototype et chaque
// objet ne contient que les propriété qui lui sont
// propres
// - Utilisation de la fonction constructeur : 
var v1 = new FabricantDeVoiture('rono');
var v2 = new FabricantDeVoiture('citrono pipo');
var v3 = new FabricantDeVoiture('chevrolette');

v2.roule(); // exécution d'une méthode du prototype de v2

/**
 * Objets fondamentaux et coercition
 */

// Les objets/fonctions contructeur fondamentaux sont disponible
// dès le début de l'exécution d'un script JavaScript

// On citera principalement :

Object; // objet/fonction constructeur fondamentale pour la création et la manipulation d'objet
// Exemple :
var unObjet = new Object({
    propriete1: 'test'
});
// donne la même chose que
var unObjetIdentique = {
    propriete1: 'test'
};
// Les {} sont un "sucre syntaxique" pour le constructeur Object
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object

Array; // objet/fonction constructeur fondamental pour la création et la manipulation d'objet indexés/itérable
// Exemple :
var unObjetIterable = new Array('Salut', 'Tu', 'Vas', 'Bien', '?');
// donne la même chose que
var unObjetIterableIdentique = ['Salut', 'Tu', 'Vas', 'Bien', '?'];
// Les [] sont un "sucre syntaxique" pour le constructeur Array.

// Array.from(); est une méthode de Array
// Array.prototype.entries(); // est une méthode du prototype de Array et ne peut-être utilisée qu'à partir d'un new Array(...) 
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

Function; // objet/fonction constructeur fondamental pour la création et la manipulation d'objet exécutable
// Exemple :
var unObjetExécutable = new Function('var message = "Hello"; window.alert(message);');
// donne la même chose que 
var unObjetExécutableIdentique = function(){
    var message = "Hello";
    window.alert(message);
}
// Le mot clé function(){} est un "sucre syntaxique" pour le constructeur Function.
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function

unObjetExécutableIdentique.call(); // méthode du prototype de Function
// Les méthodes call, bind et apply appartiennent au prototype de Function
// et par conséquent peuvent être exécutée à partir de n'importe quel
// objet exécutable / fonction.

// Les objets fondamentaux pour la COERCITION (Fait de contraindre.)
// La coercition en JS est un mécanisme du moteur qui oblige un
// type primitif à devenir un objet pendant l'exécution d'une
// instruction.
// Exemples :
// Grâce à la fonction constructeur String :
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String
// Si on écrit :
"Test".charAt(2);
// En réalité le moteur JavaScript "comprend"
(new String("Test")).charAt(2);
// En d'autres terme, pour pouvoir exécuter la méthode charAt, le moteur
// converti temporairement la chaîne de caractère en objet à l'aide
// constructeur fondamental String. 

// De même, grâce à la fonction constructeur Number :
// -  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number
// Si on écrit :
(45).toString();
// En réalité le moteur JavaScript "comprend"
(new Number(45)).toString();

// De même, grâce à la fonction constructeur Boolean :
// -  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// Si on écrit :
(true).toString();
// En réalité le moteur JavaScript "comprend"
(new Boolean(true)).toString();


/**
 * Retour sur le DOM
 */
// Cette méthode permet d'obtenir la première référence trouvée correspondant à un selecteur CSS fourni :
var element = window.document.querySelector('p > span.une-classe-css');
window.console.dir(element);
// Modifier le contenu de l'élèment
element.innerHTML = 'my friend';
window.document.body.children[0].style.fontSize = '42px';

/**
 * Gestion de évènement
 */
// Déclarons une méthode dans la propriété onclick de
// l'élément correspondant au premier paragraphe
window.document.body.children[0].onclick = function(){
    window.alert('Salut les amis');
};

// Je peux exécuter moi même cette méthode:
// window.document.body.children[0].onclick();
// Mais généralement ce sera le navigateur qui
// exécutera cette méthode en réaction à un évènement

// Une ensemble de méthode sont exécutées automatiquement
// par le navigateur :
// - en réaction à des interactions utilisateur
// - en réaction à des comportement de navigation

// Exemple d'interaction utilisateur :
window.onmousemove = function(parIciMonPetit){
    window.console.log('Déclenché quand la souris bouge');
    window.console.log(parIciMonPetit);
    // Le navigateur fourni en paramètre d'une fonction
    // a exécuter en cas d'évènement un objet de type
    // MouseEvent dans le cas d'un évènement lié à la souris
    // - https://developer.mozilla.org/fr/docs/Web/API/MouseEvent
};

// Exemple de comportement du navigateur :
window.onload = function(etIci){
    window.console.log('Déclenché quand le document est chargé et affiché dans la navigateur');
    window.console.log(etIci);
    // Le navigateur fourni en paramètre d'une fonction
    // a exécuter en cas d'évènement un objet de type
    // Event dans le cas d'un évènement lié au comportement
    // du navigateur
    // - https://developer.mozilla.org/fr/docs/Web/API/Event
};
