// Escreva um programa para ler 3 valores inteiros 
// (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.


var readlineSync = require('readline-sync');

var valor1 = readlineSync.questionInt("Digite o 1o valor: ")
var valor2 = readlineSync.questionInt("Digite o 2o valor: ")
var valor3 = readlineSync.questionInt("Digite o 3o valor: ")

var menor = 0
var meio = 0
var maior = 0

//Testando a variavel valor1
    //Testando se eh a menor 
    if(valor1 < valor2 && valor1 < valor3 ){
        menor = valor1
    }

    //Testando se eh a meio
    if(valor1 > valor2 && valor1 < valor3) {
        meio = valor1
    }

    if(valor1 < valor2 && valor1 > valor3) {
        meio = valor1
    }

    //Testando se eh a maior
    if(valor1 > valor2 && valor1 > valor3 ){
        maior = valor1
    }

//Testando a variavel valor2
    //Testando se eh a menor 
    if(valor2 < valor1 && valor2 < valor3) {
        menor = valor2
    }

    //Testando se eh a meio
    if(valor2 < valor1 && valor2 > valor3) {
        meio = valor2
    }

    if(valor2 > valor1 && valor2 < valor3) {
        meio = valor2
    }
    
    //Testando se eh a maior
    if(valor2 > valor1 && valor2 > valor3) {
        maior = valor2
    }

//Testando a variavel valor3
    //Testando se eh a menor .
    if(valor3 < valor1 && valor3 < valor2) {
        menor = valor3
    }

    //Testando se eh a meio
    if(valor3 < valor1 && valor3 > valor2) {
        meio = valor3
    }

    if(valor3 > valor1 && valor3 < valor2) {
        meio = valor3
    }

    //Testando se eh a maior
    if(valor3 > valor1 && valor3 > valor2) {
        maior = valor3
    }

console.log("O menor eh: " + menor )
console.log("O  meio eh: " + meio )
console.log("O maior eh: " + maior )
