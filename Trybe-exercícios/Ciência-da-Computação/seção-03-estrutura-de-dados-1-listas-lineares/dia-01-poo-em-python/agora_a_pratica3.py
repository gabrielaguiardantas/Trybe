from abc import ABC, abstractmethod
import math


class figuras_geometricas(ABC):
    @abstractmethod
    def area(self):
        ...

    @abstractmethod
    def perimetro(self):
        ...


class Quadrado(figuras_geometricas):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


class Retangulo(figuras_geometricas):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base + self.altura) * 2


class Circulo(figuras_geometricas):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return self.raio * 2 * math.pi

    def perimetro(self):
        return (self.raio**2) * math.pi
