/*
* types de données :
*/
// Non défini : undefinded
var unEspaceMemoire = undefined;


// des nombres : Number
var unEspaceMemoire = 10;
unEspaceMemoire = .6;
unEspaceMemoire = 3546843543546;
unEspaceMemoire = -3;
unEspaceMemoire = NaN; // Not un Number
unEspaceMemoire = Infinity; 


// chaînes de caractères : String
unEspaceMemoire = "Vers l'infini et au-delà";
unEspaceMemoire = 'ou pas';
unEspaceMemoire = '';


// Booléens : Boolean
unEspaceMemoire = true;
// vertaines valeur de type peuvent être considérées comme plutôt false (on dit "falsy")
unEspaceMemoire = ''; // falsy
unEspaceMemoire = NaN; // falsy
unEspaceMemoire = 0; // falsy
unEspaceMemoire = undefined; // falsy



// Fonctions : Function

// une fonction sans argument
unEspaceMemoire = function() {
    var unEspaceMemoireDansLaFonction = 10;
    // et sans valeur de retour
};

// une fonction avec un argument
unEspaceMemoire = function(fauteuilAvantDroit) {
    var aMarseille = fauteuilAvantDroit === 'Marie';
    if(aMarseille) {
        var emplacement = 'La cannebière';
    }
    // et une valeur de retour
    return 'Bien arrivé à destination !';
};

var metLaValeurDeRetourIci = unEspaceMemoire('Pierre')




// Objets : Object
// dont font partie des Array

// déclarer un objet en notation JavaScript littérale :
var uneBoite = {}; // un objet vide

var desEtageresBilly = {
    plancheDuHaut : 'Des bibelots',
    plancheDuMilieu : 'Des Bédés',
    plancheDuBas: 'Des papiers administratifs'
};

// Accéder aux "emplacements" à l'intérieur d'un objet :
desEtageresBilly.plancheDuMilieu; // 'Des Bédés'
desEtageresBilly['plancheDuBas']; // 'Des papiers Administratifs

// Modifier la valeur d'un "emplacement" au sein d'un objet :
desEtageresBilly.plancheDuHaut = 'Des Bouquins';
desEtageresBilly['plancheDuMilieu'] = 'Des guides de Voyage';

// ajouter un nouvel emplacement dans un objet :
// -> il suffit de faire comme s'il avait toujours existé
desEtageresBilly.compartimentSecret = 'Costume de Batman';
desEtageresBilly['autreCompartimentSecret'] = 'Costume de Robin';

// Supprimer un "emplacement" à l'intérieur d'un objet :
delete desEtageresBilly.plancheDuBas;
delete desEtageresBilly['plancheDuHaut'];

// les "emplacements" d'un objet s'appellent des PROPRIÉTÉS (Properties)

// Dans les propriétés d'un objet on peut stocker n'importe lequel des 5 types de données de base en JavaScript :

/*
// Exemple
*/

var maMaison = {
    aUneSonnette: true, // contient un Booléen 
    propriétaire: 'Benjamin', // contient une chaîne de caractères
    anneeDeConstruction: 2021, // contient un nombre
    sonnerALaPorte: function() { // une propriété qui contient une fonction
        alert('Driiiing !');
    },
    salon: { // une propriété qui contient un objet
        desEtageresBilly: {
            plancheDuHaut: 'Des Bédés',
            plancheDuMilieu: 'Des livres',
            plancheDuBas: 'Des documents Administratifs',
        }
    }
};

// Accéder à une porpriété de l'objet qui correspond à mes étagères
maMaison.salon.desEtageresBilly.plancheDuMilieu; // pointe vers 'des livres'
maMaison['salon']['desEtageresBilly']['plancheDuMilieu']; // on peut utiliser les []
maMaison['salon'].desEtageresBilly['plancheDuMilieu'] // on peut utiliser les [] ou le . selon les envies

// modifier le contenu d'une propriété d'un sous-objet :
maMaison.salon.desEtageresBilly.plancheDuMilieu = ('Des guides de voyage');

// Si je veux utiliser cette valeur dans une opération :
maMaison.salon.desEtageresBilly.plancheDuBas = maMaison.salon.desEtageresBilly.plancheDuMilieu + ' et des romans d\'aventures';

// Exécuter la fonction dans la "propriété" sonner à la porte 
maMaison.sonnerALaPorte();
maMaison['sonnerALaPorte']();

// une fonction dans une propriété d'un objet s'appelle une MÉTHODE.

/**
 *  Les objets contiennent un ensemble de PROPRIÉTÉS ET DE MÉTHODES
 */

// Quelques spécificités des objets et méthodes :

// Pointer vers un objet lors de l'exécution d'une méthode dans cet objet :
// Mot clé : this
var chienDeSami = {
    nom:'Snoopy',
    aboiement: 'Wiiff',
    aboie: function(){
      //     this; // pointe vers l'objet lui-même lors de l'exécution de aboit
      //     this.aboiement; // 'Wiiif'
        alert(this.aboiement);
    },
};

var chatDeSami = {
    nom:'Garfield',
    miaule: 'Mi-a-ou ?',
};

// copie une référence à la méthode aboit dans la propriété miaule
//chatDeSami.miaule = chatDeSami.aboie;
//chatDeSami.miaule(); // donne undefined parce que this.aboiement n'existe pas dans le chat.
//this pointe sur l'objet dans lequel est EXÉCUTÉE la methode

/**
 * Peut-on copier un objet par assignation ?
 */


chienDeLudovic = chienDeSami;
chienDeLudovic.nom = 'Jean-Luc';

// Non, les objets ne sont pas copiés. C'est leur 'adresse mémoire' qui est copiée 


