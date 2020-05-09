// Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP”
// de acordo com o número inserido.
// EX: usuário inseriu 3
// O programa imprime:
// BIP BIP
// BIP BIP
// BIP BIP


var rs = require("readline-sync")

var qtd = rs.questionInt("Digite uma quantidade: ")
var cont = 0

while(cont < qtd) {
    console.log("BIP BIP")
    cont++
}

console.log("Finalizado com sucesso")