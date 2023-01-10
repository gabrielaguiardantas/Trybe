//exercício 1

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
    console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

//exercício 2

const sum = (...numbers) => numbers.reduce((acc, curr) => acc += curr);

console.log(sum(50, 50, 50));

//exercício 3

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
};

const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
};
// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// <nome> tem <anos de idade> e gosta de <gostos da pessoa>

// Retornos esperados:
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//exercício 4

const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
    // bornIn: nascido em
];

// escreva filterPeople abaixo
const filterPeople = (array) => array.filter((person) => person.bornIn >= 1901 && person.bornIn <= 2000 && person.nationality === 'Australian');
console.log(filterPeople(people));

//exercício 5

const myList = [5, 2, 3];
// escreva swap abaixo
function swap(arr, i0, i2) {
    [arr[i0], arr[i2]] = [arr[i2], arr[i0]];
}; swap(myList, 0, 2);

console.log(myList);

//exercício 6

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = (array) => ({nome: array[0], marca: array[1], ano: array[2]});
console.log(toObject(palio));

//exercício 7

const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
       // measurementUnit: unidade de medida
  ];
  
  // escreva shipLength abaixo
  function shipLength (ship) {
   const { name, length, measurementUnit } = ship;
   return `${name} is ${length} ${measurementUnit} long`
  }
  
  // retorno esperado
  console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

  //exercício 8

  // escreva greet abaixo
  const greet = (person, greetingsMessage = 'Hi') => `${greetingsMessage} ${person}`;
  

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

//exercício 9


const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.

  const { spring, summer, autumn, winter } = yearSeasons;
  
  let monthsOfTheYear = [ ...winter, ...spring, ...summer, ...autumn];
  console.log(monthsOfTheYear);


  const adultos = [
    {
      peso: 100,
      altura: 1.85,
    },
    {
      peso: 90,
      altura: 1.72,
    },
    {
      peso: 79,
      altura: 1.99,
    },
  ];
  
  // IMC = Índice de Massa Corporal
  
  function IMC(adulto) {
    return parseFloat((adulto.peso/(Math.pow(adulto.altura,2))).toFixed(2));
  }
  
  console.log(adultos.map(IMC));
  