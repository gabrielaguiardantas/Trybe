//exercício 1
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = () => arrays.reduce((acc, curr) => acc.concat(curr));
console.log(flatten());

//exercício 2, não consegui fazer, tive que olhar o gabarito após quebrar muito a cabeça
const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:
const reduceNames = () => books.reduce((acc, book) => `${acc} ${book.author.name},`, '');
console.log(reduceNames());

//exercício 3, não consegui fazer, tive que olhar o gabarito após quebrar muito a cabeça

function averageAge() {
  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => sum + (book.releaseYear - book.author.birthYear), 0);
  return sumOfAges / numberOfBooks;
} console.log(averageAge());

//exercício 4

const biggestBookName = () => books.reduce((acc, book) => (book.name.length > acc.name.length) ? book : acc); 
console.log(biggestBookName());

//exercício 5

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    let totalOfLettersA = 0;
    names.forEach((name) => {
      const lettersFromName = name.split('');
      totalOfLettersA += lettersFromName.reduce((lettersAInName, currentLetter) => {
        if (currentLetter === 'a' || currentLetter === 'A') {
          return lettersAInName + 1;
        }
        return lettersAInName;
      }, 0);
    });
    return totalOfLettersA;
  }

  //exercício 6 

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
let studentObject = students.map((student, index) => ({
    name: student,
    grades: (grades[index].reduce((acc, curr) => acc + curr, 0)) / grades[index].length
}));
return console.log(studentObject);
}; studentAverage();
