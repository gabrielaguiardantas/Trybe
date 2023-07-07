from faker import Faker


faker = Faker(locale="pt_BR")

print(faker.name())
print(faker.phone_number())
print(faker.cpf())

print("-------------------------")

# exercício 2
faker = Faker(locale="es_AR")

print(faker.last_name())
print(faker.email())
print(faker.password())
print(faker.url())
print(faker.license_plate())
