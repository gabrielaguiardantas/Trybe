# minha solução
# exercise 3
class Animal:
    def __init__(self, nome: str, speed: int) -> None:
        self.nome = nome
        self.speed = speed

    def make_sound(self) -> None:
        print("Animal make sound")


class Mammals(Animal):
    def __init__(self, nome: str, speed: int) -> None:
        super().__init__(nome, speed)

    def breastfeed(self) -> None:
        print("Mammals breastfeed")


# exercise 4
class MixinRuning:
    def run(self) -> None:
        print(f"Running at {self.speed} km/h...")


class Dog(Mammals, MixinRuning):
    def __init__(self, nome: str, speed: int) -> None:
        super().__init__(nome, speed)

    def bark(self) -> None:
        print("Au au!")


dog1 = Dog("Rex", 20)
dog1.run()

# solução do course
# class Animal:
#     def __init__(self, nome: str) -> None:
#         self.nome = nome

#     def fazer_som(self):
#         print(f"{self.nome} fazendo som")


# class Mamifero(Animal):
#     def amamentar(self):
#         print(f"{self.nome} amamentando")


# class Cachorro(Mamifero):
#     def latir(self):
#         print(f"{self.nome} faz au au!")


# class MixinCorrer:
#     def correr(self, velocidade):
#         print(f"{self.nome} correndo a {velocidade} km/h")


# class CachorroCorredor(Cachorro, MixinCorrer):
#     pass


# cachorro = CachorroCorredor("Rex")
# cachorro.fazer_som() # Rex fazendo som
# cachorro.amamentar() # Rex amamentando
# cachorro.latir() # Rex faz au au!
# cachorro.correr(10) # Rex correndo a 10 km/h
