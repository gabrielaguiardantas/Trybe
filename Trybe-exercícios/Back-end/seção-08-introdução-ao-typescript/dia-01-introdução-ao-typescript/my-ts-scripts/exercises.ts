// exercício 1, somente tipar os parâmetros convertendo assim de js para ts

// função 1

export const isItAPrime = (param: number) => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

// função 2
// Essa função é responsável por validar se o formato do e-mail está correto.

export const validateEmailFormat = (param: string) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(param);
};

// função 3 
// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.

export const sortInput = (param: number[]) => {
  return param.sort(function(a, b){return a-b});
};

// função 4
// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
interface myObjType {
  name: string,
  age: number
};
export const createSimpleSentence = (param: myObjType) => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
};

// função 5
// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
export const isOfLegalAge = (param: string | boolean) => {
  return !!param
};




