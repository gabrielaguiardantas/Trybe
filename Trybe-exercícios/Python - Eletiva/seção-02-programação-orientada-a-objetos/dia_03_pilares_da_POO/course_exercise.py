# exercise 1
class Vehicle:
    def __init__(self, name: str, capacity: int) -> None:
        self.name = name
        self.capacity = capacity

    def move(self, distance: int) -> str:
        str1 = f"The {self.name} carried {self.capacity} "
        str2 = f"people across {distance} kilometers"
        return str1 + str2


class Car(Vehicle):
    # minha solução
    def move(self, distance: int) -> str:
        str1 = f"The {self.name} car carried {self.capacity} "
        str2 = f"people across {distance} kilometers"
        return str1 + str2

    # solução do course
    # def move(self, distance: int) -> str:
    #     return f"Car {super().move(distance)}"


class Motorcycle(Vehicle):
    # minha solução
    def __init__(self, name: str) -> None:
        super().__init__(name, 2)

    # solução do course
    # def __init__(self, name: str) -> None:
    #    self.name = name
    #    self.capacity = 2


car1 = Car("Toyota", 4)
bike1 = Motorcycle("Harley")

print(car1.move(70))
print(bike1.move(30))


# exercício 2
# minha solução
class Contact:
    def __init__(self, name: str, email: str) -> None:
        self.name = name
        self.email = email

    def __str__(self) -> str:
        return f"Name: {self.name}, Email: {self.email}"


class ContactList:
    def __init__(self, contacts: list, favorites: list) -> None:
        self.contacts: list(Contact) = contacts
        self.favorites: list(Contact) = favorites

    def __str__(self) -> str:
        str1 = f"Contacts: {[{str(contact)} for contact in self.contacts]}\n"
        str2 = f"Favorites: {[{str(favorite)} for favorite in self.favorites]}"
        return str1 + str2

    def add_contact(self, contact: Contact) -> None:
        self.contacts.append(contact)

    def remove_contact(self, name: str) -> None:
        for contact in self.contacts:
            if contact.name == name:
                return self.contacts.pop(self.contacts.index(contact))
            else:
                raise LookupError("Contact not found")

    def add_to_favorites(self, name: str) -> None:
        for contact in self.contacts:
            if contact.name == name:
                self.favorites.append(contact)
                self.contacts.remove(contact)
            else:
                raise LookupError("Contact not found")

    def remove_from_favorites(self, name: str) -> None:
        for favorite in self.favorites:
            if favorite.name == name:
                self.contacts.append(favorite)
                self.favorites.remove(favorite)
            else:
                raise LookupError("Favorite not found")


# solução do course
# class Contact:
#     def __init__(self, name: str, email:str) -> None:
#         self.name = name
#         self.email = email


# class ContactList:
#     def __init__(self):
#         self.contacts = []
#         self.favorites = []

#     def add_contact(self, contact: Contact) -> None:
#         self.contacts.append(contact)


#     def _find_contact(self, name: str, from_favorites=False) -> Contact:
#         contact_list = self.favorites if from_favorites else self.contacts

#         try:
#             contact = [c for c in contact_list if c.name == name][0]
#         except IndexError:
#             raise LookupError(f"Contact named {name} not found")

#         return contact

#     def remove_contact(self, name: str) -> Contact:
#         contact = self._find_contact(name)
#         self.contacts.remove(contact)
#         return contact

#     def add_to_favorites(self, name: str) -> None:
#         contact = self._find_contact(name)
#         self.contacts.remove(contact)
#         self.favorites.append(contact)


#     def remove_from_favorites(self, name: str) -> None:
#         contact = self._find_contact(name, from_favorites=True)
#         self.favorites.remove(contact)
#         self.contacts.append(contact)

contacts1 = ContactList([], [])
contacts1.add_contact(Contact("John", "john@anything.com"))
contacts1.add_contact(Contact("Mary", "mary@anything.com"))
contacts1.add_to_favorites("John")
contacts1.remove_contact("Mary")
contacts1.remove_from_favorites("John")
print(contacts1)
