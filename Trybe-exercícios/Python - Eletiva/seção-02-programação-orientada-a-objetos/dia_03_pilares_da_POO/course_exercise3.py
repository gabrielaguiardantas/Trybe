# minha solução
# exercise 5
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calculate_area(self):
        return self.width * self.height

    def calculate_perimeter(self):
        return 2 * (self.width + self.height)


# solução do course
# class Retangulo:
#     def __init__(self, base: int, altura: int) -> None:
#         self.base = base
#         self.altura = altura

#     def calcular_area(self):
#         return self.base * self.altura

#     def calcular_perimetro(self):
#         return 2 * (self.base + self.altura)

# minha solução
# exercise 6
rectangle1 = Rectangle(5, 10)
print(rectangle1.calculate_area())
print(rectangle1.calculate_perimeter())

# solução do course
# retangulo = Retangulo(5, 10)
# print("Área:", retangulo.calcular_area()) # Área: 50
# print("Perímetro:", retangulo.calcular_perimetro()) # Perímetro: 30
