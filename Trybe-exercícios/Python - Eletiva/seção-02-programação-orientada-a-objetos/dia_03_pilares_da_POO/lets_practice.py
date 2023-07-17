from abc import ABC, abstractmethod


# minha implementação
# exercise 1
class TV:
    def __init__(self, size: str) -> None:
        self.__size = size
        self.__volume: int = 50
        self.__channel: int = 1
        self.__is_on: bool = False

    def increase_volume(self) -> None:
        if self.__volume == 99:
            return print("Volume is already at max")
        self.__volume += 1

    def decrease_volume(self) -> None:
        if self.__volume == 0:
            return print("Volume is already at min")
        self.__volume -= 1

    def change_channel(self, channel=int) -> None:
        if channel > 99 or channel < 1:
            raise ValueError("Channel must be between 1 and 99")
        self.__channel = channel

    def turn_on_off(self) -> None:
        self.__is_on = not self.__is_on


# implemetação do course
# class TV:
#     def __init__(self, tamanho):
#         self.__volume = 50
#         self.__canal = 1
#         self.__tamanho = tamanho
#         self.__ligada = False

#     def aumentar_volume(self):
#         if self.__volume < 99:
#             self.__volume += 1

#     def diminuir_volume(self):
#         if self.__volume > 0:
#             self.__volume -= 1

#     def modificar_canal(self, canal):
#         if canal <= 1 or canal >= 99:
#             raise ValueError('Canal indisponível')

#         self.__canal = canal

#     def ligar_desligar(self):
#         self.__ligada = not self.__ligada


# minha implementação
# exercise 2
class Statistic:
    def __init__(self, numbers: list) -> None:
        self.__numbers = numbers

    def get_average(self) -> float:
        return sum(self.__numbers) / len(self.__numbers)

    def get_median(self) -> float:
        if len(self.__numbers) % 2 == 0:
            return (
                self.__numbers[len(self.__numbers) // 2]
                + self.__numbers[len(self.__numbers) // 2 - 1]
            ) / 2
        else:
            return self.__numbers[len(self.__numbers) // 2]

    def get_mode(self) -> int:
        return max(set(self.__numbers), key=self.__numbers.count)


# implementação do course
# from collections import Counter


# class Estatistica:
#     def __init__(self, numbers):
#         self.numbers = numbers

#     def media(self):
#         return sum(self.numbers) / len(self.numbers)

#     def mediana(self):
#         numbers = sorted(self.numbers)
#         index = len(numbers) // 2
#         if len(numbers) % 2 == 0:
#             return (numbers[index - 1] + numbers[index]) / 2

#         return numbers[index]

#     def moda(self):
#         number, _ = Counter(self.numbers).most_common()[0]
#         return number


# minha implementação
# exercise 3
class GeometricFigure(ABC):
    @abstractmethod
    def area(self) -> float:
        pass

    @abstractmethod
    def perimeter(self) -> float:
        pass


class Square(GeometricFigure):
    def __init__(self, side: float) -> None:
        self.__side = side

    def area(self) -> float:
        return self.__side**2

    def perimeter(self) -> float:
        return self.__side * 4


class Rectangle(GeometricFigure):
    def __init__(self, base: float, height: float) -> None:
        self.__base = base
        self.__height = height

    def area(self) -> float:
        return self.__base * self.__height

    def perimeter(self) -> float:
        return (self.__base + self.__height) * 2


class Circle(GeometricFigure):
    def __init__(self, radius: float) -> None:
        self.__radius = radius

    def area(self) -> float:
        return 3.14 * (self.__radius**2)

    def perimeter(self) -> float:
        return 2 * 3.14 * self.__radius


# implementação do course
# from abc import ABC, abstractmethod
# from math import pi as PI


# class FiguraGeometrica(ABC):
#     @abstractmethod
#     def area(self):
#         raise NotImplementedError

#     @abstractmethod
#     def perimetro(self):
#         raise NotImplementedError


# class Quadrado(FiguraGeometrica):
#     def __init__(self, lado):
#         self.lado = lado

#     def area(self):
#         return self.lado * self.lado

#     def perimetro(self):
#         return 4 * self.lado


# class Retangulo(FiguraGeometrica):
#     def __init__(self, base, altura):
#         self.base = base
#         self.altura = altura

#     def area(self):
#         return self.base * self.altura

#     def perimetro(self):
#         return 2 * (self.base + self.altura)


# class Circulo(FiguraGeometrica):
#     def __init__(self, raio):
#         self.raio = raio

#     def area(self):
#         return PI * self.raio * self.raio

#     def perimetro(self):
#         return 2 * PI * self.raio
