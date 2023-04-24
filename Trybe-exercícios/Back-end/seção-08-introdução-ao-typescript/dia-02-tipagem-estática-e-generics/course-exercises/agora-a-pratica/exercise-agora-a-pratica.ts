import Car from "./exercise1-2-car";
import Pizza from "./exercise3-4-pizza";
import PizzaVegetarian from "./PizzaVegan";
import PizzaCommon from "./PizzaCommon";
import PizzaSugar from "./PizzaSugar";

// exercício 2

const newCar = new Car('Volkswagen Gol', 'Prata', 4);


// desacelerando 50 metros antes de virar
newCar.turnOn();
newCar.speedUp(0.55);
newCar.speedDown();
newCar.turn('esquerda');
newCar.speedUp(0.15);
newCar.speedDown();
newCar.turn('direita');
newCar.speedUp(1.45);
newCar.speedDown();
newCar.turn('direita');
newCar.speedUp(0.35);
newCar.speedDown();
newCar.stop();
// seguindo com o passageiro
newCar.speedUp(0.25);
newCar.speedDown();
newCar.turn('direita');
newCar.speedUp(2.15);
newCar.speedDown();
newCar.turn('esquerda');
newCar.speedUp(0.35);
newCar.speedDown();
newCar.turn('direita');
newCar.speedUp(0.50);
newCar.speedDown();
newCar.stop();

// exercício 3

const calabrese: Pizza = {
  flavor: 'Calabresa',
  slices: 8
};
console.log(calabrese);

const margherita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
};
console.log(margherita);

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4
};
console.log(nutella);

const calabresa: PizzaCommon = {
  flavor: "Calabresa",
  slices: 6
};
console.log(calabresa);

const frango: PizzaCommon = {
  flavor: "Frango",
  slices: 8
};
console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: "Pepperoni",
  slices: 6
};
console.log(pepperoni);

const marguerita: PizzaVegetarian = {
  flavor: "Marguerita",
  slices: 8
};
console.log(marguerita);

const palmito: PizzaVegetarian = {
  flavor: "Palmito",
  slices: 8
};
console.log(palmito);

const goiabadaEQueijo: PizzaSugar = {
  flavor: "Goiabada com Queijo",
  slices: 4
};
console.log(goiabadaEQueijo);




