/* Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.

Modificate poi il programma in modo che venga chiesto all'utente il
numero massimo consentito, e stampare tutta la tabellina del 2 fino al
numero inserito */

/* primo codice

let output = 0;

for(i = 1 ; output < 1000 ; i++){
    output = i * 2;
    console.log(output); 
}

*/

let contatore = prompt("A quanto vuoi arrivare");
let output = 0;
contatore = parseInt(contatore);

if(!isNaN(contatore) && contatore > 0){
    for(i = 1 ; output < contatore - 1 ; i++){
        output = i * 2;
        console.log(output); 
    }
}