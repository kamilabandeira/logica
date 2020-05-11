//Faça um programa que receba um nome e imprima a terceira letra do nome. 
//Utilize o método ​charAt()​ para esta atividade. 


const rs = require('readline-sync')

var nome = rs.question("Digite um nome: ")

console.log(nome.charAt(2))