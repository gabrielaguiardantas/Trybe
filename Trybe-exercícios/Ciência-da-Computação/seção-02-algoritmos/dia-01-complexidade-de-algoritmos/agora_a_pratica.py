import random
import time

# exercício 1


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


""" Melhor caso é uma repetição de números no início do array,
na segunda iteração o código já para sua execução.
Ordem de complexidade: 0(2) """

""" Caso médio é uma repetição de números no meio do array,
o código vai parar do meio + 1.
Ordem de complexidade: 0(n)"""

""" Pior caso,
no fim do array.
Ordem de complexidade: 0(n) """


# exercício 2

# record start time
start = time.time()


# define a sample code segment
def random_averages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages


""" Complexidade de tempo será O(n),
pois desprezaremos o for que itera 100x (100 é uma constante)
e a variação se dará por conta do for de n (que caminha linearmente) """

""" Complexidade de espaço será O(1),
pois independente do tamanho de n
essa função retornará sempre 100 elementos """


# record end time
end = time.time()
# print the difference between start
# and end time in milli. secs
print(
    "The time of execution of above program is :",
    (end - start) * 10**3,
    "ms",
)


# exercício 3

# record start time
start = time.time()


def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))

"""Para os três casos, utilizando a função `max()` do Python,
a complexidade será O(n).
A lista abaixo da função `max()` também é executada em O(n).
Ou seja, O(n) + O(n) = O(n).
A complexidade de espaço também é O(n), pois quanto mais crianças temos,
maior vai ser o tamanho da lista gerada. """


# record end time
end = time.time()
# print the difference between start
# and end time in milli. secs
print(
    "The time of execution of above program is :",
    (end - start) * 10**3,
    "ms",
)
