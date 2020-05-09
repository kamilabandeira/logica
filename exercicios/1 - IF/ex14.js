// Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.


var rs = require("readline-sync")

var letra_A = rs.questionInt ("Digite o primeiro numero: ")
var letra_B = rs.questionInt ("Digite o segundo numero: ")

var resposta = ""

if(letra_A >= letra_B) {
    resposta = "O valor do primeiro numero " + letra_A + " eh divisivel pelo segundo numero " + letra_B 
    // console.log("O valor do primeiro numero " + letra_A + " eh divisivel pelo segundo numero " + letra_B )
} else {
    resposta = "O valor do primeiro numero " + letra_A + " nao eh divisivel pelo segundo numero " + letra_B 
    // console.log("O valor do primeiro numero " + letra_A + " nao eh divisivel pelo segundo numero " + letra_B )
}


console.log(resposta)