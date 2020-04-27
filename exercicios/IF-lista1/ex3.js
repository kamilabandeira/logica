var readlineSync = require('readline-sync');

var senha_digitada = readlineSync.questionInt("Informe uma senha de quatro digitos. ")
var senha_valida = 1234


if(senha_valida == senha_digitada){
    console.log("Acesso permitido ")
}else {
    console.log("Acesso negado ")
} 