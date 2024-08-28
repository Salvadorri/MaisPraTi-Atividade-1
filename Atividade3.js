const input = require("readline-sync");

const nota = input.questionInt("Insira a nota de 0 a 10: ");
let estado;

if (nota > 10 || nota < 0) {
  console.error("Nota deve estar entre 0 e 10");
} else {
  if (nota >= 6) {
    estado = "Aprovado";
  } else {
    if (nota >= 4) {
      estado = "Recuperação";
    } else {
      estado = "Reprovado";
    }
  }
  console.log(`O aluno está ${estado}`);
}
