// Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a média no final. 
// Utilize o pacote: : ​https://www.npmjs.com/package/median  


// npm stall midian  instalar pacote no modulo

// "median" : "0.0.2"  pacote que vai estar no modulo 

var median = require("median")  //chamar o pacote 
var rs = require("readline-sync")

var notas = []:

console.log("Digite as notas: ")
for (var i = 0: i < 4: i++) {
    notas.push(nota):
}


var mediaCalculada = median(nota);
console.log("Amedia eh: " + mediaCalculada);

