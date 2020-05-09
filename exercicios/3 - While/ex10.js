// Faça um algoritmo que receba um número e imprima todos seus divisores.
// EX : usuário informou 21
// O algoritmo imprime :
// 1
// 3
// 7
// 21
// DICA: Você pode precisar usar a operação de módulo (a%b)


var rs = require("readline-sync")

var numero = rs.questionInt("Digite um numero: ")

resto = 0
cont = 1

while(cont <= numero){
    resto = numero % cont
    
    if(resto == 0){
        console.log("Eh divisivel por " + cont)
    }
    
    cont++
}
