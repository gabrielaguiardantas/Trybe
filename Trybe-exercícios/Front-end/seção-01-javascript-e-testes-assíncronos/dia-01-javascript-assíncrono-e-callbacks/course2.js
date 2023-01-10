// despesas.js

const minhasDespesas = [
    {
      academia: 99,
    },
    {
      ifood: 200,
    },
    {
      celular: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const minhaRenda = 1000;

  // despesas.js

// const minhasDespesas = [
//    ...
// ];

// const minhaRenda = 1000;

const despesaMensal = (renda, despesas, callback) => {
    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };

  // despesas.js

// const minhasDespesas = [
//    ...
// ];

// const minhaRenda = 1000;

// const despesaMensal = (renda, despesas, callback) => {
//    ...
// };

const somaDespesas = (despesas) => {
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => {
      const soma = acc + curr[0];
      // acc é a sigla para accumulator (acumulador)
      // curr é a sigla para current_value (valor atual)
      return soma;
    }, 0);
    return despesaTotal;
  };

  // Executamos a função principal com as variáveis renda, despesas
// e a nossa função somaDespesas
// callback = somaDespesas
despesaMensal(minhaRenda, minhasDespesas, somaDespesas);

// Saída:
//  Balanço do mês:
//  Recebido: R$1000,00
//  Gasto:    R$459,00
//  Saldo:    R$541,00