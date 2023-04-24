// exercício 1

type Bird = {
  specie: string,
  weigth: string,
  size: string
}

function printBird(pt: Bird) {
  console.log("O nome da espécie é: " + pt.specie);
  console.log("O seu peso é: " + pt.weigth);
  console.log("O seu porte é: " + pt.size);
}

printBird({ specie: 'WoodPecker', weigth: '2kg', size: 'small' });

// exercício 2

type functionExample =  (arg1: number, arg2: number) => number;

// exercício 3

type Address = {
  street: string,
  number: number,
  district: string,
  city: string
  zipCode: number | string
}

// type unions

// exercício 1

type StatesOfMatter = 'liquid' | 'gas' | 'solid';

// exercício 2

type IdentifyingDocument = string | number;

// exercício 3

type SO = "linux" | "mac os" | "windows";

// exercício 4

type Vowels = "a" | "e" | "i" | "o" | "u";
