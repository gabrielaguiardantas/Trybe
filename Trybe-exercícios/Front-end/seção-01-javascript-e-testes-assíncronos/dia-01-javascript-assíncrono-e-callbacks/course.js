// linhaDeProducao.js

const TWO_SECONDS = 2000;

setTimeout(() => {
  console.log('Comprar parafusos'); // Comprar parafusos
  console.log('Adicionar ao estoque'); // Adicionar ao estoque
}, TWO_SECONDS);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Saída:
// 1 - Receber roda
// 2 - Encaixar parafusos
// 3 - Fixar roda no carro
// Comprar parafusos
// Adicionar ao estoque

// exercícios de fixação

// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

// Saída:
// [ 1, 2, 3 ]

// pushNumberAsync.js

const pushNumber1 = (list, number) => list.push(number);

const numbers2 = [];

const THREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

// Saída:
// [2, 3]