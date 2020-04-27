var readlineSync = require('readline-sync');

var numeros_de_lados = readlineSync.questionInt("Digite um numero de lados: ")

if(numeros_de_lados == 3) {
    console.log("TRIÂNGULO")
} else if(numeros_de_lados == 4) {
    console.log("QUADRADO")
} else if(numeros_de_lados ==5) {
    console.log("PENTAGONO")
} else {
    console.log("Nao se encaixa em nenhuma das opcoes")
}
    
