from collections import Counter


class Estatistica:
    def __init__(self, numbers):
        self.numbers = numbers

    def media(self):
        return self.numbers / len(self.numbers)

    def mediana(self):
        numbers_converted = sorted(self.numbers)
        if len(self.numbers) % 2 == 0:
            index_middle_number1 = int((len(self.numbers) + 1) / 2) - 1
            index_middle_number2 = int(index_middle_number1 + 1)
            print(index_middle_number1, index_middle_number2)
            return (
                numbers_converted[index_middle_number1]
                + numbers_converted[index_middle_number2] / 2
            )
        else:
            index_mediana = int((len(self.numbers) + 1) / 2) - 1
            return numbers_converted[index_mediana]

    def moda(self):
        numbers_converted = Counter(self.numbers).most_common()
        a, _ = numbers_converted[0]
        return a
