const input = require("readline-sync");

const age = input.questionInt("Insira a idade: ");

if (age <= 11) {
  categoria = "criança";
} else {
  if (age <= 17) {
    categoria = "Adolecente";
  } else {
    if (age <= 59) {
      categoria = "Adulto";
    } else {
      categoria = "Idoso";
    }
  }
}
console.log(`A classificação pela idade da pessoa é: ${categoria}`);
