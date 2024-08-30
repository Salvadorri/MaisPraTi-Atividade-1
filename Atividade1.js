const input = require("readline-sync");

const number = input.questionInt("Insira um número: ");
let tipo;

if (number <= 0) {
  console.log(`O número não é válido`);
} else {
  if (number % 2 === 0) {
    tipo = "Par";
  } else {
    tipo = "Impar";
  }
  console.log(`O número é ${tipo}`);
}
