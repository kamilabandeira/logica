// Escreva um programa para ler o número de lados de um polígono regular e a medida do
// lado (em cm). Calcular e imprimir o seguinte:
// − Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
// − Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
// − Se o número de lados for igual a 5 escrever PENTÁGONO.


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
    
