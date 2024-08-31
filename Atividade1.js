const input = require("readline-sync");

const number = input.questionInt("Insira um número: ");

if (number <= 0) {
  console.log(`O número não é válido`);
} else if (number % 2 === 0) {
  console.log(`O número é Par`);
} else {
  console.log(`O número é Impar`);
}
