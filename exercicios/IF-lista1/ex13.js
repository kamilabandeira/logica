var rs = require("readline-sync")

var numero = rs.questionFloat("Digite um numero ")

var resultado = 0

if(numero < 0) {
    resultado = 3* numero
} else {
    resultado = 2* numero
}

console.log("O resultado eh: " + resultado)