class TV:
    def __init__(self, tamanho):
        self.__tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume == 99:
            print("Volume máximo")
        else:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume == 0:
            print("Volume mínimo")
        else:
            self.__volume -= 1

    def modificar_canal(self, novo_canal):
        if novo_canal > 1 and novo_canal < 99:
            self.__canal = novo_canal
        else:
            raise ValueError("Canal inválido")

    def ligar_desligar(self):
        if not self.__ligada:
            self.__ligada = True
        else:
            self.__ligada = False
