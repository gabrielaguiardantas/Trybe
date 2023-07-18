from abc import ABC, abstractmethod
from typing import Protocol


# my implementation
# exercise 1
class Employees(ABC):
    def __init__(self, name: str, wage: float) -> None:
        self._name = name
        self._wage = wage

    @property
    def name(self) -> str:
        return self._name

    @property
    def wage(self) -> float:
        return self._wage

    @abstractmethod
    def calculate_bonus(self) -> float:
        ...


class Developer(Employees):
    def calculate_bonus(self) -> float:
        return super().wage * 1.2


class Analyst(Employees):
    def calculate_bonus(self) -> float:
        return super().wage * 1.3


class Manager(Employees):
    def calculate_bonus(self) -> float:
        return super().wage * 1.4


class Main:
    def main(self) -> None:
        self.__employees = [
            Developer("Gabriel", 1000),
            Analyst("Francisco", 1000),
            Manager("José", 1000),
        ]
        for employee in self.__employees:
            print(
                f"The employee {employee._name} salary",
                f"+ bonus is USD {employee.calculate_bonus():.2f}",
            )


# course implementation
# from abc import ABC, abstractmethod


# class Funcionario(ABC):
#     def __init__(self, nome: str, salario: float) -> None:
#         self.nome = nome
#         self.salario = salario

#     @abstractmethod
#     def calcularBonificacao(self):
#         pass


# class Programador(Funcionario):
#     def calcularBonificacao(self):
#         return (f"O salário do programador {self.nome} mais a "
#                 f"bonificação é de R${'{:.2f}'.format(self.salario * 1.2)}")


# class Analista(Funcionario):
#     def calcularBonificacao(self):
#         return (f"O salário do analista {self.nome} mais a "
#                 f"bonificação é de R${'{:.2f}'.format(self.salario * 1.3)}")


# class Gerente(Funcionario):
#     def calcularBonificacao(self):
#         return (f"O salário do gerente {self.nome} mais a "
#                 f"bonificação é de R${'{:.2f}'.format(self.salario * 1.4)}")


# class Colaborador(Funcionario):
#     def calcularBonificacao(self):
#         return (f"O salário do colaborador {self.nome} mais a "
#                 f"bonificação é de R${'{:.2f}'.format(self.salario * 1.1)}")


# class Main:
#     def main(self):
#         programador = Programador("Rafa", 1500)
#         print(programador.calcularBonificacao())

#         analista = Analista("Maria", 1600)
#         print(analista.calcularBonificacao())

#         gerente = Gerente("José", 1800)
#         print(gerente.calcularBonificacao())

#         colaborador = Colaborador("Isabel", 1200)
#         print(colaborador.calcularBonificacao())


# if __name__ == "__main__":
#     Main().main()


# my implementation
# exercise 2
class Deliverable(ABC):
    @abstractmethod
    def deliver(self, customer, address) -> None:
        ...


class Customer:
    def __init__(self, name: str, phone_number: str) -> None:
        self._name = name
        self._phone_number = phone_number


class Address:
    def __init__(
        self, street: str, number: int, district: str, city: str, state: str
    ) -> None:
        self._street = street
        self._number = number
        self._district = district
        self._city = city
        self._state = state


class Post_office(Deliverable):
    def deliver(self, customer: Customer, address: Address) -> None:
        print(
            f"Delivering the product to the customer {customer._name} "
            f"at the address {address._street}, {address._number} "
            f"{address._district}, {address._city} - "
            f"{address._state}"
        )


class Carrier(Deliverable):
    def deliver(self, customer: Customer, address: Address) -> None:
        print(
            f"Delivering the product to the customer {customer._name} "
            f"at the address {address._street}, {address._number} "
            f"{address._district}, {address._city} - "
            f"{address._state}"
        )


class Main2:
    def main(self) -> None:
        post_office = Post_office()
        carrier = Carrier()

        customer = Customer("Gabriel", "99999-9999")
        address = Address("Rua dos Bobos", 0, "Centro", "São Paulo", "SP")

        post_office.deliver(customer, address)
        carrier.deliver(customer, address)


# course implementation
# from abc import ABC, abstractmethod


# class Entregavel(ABC):
#     @abstractmethod
#     def entregar(self, cliente: str, endereco: str) -> None:
#         pass


# class Cliente:
#     def __init__(self, nome: str, telefone: str) -> None:
#         self.nome = nome
#         self.telefone = telefone


# class Endereco:
#     def __init__(
#         self, rua: str, numero: int, bairro: str, cidade: str, estado: str
#     ) -> None:
#         self.rua = rua
#         self.numero = numero
#         self.bairro = bairro
#         self.cidade = cidade
#         self.estado = estado


# class Correios(Entregavel):
#     def entregar(self, cliente: str, endereco: str) -> None:
#         print(
#             f"O pacote foi entregue com sucesso
# para o cliente {cliente.nome}"
#         )
#         print(
#             f"Endereço: {endereco.rua}, {endereco.numero}, "
#             f"{endereco.bairro}, {endereco.cidade}, {endereco.estado}"
#         )
#         print(f"Telefone: {cliente.telefone}")


