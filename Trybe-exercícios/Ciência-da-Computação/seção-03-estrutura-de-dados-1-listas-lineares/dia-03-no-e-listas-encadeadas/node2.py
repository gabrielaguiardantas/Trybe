class Node2:
    def __init__(self, value):
        self.previous = None  # 👉 Forma de apontar para o nó anterior
        self.value = value  # 🎲 Dado a ser armazenado
        self.next = None  # 👉 Forma de apontar para o próximo nó

    def __str__(self):
        return f"""Node(value={self.value},
    previous={self.previous}, next={self.next})"""
