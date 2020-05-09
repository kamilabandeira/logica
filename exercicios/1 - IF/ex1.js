// Escreva um programa para ler o ano de nascimento de uma pessoa e
// escrever uma mensagem que diga se ela poderá ou não votar este ano
// (não é necessário considerar o mês em que ela nasceu).


var readlineSync = require('readline-sync');

var ano_nasceu = readlineSync.questionInt("Em que ano voce nasceu? ")
var ano_atual = 2020
var idade = ano_atual - ano_nasceu

console.log("A idade eh " + idade)

if(idade < 16){
    console.log("Nao pode votar")
}else {
    console.log("Pode votar")
}


