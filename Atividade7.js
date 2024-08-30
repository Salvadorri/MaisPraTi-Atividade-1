const input = require("readline-sync");

let apple = input.questionFloat("Digite quantidade de maçãs compradas:");
let Vunidade;

if (apple <= 0) {
  console.log("Coloque um valor acima de 0");
} else {
  if (apple >= 12) {
    Vunidade = 0.25;
  } else {
    Vunidade = 0.3;
  }
}

let custo = Vunidade * apple;

console.log(`Você vai comprar ${apple} maçãs e vai custar R$${custo}`);
