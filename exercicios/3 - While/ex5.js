var rs = require("readline-sync")

var base = rs.questionInt("Digite a base: " )
var potencia = rs.questionInt("Digite a potencia: " )
// Faça um programa que calcule a potência (potenciação) de um número.
// Para isso ele deve receber dois números de entrada: o primeiro número é a base da
// potência, o segundo número será a potência.
// EX: usuário inseriu 2 para base e 4 para potência.
// O programa imprime :
// 16
// Lembrando: 2
// 4 = 2*2*2*2


var cont = 0
var multiplica = 1

while(cont < potencia) {
    multiplica = multiplica * base
    cont++
}

console.log("O resultado da potencia eh " + multiplica)