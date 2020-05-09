// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
// negativo, imprimindo o resultado.


var rs = require("readline-sync")

var numero = rs.questionFloat("Digite um numero ")

var resultado = 0

if(numero < 0) {
    resultado = 3* numero
} else {
    resultado = 2* numero
}

console.log("O resultado eh: " + resultado)