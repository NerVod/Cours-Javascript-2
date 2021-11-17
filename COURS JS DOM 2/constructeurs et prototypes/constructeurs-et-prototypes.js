/**
 * 5 Types de données
 */

// 3 types qu'on appelle types primitifs :

// Les Nombres : Number
var unNombre = 1;
// Les Chaînes de caractères : String
var uneChaine = 'Hello';
// Les Booléens
var unBooleen = true;

/**
 * Les types primitifs sont des valeurs qui sont créées
 * lors de leur assignations à une variable.
 */

// 2 types qu'on pourrait appeler des types composés

// Les Fonctions : Function

(function(){}); // Fonction Anonyme, Non assignée
/**
 * Généralement utilisé pour le design pattern ("patron de conception")
 * IIFE (Immediately Invoked Function Expression) : Une fonction qu'on
 * déclare et exécute immédiatement, ça sert à isoler des variables de
 * l'espace mémoire principal. Exemple :
 */
(function(){
    var variableUtilisableUniquementDansCetteFonction; 
    // Le code à l'intérieur de cette fonction est exécuté immédiatement
    // Les variables déclarée dans cette fonction ne seront accessible à
    // partir de l'espace mémoire extérieur à la fonction.
    // Les variable déclarée dans cette fonction n'écrasent pas les variables
    // qui auraient le même nom et qui serait déclarée dans l'espace mémoire
    // extérieur à la fonction.
}()); // Déclaration suivie de parenthèse pour l'exécution

var uneFonction = function(){}; // Fonction Anonyme, assignée à une variable
// S'exécute en utilisant le nom de variable
// Ne peut pas être exécutée avant l'assignation
// Si elle plante ou produit une erreur, le débugger
// affichera le mot clé function accompagné du message
// d'erreur.
// Utilisation, ex :
uneFonction();

var uneAutreFonction = function unNom(){}; // Fonction Nommée, assignée à une variable
// S'exécute en utilisant le nom de variable
// Ne peut pas être exécutée avant l'assignation
// Si elle plante ou produit une erreur, le débugger
// affichera le NOM de la fonction accompagné du message
// d'erreur.
// Utilisation, ex :
uneAutreFonction();

unAutreNom();
function unAutreNom(){}; // Fonction Nommée, non assignée à une variable
// S'exécute en utilisant le NOM de la fonction
// Peut être exécuté AVANT ou APRES la déclaration
// Si elle plante ou produit une erreur, le débugger
// affichera le NOM de la fonction accompagné du message
// d'erreur.
unAutreNom();

// Les Objets : Object
// Déclaration littérale en Notation Objet JavaScript :

({}); // Un objet vide non assigné
var monObjet = {}; // Un objet vide assigné

// Un objet contient des propriétés et des méthodes :
var autreObjet = {
    propriete1: 'Bonjour',
    propriete2: false,
    propriete3: 42,
    methode1: function(){
        // du code...
    },
    methode2: function(){
        // encore du code...
    }
};
// Les nom de propriétés et de méthode doivent
// - Ne contenir que des caractères autorisés pour les nom de variable
// - SAUF si vous déclarer les nom de propriétés sous la forme de chaîne
//   de caractères ou de nombre.
// Exemples :
var encoreUnObjet = {
    'Est-ce que le poulet rôti c\'est bon ?': true,
    1: 'Ceci est une autre propriété',
    'Je suis indisposé': function(){
        alert('Prout !');
    }
}
// Dans le cas ou les nom de propriété ne sont composé de caractères
// autorisé pour les variable. On ne PEUT PAS utilisé le . pour accéder
// aux propriétés :
autreObjet.propriete1; // fonctionne,  pointe sur 'Bonjour'
encoreUnObjet['Est-ce que le poulet rôti c\'est bon ?']; // fonctionne, pointe sur true
encoreUnObjet[1];

// Un Array est donc un objet dont les noms de propriétés
// sont numériques. Exemple :
var unDernierObjet = ['Salut', 'Les', 'Amis']; 
// On peut ajouter de nouvelles propriétés dans un objet de type Array
unDernierObjet.jeRepondraisPlusTard = 'Ceci est un message d\'absence';

