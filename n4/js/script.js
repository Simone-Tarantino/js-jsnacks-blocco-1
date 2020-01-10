// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var partyList = ["Carl", "Lenny", "Marge", "Lisa"];
var userName = prompt("Inserisci il tuo nome");
var access = false;
for (i = 0; i < partyList.length; i++) {
  if(userName == partyList[i]) {
    access = true;
  }
}
if (access == true) {
  alert("Il tuo nome è in lista, puoi accedere alla festa");
} else {
  alert("Il tuo nome non è in lista, non puoi accedere alla festa");
}
