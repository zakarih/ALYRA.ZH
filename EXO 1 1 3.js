console.log("Bienvenue dans ce vérificateur de palindrome!");

var paldrome = String(prompt("Entrez la chaine de caractère à vérifier.").toLowerCase());
paldrome = paldrome.replace(/ /g, "");

var b = paldrome.length-1 ;
var i = 0 ;
 
do {
	i++;
	if (paldrome.charAt(i) !== paldrome.charAt(b-i)){
        i=i+b
 }
}
while (i < b);
 
if (i=(b-1)){
	console.log("Votre phrase est bien un palindrome");
    }else{
		console.log("Votre phrase n est pas un palindrome");
	}

