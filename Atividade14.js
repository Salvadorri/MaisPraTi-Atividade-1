const input = require("readline-sync");

let number = input.questionInt("Digite o número para ver a tabuada dele: ");

if (number < 0) {
  console.log("Por favor, insira um número não negativo.");
} else {
  let fatorial = 1;
  let i = 1;
  while (i <= number) {
    fatorial *= i;
    i++;
  }

  console.log(`O fatorial de ${number} é ${fatorial}`);
}
