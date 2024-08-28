const input = require("readline-sync");

let number = input.questionInt("Digite o número: ");

for (let cont = 0; cont < 10; cont++) {
  console.log(`${number}`);
}
