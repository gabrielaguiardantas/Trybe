import random
import json
import csv

# exercício 1


def triangled_name(name):
    index_to_remove = len(name) + 1
    for letter in name:
        index_to_remove -= 1
        print(name[:index_to_remove])


# exercício 2


def guess_the_word():
    word1, word2, word3 = ["peixe", "sol", "dinheiro"]
    random_word = random.choice([word1, word2, word3])
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    print(scrambled_word)
    for choices in range(3, 0, -1):
        answer = input("Qual é a palavra?")
        if answer == random_word:
            print("Parabéns! Você acertou!!")
            break
        elif choices == 1:
            break
        else:
            print(f"Tente novamente, você tem mais {choices - 1} chances")
    print("Você perdeu!")


# exercício 3


def guess_the_word2():
    with open("words.txt", "r") as file:
        content = file.read().splitlines()
    word1, word2, word3, word4, word5 = content
    random_word = random.choice([word1, word2, word3, word4, word5])
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    print(scrambled_word)
    for choices in range(3, 0, -1):
        answer = input("Qual é a palavra?")
        if answer == random_word:
            print("Parabéns! Você acertou!!")
            break
        elif choices == 1:
            print("Você perdeu!")
            break
        else:
            print(f"Tente novamente, tentativas restantes: {choices - 1}")


# exercício 4


def books_percentage_categories():
    with open("books.json") as file:
        books = json.load(file)
        ajusted_category_list = []
        categories_list = [book["categories"] for book in books]
        for book_category in categories_list:
            for specific_category in book_category:
                ajusted_category_list.append(specific_category)
    ajusted_second = []
    for counting in ajusted_category_list:
        if [
            counting,
            round(
                ajusted_category_list.count(counting)
                / len(ajusted_category_list),
                4,
            ),
        ] not in ajusted_second:
            ajusted_second.append(
                [
                    counting,
                    round(
                        ajusted_category_list.count(counting)
                        / len(ajusted_category_list),
                        4,
                    ),
                ]
            )
    with open("categories_report.csv", "w", encoding="utf-8") as file:
        writer = csv.writer(file)

        # Escreve o cabeçalho
        headers = [
            "categoria",
            "porcentagem",
        ]
        writer.writerow(headers)

        # Escreve as linhas de dados
        # Desempacotamento de valores
        for category, percentage in ajusted_second:
            # Agrupa o dado com o turno
            row = [
                category,
                percentage,
            ]
            writer.writerow(row)
