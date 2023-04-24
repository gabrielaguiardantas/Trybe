// exercício 1

class Car {
  brand: string;
  doors: number;
  color: string;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  };

  honk(): void {
    console.log('Buzina ativada: bibiiiii!!!');
  };
  turnOn(): void {
    console.log('Carro ligado!');
  };
  turnOff(): void {
    console.log('Carro desligado');
  };
  speedUp(distance: number): void {
    console.log(`Velocidade aumentando e seguindo em frente por ${distance} km`);
  };
  speedDown(): void {
    console.log('Velocidade diminuindo...');
  };
  stop(): void {
    console.log('Carro parado!');
  };
  turn(direction: string): void {
    console.log(`Vire para ${direction}!`);
  };

};

export default Car;