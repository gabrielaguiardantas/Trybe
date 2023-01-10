// Faça uma lista com as suas frutas favoritas
const specialFruit = ['mamão', 'maçã', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['aveia', 'mel', 'granola'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));