/*
Idem que la fonction add. On n'a simplement à remplacer l'opération et à renommer.

/!\ WARNING : la division par 0 est interdite !!!!!
Il va falloir ajouter une étape de vérification.
Dans mon cas, je choisis de retourner Nan;

*/

// == Etape 1 ==
// Créer une fonction qui va diviser deux nombres

function divide(a, b){
	// J'initialise une variable à NaN;
	var resultat = NaN;

	// Avant de faire l'opération, je vérifie qu'on ne divise pas par 0.
	// Si tel est le cas, resultat n'est pas modifié et reste à NaN

	// Si b est différent de 0, on fait la division,
	// Sinon, on le laisse tel quel (== NaN)
	if( Number(b) != 0){
		resultat = Number(a) / Number(b);
	}

	// ps : il y a mille façon de gérer ce cas spécifique.
	// Libre à vous de faire celle qui vous plaît le plus.

	console.log(resultat);
	return resultat;
}

var nb1 = process.argv[2];
var nb2 = process.argv[3];

// Au besoin, un console log
console.log("Nombre 1 " + nb1);
console.log("Nombre 2 " + nb2);

// == Etape 3 ==
divide(nb1, nb2);
