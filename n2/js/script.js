// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var firstWord = prompt("Inserisci una parola");
var secondWord = prompt("Inserisci un'altra parola");
if (firstWord.length < secondWord.length) {
  console.log(firstWord + " " + secondWord);
} else if (secondWord.length < firstWord.length) {
  console.log(secondWord + " " + firstWord);
} else {
  alert("Inserisci due parole con lunghezze differenti");
}
