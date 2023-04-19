const readlineSync = require('readline-sync');

export const convertVolume = (valor: number, unidadeBase: string, unidadeConversao: string) => {
  const convertionTable = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
  const unidadeBaseIndex = convertionTable.findIndex((unidade) => unidade === unidadeBase);
  const unidadeConversaoIndex = convertionTable.findIndex((unidade) => unidade === unidadeConversao);

  return `${valor * 1000 ** (unidadeConversaoIndex - unidadeBaseIndex)}${unidadeConversao}`;
};
// exercício 7
const execVolume = () => {
  const valor: number = readlineSync.question('Qual o valor para conversão?');
  const unidadeBase: string = readlineSync.question('Qual a unidade base para conversão?');
  const unidadeConversao: string = readlineSync.question('Qual a unidade de conversão para iniciar a conversão?');
  const convertPhrase = convertVolume(valor, unidadeBase, unidadeConversao);
  return console.log(`${valor}${unidadeBase} é igual a ${convertPhrase}`);
};
execVolume();