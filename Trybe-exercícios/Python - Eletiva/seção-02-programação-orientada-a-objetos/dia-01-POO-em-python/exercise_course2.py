# exercício 9
class Bike:
    def __init__(self, max_speed):
        self.max_speed = max_speed


class Truck:
    def __init__(self, max_speed):
        self.max_speed = max_speed


# exercício 10
def print_max_speed(bike: Bike):
    if not isinstance(bike, Bike):
        raise TypeError
    print(f"{bike.max_speed} km/h")


bike1 = Bike(180)
truck1 = Truck(120)
print_max_speed(bike1)
print_max_speed(truck1)
