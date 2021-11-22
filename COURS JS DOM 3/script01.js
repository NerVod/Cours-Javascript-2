'use strict'

// Declaration literale

var unObjetLitteral = {
    propriete1 : 10,
    propriete2 : 'Hello World',
    methode1 : function() {
        // des instructions
    },
    methode2 : function() {
        //des instructions
    },
    "Ceci est une propriété dont le nom contient des espaces" : true
};

//Declaration des fonctions constructeur
// et l'instanciation d'onjets à partir
// de ces fonctions :
// Déclaration (de la fonction) constructeur

var MonConstructeur = function() {
    this.propriete1 = 10;
    this.propriete2 = 'Hello World';
    this.methode1 = function(){
        //des instructions
    };
    this.methode2 = function() {
        //des instructions
    };
    this['ceci est une propriété dont le nom contient des espaces'] = true;
};

// Utilisation
//Accéder à une propriété d'un objet :

// unObjetBaseSurMonConstructeur['propriete1'];
unObjetLitteral.propriete1;


// On peut utiliser le . ou les [], peu importe
// la façon dont on créé l'objet

//supprimer une porpriété
// mot clé delete
delete unObjetLitteral.propriete1;
// delete unObjetBaseSurMonConstructeur.propriete1;

// La principale difference entre un objet créé à base de 
// foonction constructeur et un objet créé à base de
//littéral
// est que l'objet à base de fonction constructeur  a pour
//TYPE le nom de la fonction constructeur


/**
 * Les Prototypes
 */

// Les objets en JS ont tous un prototype
//c'ets à dire un objet sur lequel ils sont basés
//Par défaut, tous les objets (litteraux ou basés sur
//une fonction contructeur) ont pour prototype 
// Le prototype de l'objet fondamental Object
// mdn Global_Objects/Object

// par exemple :
var unAutreObjet=  {};
unAutreObjet.__proto__; // contient le prototype de Object
unAutreObjet.__proto__.__proto__ // contient le prototype du 
//prototype de Object : null//et null est le seul qui n'a pas de prototype en JS

// déclarer ses prototypes :
// 2 possibilités :
// 1 créer un objet à partir d'un autre objet à l'aide de Object.create()
// 2 Créer une fonction constructeur et définir un objet dans
// la propriété .prototype de la fonction constructeur

// 1 Object.create()
// mdn Global Object Create

var LapinPrehistorique = function() {
    this.cri = 'Gnaaaaarl !';
    this.couleur = 'Blanc';
    this.caractere = 'Très agrssif';
    this.aDesDentsDeSabre = true;
    this.intellect = 'Faible';
    this.sExprimer = function(){
        window.alert(this.cri);
    };
};
//création d'un lapin préhistorique
var unLapinPrehistorique = new LapinPrehistorique();

// création de descendants basés sur le portotype de lapin préhistorique :
var objetDeDefinitionDePropriete = Object.create(LapinPrehistorique, {
    cri:{
        writable: true, // peut-on modifier la valeur de la propriété cri ?
        enumerable: true, // peut-on lister cette valeur dans une boucle for... in
        configurable: true,// peut-on supprimer la propriété à l'aide de delete
        value: 'squiiiik !', // quell est la valeur de la propriété cri ?
    },
    caractere:{
        writable: true, // peut-on modifier la valeur de la propriété caractere ?
        enumerable: true, // peut-on lister cette valeur dans une boucle for... in
        configurable: true,// peut-on supprimer la propriété à l'aide de delete
        value: 'Craintif !', // quell est la valeur de la propriété caractere ?
    },
    aDesDentsDeSabre:{
        writable: true, // peut-on modifier la valeur de la propriété aDesDentsDeSabre ?
        enumerable: true, // peut-on lister cette valeur dans une boucle for... in
        configurable: true,// peut-on supprimer la propriété à l'aide de delete
        value: false ,// quell est la valeur de la propriété aDesDentsDeSabre ?
    },
    aDesGrandesOreilles: {
        writable: true, // peut-on modifier la valeur de la propriété aDesGrandesOreilles ?
        enumerable: true, // peut-on lister cette valeur dans une boucle for... in
        configurable: true,// peut-on supprimer la propriété à l'aide de delete
        value: true, // quell est la valeur de la propriété aDesGrandesOreilles ?
    },
});


//utilisation de la méthode object.create() pour créer des objets à partir
// de unLapinPrehistorique et ayant pour propriétés propres
// les propriétés définies dans l'objet de définition de porpriété

var lapinDeGarenne1 = Object.create(LapinPrehistorique, objetDeDefinitionDePropriete);
var lapinDeGarenne2 = Object.create(LapinPrehistorique, objetDeDefinitionDePropriete);
var lapinDeGarenne3 = Object.create(LapinPrehistorique, objetDeDefinitionDePropriete);



