# Instanciando a classe Dict
employee_registry = {}

# Inserindo dados
# objeto[chave] = valor
employee_registry[14] = "name1"
employee_registry[23] = "name2"
employee_registry[10] = "name3"
employee_registry[9] = "name4"
print(employee_registry)

# Alterando o nome do id 10
# objeto[chave] = novo_valor
employee_registry[10] = "name30"
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")


# Instanciação do objeto vazio
dict1 = {}
dict2 = dict()

# Instanciação com preenchimento inicial de dados
dict3 = {1: "name1", 2: "name2"}
print(f"Dicionário 1: {dict1}")
print(f"Dicionário 2: {dict2}")
print(f"Dicionário 3: {dict3}")

# Inserção e Alteração
# Se a chave não existir no dict, uma nova entrada será criada
# Se já existir, o valor será sobreposto
dict1[14] = "name1"
print(f"Novo dicionário 1, pós inserção/alteração: {dict1}")

# Consulta e Remoção
# Se a chave não existir no dict, causa erro
name = dict1[14]
del dict1[14]
print(f"Dicionário 1 pós consulta e deleção: {dict1}")

# exercício 5

# dict comprehension
double_numbers_dict = {x: x * 2 for x in range(3, 21)}
print(double_numbers_dict)

# exercício 6

"""Para cada char na string:
- Se o char não estiver no dicionário, inclua com o valor 1;

- Se estiver, incremente o valor."""


# Exemplo:

str1 = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

str2 = "coxinha"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# Explicação: Nenhuma letra repete em coxinha :)
repetition_char_count = {x: str1.count(x) for x in str1}
print(repetition_char_count)

# exercício 7

# dict comprehension
double_pair_numbers_dict = {
    x: x * 3 if x % 3 == 0 else x * 2 for x in range(3, 21)
}
print(double_pair_numbers_dict)
