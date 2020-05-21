// Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima o maior e o menor, 
//sem levar em consideração o -1 

const rs=require('readline-sync')

var numero_maior = 0
var numero_menor = 0


while(true) {
    var entrada = rs.questionInt("Digite um numero ")

    if(entrada == -1) {
        break
    }

    if(entrada > numero_maior){
        numero_maior = entrada
    }

    if(entrada < numero_menor){
        numero_menor = entrada
    }
}

console.log("NUmero maior eh: " + numero_maior)
console.log("NUmero menor eh: " + numero_menor)


console.log("Fim do programa ")
