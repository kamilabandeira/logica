//Faça um algoritmo que receba um número e diga se ele é primo ou não Utilize o pacote : 
//​https://www.npmjs.com/package/prime-number 


// npm install --save prime-number


const rs = require("readline-sync")                    //importando minha biblioteca rs
const isPrime = require("prime-number")                //importando minha biblioteca prime-number

var numero = rs.questionInt("Digite um numero: ")      //insira um numero

console.log(isPrime(numero))                           //calculando o numero primo e printando o correto
