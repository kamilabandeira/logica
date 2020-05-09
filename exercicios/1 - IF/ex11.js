// Faça um programa que receba três notas, calcule e mostre a média aritmética entre
// elas, caso a média aritmética seja:
// Media maior ou igual a 7 imprimir :
// ALUNO APROVADO
// Media menor que 7 imprimir :
// ALUNO REPROVADO


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