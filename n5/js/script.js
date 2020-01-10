// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var numList = [];
var i = 0;
while (i < 6) {
  var userNum = parseInt(prompt("Inserisci un numero WHILE"));
  while (isNaN(userNum)) {
    var userNum = parseInt(prompt("Inserisci un numero WHILE"));
  }
  if (userNum % 2 == 1) {
    numList.push(userNum);
  }
  i++;
}
console.log(numList);


var numListJ = [];
for (j = 0; j < 6; j++) {
  var userNumJ = parseInt(prompt("Inserisci un numero FOR"));
  while (isNaN(userNumJ)) {
    var userNumJ = parseInt(prompt("Inserisci un numero FOR"));
  }
  if (userNumJ % 2 == 1) {
    numListJ.push(userNumJ);
  }
}
console.log(numListJ);
