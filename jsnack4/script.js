/* In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
 */


const invitati = ["Jay Gatsby","Nick Carraway","Daisy Buchanan","Tom Buchanan","Myrtle Wilson","Meyer Wolfsheim","Jordan Baker","George Wilson","Henry C. Gatz","Trimalcione"];
let check = false;
let invitato = prompt("Come si chiama buonuomo?");

invitato = invitato.toLowerCase();

for(i = 0 ; i < 10 ; i++){
    
    if(invitati[i].toLowerCase() == invitato){
        check = true;
    }
}

if(check == true){
    console.log("Prego buonuomo,può entrare, si goda la festa!");
}else {
    console.log("Lei non è nella lista degli invitati, mi dispiace ma non può entrare.");
}

