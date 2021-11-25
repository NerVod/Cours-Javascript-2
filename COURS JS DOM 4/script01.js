'use strict';



////////  livre  design pattern
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/





/**
 * Le sobjets littéraux
 */
var objetlitteral = {
    proptiete1: true,
    propriete2: 'Je suis un littéral',
};

/*
les objets basés sur fonctions constructeurs :
*/
// déclaration fonction constructeur
var UneFonctionConstructeur = function() {
    this.proptieteA = true;
    this.proprieteB = 'Je suis un objet basé sur une fonction constructeur';
};

// utilisation du mot clé new
var objet1BaseSur = new UneFonctionConstructeur();
var objet2BaseSur = new UneFonctionConstructeur();

/**
 * création objet basé sur un portotype
 */
// avecObject.create()
var objetAvec1Prototype = Object.create(objet1BaseSur);
objetAvec1Prototype.proprieteA; // true
// propriete1 ,'est pas une propriété propre de 
//objetAvecUnPrototype. C'est une propriété
//issue de Objet1BaseSur

// =>En déclarant le prototype a utiliser par la 
//fonction constructeur avec la propriété
// .prototype des fonctions
var objet2Avec1Prototype = new UneFonctionConstructeur();
objet2Avec1Prototype.propriete2// 'je suis un litteral'
//propriete2 n'est pas une porpriété propre de 
//objetAvex1Prototype. C'est une propriété issue
// de objetBaseSur

/**
 * Bonnes pratiques basées sur les prototypes
 * -design patter constructeur
 * --> objectif : optimiser l'utilisation de la mémore
 *              => regrouper les méthodes dans le 
 *              prototype utilisé par un constructeur
 */

var UnConstructeurBienFait = function() {
    this.unePropriete = 'Ceci est une propriété';
    this.uneAutrePropriete = 'Ceci est une autre propriété'
};

// La propriété .prototype des constructeurs
//contient 1 objet avec 1 propriété constructor
// par défaut . On ajoute les méthodes dans
// cet objet

UnConstructeurBienFait.prototype.uneMethode = function(){};
UnConstructeurBienFait.prototype.uneAutreMethode = function(){};

// Création d'un objet
var unObjetBienConstruit = new UnConstructeurBienFait();

unObjetBienConstruit.unePropriete; // propriété propre
unObjetBienConstruit.uneMethode; // propriété du prototype

/**
 * Déclaration d'une fonction constructeur ES+
 * => utilisation du "sucre syntaxique" class
 */

// en ES5 -
var UneAutreFonctionConstructeurEnES3 = function() {
    this.definiParUnArgument = 'unArgument';
    this.unePropriete = 'Ceci est une propriété';
    this.uneAutrePropriété = 'Ceci est une autre propriété'
}



/// Implémentation du design constructeur a prototype

UneAutreFonctionConstructeurEnES3.prototype.methodeDuPrototype = function(){
    // instructions
};

UneAutreFonctionConstructeurEnES3.prototype.autreMethodeDuPrototype = function(){
    //instructions
}

// utilisation :
var unObjetIssuDeLaNotationES3 = new UneAutreFonctionConstructeurEnES3()







// en ES5+
class UneAutreFonctionConstructeurEnES5 { // class : mot clé
    constructor(unArgument){ // constructor : mot clé
    this.unePropriete = 'Ceci est une propriété';
    this.uneAutrePropriété = 'Ceci est une autre propriété'
}


// les méthodes ici iront dans la
// attention : on utilise le mot clé 

methodeDuPrototype() {
    // instruction
}

autreMethodeDuPrototype() {
    //instructions
}

}

var unObjetIssuDeLaNotationES = new UneAutreFonctionConstructeurEnES5();




/**
 * Design pattern : "Sub-class"
 * langage à héritage de "classes". en JS; il
 * s'agit de faire en sorte qu'une fonction
 * constructeur hérite des déclarations d'une
 * autre fonction constructeur
 */

var PlanDUneAttraction = function() {
    this.principe = 'coordonner les mouvements du chariot vertical avec un film';
    this.concepteur = 'Raven Sun Creative';
    this.estSuperSympa = true;
    this.theme = 'Générique';
};


PlanDUneAttraction.prototype.faireUnTour = function() {
    // instructions
}

PlanDUneAttraction.prototype.faitDeLaFumee = function() {
    //instructions
}

// l'attracion n'a pas été construite (pas d'objet)
// puisque le concepteur oulait disney...
//Quelques temps plus tard :

