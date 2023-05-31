from functools import reduce
from math import ceil


# exercício 1
def bigger_number(a, b):
    if a > b:
        return a
    if b > a:
        return b


# exercício 2
def arithmetic_mean(lista):
    sum_elements = reduce(lambda a, b: a + b, lista)
    number_of_elements = len(lista)
    return sum_elements / number_of_elements


# exercício 3
def printing_squares(asterisk):
    if asterisk > 1:
        for n in range(asterisk):
            print(asterisk * "*")
    else:
        "argument must be > 1"


# exercício 4

names_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggest_name_length(list):
    return print(max(list, key=len))


# exercício 5


def paint_cans_coverage(square_meters):
    paint_cans_quantity = ceil(square_meters / 54)
    total_value_cans = paint_cans_quantity * 80
    return print((paint_cans_quantity, total_value_cans))


# exercício 6


def verify_triangle_type(sideA, sideB, sideC):
    if sideA + sideB < sideC or sideC + sideB < sideA or sideC + sideA < sideB:
        return print("Não é um triângulo")
    else:
        if sideA == sideB == sideC:
            return print("Triângulo Equilátero")
        elif sideA == sideB or sideA == sideC or sideB == sideC:
            return print("Triângulo Isósceles")
        else:
            return print("Triângulo Escaleno")


# exercício 7 (número 1 do bônus)

list_example = [5, 9, 3, 19, 70, 8, 1, 2, 35, 27]


def verify_smaller_element(lista_qualquer):
    return print(min(lista_qualquer))


# exercício 8 (número 2 do bônus)


def printing_triangle(asterisk):
    if asterisk > 1:
        for index in reversed(range(asterisk)):
            print((asterisk - index) * "*")
    else:
        "argument must be > 1"


# exercício 9 (número 3 do bônus)


def sum_numbers(stop_number):
    return print(reduce(lambda a, b: a + b, range(stop_number + 1)))


# exercício 10 (número 4 do bônus)


def total_fuel_value(liters, fuel_type: str):
    if fuel_type == "A":
        if liters > 20:
            return liters * 2.50 * 0.95
        else:
            return liters * 2.50 * 0.97
    elif fuel_type == "G":
        if liters > 20:
            return liters * 2.50 * 0.94
        else:
            return liters * 2.50 * 0.96
    else:
        return "Tipo de combustível não encontrado"
