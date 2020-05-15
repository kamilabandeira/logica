// Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a média no final. 
// Utilize o pacote: : ​https://www.npmjs.com/package/median  


// npm install --save median  instalar pacote no modulo

// "median" : "0.0.2"  pacote que vai estar no modulo 

const median = require("median")                                   //importando minha biblioteca median
const rs = require("readline-sync")                               //importando minha biblioteca readline-sync

var lista_notas = []                                              //crianado minha lista 


for (var i = 1; i <= 4; i++) {                                           //criando meu for para ter uma condição de parada
    var nota_entrada = rs.questionFloat("Digite a " + i + "a nota: ")    //inserindo numero 
    lista_notas.push(nota_entrada)                                       //incluindo nota de entrada na lista de notas 
}


var mediaCalculada = median(lista_notas)                                 //calculando a media pela função median
console.log("A media eh: " + mediaCalculada)                             //printando a media

