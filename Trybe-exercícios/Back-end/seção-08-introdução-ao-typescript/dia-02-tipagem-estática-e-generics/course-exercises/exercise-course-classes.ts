class Dog {
  name: string;
  age?: number;
  breed: string;

  constructor(name: string, breed: string, age?: number) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  dogDetails(): void {
    console.log(`Meu cãozinho se chama ${this.name}, ela tem ${this.age} anos e é da raça ${this.breed}`);
  }
}

const dog1 = new Dog('Dolly', 'dachshund', 7);

dog1.dogDetails();

class House {
  rooms: number;
  size: number;
  district: string;

  constructor(rooms: number, size: number, district: string) {
    this.rooms = rooms;
    this.size = size;
    this.district = district;
  }

  houseDetails(): void {
    console.log(`A casa a venda tem ${this.rooms} quartos, tem ${this.size} m² e está localizada em ${this.district}`)
  }
}
const house1 = new House(4, 200, 'Ilha dos Bentos');

house1.houseDetails();

class Voo {
  origin: string;
  destination: string;
  departureDate: Date;

  constructor(origin: string, destination: string, departureDate: Date) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
  }

  flightDetails(): void {
    console.log(`O vôo decola de ${this.origin} para ${this.destination} no dia ${this.departureDate}`);
  }
}

const flight1 = new Voo('Rio de Janeiro', 'Vitória', 	new Date("2023/05/20"));

flight1.flightDetails();

class Love {
  lover1: string;
  lover2: string;

  constructor(lover1: string, lover2: string) {
    this.lover1 = lover1;
    this.lover2 = lover2;
  }

  loveDetails(): void {
    console.log(`s2 s2 ${this.lover1} ama muito ${this.lover2} s2 s2`);
  }
}

const lover3 = new Love('Gabriel', 'Fabrícia');
const lover4 = new Love('Pascoal', 'Luiza');

lover3.loveDetails();
lover4.loveDetails();