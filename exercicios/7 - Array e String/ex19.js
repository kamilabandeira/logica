//Faça um algoritmo que receba um texto e remova todos os espaços em brancos no começo e no final do texto 
//Utilize o método ​trim() 



const rs = require('readline-sync')


var texto = rs.question("Digite um texto: ")

console.log(texto.trim())