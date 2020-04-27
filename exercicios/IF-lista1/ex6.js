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



