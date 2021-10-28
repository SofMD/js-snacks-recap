/*
 Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma
e le media di tutte le cifre che lo compongono stampandola nel DOM, 
altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto
*/

let btn = document.getElementById('bottone');
let somma = 0;
let num = '';
let media 

btn.addEventListener('click', function(){
    let num =  prompt('Inserisci un numero a 4 cifre');

    while(num.length !== 4 || isNaN(num)){
        num =  prompt('reinserisci un numero a 4 cifre');
    }

    for (let i=0; i < num.length; i++){
        
        somma += parseInt(num[i]);
    }
    
    media = somma / num.length
    console.log(`La somma è ${somma}, la media è ${media}`);
})
