import csv

# exercício 1


def print_names(name):
    for letter in name:
        print(letter)


# exercício 2


def sum_all_args():
    args_input = input(
        """Quais números deseja somar?
        (Utilizar padrão = número + espaço + próximo número)"""
    )
    args_input_list = args_input.split(" ")
    args_input_list_ajusted = [x for x in args_input_list if x != ""]
    sum_args = 0
    for x in args_input_list_ajusted:
        if x.isdigit():
            sum_args += int(x)
        else:
            return print(f"Erro ao somar valores, {x} é um valor inválido.")
    return print(sum_args)


# exercício 3


try:
    with open("students_grades_course_example.txt", "r") as file:
        for line in file:
            line_convert = line.split(" ")
            if int(line_convert[1]) < 6:
                new_file = open("reproved_students.txt", mode="a")
                print(line_convert[0], file=new_file)
except FileNotFoundError:
    # será executado caso haja a exceção 'FileNotFoundError'
    print("Arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("Arquivo manipulado e fechado com sucesso")
finally:
    # será sempre executado, independentemente de erro
    print("Fim da tentativa de ler o arquivo")


with open("arquivo.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)
