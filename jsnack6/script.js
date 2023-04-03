/* Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso. */

let computerNum = Math.random() * 10;
computerNum = Math.ceil(computerNum);
let playerNum = prompt("inserisci un numero da 0 a 10!");
playerNum = parseInt(playerNum);

console.log("Il COMPUTER HA GIOCATO UN " + computerNum);
console.log("Invece tu: " + playerNum);

if(playerNum >= 0 && playerNum <= 10){
    
    if(playerNum == computerNum){
        console.log("Bravo hai vinto!");
    }else {
        console.log("Hai perso...");
    }
}else console.log("Input non valido");