//Faça um algoritmo que receba peso e altura do usuário e calcule o IMC. Para fazer o calculo do IMC utilize : 
//​https://www.npmjs.com/package/fasam-imc-calc 

//npm install --save fasam-imc-calc

// const imc = require("fasam-imc-calc")  //chamar o pacote 


const rs = require("readline-sync")                           //importando minha biblioteca rs

const FasamImc = require('fasam-imc-calc')                    //importando minha biblioteca fasam-imc-calc
 
const imc = new FasamImc()                                    //criando um novo objeto FasamImc
// imc.calc(120, 2.10);
// 27.21

var usuario = rs.question("Digite o nome: ")                  //insira nome
var peso = rs.questionFloat("Digite seu peso: ")              //insira peso
var altura = rs.questionFloat("Digite sua altura: ")          //insira altura

var resultado = imc.calc(peso, altura)                         //calculando o IMC pela função fasam-imc-calc

console.log("O IMC de " + usuario + " eh: " + resultado)       //printando o IMC


