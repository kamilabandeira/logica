// Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir
// qual é a menor idade.


var rs = require("readline-sync")

var menor_numero = 0
cont = 1

while(cont <= 8) {
    var entrada = rs.questionInt("Digite " + cont + "o numero ")

     if(cont == 1) {           //controle para regular a primeira entrada
        menor_numero = entrada
    }

    if(entrada < menor_numero) {
        menor_numero = entrada  
    }

    cont++
}

console.log("A menor idade eh " + menor_numero )