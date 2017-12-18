/*
Idem que la fonction add. On n'a simplement à remplacer l'opération et à renommer.

*/

// == Etape 1 ==
// Créer une fonction qui va soustraire deux nombres

function sub(a, b){
	var resultat = Number(a) - Number(b);

	console.log(resultat);
	return resultat;
}

var nb1 = process.argv[2];
var nb2 = process.argv[3];

// Au besoin, un console log
console.log("Nombre 1 " + nb1);
console.log("Nombre 2 " + nb2);

// == Etape 3 ==
sub(nb1, nb2);
