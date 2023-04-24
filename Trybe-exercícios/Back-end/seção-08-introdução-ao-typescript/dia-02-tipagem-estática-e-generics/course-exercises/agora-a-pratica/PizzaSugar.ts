// ./PizzaSugar.ts

import Pizza from "./exercise3-4-pizza";
import { Sugar } from "./PizzaFlavorTypes";

interface PizzaSugar extends Pizza {
  flavor: Sugar,
  slices: 4
}

export default PizzaSugar;