// 1.On créé une fonction constructeur qui va 
// "copier" la déclaration de l'autre
//fonction constructeur

var PlanDUneAttractionDisney = function() {
    //on transfert le "this" utilisé dans PlanDUneAttractionDisney
    //dans PlanDUneAttraction et exécuter cette dernière
    PlanDUneAttraction.call(this);
    // mdn fonction global call
    //Après avoir exécuté la fonction constructeur "parente"
    // on a défini des propriétés propores de l'objet qu'on instancie
    //qui sont celles définiesdans le constructeur

    // écraser les propriétés dont on ne veux pas
    this.theme = 'StarWars';
    this.concepteur = 'Mickey';

};


//2. On créé un algorithme qui va nous
//permettre de copier les déclarations
//de méthodes du prototype

//On déclare comme prototype de PlanDUneAttractionDisney
//Un objet qu'on créé à partir du prototype de PlanDUneAttraction
// On a donc 2 niveaux de prototypage :
//Objet créé avec PlanDUneAttractionDisey ->
// -> A pour prototype un objet vide (pour l'instant) qui
// ->A pour prototype PlanDUneAttraction.prototype


PlanDUneAttractionDisney.prototype = Object.create(PlanDUneAttraction.prototype);

// On recréé la porpriété qui esistait par défaut dans le prototype par défaut
PlanDUneAttractionDisney.prototype.constructor = PlanDUneAttractionDisney;

//methode spécifique à l'ttraction Disney
PlanDUneAttractionDisney.prototype.joueLaMusiqueStarwars = function() {
    // instructions
}


var attractionDisney = new PlanDUneAttractionDisney();









/**
 * Implémentation du designPattern "sub-class" en ES6
 */

// ES6
class PlanDUneAttractionES6 {
    Constructor() {
    this.principe = 'coordonner les mouvements du chariot vertical avec un film';
    this.concepteur = 'Raven Sun Creative';
    this.estSuperSympa = true;
    this.theme = 'Générique';
    }

    faireUnTour(){
        //instructions
    }
    faitDeLaFumee() {
        //instructions
    }
};

var attractionES6 = new PlanDUneAttractionES6();

//Le mot clé extends permet :
//



class PlanDUneAttractionDisneyES6 extends PlanDUneAttractionES6 {
    constructor() {
        super(); // permet d'éxécuter le constructeur parent
        this.theme = 'Starwars';
        this.concepteur = 'Mickey'
    }

    joueLaMusiqueStarwars(){
        //instructions
    }
}

// créattiond'une attraction disney (ES6+) :
var attractionDisneyES6 = new PlanDUneAttractionDisneyES6();
PlanDUneAttractionDisneyES6.prototype.nouveauMickey = function(){};



/**
 * Modèle du document
 * Gestion des évènements
 */


// Dans l'arborecence des objets du DOM
//les propriétés des objets qui commenent par 'on..'
// sont généralemnt associés à des évènements
//Ces porpriétés  doivent en réalité être des méthodes
//et ces méthodes sont exécutées par le navigateur
//en réaction à un évènement qui est lié à une
// action de l'utilisateur ou un comportement du
//navigateur.

//On peut prévoir ces méthodes. Par exemple :
window.onlad = function() {
    window.console.log('document chargé')
};

//Cette fonction est exécutée par le navigateur quand
// le document est chargé par le navigateur 
window.onmousemouve = function(){
    window.console.log('souris bougée')
};
// les méthodes qu'on déclare et qui ont vocation
// aà être exécutée par le navigateur en réaction
//à un évènement s'appelent :
// -Gestionnaire d'évènement / Event Handler
//- Ecouteur d'évènement / Event Listener
window.onmousemove = function(){
    window.console.log('souris déplacée')
};
//Plutôt que de déclarer les gestionnaires d'évènements 
//dans les propriétés d'évènement du modèle objet du documetn
//.addEventListener qui peut être exécutée à partir
// de ,'importe quel noeud( objet correspondant à une balise) du DOM. Exemple :
var nomEvt = 'mousemove';

var laFonctionAExecuter = function() {
    window.console.log('Document Chargé');
}
window.addEventListener('mousemove', function(){
    window.console.log('souris déplacée');
});
window.addEventListener('load', function() {
    window.console.log('Document chargé')
});

var elementDuDOM = window.document.querySelector('body >p>span.une-classe-css')

elementDuDOM.addEventListener('click', function(){
    window.console.log('Elément cliqué')
})