//On peut avoir des chaînes de prototypes, par exemple :
var lapinDuFutur = object.create(lapinDeGarenne2, {
    cri: {
        writable: true,
        enumerable: true, 
        configurable: true,
        value: 'Bonjour Je m\'appelle Michel !',

    },
    intellect: {
        writable: true,
        enumerable: true, 
        configurable: true,
        value: 'Extrêmement Intelligent',
    }

});




/**
 * 2 Propriété .prototype des fonctions constructeur
 */

var monFabricantdePCAmericain = function() {
    this.cpu = intel;
    this.carteGraphique = 'Nvidia',
    this.demarrage = 'tadaaam !',
    this.prix = 2000
};

// création de l'objet qui servira de prototype :
// ici un objet a base de fonction constructeur
var unPCAmericain = new monFabricantdePCAmericain();

var MonFabricantDePCChinois = function() {
    this.prix = 1000;
    this.puissance = p;
};

MonFabricantDePCChinois.prototype = new monFabricantdePCAmericain;

var unPCChinois = new MonFabricantDePCChinois('3ghz');
var unAutrePCChinoir = new MonFabricantDePCChinois('3.5ghz')

unPCChinois; // prix 1000
unPCAmericain.__proto__.prix; // 2000


/**
 * DesignPattern( patron de conception) constructeur (avec prototype)
 */

var FabricantDeVoiture= function() {
    this.marque = marque,
    this.essence = 100;
    this.klaxon = 'Tut Tut !';
};

// FabricantDeVoiture.prototype = {
//     roule:function() {
//         this.essence--;
//     }
//};

//ou bien :
FabricantDeVoiture.prototype.roule = function() {
    this.essence--;
};

FabricantDeVoiture.prototype.klaxonne = function() {
    window.alert(this.klaxon)
};

//Objectif : Optimiser l'utilisation de la mémoire
// en limitant les duplications de code. En effet,
// plutôt que de REcréer chaque fonction dans chaque
// objet à chaque instanciation, chaque fonction n'est
//créée qu'une seule fois dans le prototype et chaque
// objet ne contient que les propriétés qui lui sont propres.

// utilisation de la fonction constructeur

var voiture1 = new FabricantDeVoiture('rono');
var voiture2 = new FabricantDeVoiture('citronZen');
var voiture3 = new FabricantDeVoiture('Chevrolette');


voiture2.roule(); // éxécution d'une méthode du prototype de voiture2



/**
 * Objets fondamentaux et coercition
 */
// Les objets / fonctions constructeur fondamentaux sotn disponibles
// dès le début de l'exécution d'un script javascript

// On citera principalement :
Object; // objet/fonction constructeur fondamentale pour la création
//et la manipulation d'objets
// exemples : 
var unObjet = new Object({
    propriete1:'test'
});
// les {} sont un "sucre syntaxique" pour le constructeur Object

Array; // objet/fonction constructeur fondamentale pour la création et 
// la manipulation d'objet indexés/itérables
var unObjetIterable = new Array('Salut', 'tu', 'va', 'bien','?');
// donne la même chose que 
var unObjetIterableIdentique = ['Salut', 'tu', 'va', 'bien','?'];
// les [] sont un sucre suntaxique pour le constructeur Array

// Array.from(); est une méthode  de Array
//Array.prototype.entries(); // est une méthode du prototype de Array et ne
// peut être utilisée qu'à partir d'un new Array(...)

Function; // objet/ fonction constructeur fondamental pour la création et 
// la manipulation d'objets executableas
// exemple :*
// var unObjetExecutable = new function (var message = "Hello"; window.alert(message));

// donne la même chose que 
var unObjetEsecutable = function() {
    var message = "Hello";
    window.alert(message);
}
// Le mot clé function(){} est un sucre syntaxique pour le constructeur Function.

unObjetExecutableIdentique.call(); // méthode de Function
// les méthodes call, bind et apply appartiennent au prototype Function
// et par conséquent peuvent être exécutée à partir de n'importe quel
// objet exécutable / function

// les objets fondamentaux pour la COERCITION (fait de contraindre)
// la coercition en JS est un mécanisme du moteur qui oblige un type primitif
// à devenir un objet pendant l'exécution d'une instruction.
//exemple:
//Grâce à la fonction constructeur String

//Si on écrit:
"test".charAt(2);
// en réaliré le moteur JS "conprend" :
(new String("test")).charAt(2);
// en d'autres termes, pour pouvoir exécuter la méthode charAt, le moteur
// convertit temporairement la chaîne de caractères en objet à l'aide
// du constructeur fondamental String

// de même

(45).toString();
// en réalité le moteur "comprend"
(new Number(45)).toString();

// de même pour la fonction constructeur Boolean
(true).toString();
// en réalité le moteur "comprend" :
(new Boolean(true)).toString;

/**
 * Retour sur DOM
 */

// péthode permettant de trouver la 1ere correspondance trouvée
var element = window.document.querySelector('p > span.une-class-css');
window.console.dir(element);
// Modifier le contenu de lélément
element.innerHTML = 'my friend';