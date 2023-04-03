let input1 = prompt("Inserisci la prima parola");
let input2 = prompt("Inserisci la seconda parola");

if(isNaN(input1) && isNaN(input2)){

    if (input1.length > input2.length){
        console.log(input1 + input2);
    }else {
        console.log(input2 + input1);
    }
}else console.log("gli input non sono validi");