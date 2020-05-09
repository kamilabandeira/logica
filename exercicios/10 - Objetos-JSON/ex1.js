// Crie um programa que receba 3 entrada do usuário. 
// A cor, o modelo e a marca, crie um objeto Carro e atribua as entradas do usuário neste objeto. 
// No final o programa deve imprimir as informações do carro. 
// Utilize a criação de objetos para resolver este problema 


const rs = require('readline-sync');

var cor_entrada = rs.question("Digite uma cor: ")
// var modelo_entrada = rs.question("Digite uma modelo: ")
var marca_entrada = rs.question("Digite uma marca: ")

var carro = new Object()  //passo para criar um objeto

// carro.cor = cor_entrada    //colocando o valor da variavel cor_entrada no atributo cor do objeto carro
carro["cor"] = cor_entrada    //outra forms de colocar o valor da variavel cor_entrada no atributo cor do objeto carro
console.log(carro["cor"])

carro["cor"] = rs.question("Digite uma cor: ")    //substituindo o valor do atributo cor do objeto carro



carro.modelo = rs.question("Digite uma modelo: ")  //outra forma e colocar o que o usuario digita no atributo modelo do objeto carro
carro.marca = marca_entrada  //colocando o valor da variavel marca_entrada no atributo marca do objeto carro

console.log(carro)  //printando o objeto carro inteiro 
// { cor: 'vermelho', modelo: 'chevrolet', marca: 'corsa' }

// em formato de array/vetor/lista seria assim: 
// ["vermelho", "chevrolet", "corsa"]

//console.log(carro.cor)  //printando aprnas o atributo cor do objeto carro
//vermelho 

console.log(carro["cor"])  //outra forma de printar apenas o atributo cor do objeto carro
//vermelho 