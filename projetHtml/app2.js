// Méthode 02
"use strict";
(function(){
	console.log("Bienvenue dans le fichier app.js");


	// Je teste que jQuery marche bien
	// Je récupère le texte de ma balise h1
	var valH1 = $("h1").text();
	console.log("Mon h1 est '" + valH1 + "'.");



	var nombre1 = '';
	var nombre2 = '';
	var operation = null;

	$('#btn-1').click(function(){
		// On appelle la fonction
		// en gardant en String 
		// puisqu'on va concaténer les chiffres
		// successifs sur lesquels on va cliquer
		clickNumber("1");
	});

	$('#btn-2').click(function(){
		clickNumber("2");
	});
	$('#btn-3').click(function(){
		clickNumber("3");
	});
	$('#btn-4').click(function(){
		clickNumber("4");
	});
	$('#btn-5').click(function(){
		clickNumber("5");
	});
	$('#btn-6').click(function(){
		clickNumber("6");
	});
	$('#btn-7').click(function(){
		clickNumber("7");
	});
	$('#btn-8').click(function(){
		clickNumber("8");
	});
	$('#btn-9').click(function(){
		clickNumber("9");
	});
	$('#btn-0').click(function(){
		clickNumber("0");
	});

	// == Operations ==
	$('#btn-plus').click(function(){
		clickOperation("+");
	});
	$('#btn-minus').click(function(){
		clickOperation("-");
	});
	$('#btn-times').click(function(){
		clickOperation("*");
	});
	$('#btn-divide').click(function(){
		clickOperation("/");
	});


	// == Calculer ==
	$('#btn-calculer').click(function(){
		clickCalculer();
	});
	/*
		Comme clickCalculer n'a pas d'argument,
		on aurait pu écrire : 

		$('#btn-calculer').click(clickCalculer);
	*/



	// Fonction qui va être appelée après un click
	// sur un bouton d'un chiffre.
	// Elle va mettre à jour une des variables nombre1 ou nombre2.
	function clickNumber(nb){
		// Si l'operation est nulle
		// on est en train de choisir le
		// nombre 1
		if(operation == null){
			nombre1 = constructNumber(nombre1, nb);
		}else{
			// Si l'opération a été choisie
			// on est en train de choisir le nombre 2
			nombre2 = constructNumber(nombre2, nb);
		}
	}

	// Fonction qui va être appelée après un click
	// sur un bouton d'operation.
	// Elle va mettre à jour la variable globale operation.
	function clickOperation(ope){
		operation = ope;
	}


	// Fonction qui va être après le click
	// sur le bouton "=".
	// Elle va 
	// - réaliser l'operation
	// - mettre à jour le span 'result02' pour afficher le 
	// résultat,
	// - réinitialiser les variables globales pour préparer
	// la prochaine opération
	function clickCalculer(){
		var resultat = NaN;
		// On calcule le résultat en fonction des
		// nombres et des opérations sur lesquels
		// on a cliqué auparavant
		resultat = calculer(nombre1, nombre2, operation);

		// On sélectionne notre élément pour afficher
		// le résultat et on met à jour
		$("#result2").text(resultat);

		// On réinitialise les nombres et l'operation
		// pour préparer une nouvelle operation
		nombre1 = '';
		nombre2 = '';
		operation = null;
	}




	// Fonction pour concaténer le chiffre sur lequel
	// on vient d'appuyer avec le nombre qu'on avait déjà.
	// Les garder au format String car on les concatène.
	function constructNumber(ancien, courant){
		var nouveauNombre = ancien + courant;
		return nouveauNombre;
	}


	// Fonctions identiques à la méthode 01
	

	function calculer(nb1, nb2, operation){
		var res = NaN;

		if(operation == '+'){
			res = add(nb1, nb2);
		}else if(operation == '-'){
			res = substract(nb1, nb2);
		}else if(operation == '*'){
			res = multiply(nb1, nb2);
		}else if(operation == '/'){
			res = divide(nb1, nb2);
		}

		return res;
	}

	function add(a, b){
		var nb1 = parseInt(a, 10);
		var nb2 = parseInt(b, 10);
		return nb1 + nb2;
	}	

	function substract(a, b){
		var nb1 = parseInt(a, 10);
		var nb2 = parseInt(b, 10);
		return nb1 - nb2;
	}	

	function multiply(a, b){
		var nb1 = parseInt(a, 10);
		var nb2 = parseInt(b, 10);
		return nb1 * nb2;
	}	

	function divide(a, b){
		var nb1 = parseInt(a, 10);
		var nb2 = parseInt(b, 10);

		if(nb2 == 0){
			return "Division par 0 interdite !!!";
		}
		return nb1 / nb2;
	}	
})();