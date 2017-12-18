/*
	Méthode 1
	Avec le formulaire et les inputs "text".

	Pour la méthode avec les boutons, voir app2.js
*/
"use strict";
(function(){
	console.log("Bienvenue dans le fichier app.js");


	// Je teste que jQuery marche bien
	// Je récupère le texte de ma balise h1
	var valH1 = $("h1").text();
	console.log("Mon h1 est '" + valH1 + "'.");


	// Si des erreurs dans les inputs,
	// afficher un message d'erreur

	// Détecter quand le formulaire est envoyé
	$("#buttonForm").click(clickButtonFormulaire);

	function clickButtonFormulaire(){
		console.log("click sur bouton du formulaire");

		// Récupérer le contenu de input1
		var arg1 = $('#input1').val();
		console.log("arg1 = " + arg1);

		// Récupérer le contenu de input2
		var arg2 = $('#input2').val();
		console.log("arg2 = " + arg2);

		// Récupérer le contenu du select operation
		var operation = $("#selectOperation").val();
		console.log('operation est ' + operation);


		// - calculer le résultat
		var resultat = calculer(arg1, arg2, operation);
		console.log("Résultat est " + resultat);

		// - sélectionner l'élément html qui va contenir ce résultat
		// - modifier cet élément avec le nouveau résultat
		$('#result').text(resultat);
	}

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