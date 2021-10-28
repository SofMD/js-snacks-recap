/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

for(let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * 10) +1;

    if(num % 2 === 0) {
        console.log(`Numero pari ${num}`);
    }
    else {
        console.log(`Numero sucessivo a quello dispari ${num + 1}`);
    }
}

