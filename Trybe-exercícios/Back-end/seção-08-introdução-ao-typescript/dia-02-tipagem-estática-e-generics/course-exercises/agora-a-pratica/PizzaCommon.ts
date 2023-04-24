// ./PizzaCommon.ts

import Pizza from "./exercise3-4-pizza";
import { Common } from "./PizzaFlavorTypes";

interface PizzaCommon extends Pizza {
  flavor: Common
}

export default PizzaCommon;