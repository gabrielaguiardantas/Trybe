# exercício de fixacão 1


class Ventilador:
    def __init__(self, nome, cor, velocidades, tensao, preco):
        self.nome = nome
        self.preco = preco
        self.cor = cor
        self.velocidades = velocidades
        self.tensao = tensao

    def __str__(self):
        return self.nome


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if not self.ventilador:
            return "Esta pessoa não tem ventilador"
        else:
            return f"Esta pessoa possui o ventilador {self.ventilador}"


ventilador = Ventilador("Walita WindForce Ultra", "branco", 5, 110, 500)
punkes = Pessoa("Gabriel Aguiar Dantas", 20000)
punkes.comprar_ventilador(ventilador)
print(punkes)
