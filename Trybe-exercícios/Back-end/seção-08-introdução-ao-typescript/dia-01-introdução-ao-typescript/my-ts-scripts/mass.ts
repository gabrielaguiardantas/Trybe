const readlineSync = require('readline-sync');

export const convertMass = (valor: number, unidadeBase: string, unidadeConversao: string) => {
  const convertionTable = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
  const unidadeBaseIndex = convertionTable.findIndex((unidade) => unidade === unidadeBase);
  const unidadeConversaoIndex = convertionTable.findIndex((unidade) => unidade === unidadeConversao);

  return `${valor * 10 ** (unidadeConversaoIndex - unidadeBaseIndex)}${unidadeConversao}`;
};
// exercício 7
const execMass = () => {
  const valor: number = readlineSync.question('Qual o valor para conversão?');
  const unidadeBase: string = readlineSync.question('Qual a unidade base para conversão?');
  const unidadeConversao: string = readlineSync.question('Qual a unidade de conversão para iniciar a conversão?');
  const convertPhrase = convertMass(valor, unidadeBase, unidadeConversao);
  return console.log(`${valor}${unidadeBase} é igual a ${convertPhrase}`);
};
execMass();