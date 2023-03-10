const fs = require('fs').promises;
const path = require('path');
const SIMPSONS_DATA_PATHNAME = '../../data/simpsons.json';


async function showSimpsonsCharacterById(id) {
    try {
        const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATHNAME), 'utf-8');
        const allCharacters = JSON.parse(data);
        const chosenByIdSimpson = allCharacters.find(element => element.id == id);
        
        if (!chosenByIdSimpson) {
        throw new Error('Id não encontrado');
        }
        return console.log(chosenByIdSimpson);
    } catch(error) {
        console.error(`Erro: ${error.message}`);
    }
}

showSimpsonsCharacterById(3);