// 5 types de données:


// les 3 types primitifs

// Les nombres
var nombre =1;

// Les chaînes caractères
var chaine = 'Hello'

//Les boléens
var unBooleen = true;

// les types primitifs sont des valeurs qui sont crées lors de leur assignation à une variable



// 2 types qu'on pourrait appeler des types composés :

// Fonctions : Function
(function(){}); // Anonyme et Non assignée
/*généralement utilisé pour le design pattern ("patron de conception")
IIFE (Immédiately Invoked Function Expression): fonction qu'on déclare
et exécute iimmédiatement, => sert à isoler les variables de l'espace
mémoire principal. Exemple :
*/
(function(){
    var variableUtilisableSeulementDansCetteFonction;
    // le code à l'intérieur de cette fonction est utilisé immédiatement
    // les variables déclarées dans cette fonction ne seront accessibles
    //  qu'à partir de cette fonction
    //Les variables déclarées dans cette fonction n'écrasent pas les variables
    //  qui auraient le même nom et qui seraient dans l'espace mémoire
    //extérieur à la fonction
}()); // Déclaration suivie de parenthèse pour l'exécution



var uneFonction = function() {}; // Anonyme, associée à une variable
// s'exécute en utilisant une variable
// ne peut pas être exécutée avant l'assignation
//si elle plante ou produit une erreur, le debugger
//affichera le mot clé fonction accompagné du message d'erreur
// utilisation ex:


var uneAutreFonction = function unNom(){}; // Fonction nommée assignée à une variable
//s'exécute en utilisant le nom de la variable
// ne peut pas être exécutée avant l'assignation
//si elle plante ou produit une erreur, le debugger
//affichera le NOM de la fonction accompagné du message d'erreur

function unAutreNom(){}; // fonction Nommée, non assignée à une variable
// s'exécute en utilisant le NOM de la fonction
//Peut être exécuté AVANT ou APRES la declaration
// si elle plante ou produit une erreur, le debugger
//affichera le NOM de la fonction accompagné du message d'erreur
unAutreNom();




// les objets : Object
// déclaration littérale en Notation Objet JavaScript:

({}); // un objet vide non assigné

var monObjet = {}; // Un objet vide assigné

// Un objet contient des propriétés et des méthodes

var autreObjet = {
    propriete1: 'Bonjour',
    propriete2: false,
    propriete3: 42,
    methode1: function(){
        //...du code
    },
    methode2: function() {
        // ... encore du code
    },
};
// Les noms de propriétéss et de méthode doivent :
//_ Ne contenir que des caractères autorisés pour les noms de variables
//_SAUF si vous déclarez les noms de propriétés sous la forme de chaîne
//de caractères
var encoreUnObjet = {
    'Est-ce que le poulet rôti c\'est bon ?':true,
    '1': 'Ceci est une propriété',
    'Je suis indisposé' : function(){
        alert('prout !');
    }
};

// Dans le cas ou les noms de propriétés ne sont pas composés de caractères
//autorisé dans les variables. On ne PEUT PAS utiliser le . pour accéder 
// aux propriétés :
autreObjet.propriete1; // fonctionne, pointe sur 'Bonjour'
encoreUnObjet['Est-ce que le poulet rôti c\'est bon ?']; // fonctionne,
//pointe sur true
encoreUnObjet[1];

//Un Array est donc un objet dont les noms de propriétés 
//sont numériques . Exsemple:
var unDernierObjet = ['Salut', 'les', 'Amis'];

unDernierObjet.jeRepondraiPlusTard = 'Ceci est un message d\'absence';

/**
 * Les types composés (function et Object) ,ne sont pas clonés ou copiés
 * lorsqu'il y a assignation, ce n'est pas l'objet ou la fonction qui
 * est assigné mais sa REFERENCE ( c'est son emplacement/adresse en mémoire)
 * La variable ne contient pas l'objet ou la fonction mais son
 * emplacement/adresse en mémoire
*/

