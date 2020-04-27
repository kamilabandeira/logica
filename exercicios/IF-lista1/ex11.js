var rs = require("readline-sync")

var nota1 = rs.questionFloat("Digite nota 1: ")
var nota2 = rs.questionFloat("Digite nota 2: ")
var nota3 = rs.questionFloat("Digite nota 3: ")

var media = (nota1 + nota2 + nota3) / 3 

if(media >= 7) {
    console.log("ALUNO APROVADO")
} else {
    console.log("ALUNO REPROVADO")
}