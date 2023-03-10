const fs = require('fs').promises;
const path = require('path');
const SIMPSONS_DATA_PATHNAME = '../../data/simpsons.json';


async function showAllCharactersSimpsons() {
    try {
    const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATHNAME), 'utf-8');
    const allCharacters = JSON.parse(data);

    // exercício 6 - A
    return allCharacters.map((element) => console.log(`${element.id} - ${element.name}`));
    } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);}
}

showAllCharactersSimpsons();