
var readlineSync = require('readline-sync');

var numero = readlineSync.questionInt("Me diga um numero qualquer ")

var resultado = numero % 2

if(resultado == 0){
    console.log("O numero " + numero + " eh PAR")
}else{
    console.log("O numero " + numero + " eh IMPAR")
}