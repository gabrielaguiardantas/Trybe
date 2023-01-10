// cicles.test.js

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//  cities.push(city);
// };

// const removeCity = (city) => {
//  cities = cities.filter((eachCity) => eachCity !== city);
// };

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

describe('Agrupa o primeiro bloco de testes', () => {
    beforeEach(() => {
      cities = [...cities, 'Pindamonhangaba'];
    });
  
    afterEach(() => {
      cities = [];
    });
  
    test('Testa a função addCity dentro do primeiro bloco de testes', () => {
      expect.assertions(5);
      addCity('Campinas');
      addCity('Goiania');
      addCity('Recife');
      expect(cities).toHaveLength(4);
      expect(cities).toContain('Campinas');
      expect(cities).toContain('Goiania');
      expect(cities).toContain('Recife');
      expect(cities).toContain('Pindamonhangaba');
    });
  
    test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
      expect.assertions(2);
      removeCity('Pindamonhangaba');
      expect(cities).toHaveLength(0);
      expect(cities).not.toContain('Pindamonhangaba');
    });
  });
  
  describe('Agrupa o segundo bloco de testes', () => {
    beforeEach(() => {
      cities = [...cities, 'Tangamandapio'];
    });
  
    afterEach(() => {
      cities = [];
    });
  
    test('Testa a função addCity dentro do segundo bloco de testes', () => {
      expect.assertions(5);
      addCity('Campinas');
      addCity('Goiania');
      addCity('Recife');
      expect(cities).toHaveLength(4);
      expect(cities).toContain('Campinas');
      expect(cities).toContain('Goiania');
      expect(cities).toContain('Recife');
      expect(cities).toContain('Tangamandapio');
    });
  
    test('Testa a função removeCity dentro do segundo bloco de testes', () => {
      expect.assertions(3);
      removeCity('Tangamandapio');
      expect(cities).toHaveLength(0);
      expect(cities).not.toContain('Tangamandapio');
      expect(cities).not.toContain('Pindamonhangaba');
    });
  });

  const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };
  
  // não entendi esse exercício, ir na mentoria!
  it('uppercase "test" to equal "TEST"', (done) => { // 1. Criamos o it
    uppercase('test', (strUpperCase) => { // 2. Chamamos a função `uppercase`
      try { // 3. Adicionamos o `try/catch`
        expect(strUpperCase).toBe('TEST'); // 4. Criamos o expect
        done(); // 5. Chamamos a função `done`
      } catch (error) {
        done(error); // 6. Chamamos a função `done` com o parâmetro `error`
      }
    });
  });