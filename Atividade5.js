const input = require("readline-sync");

const altura = input.question("Insira a altura em centimetros: ");
const peso = input.questionInt("Insira o peso: ");
let estado;

let peso100 = peso * 100; //Para deixar igual a altura em CM
let imc = peso100 / (altura * 2);

if (imc < 18.5) {
  estado = "baixo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
  estado = "peso normal";
} else if (imc >= 25 && imc <= 29.9) {
  estado = "sobrepeso";
} else if (imc >= 30) {
  estado = "Obesidade";
}

console.log(`Seu IMC é de ${imc} e você está classificado em ${estado}`);
