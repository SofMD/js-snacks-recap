/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
*/

const constNum = [];

//chiedere numeri
for(let i = 0; i < 6; i++) {
    let numeri = parseInt( prompt('Inserisci un numero'));

    if (numeri % 2 !== 0) {
        constNum.push(numeri);
    }
}
console.log(constNum); 