/* const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro */

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology); // Facial recognition

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// Sem arrow functions
const printName = function () {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

// Com arrow functions
  const printName = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

// Quando não há nada no corpo da função além do que será retornado, podemos omitir o return e as chaves(estas somente serão omitidas caso aja somente 1 parâmetro)
  const printName = () => 'Lucas';
console.log(printName());