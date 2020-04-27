var rs = require("readline-sync")

var base = rs.questionInt("Digite a base: " )
var potencia = rs.questionInt("Digite a potencia: " )

var cont = 0
var multiplica = 1

while(cont < potencia) {
    multiplica = multiplica * base
    cont++
}

console.log("O resultado da potencia eh " + multiplica)