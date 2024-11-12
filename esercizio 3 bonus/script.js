"use strict";

//  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
//  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

// <!-- Snack 2 -->

const squadra = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "cagliari",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "torino",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

for (let i = 0; i < squadra.length; i++) {
    squadra[i].puntiFatti = generaNumeroRandom(1, 50);  
    squadra[i].falliSubiti = generaNumeroRandom(1, 50);
}
console.log("Array originale:");
console.log(squadra);

let nuovoArray = [];
for (let i = 0; i < squadra.length; i++) {
    nuovoArray.push({
        nome: squadra[i].nome,
        falliSubiti: squadra[i].falliSubiti
    });
}

console.log("Nuovo array con nomi e falli subiti:");
console.log(nuovoArray);


