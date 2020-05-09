// Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
// EX: usuário informou BANANA
// Algoritmo imprime:
// ANANAB


var rs = require("readline-sync")

var palavra = rs.question("Digite uma palavra: ")
var tamanho = palavra.length
var palavra_invertida = ""

var cont = tamanho - 1   

while(cont >= 0 ) {
   palavra_invertida = palavra_invertida + palavra[cont] 
    
    cont--
}

console.log(palavra_invertida)