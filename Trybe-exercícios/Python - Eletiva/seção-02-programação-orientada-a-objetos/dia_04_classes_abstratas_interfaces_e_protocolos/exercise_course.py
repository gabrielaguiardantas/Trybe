from abc import ABC, abstractmethod
from typing import Protocol


# exercise 1
class Person(ABC):
    @abstractmethod
    def print_position(self):
        pass


class Seller(Person):
    def print_position(self):
        print("My position is a seller")


class Manager(Person):
    def print_position(self):
        print("My position is a manager")


# exercise 2
class Product:
    def __init__(self, price: float) -> None:
        self.__price = price

    def print_price(self):
        raise NotImplementedError(
            "Derived classes from Product must be implement this method"
        )


class Book(Product):
    def __init__(self, price: float) -> None:
        super().__init__(price)

    def print_price(self):
        print(f"The price of the book is {self.__price}$")


# exercise 3
class CalculatePerimeter(Protocol):
    """Protocol to calculate perimeter of a figure"""

    def calculate_perimeter(self):
        """Calculate perimeter of a figure"""
        ...


class Square(CalculatePerimeter):
    def __init__(self, side: int) -> None:
        self.__side = side

    def calculate_perimeter(self) -> str:
        return f"The square perimeter is {self.__side * 4} cm"


# exercise 4
class Triangle(CalculatePerimeter):
    def __init__(self, side1: int, side2: int, side3: int) -> None:
        self.__side1 = side1
        self.__side2 = side2
        self.__side3 = side3

    def calculate_perimeter(self):
        str1 = "The triangle perimeter is "
        str2 = f"{self.__side1 + self.__side2 + self.__side3} cm"
        return str1 + str2
