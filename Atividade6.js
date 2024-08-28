const input = require("readline-sync");

console.log("Digite os lados do triângulo");
let a = input.questionFloat("Lado A: ");
let b = input.questionFloat("Lado B: ");
let c = input.questionFloat("Lado C: ");

if (a + b > c && a + c > b && b + c > a) {
  if (a == b && a == c) {
    console.log("O triângulo formado é Eqüilátero");
  } else if (a == b || a == c || b == c) {
    console.log("O triângulo formado é Isósceles");
  } else {
    console.log("O triângulo formado é Escaleno");
  }
} else {
  console.log("Os lados não formam um triângulo");
}
