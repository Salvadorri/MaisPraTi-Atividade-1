const input = require("readline-sync");

let apple = input.questionFloat("Digite quantidade de maçãs compradas:");
let VUnidade;

if (apple <= 0) {
  console.log("Coloque um valor acima de 0");
} else if (apple >= 12) {
  VUnidade = 0.25;
} else {
  VUnidade = 0.3;
}

let custo = VUnidade * apple;

console.log(`Você vai comprar ${apple} maçãs e vai custar R$${custo}`);
