// Faça um programa que receba um número via teclado e verifique se este número é par
// ou ímpar.


var readlineSync = require('readline-sync');

var numero = readlineSync.questionInt("Me diga um numero qualquer ")

var resto = numero % 2

if(resto == 0){
    console.log("O numero " + numero + " eh PAR")
}else{
    console.log("O numero " + numero + " eh IMPAR")
}