'use strict';

// Creo una lista nomi e una cognomi
const nameList = ['Marco', 'Giulio', 'Piero', 'Antonio', 'Cesare'];
const surnameList = ['Bianchi', 'Verdi', 'Gialli', 'Rossi', 'Blu'];
const invitedList = [];

// Inizio un ciclo per generare tre nomi casuali
for (let i = 0; i < 3; i++) {
    // Prendo un nome casuale da nameList
    const randomIndex1 = Math.floor(Math.random() * nameList.length);
    const randomName = nameList[randomIndex1];
    // Prendo un cognome casuale da surnameList
    const randomIndex2 = Math.floor(Math.random() * surnameList.length);
    const randomSurname = surnameList[randomIndex2];
    // Stampo il nome dell'invitato
    invitedList.push(`${randomName} ${randomSurname}`);
    console.log(`Invitato numero ${i} è ${randomName} ${randomSurname}`);
}

console.log(invitedList);