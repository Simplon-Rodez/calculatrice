/*
Objectif créer la fonction add. Exemple :
$ node add.js 5 9
doit afficher 14

*/

// == Etape 1 ==
// Créer une fonction qui va ajouter deux nombres

// Je crée une nouvelle fonction que j'appelle add, et qui va prendre en entrée deux paramètres a et b.
function add(a, b){
	// Je crée une variable intermédiaire pour stocker le résultat.
	// Je n'oublie de convertir mes deux paramètres a et b en Number
	var resultat = Number(a) + Number(b);

	// J'affiche le résultat dans la console
	console.log(resultat);

	// Je renvoie le résultat (pour plus tard)
	return resultat;
}

// == Etape 2 ==
// Récupérer les arguments fournis via la ligne de commande.
// Une rapide recherche sur internet me parle d'un tableau process.argv
// Dans le doute, je l'affiche dans ma console pour l'inspecter
console.log(process.argv);

// Je vois que pour récupérer les deux nombres, il faut aller à l'index 2 et 3
var nb1 = process.argv[2];
var nb2 = process.argv[3];

// Au besoin, un console log
console.log("Nombre 1 " + nb1);
console.log("Nombre 2 " + nb2);

// == Etape 3 ==
// On assemble les deux et on envoit deux deux nombres à la fonction add
add(nb1, nb2);
