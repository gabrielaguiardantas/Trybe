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

//exercício 1
const authorBornIn1947 = books.find((object) => object.author.birthYear === 1947).author.name;

console.log(authorBornIn1947);

//exercício 2

function smallerName() {
  let arrayBooks = [];
  // escreva aqui o seu código
  books.forEach((book) => {
    arrayBooks.push(book.name);
  });
  let nameBook = arrayBooks.sort((a, b) => a.length - b.length)[0]
  // Variável nameBook que receberá o valor do menor nome;
  return console.log(nameBook);
} smallerName();

//exercício 3

const getNamedBook = () => books.find((book) => book.name.length === 26);console.log(getNamedBook()); 

//exercício 4

const booksOrderedByReleaseYearDesc = () => books.sort((a, b) =>b.releaseYear - a.releaseYear); console.log(booksOrderedByReleaseYearDesc());

//exercício 5

const everyoneWasBornOnSecXX = (arr) => arr.every((authorBorn) => authorBorn.author.birthYear > 1901); console.log(everyoneWasBornOnSecXX(books));

//exercício 6

const someBookWasReleaseOnThe80s = (books) => books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
console.log(someBookWasReleaseOnThe80s(books));


//exercício 7 em dúvida

function authorUnique() {
  // escreva seu código aqui
  const authorsBirth = [];
  books.forEach((book) => {
    authorsBirth.push(book.author.birthYear);
  });

 let verifyBirthYear = authorsBirth.some((authorBirth, index) => authorsBirth.indexOf(authorBirth) !== index);
  console.log(!verifyBirthYear);
} authorUnique();



