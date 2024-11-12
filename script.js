"use strict";

//  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
//  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

// <!-- Snack 1 -->

const biciclette = [
    {
        nome: "Bianchi",
        peso: 15,
    },
    {
        nome: "Atala",
        peso: 20,
    },
    {
        nome: "Casati",
        peso: 55,
    },
    {
        nome: "Cinelli",
        peso: 45,
    },
];

// 
let biciLeggera = biciclette[0];
for (let i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciLeggera.peso) {
        biciLeggera = biciclette[i];
    }
}
console.log(biciLeggera);

const main = document.querySelector("main")

const template = `
<div className="card">
<h4 class="card-title">La bici che pesa di meno è : ${biciLeggera.nome}</h4>
<div>Il peso della bici è : ${biciLeggera.peso}</div>

</div>
`;

main.innerHTML += template;

