const fs = require('fs').promises;
const path = require('path');
const SIMPSONS_DATA_PATHNAME = '../../data/simpsons.json';
const NEW_SIMPSONS_DATA_PATHNAME = '../../data/simpsonFamily.json';

async function createNewJson() {
    const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATHNAME));
    const allCharacters = JSON.parse(data);
    const newJson = JSON.stringify(allCharacters.slice(0, 4));
    // Exercício 6 - D
    await fs.writeFile(path.resolve(__dirname, NEW_SIMPSONS_DATA_PATHNAME), newJson);
}

createNewJson();