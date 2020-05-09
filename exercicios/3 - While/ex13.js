// Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
// a soma dos pares
// EX: valores fornecidos 1,2,3,4,5
// Impares -> 1 * 3 * 5 = 15
// Pares -> 2 = 4 = 6
// O programa imprime :
// Produtos dos impares : 15
// Soma dos pares : 6


var rs = require("readline-sync")

var cont = 1
var soma = 0
var multiplica = 1
var resto = 0


while(cont <= 5) {
    var entrada = rs.questionFloat("Digite " + cont + "o numero: ")
    resto = entrada % 2 

    if(resto == 0) {
        console.log("o numero " + entrada + " eh PAR" )
        soma = soma + entrada
        // console.log("Soma dos pares eh " + soma)
    }else {
        console.log("O numero " + entrada + " eh IMPAR")
        multiplica = multiplica * entrada
        // console.log("O produto dos impares eh " + multiplica)
    }

    cont++
}

console.log("Soma dos pares eh " + soma)
console.log("O produto dos impares eh " + multiplica)


