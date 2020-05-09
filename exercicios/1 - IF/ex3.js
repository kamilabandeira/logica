// Escreva um programa que verifique a validade de uma senha fornecida pelo usuário.
// A senha válida é o número 1234.
// Devem ser impressas as seguintes mensagens:
// - ACESSO PERMITIDO caso a senha seja válida.
// - ACESSO NEGADO caso a senha seja inválida


var readlineSync = require('readline-sync');

var senha_digitada = readlineSync.questionInt("Informe uma senha de quatro digitos. ")
var senha_valida = 1234


if(senha_valida == senha_digitada){
    console.log("Acesso permitido ")
}else {
    console.log("Acesso negado ")
} 