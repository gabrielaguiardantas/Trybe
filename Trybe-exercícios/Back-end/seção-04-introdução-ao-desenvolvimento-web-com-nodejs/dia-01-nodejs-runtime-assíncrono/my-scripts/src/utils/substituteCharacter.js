const fs = require('fs').promises;
const path = require('path');
const NEW_SIMPSONS_DATA_PATHNAME = '../../data/simpsonFamily.json';

async function substituteCharacter() {
    const data = await fs.readFile(path.resolve(__dirname, NEW_SIMPSONS_DATA_PATHNAME));
    const allCharacters = JSON.parse(data);

    // Exercício 6 - F
    const newChar = { id: '5', name: 'Maggie Simpson'};
    allCharacters.splice(4, 1, newChar);
    fs.writeFile(path.resolve(__dirname, NEW_SIMPSONS_DATA_PATHNAME), JSON.stringify(allCharacters));
}

substituteCharacter();