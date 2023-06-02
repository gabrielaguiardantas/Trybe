import re
import json
import random


# exercício 5
def fizz_buzz_numeric_list(number):
    list_size = range(1, number + 1)
    created_list = []
    for i in list_size:
        if i % 3 == 0 and i % 5 == 0:
            created_list.append("FizzBuzz")
        elif i % 3 == 0:
            created_list.append("Fizz")
        elif i % 5 == 0:
            created_list.append("Buzz")
        else:
            created_list.append(i)
    return created_list


# exercício 6
def validate_email(email_str: str):
    regex = r"\b[A-Za-z]+[A-Za-z0-9_-]+@[A-Za-z0-9]+\.[A-Z|a-z]{2,3}\b"
    if re.fullmatch(regex, email_str):
        return "Valid Email"
    else:
        return TypeError


# exercício 7 (bônus - 1)
def pokemon_guess_game():
    with open("pokemons.json") as file:
        pokemons = [pokemon["name"] for pokemon in json.load(file)["results"]]
    random_pokemon = random.choice(pokemons)
    answer = input("Quem é esse pokemon?")
    index = 0
    while answer != str(random_pokemon):
        index += 1
        print(random_pokemon[:index])
        answer = input("Quem é esse pokemon?")
    print("Parabéns, finalmente!!")


pokemon_guess_game()
