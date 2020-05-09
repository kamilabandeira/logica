// Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
// números fornecidos.


var rs = require("readline-sync")

var cont = 1
var soma = 0
var media = 0


while(cont <= 15) {
    var entrada = rs.questionFloat("Digite " + cont + "o numero: ")
    soma = soma + entrada

    cont++
}

media = soma / 3
console.log("A media eh " + media.toFixed(2))