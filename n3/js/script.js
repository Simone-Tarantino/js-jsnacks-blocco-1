// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for

// con for

var somma = 0;
for (i = 0; i < 5; i++) {
  var num = parseInt(prompt("Inserisci un numero per FOR"));
  somma = somma + num;
}
console.log(somma);

// con while

var sommaJ = 0;
var j = 0;
while (j < 5) {
  var numJ = parseInt(prompt("Inserisci un numero per WHILE"));
  sommaJ = sommaJ + numJ;
  j++;
}
console.log(sommaJ);
