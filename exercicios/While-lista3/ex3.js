// var numero = 100
var resto = 0
var cont = 1

while(cont < 100) {
    resto = cont % 2

    if(resto != 0) {
        console.log("Numero " + cont + " eh impar" )
    }

    cont++
}

console.log("Fim da execucao")