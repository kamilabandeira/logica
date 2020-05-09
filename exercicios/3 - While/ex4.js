// Faça um programa que recebe um número e imprima todos os números pares de 0 até
// o número inserido.
// Ex: usuário inseriu 8
// O programa imprime
// 0
// 2
// 4
// 6
// 8


var rs = require("readline-sync")

var numero = rs.questionInt("Digite um numero: ")
var resto = 0
var cont = 0

while(cont <= numero) {
    resto = cont % 2

    if(resto == 0) {
        console.log("Numero " + cont + " eh par" )
    }

    cont++
}

console.log("Fim da execucao")