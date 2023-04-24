interface Car1 {
  doors: number;
  bodyStyle: string;
  productionYearDate: number;
  yearsPassed(): void;
}

let gol: Car1 = {
  doors: 4,
  bodyStyle: 'hatch',
  productionYearDate: 2013,

  yearsPassed() {
    console.log(`O veículo já tem ${new Date().getFullYear() - this.productionYearDate } anos de uso`);
  }
}

gol.yearsPassed();

interface Catlike {
  size: string,
  breed: string,
  weigth: number,
  catDetails(): void
}

let miau: Catlike = {
  size: 'big',
  breed: 'ragdoll',
  weigth: 15,

  catDetails() {
    console.log(`My cat is ${this.size} with ${this.weigth} kg and he is a ${this.breed}`);
  }
}

miau.catDetails();

interface Airplane {
  size: number,
  name: string,
  type: string,
  airplaneDetails(): void
}

let airbus: Airplane = {
  size: 2.5,
  name: 'Airbus C430',
  type: 'Passenger transport',
  airplaneDetails() {
    console.log(`The ${this.name} is a ${this.size} tons ${this.type} airplane`)
  },
}

airbus.airplaneDetails();