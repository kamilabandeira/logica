var readlineSync = require('readline-sync');

var lado1 = readlineSync.questionInt("Digite o lado 1: ")
var lado2 = readlineSync.questionInt("Digite o lado 2: ")
var lado3 = readlineSync.questionInt("Digite o lado 3: ")

// possui os 3 lados iguais
if(lado1 == lado2 && lado1 == lado3) {
    console.log("Triângulo Equilátero ")
}

// possui 2 lados iguais
if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("Triângulo Isóscele ")
}

// possui 3 lados diferentes
if(lado1 != lado2 && lado1 != lado3) {
    console.log("Triângulo Escaleno") 
}