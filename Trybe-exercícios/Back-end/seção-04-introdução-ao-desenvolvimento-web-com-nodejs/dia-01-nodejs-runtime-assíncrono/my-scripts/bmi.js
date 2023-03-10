//exercício 3 e 4
const readline = require('readline-sync');

const weight = readline.questionFloat(`What's your weight?`);
const height = readline.questionFloat(`What's your height?`);

// exercício 1
const bmi = weight / height**2;

// exercício 2 - Basta adicionar a chave bmi nos scripts com o valor node .


// exercício 5
switch (true) {
    case (bmi < 18.5): console.log(`You're BMI is ${bmi}, underweight`);
    break;
    case (bmi >= 18.5 && bmi <= 24.9): console.log(`You're BMI is ${bmi}, healty weight`);
    break;
    case (bmi >= 25 && bmi <= 29.9): console.log(`You're BMI is ${bmi}, overweight`);
    break;
    case (bmi >= 30 && bmi <= 34.9): console.log(`You're BMI is ${bmi}, obese`);
    break;
    case (bmi >= 35 && bmi <= 39.9): console.log(`You're BMI is ${bmi}, clinical obese`);
    break;
    case (bmi >= 40): console.log(`You're BMI is ${bmi}, morbid obese`);
    break;
    default:
        console.log('BMI isnt find')
}
