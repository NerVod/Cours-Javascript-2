'use strict';

/**
 * Les objets littéraux
 */
var unObjetLitteral = {
    propriete1: true,
    propriete2: 'Je suis un littéral'
};

/**
 * Les objets basés sur des fonction constructeur
 */
// Déclaration de la fonction consctructeur
var UneFonctionConstructeur = function(){
    this.proprieteA = true;
    this.proprieteB = 'Je suis basé sur 1 fonction constructeur';
};
// Utilisation avec le mot-clé new
var objet1BaseSur = new UneFonctionConstructeur();
var objet2BaseSur = new UneFonctionConstructeur();

/**
 * La création d'objet basé sur un prototype
 */
// => Avec Object.create()
var objetAvec1Prototype = Object.create(objet1BaseSur);
objetAvec1Prototype.proprieteA; // 'Je suis basé sur 1 fonction constructeur'
// propriete2 n'est pas une propriété propre de 
// objetAvec1Prototype. C'est une propriété issue
// de objet1BaseSur

// => En déclarant le prototype à utiliser par la 
//    fonction constructeur avec la propriété
//    .prototype des fonctions.
UneFonctionConstructeur.prototype = unObjetLitteral;

var objet2Avec1Prototype = new UneFonctionConstructeur();
objet2Avec1Prototype.propriete2; // 'Je suis un littéral'
// propriete2 n'est pas une propriété propre de 
// objetAvec1Prototype. C'est une propriété issue
// de objet1BaseSur

/**
 * Bonnes pratiques basées sur les prototypes
 * - Design pattern constructeur
 * --> Objectif : optimiser l'utilisation de la mémoire
 *                -> regrouper toutes les méthodes dans
 *                   le prototype utilisé par un
 *                   constructeur
 */
var UnConstructeurBienFait = function(){
    this.unePropriete = 'ceci est une propriété';
    this.uneAutrePropriete = 'ceci est une autre propriété';
};

// La propriété .prototype des constructeur
// contient 1 objet avec 1 propriété constructor
// par défaut. On ajouter les méthodes dans
// cet objet
UnConstructeurBienFait.prototype.uneMethode = function(){};
UnConstructeurBienFait.prototype.uneAutreMethode = function(){};

// Création d'un objet
var unObjetBienConstruit = new UnConstructeurBienFait();

unObjetBienConstruit.unePropriete; // propriété propre
unObjetBienConstruit.uneMethode; // propriété du prototype


/**
 * Déclaration d'une fonction constructeur en ES5+
 * -> Utilisation du "sucre syntaxique" class
 */
// En ES5-
function UneAutreFonctionConstructeurEnES3(unArgument){
    this.definiParUnArgument = unArgument;
    this.unePropriete = 'Ceci est un propriété';
    this.uneAutrePropriete = 'Ceci ess une autre propriété'
};

// Implémentation du design constructeur à prototype
UneAutreFonctionConstructeurEnES3.prototype.methodeDuPrototype = function(){
    // instructions
};
UneAutreFonctionConstructeurEnES3.prototype.autreMethodeDuPrototype = function(){
    // instructions
};

// Utilisation :
var unObjetIssuDeLaNotationES3 = new UneAutreFonctionConstructeurEnES3();

// MEME CHOSE EN ES5+

// En ES5+
class UneAutreFonctionConstructeurEnES5 { // class : mot-clé
    constructor(unArgument) { // constructor : mot-clé
        this.definiParUnArgument = unArgument;
        this.unePropriete = 'Ceci est un propriété';
        this.uneAutrePropriete = 'Ceci ess une autre propriété';
    }

    // les méthodes déclarées ici iront dans le prototype
    // Attention : on utilise pas le mot-clé function
    methodeDuPrototype() {
        // instructions
    }

    autreMethodeDuPrototype() {
        // instructions
    }
}

var unObjetIssuDeLaNotationES5 = new UneAutreFonctionConstructeurEnES5();

// LES DEUX NOTATIONS ENTRAINE LA CREATION 
// D'OBJETS COMPARABLES EN MEMOIRE.

/**
 * Design pattern : "Sub-class"
 *
 * Permet d'imiter le comportement d'un
 * langage à héritage de "classes". En JS, Il
 * s'agit de faire en sorte qu'une fonction
 * constructeur hérite des déclaration d'une
 * autre fonction constructeur
 */
var PlanDUneAttraction = function(){
    this.principe = 'coordonner les mouvement du chariot vertical avec un film';
    this.concepteur = 'Raven Sun Creative';
    this. estSUperSympa = true;
    this.theme= 'Générique';
};

PlanDUneAttraction.prototype.faireUnTour = function(){
    // instructions
}

PlanDUneAttraction.prototype.faitDeLaFumee = function(){
    // instructions
};

// L'attraction n'a pas été construite (pas d'objet)
// puisque le concepteur voulait à disney...
// Quelques temps plus tard :

