"use strict";
// exercício 1
function printBird(pt) {
    console.log("O nome da espécie é: " + pt.specie);
    console.log("O seu peso é: " + pt.weigth);
    console.log("O seu porte é: " + pt.size);
}
printBird({ specie: 'WoodPecker', weigth: '2kg', size: 'small' });
