
const readline = require('readline-sync');

// Pedir 3 números ao usuário
const num1 = readline.questionInt('Digite o primeiro número: ');
const num2 = readline.questionInt('Digite o segundo número: ');
const num3 = readline.questionInt('Digite o terceiro número: ');

// Calcular o produto entre os números
const produto = num1 * num2 * num3;

// Exibir o resultado
console.log(`O produto entre ${num1}, ${num2} e ${num3} é: ${produto}`);