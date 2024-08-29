const input = require("readline-sync");

let soma = 0;
let QNumber = 0;

while (true) {
  let number = input.questionInt("Digite um número decimal ou 0 para sair: ");
  if (number === 0) {
    break;
  }
  soma += number;
  QNumber++;
}

let mediaArit = soma / QNumber;
console.log(`Média aritmética: ${mediaArit.toFixed(2)}`);
