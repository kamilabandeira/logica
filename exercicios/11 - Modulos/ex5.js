//Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade. Utilize o pacote : 
//​https://www.npmjs.com/package/age-calculator 


//npm install --save age-calculator

const rs = require("readline-sync")                                    //importandoo a biblioteca readline-sync
//const ageCalculator = require('age-calculator')                      //importandoo a biblioteca age-calculator completa 

const {AgeFromDateString, AgeFromDate} = require('age-calculator')     //importando apenas duas AgeFromDateString, AgeFromDate clases de dentro da classe age-calculator

var data = rs.question("Digite uma datano formato AAAA-MM-DD: ")       //variavel que pede a data 
var idade = new AgeFromDateString(data)                                //criando um novo objeto para usar a classe que vai calcular a idade quando receber o parametro data 

// var idade = new AgeFromDateString("1990-03-07")

console.log(idade.age)                                                 //printndo a idade 