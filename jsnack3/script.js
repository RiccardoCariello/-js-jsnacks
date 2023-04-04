/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


let somma =0;
let input ="";

for(let i = 0 ; i < 10 ; i++){
    input = prompt("Inserisci un numero.");
    //console.log(input);
        if(!isNaN(input)){
            input = parseInt(input);
            somma = somma + input;
        }else{
            console.log("Input non valido");
            i--;
        } 
}

console.log(somma);