var monObjetVide = {};
var unAutreObjetVide = {};

monObjetVide === unAutreObjetVide; // true ou false ???
//FALSE : les 2 variables contiennent des emplacements/adresses en mémoire différents

var uneCopieDeLaReference = unAutreObjetVide;

uneCopieDeLaReference === unAutreObjetVide; // true ou false ???
// TRUE: les 2 variables pointent vers le même emplaceement/adresse en mémoire

        ////////// exemples manipulations d'objets////////////////////////

    //exemple d'ajout sur une copie de l'objet dans la nouvelle variable un Prenom
        // var ajouteCivilite = function(unPrenom) {
        //     unPrenom = 'Monsieur ' + unPrenom;
        //     return unPrenom
        // };
        // var prenom = 'Sami';
        // var prenomAvecCivilite = ajouteCivilite(prenom);



                //on modifie une valeur a l'intérieur de l'objet
        var ajouteCiviliteSurUnHumain = function(unHumain) {
            // Ici on modifie une propriété de l'objet vers lequel pointe humain
            unHumain.unPrenom = 'Monsieur ' + unHumain.unPrenom;

            // return unHumain // forcément besoin de retourner l'adresse
                                // mémpoire de l'objet
        }

        var humain = {
            unPrenom: 'Sami'
        };


            // Ici on exécute une fonction en lui envoyant une copie
            // de la référence à l'objet (adresse mémoire de l'objet)
        ajouteCiviliteSurUnHumain(humain);





        //////////////////////////////////////////////////////
        /**
         * Notion de références circulaires
         */

        var equipier1 = {
            nom: 'Kirk',
            prenom: 'James'
        };

        var equipier2 = {
            nom: 'Spock',
            prenom:'Michel',
        };

        var vaisseau = {
            nom:'Enterprise',
            equipage: [equipier1, equipier2],
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
         * fonctions "constructeur"
         * -Dans lesquels on va décrire les propriétés qui doivent
         * être "attachées" à l'objet qu'on créé
         * -Qu'on utilise avec le mot clé 'new'
         * -Et par convention qu'on va nommer avec un terme qui commence par une majuscule. 
         */

        //déclaration d'une fonction constructeur
        var FabricantDeVoiture = function(UneCouleur) {
            //description des propriétés à "attacher" à une
            //nouvelle instance (== un objet qui sera créé
            //à l'aide de cette fonction constructeur)
            this.prix = 6000;
            this.couleur = UneCouleur;
            this.marque = 'Rono';
            this.estNeuve = true;
            this.roule = function(){
                alert('Vrooom !')
                //etc ....
            };
        };

        //la fonction constructeur sert de "plan" pour fabriquer
        //des objets. On dit, de nouvelles instances de cette fonction
        // constructeur

        //utilisation de la fonction constructeur avec le mot clé 'new'
        var v1 = new FabricantDeVoiture('rouge'); // ceci est une nouvelle instance de voiture
        var v2 = new FabricantDeVoiture('jaune'); // ceci est une nouvelle instance de voiture
        var v3 = new FabricantDeVoiture('amande');// ceci est une nouvelle instance de voiture
        var v4 = new FabricantDeVoiture('grise');// ceci est une nouvelle instance de voiture

        // Quelle différencfe entre 1 objet créé à l'aide d'une fonction
        // constructeur et une déclaration littérale ?
        //Une fonction constructeur permet de caractériser le type de
        // l'objet créé
        //Dans la console, on peut voir le nom de la fonction constructeur
        //qui a été utilisée pour créer un objet, ou pas de nom si
        // l'objet a été créé à l'aide d'une déclaration littérale



        /**
         * les objets Fondamentaux du language Pertie 1
         */

        // des objets comme :
        Math;
        // mdn Global Object math

        // des fonctions constructeur comme :
        Date; 
        // utilisation :
        var maintenant = new Date();


        // des fonctions constructeur comme :
        Array;

        var desMots = new Array('un', 'deux', 'trois');
        // On peut utiliser un "sucre syntaxique" pour utiliser Array:
        var encoreDesMots = ['un', 'deux', 'trois']; // On préfère cette notation
        // produit le même résultat que new Array('un', 'deux', 'trois')



        Function;
        var afficheUnMessage = new Function('var message = "Ceci est un message"; alert(message);');
        // ou on peut utiliser une surce syntaxique pour utiliser Function
        var afficheEncoreUnMessage = function() { var message = "Ceci est un message"; alert('message'); };// On préfère cette notation

        // EN JAVASCRIPT une FONCTION est en REALITE un OBJET EXECUTABLE :
        // - une fonction peut être exécutée
        //-une fonction possède des propriétés et des méthodes


        Object ;

        var uneArmoireBilly = new Object({etagereDuHaut: 'des bédés', etagereDuBas:'des livres'});

        // ou on peut utiliser un "sucre syntaxique" pour utiliser Object
        var uneAutreArmoireBilly = {etagereDuHaut: 'des bédés', etagereDuBas:'desLivres'}; // On préfère cette notation

















        /**
         * Le Prototypage en JavaScript (ou "héritage")
         */

        //Comment créer un objet à partir d'un autre objet ?
        // soit un objet
        var darkVador = {
            prenom: 'Anakin',
            nom: 'Skywalker',
            estDuCoteObscur: true,
            sexe: 'masculin',
            aLaForce: true,
        };

        //On peut utiliser l'onjet/fonction constructeur fondamental Object
        // mdn Global_Objects
        //En particulier la méthode .create() de Object
        // à partir d'un autre objet

        var Luke = Object.create(darkVador);
        var Leia = Object.create(darkVador);

        // Les 2 objets créés ont pour prototype l'objet référencé dans darkVador
        //A partir de l'objet créé et qui a pour prototype l'objet
        //référencé dans darkVador on peut accéder à des propriétés du même nom

        Luke.prenom; //'Anakin' , la propriété qui est "remontée" est celle du prototype
        Luke.prenom = 'Luke';
        Luke.prenom; // 'Luke', la propriété qui est "remontée" est celle de l'objet
        delete Luke.prenom;
        Luke.prenom;//'Anakin', la propriété qui est remontée et de nouveau celle du prototype


        Leia.prenom = 'Leia'; // propriété propre de Léia
        Leia.estDuCoteObscur = false; // propriété propre de Léia
        Leia.sexe = 'Féminin'; // propriété propre de Léia
        Leia.aLeCheveuRebel = true; // propriété propre de Léia


        // Si un objet n'a pas de PROPRIÉTÉ PROPRE du nom recherché c'est la PROPRIÉTÉ DU 
       // PROTOTYPE qui est renvoyée. Si ce prototype n'a pas cette propriété, c'est 
        // la PROPRIÉTÉ DU PROTOTYPE du prototype qui est renvoyée. Et ainsi de suite
        //jusqu'à ce qu'il y ait une erreur qui qoit renvoyée


        var kyloRen = Object.create(Leia);

        kyloRen.nom = 'Solo'; // propriété propre de KyloRen
        kyloRen.prenom = 'Ben'; // propriété propre de KyloRen
        kyloRen.sexe='Masculin'; // propriété propre de KyloRen
        kyloRen.estDuCoteObscur = true; // propriété propre de KyloRen
        kyloRen.aLeCheveuRebel  // propriété du prototype Léia
        kyloRen.aLaForce; // propiété du prototype darkVador



        var NouveauJedi = function(p){
            this.prenom = p;
        };

        // on définit le prototype qui sera utilisé pour chaque nouveau jedi
        // via la propriété .prototype de l'objet executable (ou fonction)
        NouveauJedi.prototype= luke;

        //on créé des Jedi
        var unPremierJedi = new NouveauJedi('Pierre');
        var unDeuxiemeJedi = new NouveauJedi('Paul');
        var unTroisiemeJedi = new NouveauJedi('Jacque');