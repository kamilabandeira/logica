// As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$
// 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de
// maçãs compradas, calcule e escreva o valor total da compra.


var readlineSync = require('readline-sync');

var qtd_macas = readlineSync.questionInt("Digite a quantidade de macas compradas. ")

if(qtd_macas < 12 ){
    valor_compra = 0.30 * qtd_macas
}else {
    valor_compra = 0.25 * qtd_macas
}

console.log("O valor da compra eh: " + valor_compra )

