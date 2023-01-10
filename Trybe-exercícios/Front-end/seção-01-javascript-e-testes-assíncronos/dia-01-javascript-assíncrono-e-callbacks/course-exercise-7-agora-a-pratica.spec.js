
// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails, handlePokemonSearch } = require('./course-exercise-7-agora-a-pratica');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
    // Escreva aqui seu código
    expect(() => { getPokemonDetails('qualquercoisa', handlePokemonSearch) }).toThrow('Não temos esse pokémon para você :(');
  });

  it('retorna um pokémon que existe no banco de dados', () => {
    // Escreva aqui seu código
  });
});