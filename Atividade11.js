const input = require("readline-sync");

let numbers = [];
let soma = 0;

for (let cont = 1; cont < 6; cont++) {
  let number = input.questionInt(`Digite o ${cont} número: `);
  numbers.push(number);
}
for (let cont2 = 0; cont2 < numbers.length; cont2++) {
  soma += numbers[cont2];
}
console.log(`soma dos numeros é ${soma}`);
