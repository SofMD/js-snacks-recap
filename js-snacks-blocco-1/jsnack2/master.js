/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti con for
 e opzionalmente con while
 */

/*
 
 //versione for
 let somma = 0;

 for ( let i = 0; i < 5; i++) {
    let askNum = parseInt(prompt('Inserisci un numero'));
    somma += askNum;
 };
 console.log(somma);
*/

//versione while
let somma = 0;
let count = 1;

while (count < 6) {
    let askNum = parseInt(prompt('Inserisci un numero'));
    somma += askNum;

    count++;
};
console.log(somma)
