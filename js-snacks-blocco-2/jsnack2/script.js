/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

//genero array con nomi e cognomi

let nomi = ['Jay', 'Daisy', 'Tom', 'Jordan', 'Myrtle', 'George', 'Nick'];
let cognomi = ['Gatsby', 'Buchanan', 'Bachen', 'Baker', 'Will', 'Wilson', 'Carraway'];

//prendo nomi a caso
for(let i=0; i<=2; i++) {
    let nomiRand = nomi[Math.floor(Math.random()*nomi.length)];
    //prendo cognomi a caso
    let cognomiRand = cognomi[Math.floor(Math.random()*cognomi.length)];

    console.log(`${nomiRand} ${cognomiRand}`);
}


