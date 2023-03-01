'use strict';

let sumFor = 0;

for (let i = 0; i < 5; i++) {
    const inputFor = Number(prompt('Inserisci un numero'));
    sumFor += inputFor;
    console.log(sumFor);
}

console.log(`Somma For finale è ${sumFor}`);

let sumWhile = 0;
let index = 1;

while (index <= 5) {
    const inputWhile = Number(prompt(`Inserisci un numero (${index})`));
    if (!isNaN(inputWhile)) {
        sumWhile += inputWhile;
        console.log(sumWhile);
        index++;
    }
}

console.log(`Somma While finale è ${sumWhile}`);