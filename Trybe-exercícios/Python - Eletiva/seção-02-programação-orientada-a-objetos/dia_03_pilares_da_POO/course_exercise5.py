# minha solução
# exercise 9
class Product:
    def __init__(self, name: str, price: float) -> None:
        self._name = name
        self.__price = price

    def description(self):
        return f"Product: {self._name}, price: {self.__price}"

    def price(self):
        return self.__price


class Book(Product):
    def __init__(self, name: str, author: str, price: float) -> None:
        super().__init__(name, price)
        self.__author = author

    def description(self):
        str1 = f"Book: {self._name}, price: {super().price()}"
        str2 = f", author: {self.__author}"
        return str1 + str2

    def price(self):
        return super().price()


class DVD(Product):
    def __init__(self, name: str, director: str, price: float) -> None:
        super().__init__(name, price)
        self.__director = director

    def description(self):
        return super().description() + f", director: {self.__director}"

    def price(self):
        return super().price()


# solução do course
# class Produto:
#     def __init__(self, nome: str, preco: float) -> None:
#         self.nome = nome
#         self.preco = preco

#     def descrever(self):
#         pass

#     def preço(self):
#         pass


# class Livro(Produto):
#     def __init__(self, nome: str, autor: str, preco: float) -> None:
#         super().__init__(nome, preco)
#         self.autor = autor

#     def descrever(self):
#         return f"{self.nome} por {self.autor}"

#     def preço(self):
#         return self.preco


# class DVD(Produto):
#     def __init__(self, nome: str, diretor: str, preco: float) -> None:
#         super().__init__(nome, preco)
#         self.diretor = diretor

#     def descrever(self):
#         return f"{self.nome} dirigido por {self.diretor}"

#     def preço(self):
#         return self.preco


book1 = Book("Harry Potter", "J.K. Rowling", 9.99)
dvd1 = DVD("The Lord of the Rings", "Peter Jackson", 19.99)

print(book1.description())
print(book1.price())

print(dvd1.description())
print(dvd1.price())


# minha solução
# exercise 10
def print_details(product: Product):
    print(product.description())


book2 = Book("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99)
dvd2 = DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99)

print_details(book2)
print_details(dvd2)

# solução do course
# def imprimir_detalhes(produto: Produto):
#     print(f"Descrição: {produto.descrever}")
#     print(f"Preço: {produto.preco}")

# produtos = [
#     Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99),
#     DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99)
# ]

# for produto in produtos:
#     imprimir_detalhes(produto)

# Saída:
# Descrição: O Senhor dos Anéis por J.R.R. Tolkien
# Preço: 29.99
# Descrição: O Poderoso Chefão dirigido por Francis Ford Coppola
# Preço: 19.99
