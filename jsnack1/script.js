
//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.



let input1 = prompt("Inserisci il primo numero");
let input2 = prompt("Inserisci il secondo numero");

if(!isNaN(input1) && !isNaN(input2)){

    if (input1 > input2){
        console.log("Il maggiore è " + input1);
    }else {
        console.log("Il maggiore è " + input2);
    }
}else console.log("gli input non sono validi");