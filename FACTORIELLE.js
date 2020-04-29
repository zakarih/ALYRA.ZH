console.log("Calcul du factorielle d un nombre");

var fact = Number(prompt("Entrez un nombre entier supérieur à 1"));
function fact1(fact){
	return fact*(fact-1)
}
var b = 1
while (fact > 1){
	b=b*fact1(fact)
	fact= fact-2
}
	 console.log("la factorielle recherchée vaut "+ b)
