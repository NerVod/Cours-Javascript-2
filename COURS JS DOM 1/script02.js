/**
 * Les fonctions constructeur
 * => Ce sont des fonctions qui permettent de créer 
 * des objets dont la structure interne est identique
 */

/**
 * par convention, les fonctions"constructeur" ont un nom qui
 * // commence par une Majuscule. Par exemple :
 */

var FabricateurDeBonbon = function(pf, pds) {
    //dans une fonction constructeur on utilise 
    // le mot-clé 'this' pour pointer sur l'objet
    // qui sera fabriqué avec la fonction constructeur
    //quand elle sera utilisée.
    //On définit les propriétés (on appelle ces propriétés PROPRIÉTÉS DU CONSTRUCTEUR)
    this.parfum = pf; // le parfum est a fournir en paramètre
    this.contientDuSucre = true; // valeur fixée au départ

    if(pds) { // si pds est définie (truthy)
        this.poids = pds // cette valeur est passée en argument
    } else {
        this.poids = 20; // cette aleur est fixée au départ
    }
    //déclaration d'une méthode
    this.estLeche = function() {
        //modifie le poids du bon lui-même
        this.poids = this.poids -1;
    }

};

// Comment utiliser une fonction constructeur pour créer un objet ?
// => ATTENTION, une fonction constructeur ne DOIT PAS ETRE EXECUTEE!
// => une fonction constructeur s'utilise avec le mot-clé 'new'

var bonbon1 = new FabricateurDeBonbon('fraise', 15);
var bonbon2 = new FabricateurDeBonbon('Menthe', 18);
var bonbon3 = new FabricateurDeBonbon('Kiwi');
var bonbon4 = new FabricateurDeBonbon('Citron');
var bonbon5 = new FabricateurDeBonbon('Framboise');

// quand on crée un objet à l'aide d'une fonction constructeur
//On dit qu'on a créé un INSTANCE de cette fonction constructeur

bonbon1.parfum; // 'fraise'
bonbon2['parfum'] // 'Menthe'