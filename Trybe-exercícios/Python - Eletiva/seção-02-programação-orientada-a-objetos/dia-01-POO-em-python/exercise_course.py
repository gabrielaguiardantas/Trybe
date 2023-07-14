# exercício 1
def add_two_numbers(num1: float | int, num2: float | int) -> float | int:
    return num1 + num2


# exercício 2
class Pessoa:
    def __init__(self, nome: str, idade: int, altura: float) -> None:
        self.nome = nome
        self.idade = idade
        self.altura = altura


# exercício 3
class Database:
    pass


# exercício 4
db1 = Database()
db2 = Database()


# exercício 5
class Carro:
    def __init__(self, marca: str, modelo: str, ano: int, cor: str):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano
        self.cor = cor

    def identificar(self):
        str1 = f"Meu carro é um {self.modelo}, da {self.marca}."
        str2 = f" Ele é de {self.ano} e tem a cor {self.cor}"
        return str1 + str2


# código para garantir que ao fazer importações dele o código abaixo não seja
# executado somente se for chamado diretamente
if __name__ == "__main__":
    carro1 = Carro("Fiat", "Uno", 2010, "vermelho")
    add_two_numbers(1, 2)
    print(carro1.identificar())
