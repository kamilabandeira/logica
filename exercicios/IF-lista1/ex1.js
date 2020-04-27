

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