/**
 * Les types composés (Function et Object) ne sont pas cloné ou copiés lorsqu'il y'a
 * assignation. Lors d'une assignation, ce n'est pas l'objet ou la fonction qui
 * est assigné mais sa REFERENCE (c'est sont emplacement/adresse en mémoire).
 * La variable ne contient pas l'objet ou la fonction mais emplacement/adresse en mémoire
 */

var unObjetVide = {};
var unAutreObjetVide = {};

unObjetVide === unAutreObjetVide; // true ou false ?
// FALSE : les deux variables contiennent des emplacement/adresse en mémoire différent

var unCopieDeLaReference = unAutreObjetVide;

unCopieDeLaReference === unAutreObjetVide; // true ou false ?
// TRUE : les deux variables POINTENT vers le même emplacement/adresse en mémoire

/*
var ajouteCivilite = function(unPrenom) {
    // Ici on
    unPrenom = 'Monsieur ' + unPrenom;
    // On retourne la nouvelle valeur
    return unPrenom;
}

var prenom = 'Sami';

var prenomAvecCivilite = ajouteCivilite(prenom);

prenomAvecCivilite; // 'Monsieur Sami'
*/

/*
var ajouteCiviliteSurUnPrenomHumain = function(unHumain) {
    // Ici on modifie une propriété de l'objet vers lequel
    // pointe la variable unHumain
    unHumain.unPrenom = 'Monsieur ' +unHumain.unPrenom;

    // return unHumain; // forcément besoin de retourner l'adresse mémoire
    // de l'objet
}

var humain = {
    unPrenom: 'Sami'
};

// Ici on exécute une fonction en lui envoyant une copie
// de la référence à l'objet (adresse mémoire de l'objet)
ajouteCiviliteSurUnPrenomHumain(humain);

*/

/**
 * Notion de références circulaires
 */

var equipier1 = {
    nom: 'Kirk',
    prenom: 'James'
};

var equipier2 = {
    nom: 'Spock',
    prenom: 'Michel'
}

var vaisseau = {
    nom: 'Enterprise',
    equipage:[equipier1, equipier2]
};

equipier1.sonVaisseau = vaisseau;
equipier2.sonVaisseau = vaisseau;


vaisseau.equipage[1].nom;
// identique à
vaisseau.equipage[1].sonVaisseau.equipage[0].sonVaisseau.equipage[1].nom;

/**
 * Créer des objets à l'aide de fonctions constructeur
 */

/**
 * Quand on veut créer des objets différents mais
 * construits sur le même modèle, on utilise des
 * fonctions "constructeur" :
 * - Dans lesquels on va décrire les propriétés qui doivent être
 *   "attachée" à l'objet qu'on créé
 * - Qu'on utilise avec le mot clé new
 * - Et par convention qu'on va nommer avec un terme qui
 *   commence par une majuscule.
 */
// Déclaration d'une fonction constructeur
var Voiture = function(clr){
    // description des propriétés à "attacher" à un
    // nouvelle instance (== un objet qui sera créé
    // à l'aide de cette fonction constructeur)
    this.prix = 6000;
    this.couleur = clr;
    this.marque = 'Rono';
    this.estNeuve = true;
    this.roule = function(){
        alert('Vrooooom !')
    };
    // etc...
}
// La fonction constructeur sert de "plan" pour fabriquer
// des objets. On dit, de nouvelles instances de cette fonction
// constructeur

// Utilisation de la fonction constructeur avec le mot-clé new
var v1 = new Voiture('rouge'); // ceci est une nouvelle instance de Voiture
var v2 = new Voiture('jaune'); // ceci est une nouvelle instance de Voiture
var v3 = new Voiture('amande'); // ceci est une nouvelle instance de Voiture
var v4 = new Voiture('grise'); // ceci est une nouvelle instance de Voiture

// Quelle différence entre 1 objet créé à l'aide d'une fonction
// constructeur et une déclaration littérale ?
// Un fonction constructeur permet de caractériser le type de l'objet créé.
// Dans la console, on peut voir le nom de la fonction  constructeur qui
// a été utilisé pour créer un objet. Ou pas de nom si l'objet à été créé
// à l'aide d'une déclaration littérale.

/**
 * Objets fondamentaux du langage - Partie 1
 */
// Des Objets comme :
Math;
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Des fonctions constructeurs comme :
Date;
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// Utilisation :
var maintenant = new Date();

