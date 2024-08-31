const input = require("readline-sync");

let valor1 = input.questionInt("Digite o primeiro número: ");
let valor2 = input.questionInt("Digite o segundo numero: ");

if (valor1 == valor2) {
  console.log("O dois valores são iguais");
} else if (valor1 > valor2) {
  console.log(
    `O primero valor(${valor1}) é maior que o segundo valor(${valor2})`
  );
} else {
  console.log(
    `O segundo valor(${valor2}) é maior que o primero valor(${valor1})`
  );
}
