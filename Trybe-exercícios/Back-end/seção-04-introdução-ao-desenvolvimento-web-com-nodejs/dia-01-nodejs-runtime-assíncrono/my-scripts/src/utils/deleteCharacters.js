const fs = require('fs').promises;
const path = require('path');
const SIMPSONS_DATA_PATHNAME = '../../data/simpsons.json';

async function deleteSimpsonsCharacters() {
    try {        
        const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATHNAME));
        const allCharacters = JSON.parse(data);

        // exercício 6 - C
        const updatedCharacters = JSON.stringify(allCharacters.filter(char => char.id != 10 && char.id != 6));
        await fs.writeFile(path.resolve(__dirname, SIMPSONS_DATA_PATHNAME), updatedCharacters);
    } catch(error) {
        console.error(`${error}, não foi possível editar o arquivo simpsons.json`)
    }
}

deleteSimpsonsCharacters();