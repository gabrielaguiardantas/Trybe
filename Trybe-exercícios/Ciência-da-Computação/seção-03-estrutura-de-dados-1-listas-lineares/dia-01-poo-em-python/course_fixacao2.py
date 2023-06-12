class Eletrodomestico:
    def __init__(self, nome, cor, potencia, tensao, preco):
        self.nome = nome
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class Washer_machine(Eletrodomestico):
    pass


secador1 = Secador("Walita WindMaster", "preto", 1800, 110, 550)
batedeira1 = Batedeira("Walita ShakerInfinite", "rosa", 2000, 110, 1200)
maquina_de_lavar1 = Washer_machine("Panasonic Top", "branca", 3000, 110, 2300)
print(secador1.nome)
print(batedeira1.preco)
print(maquina_de_lavar1.esta_ligado())
