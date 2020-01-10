// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var userNum = parseInt(prompt("Inserisci un numero"));
for (i = 1; i <= userNum; i++) {
   console.log(Math.pow(i, 3));
}
