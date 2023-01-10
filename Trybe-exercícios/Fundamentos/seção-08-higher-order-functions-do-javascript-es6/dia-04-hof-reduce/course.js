//exercício 1
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//filter + reduce
const pairs = numbers.filter((number) => number % 2 === 0);
const sumPairNumbers = pairs.reduce((acc, curr) => acc + curr);
console.log(sumPairNumbers);

//reduce
const sumPairs = (acc, number) => ((number % 2 === 0) ? acc + number : acc); //utilizando o operador ternário para criar o array de pares
const sumPairsNums = (arr) => arr.reduce(sumPairs);
console.log(sumPairsNums(numbers));

//exercício 2
const estudantes = [
    {
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 67 },
            { name: 'Português', nota: 79 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 65 },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
            { name: 'Matemática', nota: 59 },
            { name: 'Português', nota: 80 },
            { name: 'Química', nota: 78 },
            { name: 'Biologia', nota: 92 },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 76 },
            { name: 'Português', nota: 90 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 80 },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 91 },
            { name: 'Português', nota: 85 },
            { name: 'Química', nota: 92 },
            { name: 'Biologia', nota: 90 },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 70 },
            { name: 'Português', nota: 70 },
            { name: 'Química', nota: 60 },
            { name: 'Biologia', nota: 50 },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 80 },
            { name: 'Português', nota: 82 },
            { name: 'Química', nota: 79 },
            { name: 'Biologia', nota: 75 },
        ],
    },
];

const getBestClass = (acc, materia) => (acc.nota > materia.nota) ? acc : materia; 
const reportBetter = (students) => students.map((student) => ({
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name,
}));
console.log(reportBetter(estudantes));