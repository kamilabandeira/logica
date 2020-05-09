
// Fazer um programa para receber um número e verificar se está entre 100 e 200.
// Se estiver na faixa, imprimir:
// Você digitou um numero entre 100 e 200.
// Senão estiver na faixa, imprimir
// Você digitou um numero fora da faixa entre 100 e 200.


var rs = require("readline-sync")

var numero = rs.questionFloat("Digite um numero: ")

if(numero >= 100 && numero <= 200){
    console.log("Você digitou um numero entre 100 e 200 ")
} else {
    console.log("Você digitou um numero fora da faixa entre 100 e 200 ")
}