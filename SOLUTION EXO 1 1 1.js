console.log("Bienvenue dans ce jeu de devinette !");

var solution = Math.floor(Math.random() * 100) + 1; // Je génère un nombre aléatoire entre 1 et 100
var imax = Number(prompt("Fixez le nombre maximum d'essais pour ce jeu."));

// console.log("(La solution est " + solution + ")");

for (var i = 0 ; i < imax; i++) { // je lance la boucle, où i < au nombre d'essai voulu
    var essai = Number(prompt("Entrez un nombre entre 1 et 100 pour deviner le nombre aléatoire."));
    if (essai === solution) {
        console.log("Vous avez trouvé, bravo !");
		console.log("Vous avez trouvé en " + i + " essai(s)")
        break; // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
    } 
	if ( essai > solution+10){ // comparent la valeur "essai" à la valeur "solution"
            console.log("votre estimation est "+ essai + " est trop élevé");
    } else if (essai < solution-10){ 
            console.log("votre estimation est "+ essai + " est trop basse");	
    } else if ( essai > solution+5 ){ 
            console.log(essai + " est proche mais au-dessus");	
    } else if (essai < solution-5){  
            console.log(essai + " est proche mais en-dessous");	
    } else if (essai > solution){ 
            console.log(essai + " est très proche mais au-dessus");	
	
    } else {
            console.log(essai + " est très proche mais en-dessous");
    }
}
if (i = imax){
    console.log("Vous avez perdu ! Le nombre était : " + solution); // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
};
