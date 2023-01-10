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

const bookNames = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
console.log(bookNames);

//exercício 2

const authorAndAge = books.map((author) => ({
    age: author.releaseYear - author.author.birthYear, 
    author: author.author.name
})).sort((a, b) => a.age - b.age);
console.log(authorAndAge);

//exercício 3

const genreFiltered = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
console.log(genreFiltered);

//exercício 4

const releaseYearFilteredBook = books.filter((book) => 2022 - book.releaseYear > 60).sort((a,b) => a.releaseYear - b.releaseYear);
console.log(releaseYearFilteredBook);

//exercício 5

const authorSciFiOrFantasy = genreFiltered.map((book) => book.author.name).sort();
console.log(authorSciFiOrFantasy);

//exercício 6

const releaseYearBooks = releaseYearFilteredBook.map((book) => book.name);
console.log(releaseYearBooks);

//exercício 7

const authorWith3DotsOnName = books.find((author) => author.author.name.split('.').length === 4);
console.log(authorWith3DotsOnName);
