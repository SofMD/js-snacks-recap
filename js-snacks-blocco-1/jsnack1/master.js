/* L’utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.
    */


let parola1 = prompt('Inserisci una parola');
let parola2 = prompt('Inserisci una seconda parola');

if (parola1.length > parola2.length) {
    console.log(`Prima parola ${parola2}`);
    console.log(`Seconda parola ${parola1}`);
}
else if (parola1.length < parola2.length) {
    console.log(`Prima parola ${parola1}`);
    console.log(`Seconda parola ${parola2}`);
}
else {
    console.log(`La parola ${parola1} e la parola ${parola2} sono uguali`)
}