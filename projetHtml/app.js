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

	// Quand le formulaire est envoyé :
	// - calculer le résultat
	// - sélectionner l'élément html qui va contenir ce résultat
	// - modifier cet élément avec le nouveau résultat

	// Si des erreurs dans les inputs,
	// afficher un message d'erreur

	// Détecter quand le formulaire est envoyé
	$("#buttonForm").click(clickButtonFormulaire);

	function clickButtonFormulaire(){
		console.log("bouton du formulaire");
		// Récupérer le contenu de input1

		// Récupérer le contenu de input2

		// Récupérer le contenu du select operation
	}




	function add(a, b){
		
	}	

	function substract(a, b){
		
	}	

	function multiply(a, b){
		
	}	

	function divide(a, b){
		
	}	
})();