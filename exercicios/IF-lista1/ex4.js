var readlineSync = require('readline-sync');

var qtd_macas = readlineSync.questionInt("Digite a quantidade de macas compradas. ")

if(qtd_macas < 12 ){
    valor_compra = 0.30 * qtd_macas
}else {
    valor_compra = 0.25 * qtd_macas
}

console.log("O valor da compra eh: " + valor_compra )