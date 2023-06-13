import random

# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]

# exercício 2


"""complexidade O(n) pois o método shuffle deve embaralhar utilizando
algum laço de repetição e ele é repetido 2x,
logo 2n, desprezando a const 2, logo n.
Vale ressaltar o bug de linter do black com o flake nos slices da lista 
(sei lá como arrumar, kkk)"""


def shuffle_cards(cards):
    middle_index = len(cards) // 2
    cards1 = list(cards[:middle_index])
    cards2 = list(cards[middle_index : len(cards)])
    random.shuffle(cards1)
    random.shuffle(cards2)
    new_cards = cards1 + cards2
    return new_cards


print(shuffle_cards(cartas))
