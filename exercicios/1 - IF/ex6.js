// Tendo como entrada a altura e o sexo codificado da seguinte forma:
// Valor 1 para feminino
// Valor 2 para masculino
// de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando
// as seguintes
// Fórmulas:
// - para homens: (72.7 * Altura) – 58
// - para mulheres: (62.1 * Altura) – 44.7


var readlineSync = require('readline-sync');

var altura = readlineSync.questionFloat("Digite sua altura:  ")
var sexo = readlineSync.questionInt("Digite 1 para feminino ou 2 masculino: ")

// console.log("altura " + altura)
// console.log("sexo " + sexo)

if(sexo == 1){
    peso_ideal=(62.1 * altura) - 44.7
    console.log("O peso ideal eh: " + peso_ideal )
} else if(sexo == 2) {
    peso_ideal=(72.7 * altura) - 58
    console.log("O peso ideal eh: " + peso_ideal )
} else{
    console.log("O valor de sexo informado " + sexo + " eh invalido ")
}



