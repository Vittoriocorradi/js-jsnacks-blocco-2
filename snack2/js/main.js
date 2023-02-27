'use strict';

// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// Variabile input
const userNumber = Number(prompt('Inserisci un numero'));

// Condizione
if (userNumber % 2 === 0) {
    // stampa input se pari
    console.log(userNumber);
} else {
    // stampa input + 1 se dispari
    console.log(userNumber + 1);
}