const readlineSync = require('readline-sync');

export const convertLength = (valor: number, unidadeBase: string, unidadeConversao: string) => {
  const convertionTable = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const unidadeBaseIndex = convertionTable.findIndex((unidade) => unidade === unidadeBase);
  const unidadeConversaoIndex = convertionTable.findIndex((unidade) => unidade === unidadeConversao);

  return `${valor * 10 ** (unidadeConversaoIndex - unidadeBaseIndex)}${unidadeConversao}`;
};
// exercício 7
const execLength = () => {
  const valor: number = readlineSync.question('Qual o valor para conversão?');
  const unidadeBase: string = readlineSync.question('Qual a unidade base para conversão?');
  const unidadeConversao: string = readlineSync.question('Qual a unidade de conversão para iniciar a conversão?');
  const convertPhrase = convertLength(valor, unidadeBase, unidadeConversao);
  return console.log(`${valor}${unidadeBase} é igual a ${convertPhrase}`);
};
execLength();