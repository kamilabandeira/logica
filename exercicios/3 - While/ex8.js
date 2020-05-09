// Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
// uma linha.
// EX: usuário informou MAÇÃ
// O algoritmo imprime:
// M
// A
// Ç
// Ã


var rs = require("readline-sync")

var palavra = rs.question("Digite uma palavra: ")
// var palavra = ['a', 'm','o','r']
var tamanho = palavra.length

// var frase = ["o","amor","é","lindo","demais","!"]
// var frase = "o amor é lindo demais !"
// var tamanho = frase.length


var cont = 0   

while(cont < tamanho ) {
    console.log(palavra[cont])
    // console.log(frase[cont]) [] usado para posição

    cont++
}

 