// 1. On créé une fonction constructeur qui
// "copier" la déclaration de l'autre
// fonction constructeur
var PlanDUneAttractionDisney = function(){
    // On transfére le "this" utilisé dans PlanDUneAttractionDisney
    // dans PlanDUneAttraction et exécuter cette dernière
    PlanDUneAttraction.call(this);
    // - Voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    // Après avoir exécuté la fonction constructeur "parente"
    // on a défini des propriété propre de l'objet qu'on instancie
    // qui sont celles qui sont définie dans le contructeur "parent"
    
    // Ecraser les propriété dont on ne veut pas :
    this.theme = 'StarWars';
    this.concepteur= 'Mickey';
}

// 2. On créé un algorithme qui va nous
// permettre de copier les déclaration
// de méthode du prototype

// On déclare comme prototype de PlanDUneAttractionDisney
// Un objet qu'on créé à partir du prototype de PlanDUneAttraction
// On a donc 2 niveau de prototypage :
// Objet créé avec PlanDUneAttractionDisney ->
//  -> A pour prototype un objet vide (pour l'instant) qui
//     -> A pour prototype PlanDUneAttraction.prototype

// Ici on copie 1:1 les références aux fonctions dans chaque 
// propriété du prototype de PlanDUneAttraction dans des propriété
// équivalente de PlanDUneAttractionDisney
/*for( var nomDeFonction in PlanDUneAttraction.prototype ) {
    PlanDUneAttractionDisney.prototype[nomDeFonction] = PlanDUneAttraction.prototype[nomDeFonction];
}*/
// Présente 2 inconvénients :
// - On peut pas surcharger les méthodes d'origine (uniquement écraser le propriété y faisant référence)
// - Si on ajoute une méthode dans le prototype de PlanDUneAttraction après la copie des méthodes,
//   on y aura pas accès à partir des instance de PlanDUneAttractionDisney

PlanDUneAttractionDisney.prototype = Object.create(PlanDUneAttraction.prototype);

// On recréé la propriété qui existait par défaut dans le prototype par défaut
PlanDUneAttractionDisney.prototype.constructor = PlanDUneAttractionDisney;

// Méthode spécifique à l'attraction Disney
PlanDUneAttractionDisney.prototype.joueLaMusiqueStarwars = function(){
    // instructions
}

// Création d'une attraction disney : 
var attractionDisney = new PlanDUneAttractionDisney();

/**
 * Implémentation du design pattern "sub-class" en es6
 */
 class PlanDUneAttractionES6{
    constructor() {
        this.principe = 'coordonner les mouvement du chariot vertical avec un film';
        this.concepteur = 'Raven Sun Creative';
        this. estSUperSympa = true;
        this.theme= 'Générique';
    }

    faireUnTour() {
      // instructions  
    }

    faitDeLaFumee(){
        // instructions
    };
};

// Le mot clé extends permet :
// - d'utiliser le mot-clé super pour remplacer le PlanDUneAttractionES6.call(this)
// - d'indiquer qu'on souhaite que le prototype de cette fonction constructeur ait pour prototype le prototype de l'autre fonction constructeur
class PlanDUneAttractionDisneyES6 extends PlanDUneAttractionES6 {
    constructor(){
        super(); // permet d'exécuter le constructeur parent
        this.theme = 'StarWars';
        this.concepteur= 'Mickey';
    }

    joueLaMusiqueStarwars() {
        // instructions
    }
}

// Création d'une attraction disney (ES6+) : 
var attractionDisneyES6 = new PlanDUneAttractionDisneyES6();

/**
 * Modèle objet du document
 * Gestion des évènements
 */

// Dans l'arborescence des objet du DOM, les
// propriété des objets qui commence par "on..."
// sont généralement associées à des évènements.
// Ces propriétés doivent en réalité être des méthodes
// et ces méthodes sont exécutées par le navigateur
// en réaction à un évènement qui est lié à une
// action de l'utilisateur ou un comportement du navigateur.

// On peut prévoir ces méthodes. Par exemple:
window.onload = function(){
    window.console.log('Document chargé');
};
// Cette fonction est exécuté PAR le navigateur quand le document est chargé par le navigateur.
window.onmousemove = function(){
    window.console.log('Souris Bougée');
};
// Les méthodes qu'on déclare et qui ont vocation
// a être exécutée par le navigateur en réaction
// à un évènement s'appellent :
// - Gestionnaires d'évènement / Event Handler
// - Ecouteurs d'évènement / Event Listener

// Plutôt que de déclarer les gestionnaires d'évènements
// dans le propriété d'évènement du modèle
// objet du document. On peut utiliser la méthode
// .addEventListener qui peut être exécutée à partir
// n'importe quel noeud (objet correspondant à une balise) du DOM. Exemple :

var nomEvt = 'mousemove';
// La liste des évènement est disponible sur:
// - https://developer.mozilla.org/en-US/docs/Web/Events
var laFonctionAExecuter =  function(){
    window.console.log('Souris Déplacée');
};
// On enregistre dans window à l'aide de addEventListener une fonction
// a exécuter en réaction à l'évènement dont le nom est fourni
window.addEventListener(nomEvt,laFonctionAExecuter);

window.addEventListener('load', function(){
    window.console.log('Document chargé !');
});

var elementDuDOM = window.document.querySelector('body > p > span.une-classe-css');

elementDuDOM.addEventListener('click', function(){
    window.console.log('Element cliqué');
});
