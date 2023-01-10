//exercício 1 - mais prática
const factorial = (a) => {
    let result = 1;
    for (let i = 2; i <= a; i += 1) {
        result *= i;
    }
    return result;
};
const print = factorial(4);
console.log(`Esse é o fatorial ${print}`);

//exercício 2
const longestWord = (frase) => {
    const fraseArray = frase.split(' ');
    let biggestWord = 0;
    let result;
    for (let word of fraseArray) {
        if (word.length > biggestWord) {
            biggestWord = word.length;
            result = word;
        }
    }
    return result;
}
const print2 = longestWord('aqui estamos nós');
console.log(print2);

//exercício 4
const substitutaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    let newPhrase = `${fraseArray[0]} ${nome} ${fraseArray[2]}`;
    return newPhrase;

}; substitutaX('Bebeto');
let parameter = substitutaX('Bebeto');

const minhasSkills = (parameter) => {
    const skills = ['Javascript', 'HTML', 'CSS'];
    let phrase2 = `${parameter}\nMinhas três principais habilidades são:
  •${skills[0]}
  •${skills[1]}
  •${skills[2]}`
    console.log(phrase2);
}; minhasSkills(parameter);
