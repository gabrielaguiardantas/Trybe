const fs = require('fs').promises;
const path = require('path');
const NEW_SIMPSONS_DATA_PATHNAME = '../../data/simpsonFamily.json';

async function createNewCharacter() {
    const data = await fs.readFile(path.resolve(__dirname, NEW_SIMPSONS_DATA_PATHNAME));
    const allCharacters = JSON.parse(data);

    // exercício 6 - E
    const addCharacter = JSON.stringify([...allCharacters, {"id": "11", "name": 'Nelson Muntz'}]);
    await fs.writeFile(path.resolve(__dirname, NEW_SIMPSONS_DATA_PATHNAME), addCharacter);
}

createNewCharacter();