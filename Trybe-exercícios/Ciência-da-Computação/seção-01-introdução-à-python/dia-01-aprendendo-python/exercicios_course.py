from functools import reduce  # importa o método reduce

a = 10
b = 5
# print é o console.log do python

# exercício 1

# somando em python
print(a + b)
# diminuindo em python
print(a - b)
# dividindo em python
print(a / b)
# dividindo e arredondando para baixo em python
print(a // b)
# multiplicando em python
print(a * b)
# exponenciando em python
print(a**b)

# exercício 2

hours = 6
minutes = hours * 60
seconds = minutes * 60
print(hours, minutes, seconds)

# exercício 3
# o ponto e vírgula finaliza uma instrução como no
# javascript e pode ser utilizado para colocar mais instruções numa linha

c = hours + minutes
d = hours - minutes
print(c)
print(d)

# exercício 4

book_price = 24.20
first_unity_cost = book_price * 0.6 + 3
next_unity_cost = book_price * 0.6 + 0.75
total_cost_for_sixty_books = round(
    (first_unity_cost + next_unity_cost * 59), 2
)
print(total_cost_for_sixty_books)

trybe_course = ["Introdução", "Front-end", "Back-end"]

# exercício 5

trybe_course.append("Ciência da Computação")
print(trybe_course)

# exercício 6

trybe_course[0] = "Fundamentos"
print(trybe_course)

# exercício 7

var = set()
var.add("Gabriel Aguiar Dantas")
print(var)

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# exercício 8

info["recorrente"] = "sim"
print(info)

# exercício 9

del info["origem"]
print(info)

# exercício 10

# tupla é a estrutura recomendada
# quando não precisamos das chaves e queremos que não posso alterar

# exercício 11

# resposta do course

my_array = [20, 20, 1, 2]

freq_dict = {}

for item in my_array:
    if item in freq_dict:
        freq_dict[item] += 1
    else:
        freq_dict[item] = 1

for key, valor in freq_dict.items():
    print(f"{key} : {valor}")

# Saída
# 20: 2
# 1: 1
# 2: 1

# exercício 12


number = 5  # qualquer número pode ser colocado aqui
array = [
    *range(number, 0, -1)
]  # envolvi o método num array e executei com o * colado nele
factorial_result = reduce(lambda a, b: a * b, array)
# ao invés de fazer uma função e jogar como
# primeiro parâmetro, soltei ela descrita logo nele com esse método lambda
print(
    f"""Aqui temos o número a ser
    fatorado ->>{number}, seu array gerado -->>
    {array} e seu resultado -->> {factorial_result}"""
)

# exercício 13

ratings = [6, 7, 8, 9, 10]
array_converted = [rating * 10 for rating in ratings]
# estrutura do for in em python => o que eu quer
# o que faça para cada item for variável que eu crio
# para utilizar na primeira parte in array que eu quero que seja iterado
print(array_converted)

# exercício 14

divisible_by_three = []
for rating in ratings:
    if rating % 3 == 0:
        divisible_by_three.append(f"{rating} é múltiplo de 3")
print(divisible_by_three)
