let contas = [
  { numero: 12345, saldo: 1000 },
  { numero: 54321, saldo: 500 },
  { numero: 98765, saldo: 2500 }
];

 function transaction(contaDeSaida, contaDeEntrada, valorDaTransacao) {
  // buscando a existência dos elementos e capturando seus índices
  const contaDeSaidaNoArray = contas.findIndex((conta) => conta.numero === contaDeSaida);
  const contaDeEntradaNoArray = contas.findIndex((conta) => conta.numero === contaDeEntrada);
  
  // verificando a existência das contas
  if (contaDeSaidaNoArray === -1 || contaDeEntradaNoArray === -1) return "Conta não existe";
  
  // verificando a existência de saldo na conta de saída
  if (contaDeSaidaNoArray.saldo < valorDaTransacao) return "Saldo Insuficiente";
  
  // realizando a transação
  contas[contaDeSaidaNoArray].saldo -= valorDaTransacao;
  contas[contaDeEntradaNoArray].saldo += valorDaTransacao;
  return 'Transferência realizada';  
 } 

 console.log(transaction(54321, 12345, 100));
 console.log(contas);