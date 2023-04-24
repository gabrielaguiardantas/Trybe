// ./PizzaVegetarian.ts

import Pizza from "./exercise3-4-pizza";
import { Vegetarian } from "./PizzaFlavorTypes";

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}

export default PizzaVegetarian;