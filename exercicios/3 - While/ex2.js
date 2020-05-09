// Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM
// usar o operador de multiplicação (*)


var rs = require("readline-sync")

var qtd = rs.questionInt("Diga o primeiro numero: " )
var multiplo = rs.questionInt("Diga o segundo numero: " )

var cont = 0
var soma = 0

while(cont < qtd) {
    soma = soma + multiplo
    cont++
}

console.log("O resultado da multiplicação eh " + soma)