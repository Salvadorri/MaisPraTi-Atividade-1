const input = require("readline-sync");

const age = input.questionInt("Insira a idade: ");

if (age < 0) {
  console.log(`Insira uma idade válida`);
} else if (age < 12) {
  console.log(`A classificação pela idade da pessoa é Criança`);
} else if (age < 18) {
  console.log(`A classificação pela idade da pessoa é Adolecente`);
} else if (age < 60) {
  console.log(`A classificação pela idade da pessoa é Adulto`);
} else {
  console.log(`A classificação pela idade da pessoa é Idosa`);
}
