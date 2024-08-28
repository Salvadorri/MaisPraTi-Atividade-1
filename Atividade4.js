const input = require("readline-sync");

console.log("Cardapio:");
console.log("Peixe = 1");
console.log("Frango = 2");
console.log("Bife = 3");
console.log("");
let opcao = input.questionInt("Opção:");

switch (opcao) {
  case 1:
    console.log("Preco do peixe é R$ 15.00");
    break;
  case 2:
    console.log("Preco do frango é R$ 12.00");
    break;
  case 3:
    console.log("Preco do bife é R$ 18.00");
    break;
  default:
    console.log("Opcao invalida");
}
