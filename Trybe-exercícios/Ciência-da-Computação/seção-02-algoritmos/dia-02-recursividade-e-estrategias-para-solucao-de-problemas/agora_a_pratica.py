# exercício 1


def pairs_quantity(n):
    numbers = range(1, n + 1)
    quantity_of_pairs = 0
    for number in numbers:
        if number % 2 == 0:
            quantity_of_pairs += 1
    return quantity_of_pairs


# exercício 2


def recursively_pairs_quantity(n: int):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + recursively_pairs_quantity(n - 1)
    else:
        return recursively_pairs_quantity(n - 1)


# exercício 3


def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho - 1)
        if maior_do_resto_da_lista > lista[tamanho - 1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho - 1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


# exercício 4


def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)
