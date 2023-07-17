# minha solução
# exercise 7
class monthly_expense:
    def __init__(
        self,
        internet: str,
        supermarket: str,
        rent: str,
        electricity: str,
        water: str,
    ):
        self.internet = internet
        self.supermarket = supermarket
        self._rent = rent
        self._electricity = electricity
        self.__water = water

    # exercise 8
    @property
    def eletricity(self):
        return self._electricity

    # ou
    # def get_eletricity(self):
    #     return self._electricity

    @eletricity.setter
    def eletricity(self, value):
        self._electricity = value

    # ou
    # def set_eletricity(self, value):
    #     self._electricity = value


# solução do course
# class GastoMensal:
#     def __init__(self,
#         internet: float,
#         supermercado: float,
#         luz: float,
#         agua: float,
#         aluguel: float
#     ) -> None:
#         self.internet = internet
#         self.supermercado = supermercado
#         self._luz = luz
#         self._agua = agua
#         self.__aluguel = aluguel

#     def get_luz(self):
#         return self._luz

#     def set_luz(self, novo_valor: float) -> float:
#         self._luz = novo_valor

#     def get_agua(self):
#         return self._agua

#     def set_agua(self, novo_valor: float) -> float:
#         self._agua = novo_valor