// Des fonctions constructeur comme :
Array;
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
var desMots = new Array('un', 'deux', 'trois');
// ou on peut utiliser un "sucre syntaxique" pour utiliser Array :
var encoreDesMots = ['un', 'deux', 'trois']; // on préfère cette notation
// produit le même résultat que new Array('un', 'deux', 'trois')

Function;
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
var afficheUnMessage = new Function('message','var message = "ceci est un message";alert(message);');
// ou on peut utiliser un "sucre syntaxique" pour utiliser Function
var afficheEncoreUnMessage = function() { var message = "ceci est un message"; alert(message); }; // on préfère cette notation
// EN JAVASCRIPT une FONCTION est en RÉALITÉ un OBJET EXECUTABLE :
// - Une fonction peut être exécutée
// - Une fonction possède des propriétés et des méthodes.

Object;
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
var uneArmoireBilly = new Object({etagereDuHaut: 'des bédés', etagereDuBas: 'des livres'});
// ou on peut utiliser un "sucre syntaxique" pour utiliser Object
var uneAutreArmoireBilly = {etagereDuHaut: 'des bédés', etagereDuBas: 'des livres'}; // on préfère cette notation

/**
 * Le Prototypage en JavaScript (ou "héritage")
 */
// Comment créer un objet à partir d'un autre objet ?
// Soit un objet :
var darkVador = {
    prenom: 'Anakin',
    nom: 'Skywalker',
    estDuCoteObscur: true,
    sexe: 'Masculin',
    aLaForce: true
};

// On peut utiliser l'objet/fonction constructeur fondamental Object
//  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// En particulier la méthode .create() de Object qui permet de créer 1 objet
// à partir d'un autre objet :
//  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

var luke = Object.create(darkVador);
var leia = Object.create(darkVador);

// Les 2 objets créé on pour prototype l'objet référencé dans darkVador.
// A partir de l'objet créé et qui a pour prototype l'objet 
// référencé dans darkVador on peut accéder à des propriétés du même nom
luke.prenom; // 'Anakin', la propriété qui est "remontée" est celle du prototype
luke.prenom = 'Luke';
luke.prenom; // 'Luke', la propriété qui est "remontée" est celle de l'objet
delete luke.prenom;
luke.prenom; // 'Anakin', la propriété qui est "remontée" est celle du prototype

leia.prenom = 'Leia'; // propriété propre de leia
leia.estDuCoteObscur = false; // propriété propre de leia
leia.sexe = 'féminin'; // propriété propre de leia
leia.aLeCheveuxRebelles = true; // propriété propre de leia

leia.aLaForce; // propriété du prototype darkVador

// Si un objet n'a pas de PROPRIÉTÉ PROPRE du nom recherché c'est la PROPRIÉTÉ DU
// PROTOTYPE qui est renvoyée. Si le prototype n'a pas cette propriété, c'est
// la PROPRIÉTÉ DU PROTOTYPE du prototype qui est renvoyée. Et ainsi de suite,
// jusqu'à ce qu'il y'ai un erreur qui soit renvoyée/
var kyloRen = Object.create(leia);

kyloRen.nom = 'Solo'; // propriété propre de kyloRen
kyloRen.prenom = 'Ben'; // propriété propre de kyloRen
kyloRen.sexe = 'Masculin'; // propriété propre de kyloRen
kyloRen.estDuCoteObscur = true; // propriété propre de kyloRen

kyloRen.aLaForce; // propriété du prototype du prototype de leia.
kyloRen.aLeCheveuxRebelles; // propriété du prototype leia.

// Comment créer un objet à partir d'un autre objet ?
// On peut utiliser la propriété .prototype des fonctions
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
// Exemple :
// On peut déclarer une fonction constructeur
var NouveauJedi = function(p){
    this.prenom = p;
};

// On définit le prototype qui sera utilisé pour chaque nouveau Jedi
// via la propriété .prototype de l'objet exécutable (ou fonction) NouveauJedi
NouveauJedi.prototype = luke;

// On créé des Jedi
var unPremierJedi = new NouveauJedi('Pierre');
var unDeuxiemeJedi = new NouveauJedi('Paul');
var unTroisiemeJedi = new NouveauJedi('Jacques');