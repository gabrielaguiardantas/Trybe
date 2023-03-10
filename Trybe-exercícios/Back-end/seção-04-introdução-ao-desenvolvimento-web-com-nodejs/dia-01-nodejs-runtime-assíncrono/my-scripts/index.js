const { showAllCharactersSimpsons, showSimpsonsCharacterById } = require('./src/utils/showCharacterById');

async function main() {
 await showAllCharactersSimpsons();
 await showSimpsonsCharacterById(3);
}

main();