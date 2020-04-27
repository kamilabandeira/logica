var rs = require("readline-sync")

var angulo1 = rs.questionFloat("Digite o valor do angulo 1: ")
var angulo2 = rs.questionFloat("Digite o valor do angulo 2: ")
var angulo3 = rs.questionFloat("Digite o valor do angulo 3: ")

if(angulo1 == 90 || angulo2 == 90 || angulo3 == 90 ) {
    console.log("Triangulo Retangulo")
} else if(angulo1 > 90 || angulo2 > 90 || angulo3 > 90 ) {
    console.log("Triangulo Obtusangulo ")
} else if(angulo1 < 90 && angulo2 < 90 && angulo3 < 90 ) {
    console.log("Triangulo Acutangulo ")
} else {
    console.log("Angulos incorretos")
}
