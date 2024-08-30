const input = require("readline-sync");

const age = input.questionInt("Insira a idade: ");
if (age < 0) {
  console.log(`Insira uma idade válida`);
} else {
  if (age < 12) {
    categoria = "criança";
  } else {
    if (age < 18) {
      categoria = "Adolecente";
    } else {
      if (age < 60) {
        categoria = "Adulto";
      } else {
        categoria = "Idoso";
      }
    }
  }
  console.log(`A classificação pela idade da pessoa é: ${categoria}`);
}
