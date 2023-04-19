const readlineSync = require('readline-sync');

export const convertArea = (valor: number, unidadeBase: string, unidadeConversao: string) => {
  const convertionTable = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
  const unidadeBaseIndex = convertionTable.findIndex((unidade) => unidade === unidadeBase);
  const unidadeConversaoIndex = convertionTable.findIndex((unidade) => unidade === unidadeConversao);

  return `${valor * 100 ** (unidadeConversaoIndex - unidadeBaseIndex)}${unidadeConversao}`;
};
// exercício 7
const execArea = () => {
  const valor: number = readlineSync.question('Qual o valor para conversão?');
  const unidadeBase: string = readlineSync.question('Qual a unidade base para conversão?');
  const unidadeConversao: string = readlineSync.question('Qual a unidade de conversão para iniciar a conversão?');
  const convertPhrase = convertArea(valor, unidadeBase, unidadeConversao);
  return console.log(`${valor}${unidadeBase} é igual a ${convertPhrase}`);
};
execArea();