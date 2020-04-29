console.log("Bienvenue dans ce jeu de devinette !");

var solution = Number(prompt("Entrez un nombre entre 1 et 100, que je devrais  deviner."));
var a = 1
var b= 100
var estimation = new Array();

for (var i = 0 ; i < 50; i++) { 
estimation=Math.round((a+b)/2)
    if (estimation === solution) {
		console.log("Ma proposition "+ estimation + " est correcte!");
		console.log("Cela a été trouvé en " + i + " essai(s)")
        break; // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
    } 
	if (estimation > solution){
				console.log("Ma proposition est " + estimation);
				console.log("Je vais l'abaisser");
    b = Math.round((a+b)/2);}
	else
		{console.log("Ma proposition est " + estimation);
				console.log("Je vais l'augmenter");
	a = Math.round((a+b)/2);
	}
	}