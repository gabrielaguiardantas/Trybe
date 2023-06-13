# Exemplo 1:
produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


# exercício 3
# Complexidade quadrática O(n²)
def verify_good_pairs_quantity(products):
    possible_combinations = 0
    for i in range(len(products)):
        for j in range(len(products)):
            if i > j and products[i] == products[j]:
                possible_combinations += 1
    return possible_combinations


print(verify_good_pairs_quantity(produtos))
