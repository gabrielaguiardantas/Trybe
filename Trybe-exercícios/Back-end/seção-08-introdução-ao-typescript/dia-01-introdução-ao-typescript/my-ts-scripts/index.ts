import { convertArea } from "./area";
import { convertCapacity } from "./capacity";
import { createSimpleSentence, isItAPrime, isOfLegalAge, sortInput, validateEmailFormat } from "./exercises";
import { convertLength } from "./length";
import { convertMass } from "./mass";
import { convertVolume } from "./volume";

// exercício 1 

// função 1
const numberInput = 7;
isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);


// função 2
const emailInput = 'email@email.com';
console.log(validateEmailFormat(emailInput));

// função 3
const numberList = [10, 5, 18, 2, 8, 23];
console.log(sortInput(numberList));

// função 4
const peopleInput = {
  name: 'Rui',
  age: 23,
};
console.log(createSimpleSentence(peopleInput));

// função 5
const ageInput = 15;
ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));

// exercício 2
console.log(convertLength(5, 'km', 'mm'));

// exercício 3
console.log(convertMass(5, 'kg', 'g'));

// exercício 4
console.log(convertCapacity(5, 'l', 'kl'));

// exercício 5
console.log(convertArea(1, 'm²', 'dam²'));

// exercício 6
console.log(convertVolume(1000, 'm³', 'dam³'));

// exercício 7
// console.log(execVolume()); deu certo assim;