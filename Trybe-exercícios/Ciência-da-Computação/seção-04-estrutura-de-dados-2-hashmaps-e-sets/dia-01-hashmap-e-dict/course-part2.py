# exercício 3
"""A classe Dict utiliza o Open Addressing e Java utiliza Separate Chaining.
Vamos entender isso com mais detalhes.

A classe Dict, de Python,
utiliza a técnica de tratamento de colisão chamada Open Addressing e
busca o próximo espaço vazio em duas fases.
Ambas as fases utilizam a representação binária da chave e
aplicam fórmulas matemáticas para definir o próximo índice a ser visitado.

A classe HashMap, de Java, utiliza a técnica de Separate Chaining,
mas quando a lista do bucket começa a ficar grande,
Java substitui essa lista por uma Árvore Binária de Busca,
uma estrutura de dados que diferente, que não veremos no curso,
mas já posso adiantar que é mais eficiente
do que uma lista para operações de busca.
"""
# exercício 4
"""Essa pergunta é um pouco mais difícil,
então não se preocupe se não conseguiu achar essa informação
de maneira explícita.

A solução do Python determina o próximo índice a ser visitado de maneira
relativamente randômica e resulta em uma complexidade
assintótica de tempo de O(1).
Por outro lado, para evitar que o vetor buckets fique rapidamente sem espaço,
um Dict é inicializado com uma lista de tamanho 2**15 ints.
Como em Python cada int ocupa 24 bytes, no mínimo,
o uso de memória é considerável.

Em Java, o tamanho inicial é menor,
uma vez que o que tende a crescer são as chains de cada bucket
e não a lista de buckets. Por outro lado,
temos o trade-off com o custo de tempo. Para cada consulta,
o tempo de busca é proporcional à quantidade de itens naquele bucket que,
sendo uma árvore, chega a O(log n),
sendo n a quantidade de itens naquele bucket.

Resumindo: Python tem complexidade mais baixa,
mas gasta muito espaço.
Java utiliza bem melhor a memória,
porém tem maior complexidade para consultas.
"""
