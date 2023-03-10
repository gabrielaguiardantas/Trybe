const readline = require('readline-sync');


async function fibonacciSequel(a, b, c) {
    return new Promise((resolve, reject) => {
        try {
            if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') return reject(new Error('Informe apenas números'));
            else if((a + b) * c < 50) {
                return reject(new Error('Valor muito baixo'));
            }
            return resolve(console.log((a + b) * c));
        } catch(error) {
            console.error(`Erro: ${error.message}`);
        }
    })
}

fibonacciSequel(2, 2, 3);