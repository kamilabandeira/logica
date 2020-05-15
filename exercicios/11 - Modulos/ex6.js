//Escolha um programa que você já fez em atividades passadas e faça o output do terminal ficar colorido com o 
//pacote CHALK: ​https://www.npmjs.com/package/chalk  
 
//npm install --save chalk

const chalk = require('chalk');                   //inportando a biblioteca
const ex3 = require('../11 - Modulos/ex3')        //importando meu modulo que criei no ex3 para o ex6

var resultado = ex3.verificaParImpar()           // 
 
console.log(chalk.blue(resultado))              //pintanto meu resultado de azul com o pacote importado 