# class Transportadora(Entregavel):
#     def entregar(self, cliente: str, endereco: str) -> None:
#         print(
#             f"A carga foi entregue com sucesso para o cliente {cliente.nome}"
#         )
#         print(
#             f"Endereço: {endereco.rua}, {endereco.numero}, "
#             f"{endereco.bairro}, {endereco.cidade}, {endereco.estado}"
#         )
#         print(f"Telefone: {cliente.telefone}")


# class Main:
#     def main(self):
#         correios = Correios()
#         transportadora = Transportadora()

#         cliente = Cliente("Rafa", "99999-9999")
#         endereco = Endereco("Rua A", 123, "Centro", "São Paulo", "SP")

#         correios.entregar(cliente, endereco)
#         transportadora.entregar(cliente, endereco)


# if __name__ == "__main__":
#     Main().main()


# my implementation
# exercise 3
class MessagingProtocol(Protocol):
    """Protocol for messaging system"""

    def send_message(self, to: str, message: str) -> bool:
        """Send message to a contact, if all goes well return True"""
        ...

    def receive_message(self) -> str | None:
        """Receive the message, if it is available and returns it,
        otherwise return None"""
        ...


class InMemoryMessaging(MessagingProtocol):
    """In memory messaging system"""

    def __init__(self) -> None:
        self._messages: list[str] = []

    def send_message(self, to: str, message: str) -> bool:
        self._messages.append(f"{message} -> {to}")
        return True

    def receive_message(self) -> str | None:
        if self._messages:
            return self._messages.pop(0)
        return None


class FileMessaging(MessagingProtocol):
    """File messaging system"""

    def __init__(self, file_name: str) -> None:
        self._file_name = file_name

    def send_message(self, to: str, message: str) -> bool:
        with open(self._file_name, "a") as file:
            file.write(f"{to}: {message}\n")
        return True

    def receive_message(self) -> str | None:
        with open(self._file_name, "r") as file:
            message = file.readline()
        return message


class Main3:
    def main(self) -> None:
        in_memory_messaging = InMemoryMessaging()
        file_messaging = FileMessaging("messages.txt")

        in_memory_messaging.send_message("Rafa", "Hello")
        in_memory_messaging.send_message("Maria", "Hi")

        print(in_memory_messaging.receive_message())
        print(in_memory_messaging.receive_message())

        file_messaging.send_message("Rafa", "Hello")
        file_messaging.send_message("Maria", "Hi")

        print(file_messaging.receive_message())
        print(file_messaging.receive_message())


# course implementation
# from typing import Union, Tuple, Protocol
# from queue import Queue


# class MessagingProtocol(Protocol):
#     def send_message(self, to: str, message: str) -> bool:
#         pass

#     def receive_message(self) -> Union[Tuple[str, str], None]:
#         pass


# class InMemoryMessaging(MessagingProtocol):
#     def __init__(self) -> None:
#         self.messages: Queue[Tuple[str, str]] = Queue()

#     def send_message(self, to: str, message: str) -> bool:
#         self.messages.put((to, message))
#         return True

#     def receive_message(self) -> Union[Tuple[str, str], None]:
#         if self.messages.empty():
#             return None
#         return self.messages.get()


# class FileMessaging(MessagingProtocol):
#     def __init__(self, filename: str) -> None:
#         self.filename = filename

#     def send_message(self, to: str, message: str) -> bool:
#         with open(self.filename, "a") as f:
#             f.write(f"{to}:{message}\n")
#         return True

#     def receive_message(self) -> Union[str, None]:
#         with open(self.filename, "r") as f:
#             lines = f.readlines()
#         if not lines:
#             return None
#         line = lines[0]
#         with open(self.filename, "w") as f:
#             f.writelines(lines[1:])
#         return line


# class Main:
#     def main(self):
#         in_memory_messaging = InMemoryMessaging()
#         file_messaging = FileMessaging("messages.txt")

#         in_memory_messaging.send_message("Julia", "Oi, tudo bem?")
#         in_memory_messaging.send_message("Julia", "Como foi o seu dia?")
#         in_memory_messaging.send_message(
#             "Julia", "Desejo um bom final de semana!"
#         )

#         file_messaging.send_message("Paulo", "Como tá?")
#         file_messaging.send_message("Paulo", "Muito obrigado!")
#         file_messaging.send_message("Paulo", "Tenha um ótimo dia!")

#         print(in_memory_messaging.receive_message())
#         print(in_memory_messaging.receive_message())
#         print(in_memory_messaging.receive_message())

#         print(file_messaging.receive_message())
#         print(file_messaging.receive_message())
#         print(file_messaging.receive_message())

# if __name__ == "__main__":
#     Main().main()


if __name__ == "__main__":
    Main().main()
    Main2().main()
    Main3().main()
