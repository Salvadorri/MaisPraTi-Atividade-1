const input = require("readline-sync");

let number = input.questionInt("Digite o número para ver a tabuada dele: ");

for (let cont = 1; cont <= 10; cont++) {
  tabuada = number * cont;
  console.log(`${number} * ${cont} = ${tabuada}`);
}
