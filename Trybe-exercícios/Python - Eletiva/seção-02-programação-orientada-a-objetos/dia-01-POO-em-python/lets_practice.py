# exercício 1
def sum_ints(list_ints: list[int]) -> int:
    return sum(list_ints)


# exercício 2
def str_starts_with(str_list: list[str], char: str) -> list[str]:
    return [word for word in str_list if word.startswith(char)]


# exercício 3
class Book:
    def __init__(self, title: str, author: str, page_count: int):
        self.title = title
        self.author = author
        self.page_count = page_count

    def description(self) -> str:
        return f"{self.title} by {self.author} with {self.page_count} pages."


# exercício 4
class Car:
    def __init__(self, model: str, fabrication_year: int, speed: int):
        self.model = model
        self.fabrication_year = fabrication_year
        self.speed = speed

    def acelerate(self, speed: int) -> None:
        self.speed += speed

    def brake(self, speed: int) -> None:
        self.speed -= speed

    def description(self) -> str:
        if self.speed < 0:
            str1 = f"{self.model}, {self.fabrication_year} is "
            str2 = f"breaking about {abs(self.speed)} km/h."
            return str1 + str2
        else:
            str1 = f"{self.model}, {self.fabrication_year} is "
            str2 = f"acelerating about {self.speed} km/h."
            return str1 + str2
